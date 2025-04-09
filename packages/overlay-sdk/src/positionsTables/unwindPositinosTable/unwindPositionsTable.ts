import { OverlaySDK } from "../../sdk";
import { OverlaySDKModule } from "../../common/class-primitives/sdk-module";
import { OverlaySDKCommonProps } from "../../core/types";
import { getMarketsDetailsByChainId } from "../../services/marketsDetails";
import { Address } from "viem";
import {
  formatBigNumber,
  formatUnixTimestampToDate,
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
  unwindNumber: number;
  positionId: number;
};

export class OverlaySDKUnwindPositions extends OverlaySDKModule {
  private sdk: OverlaySDK;
  private unwindPositionsCache: Record<string, { data: any; lastUpdated: number }> = {};

  constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK) {
    super(props);
    this.sdk = sdk;
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
          pnl: formatBigNumber(
            unwind.pnl,
            Number(18),
            Math.abs(+unwind.pnl) > 10 ** +18 ? 4 : 6
          ),
          unwindNumber: Number(unwind.unwindNumber),
          positionId: Number(unwind.position.positionId),
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
