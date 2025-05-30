import { type Address } from "viem";
import { OverlaySDKModule } from "../../common/class-primitives/sdk-module.js";
import { OverlaySDKCommonProps } from "../../core/types.js";
import { PRICE_CURRENCY_FROM_QUOTE } from "../../constants.js";
import { OverlaySDK } from "../../sdk.js";
import { formatBigNumber } from "../../common/utils/formatBigNumber.js";
import { getMarketsDetailsByChainId } from "../../services/marketsDetails.js";
import { getLiquidatedPositions } from "../../subgraph";
import formatUnixTimestampToDate from "../../common/utils/formatUnixTimestampToDate.js";
import { CHAINS } from "../../common/constants.js";
import { invariant } from "../../common/index.js";
import { paginate } from "../../common/utils/paginate.js";
import { formatPriceWithCurrency } from "../../common/utils/formatPriceWithCurrency.js";
import { toLowercaseKeys } from "../../common/utils/toLowercaseKeys.js";

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
    refreshData?: boolean
  ): Promise<{ data: LiquidatedPositionData[]; total: number }> => {
    let walletClient = account;
    if (!walletClient) {
      invariant(this.sdk.core.web3Provider, "Web3 provider is not set");
      walletClient = account ?? (await this.sdk.core.web3Provider?.requestAddresses())[0] as Address;
    }
    const chainId = this.core.chainId;

    const cacheKey = `${walletClient}-${chainId}`;

    let liquidatedPositionsData: LiquidatedPositionData[] = [];

    if (!refreshData && this.liquidatedPositionsCache[cacheKey]) {
      const cachedData = this.liquidatedPositionsCache[cacheKey];
      if (Date.now() - cachedData.lastUpdated < 3 * 60 * 1000) { // 3 minutes
        liquidatedPositionsData = cachedData.data;
        return {
          data: paginate(liquidatedPositionsData, page, pageSize).data,
          total: liquidatedPositionsData.length
        };
      }
      delete this.liquidatedPositionsCache[cacheKey];
    }

    if (!this.liquidatedPositionsCache[cacheKey] || refreshData) {
      const rawliquidatedPositions = await getLiquidatedPositions({
        chainId: chainId,
        account: walletClient.toLowerCase()
      });
      const transformedLiquidated: LiquidatedPositionData[] = [];
      const marketDetails = await getMarketsDetailsByChainId(chainId as CHAINS);
      const lowercasedMarketDetails = marketDetails && toLowercaseKeys(marketDetails);

      for (const liquidated of rawliquidatedPositions) {
        const marketName =
        lowercasedMarketDetails?.get(liquidated.id.split("-")[0].toLowerCase())?.marketName ?? "";
        const parsedSize = formatBigNumber(liquidated.size, Number(18));
        const positionSide = liquidated.position.isLong ? "Long" : "Short";
        const parsedEntryPrice = formatBigNumber(
          liquidated.position.entryPrice,
          Number(18)
        );
        const marketDetailsCurrency = lowercasedMarketDetails
          ?.get(liquidated.id.split("-")[0].toLowerCase())
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
          entryPrice: parsedEntryPrice ? formatPriceWithCurrency(parsedEntryPrice, priceCurrency) : "-",
          exitPrice: parsedExitPrice ? formatPriceWithCurrency(parsedExitPrice, priceCurrency) : "-", 
          created: parsedCreatedTimestamp,
          liquidated: parsedClosedTimestamp,
        });
      }

      this.liquidatedPositionsCache[cacheKey] = {
        data: transformedLiquidated,
        lastUpdated: Date.now(),
      };

      liquidatedPositionsData = this.filterLiquidatedPositionsByMarketId(transformedLiquidated, marketId);
    }

    return {
      data: paginate(liquidatedPositionsData, page, pageSize).data,
      total: liquidatedPositionsData.length,
    }
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
