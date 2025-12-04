import { OverlaySDK } from "../../sdk";
import { OverlaySDKModule } from "../../common/class-primitives/sdk-module";
import { OverlaySDKCommonProps } from "../../core/types";
import { getMarketsDetailsByChainId } from "../../services/marketsDetails";
import { Address } from "viem";
import {
  formatBigNumber,
  formatUnixTimestampToDate,
  calculateStableSize,
  toLowercaseKeys,
} from "../../common/utils";
import { PRICE_CURRENCY_FROM_QUOTE } from "../../constants";
import { getUnwindPositions } from "../../subgraph";
import { CHAINS, invariant } from "../../common";
import { paginate } from "../../common/utils/paginate";
import { formatPriceWithCurrency } from "../../common/utils/formatPriceWithCurrency";

export type UnwindPositionData = {
  marketName: string | undefined;
  positionSide: string | undefined;
  parsedCreatedTimestamp: string | undefined;
  parsedClosedTimestamp: string | undefined;
  entryPrice: string | undefined;
  size: string | undefined;
  exitPrice: string | undefined;
  pnl: string | number | undefined;
  stableOut?: string | number | undefined;
  unwindNumber: number;
  positionId: number;
  loan?: {
    id: string;
    loanId: string;
    stableAmount: string;
    ovlAmount: string;
    price: string;
    ovlRepaid: string;
    collateralReturned: string;
    collateralSeized: string;
  } | null;
  stableValues?: {
    size: string;
    pnl: string;
  };
};

export class OverlaySDKUnwindPositions extends OverlaySDKModule {
  private sdk: OverlaySDK;
  private unwindPositionsCache: Record<string, { data: any; lastUpdated: number }> = {};

  constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK) {
    super(props);
    this.sdk = sdk;
  }

  private async fetchOraclePrice(): Promise<bigint | undefined> {
    try {
      return await this.sdk.lbsc.getOraclePrice();
    } catch (error) {
      console.error('Failed to fetch oracle price:', error);
      return undefined;
    }
  }

  private calculateStableValue(
    ovlValue: string | number,
    loan: NonNullable<UnwindPositionData['loan']>,
    stableOut?: string | number,
  ): string | undefined {
    try {
      if (
        ovlValue === "-" ||
        !loan?.ovlAmount ||
        !loan?.stableAmount
      ) {
        return undefined;
      }

      const ovlNum = typeof ovlValue === 'string' ? parseFloat(ovlValue) : ovlValue;

      if (ovlNum === 0) {
        return "0";
      }

      const isNegative = ovlNum < 0;
      const absOvlNum = Math.abs(ovlNum);
      const ovlValueWei = BigInt(Math.floor(absOvlNum * 1e18));

      // For POSITIVE values (gains): Use oracle price
      if (ovlNum > 0) {
        if (stableOut) return stableOut.toString();

        console.warn('stableOut is 0, cannot calculate stable value');
        return undefined;
      }

      // For NEGATIVE values (losses): Use ratio-based formula
      const loanOvlAmount = BigInt(loan.ovlAmount);
      if (loanOvlAmount === 0n) {
        console.warn('loan.ovlAmount is 0, cannot calculate stable value');
        return undefined;
      }

      const stableAmount = BigInt(loan.stableAmount);
      const stableValueWei = (ovlValueWei * stableAmount) / loanOvlAmount;
      const decimals = 18;
      const stableValueNum = Number(stableValueWei) / Math.pow(10, decimals);
      const formattedValue = stableValueNum < 1
        ? stableValueNum.toFixed(6)
        : stableValueNum.toFixed(2);

      return isNegative ? `-${formattedValue}` : formattedValue;

    } catch (error) {
      console.error('Error calculating stable value:', error);
      return undefined;
    }
  }

  transformUnwindPositions = async (
    page = 1, 
    pageSize = 10, 
    marketId?: string, 
    account?: Address,
    refreshData?: boolean
  ): Promise<{ data: UnwindPositionData[]; total: number }> => {
    let walletClient = account;
    if (!walletClient) {
      invariant(this.sdk.core.web3Provider, "Web3 provider is not set");
      walletClient = account ?? (await this.sdk.core.web3Provider?.requestAddresses())[0] as Address;
    }
    const chainId = this.core.chainId;

    const cacheKey = `${walletClient}-${chainId}`;

    let unwindPositionsData: UnwindPositionData[] = [];

    if (this.unwindPositionsCache[cacheKey] && !refreshData) {
      const cachedData = this.unwindPositionsCache[cacheKey];
      const isCacheValid = Date.now() - cachedData.lastUpdated < 3 * 60 * 1000; // 3 minutes
      if (isCacheValid) {
        unwindPositionsData = cachedData.data;
      } else {
        delete this.unwindPositionsCache[cacheKey];
      }
    }

    if (!this.unwindPositionsCache[cacheKey] || refreshData) {
      const rawUnwindData = await getUnwindPositions({
        chainId: chainId,
        account: walletClient.toLowerCase()
      });
      const transformedUnwinds: UnwindPositionData[] = [];
      const marketDetails = await getMarketsDetailsByChainId(chainId as CHAINS);
      const lowercasedMarketDetails = marketDetails && toLowercaseKeys(marketDetails);

      for (const unwind of rawUnwindData) {
        const marketName =
        lowercasedMarketDetails?.get(unwind.id.split("-")[0].toLowerCase())?.marketName ?? "";

        const marketDetailsCurrency = lowercasedMarketDetails
          ?.get(unwind.id.split("-")[0].toLowerCase())
          ?.currency.trim();
        const priceCurrency = marketDetailsCurrency
          ? PRICE_CURRENCY_FROM_QUOTE[
              marketDetailsCurrency as keyof typeof PRICE_CURRENCY_FROM_QUOTE
            ]
          : "";
        const parsedEntryPrice = formatBigNumber(
          unwind.position.entryPrice,
          Number(18)
        );
        const parsedExitPrice = formatBigNumber(unwind.price, Number(18));

        const pnl = formatBigNumber(
          unwind.pnl,
          Number(18),
          Math.abs(+unwind.pnl) > 10 ** +18 ? 4 : 6
        );

        const stableOut = unwind.stableOut 
          ? formatBigNumber(
              unwind.stableOut,
              Number(18),
              Math.abs(+unwind.pnl) > 10 ** +18 ? 4 : 6
            )
          : undefined

        // Calculate stable values for LBSC positions
        let stableValues: UnwindPositionData['stableValues'] = undefined;
        if (unwind.position.loan) {
          const stablePnL = this.calculateStableValue(pnl, unwind.position.loan, stableOut);
          const stableSize = calculateStableSize(
            (+unwind.size / 10 ** 18).toFixed(6),
            unwind.position.loan,
          );
          if (stablePnL !== undefined) {
            stableValues = {
              size: stableSize ?? "",
              pnl: stablePnL,
            };
          }
        }

        transformedUnwinds.push({
          marketName: marketName,
          size:
            +unwind.size / 10 ** 18 < 1
              ? (+unwind.size / 10 ** 18).toFixed(6)
              : (+unwind.size / 10 ** 18).toFixed(2),
          positionSide:
            unwind.position.leverage +
            "x " +
            (unwind.position.isLong ? "Long" : "Short"),
          entryPrice: parsedEntryPrice ? formatPriceWithCurrency(parsedEntryPrice, priceCurrency) : "-",
          exitPrice: parsedExitPrice ? formatPriceWithCurrency(parsedExitPrice, priceCurrency) : "-",
          parsedCreatedTimestamp: formatUnixTimestampToDate(
            unwind.position.createdAtTimestamp
          ),
          parsedClosedTimestamp: formatUnixTimestampToDate(unwind.timestamp),
          pnl: pnl,
          stableOut: stableOut,
          unwindNumber: Number(unwind.unwindNumber),
          positionId: Number(unwind.position.positionId),
          loan: unwind.position.loan || null,
          stableValues,
        });
      }

      this.unwindPositionsCache[cacheKey] = {
        data: transformedUnwinds,
        lastUpdated: Date.now(),
      };

      unwindPositionsData = this.filterUnwindPositionsByMarketId(
        transformedUnwinds,
        marketId
      );
    }

    return {
      data: paginate(unwindPositionsData, page, pageSize).data,
      total: unwindPositionsData.length,
    };
  };

  // private method to filter unwind positions by marketId
  private filterUnwindPositionsByMarketId = (
    unwindPositions: UnwindPositionData[],
    marketId?: string
  ): UnwindPositionData[] => {
    if (!marketId) return unwindPositions;
    return unwindPositions.filter(
      (unwind) => unwind.marketName === marketId
    );
  }
}
