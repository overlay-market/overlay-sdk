import { type Address } from "viem";
import { OverlaySDKModule } from "../../common/class-primitives/sdk-module.js";
import { OverlaySDKCommonProps } from "../../core/types.js";
import { PRICE_CURRENCY_FROM_QUOTE } from "../../constants.js";
import { OverlaySDK } from "../../sdk.js";
import { formatBigNumber } from "../../common/utils/formatBigNumber.js";
import { getMarketsDetailsByChainId } from "../../services/marketsDetails.js";
import { getLiquidatedPositions } from "../../subgraph";
import {
  toPercentUnit,
  toScientificNumber,
} from "../../common/utils/toScientificNumber.js";
import formatUnixTimestampToDate from "../../common/utils/formatUnixTimestampToDate.js";
import { CHAINS } from "../../common/constants.js";
import { invariant } from "../../common/index.js";
import { paginate } from "../../common/utils/paginate.js";

export type LiquidatedPositionData = {
  marketName: string | undefined;
  size: string | number | undefined;
  position: string | undefined;
  entryPrice: string | undefined;
  exitPrice: string | undefined;
  created: string | undefined;
  liquidated: string | undefined;
};

export class OverlaySDKLiquidatedPositions extends OverlaySDKModule {
  private sdk: OverlaySDK;
  private liquidatedPositionsCache: Record<string, { data: any; lastUpdated: number }> = {};

  constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK) {
    super(props);
    this.sdk = sdk;
  }

  transformLiquidatedPositions = async (
    page = 1, 
    pageSize = 10, 
    marketId?: string, 
    account?: Address,
    noCaching?: boolean
  ): Promise<{ data: LiquidatedPositionData[]; total: number }> => {
    let walletClient = account;
    if (!walletClient) {
      invariant(this.sdk.core.web3Provider, "Web3 provider is not set");
      walletClient = account ?? (await this.sdk.core.web3Provider?.requestAddresses())[0] as Address;
    }
    const chainId = this.core.chainId;

    // check if we have the data in cache and if it's not too old
    const cacheKey = `${walletClient}-${chainId}`;
    if (!noCaching && this.liquidatedPositionsCache[cacheKey]) {
      const cachedData = this.liquidatedPositionsCache[cacheKey];
      const isCacheValid = Date.now() - cachedData.lastUpdated < 300 * 1000; // 5 minutes
      if (isCacheValid) {
        return paginate(this.filterLiquidatedPositionsByMarketId(cachedData.data, marketId), page, pageSize);
      }
    }

    const rawliquidatedPositions = await getLiquidatedPositions({
      chainId: chainId,
      account: walletClient.toLowerCase()
    });
    const transformedLiquidated: LiquidatedPositionData[] = [];
    const marketDetails = await getMarketsDetailsByChainId(chainId as CHAINS);
    
    // slice the raw data using page and pageSize
    const liquidatedPositions = paginate(rawliquidatedPositions, page, pageSize).data;

    for (const liquidated of liquidatedPositions) {
      const marketName =
        marketDetails?.get(liquidated.id.split("-")[0])?.marketName ?? "";
      const parsedSize = formatBigNumber(liquidated.size, Number(18));
      const positionSide = liquidated.position.isLong ? "Long" : "Short";
      const parsedEntryPrice = formatBigNumber(
        liquidated.position.entryPrice,
        Number(18)
      );
      const marketDetailsCurrency = marketDetails
        ?.get(liquidated.id.split("-")[0])
        ?.currency.trim();
      const priceCurrency = marketDetailsCurrency
        ? PRICE_CURRENCY_FROM_QUOTE[
            marketDetailsCurrency as keyof typeof PRICE_CURRENCY_FROM_QUOTE
          ]
        : "";
      const parsedExitPrice = formatBigNumber(liquidated.price, Number(18));
      const parsedCreatedTimestamp = formatUnixTimestampToDate(
        liquidated.position.createdAtTimestamp
      );
      const parsedClosedTimestamp = formatUnixTimestampToDate(
        liquidated.timestamp
      );

      transformedLiquidated.push({
        marketName: marketName,
        size: parsedSize,
        position: liquidated.position.leverage + "x " + positionSide,
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
        created: parsedCreatedTimestamp,
        liquidated: parsedClosedTimestamp,
      });
    }

    // cache the data
    if (!noCaching) {
      this.liquidatedPositionsCache[cacheKey] = {
        data: transformedLiquidated,
        lastUpdated: Date.now(),
      };
    }

    return paginate(this.filterLiquidatedPositionsByMarketId(transformedLiquidated, marketId), page, pageSize);
  };

  // private method to filter liquidated positions by marketId
  private filterLiquidatedPositionsByMarketId = (
    liquidatedPositions: LiquidatedPositionData[],
    marketId?: string
  ): LiquidatedPositionData[] => {
    if (!marketId) return liquidatedPositions;
    return liquidatedPositions.filter(
      (liquidated) => liquidated.marketName === marketId
    );
  }
}
