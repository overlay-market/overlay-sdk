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

    const rawUnwindData = await getUnwindPositions({
      chainId: chainId,
      account: walletClient.toLowerCase()
    });
    const transformedUnwinds: UnwindPositionData[] = [];
    const marketDetails = await getMarketsDetailsByChainId(chainId as CHAINS);

    // slice the raw data using page and pageSize
    const positionsFiltered = await this.filterUnwindPositionsByMarketId(rawUnwindData, marketId);
    const unwindPositions = paginate(positionsFiltered, page, pageSize).data;

    for (const unwind of unwindPositions) {
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

    return {
      data: transformedUnwinds,
      total: positionsFiltered.length,
    };
  };

  // private method to filter unwind positions by marketId
  private filterUnwindPositionsByMarketId = async (
    unwindPositions: any[],
    marketId?: string
  ) => {
    if (!marketId) return unwindPositions;
    const {marketAddress} = await this.sdk.markets.getMarketDetails(marketId);
    return unwindPositions.filter(
      (unwind) => unwind.id.split("-")[0] === marketAddress
    );
  }
}
