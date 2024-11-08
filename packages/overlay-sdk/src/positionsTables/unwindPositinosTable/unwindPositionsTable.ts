import { OverlaySDK } from "../../sdk";
import { OverlaySDKModule } from "../../common/class-primitives/sdk-module";
import { OverlaySDKCommonProps } from "../../core/types";
import { getMarketsDetailsByChainId } from "../../services/marketsDetails";
import { Address } from "viem";
import {
  formatBigNumber,
  formatUnixTimestampToDate,
  toPercentUnit,
  toScientificNumber,
} from "../../common/utils";
import { PRICE_CURRENCY_FROM_QUOTE } from "../../constants";
import { getUnwindPositions } from "../../subgraph";
import { CHAINS, invariant } from "../../common";
import { paginate } from "../../common/utils/paginate";

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
    noCaching?: boolean
  ): Promise<{ data: UnwindPositionData[]; total: number }> => {
    let walletClient = account;
    if (!walletClient) {
      invariant(this.sdk.core.web3Provider, "Web3 provider is not set");
      walletClient = account ?? (await this.sdk.core.web3Provider?.requestAddresses())[0] as Address;
    }
    const chainId = this.core.chainId;

    // check if we have the data in cache and if it's not too old
    const cacheKey = `${walletClient}-${chainId}`;
    if (!noCaching && this.unwindPositionsCache[cacheKey]) {
      const cachedData = this.unwindPositionsCache[cacheKey];
      const isCacheValid = Date.now() - cachedData.lastUpdated < 300 * 1000; // 5 minutes
      if (isCacheValid) {
        return paginate(this.filterUnwindPositionsByMarketId(cachedData.data, marketId), page, pageSize);
      }
    }

    const rawUnwindData = await getUnwindPositions({
      chainId: chainId,
      account: walletClient.toLowerCase()
    });
    const transformedUnwinds: UnwindPositionData[] = [];
    const marketDetails = await getMarketsDetailsByChainId(chainId as CHAINS);
    for (const unwind of rawUnwindData) {
      const marketName =
        marketDetails?.get(unwind.id.split("-")[0])?.marketName ?? "";
      const marketDetailsCurrency = marketDetails
        ?.get(unwind.id.split("-")[0])
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
        entryPrice: `${priceCurrency ? priceCurrency : ""}${
          parsedEntryPrice
            ? priceCurrency === "%"
              ? toPercentUnit(parsedEntryPrice)
              : toScientificNumber(parsedEntryPrice)
            : "-"
        }`,
        exitPrice: `${priceCurrency ? priceCurrency : ""}${
          parsedExitPrice
            ? priceCurrency === "%"
              ? toPercentUnit(parsedExitPrice)
              : toScientificNumber(parsedExitPrice)
            : "-"
        }`,
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
    
    // cache the data
    if (!noCaching) {
      this.unwindPositionsCache[cacheKey] = { data: transformedUnwinds, lastUpdated: Date.now() };
    }

    return paginate(this.filterUnwindPositionsByMarketId(transformedUnwinds, marketId), page, pageSize);
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
