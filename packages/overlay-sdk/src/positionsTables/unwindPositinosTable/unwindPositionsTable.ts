import { OverlaySDK } from "../../sdk";
import { OverlaySDKModule } from "../../common/class-primitives/sdk-module";
import { OverlaySDKCommonProps } from "../../core/types";
import { UnwindsQuery } from "../../types";
import { getMarketsDetailsByChainId } from "../../services/marketsDetails";
import { Address } from "viem";
import {
  formatBigNumber,
  formatUnixTimestampToDate,
  toPercentUnit,
  toScientificNumber,
} from "../../common/utils";
import { FIRST, PRICE_CURRENCY_FROM_QUOTE } from "../../constants";
import { getUnwindPositions } from "../../subgraph";
import { CHAINS, invariant } from "../../common";

type Unwind = NonNullable<
  NonNullable<UnwindsQuery["account"]>["unwinds"]
>[number];

type TransformedUnwind = {
  marketName: string | undefined;
  positionSide: string | undefined;
  parsedCreatedTimestamp: string | undefined;
  parsedClosedTimestamp: string | undefined;
  entryPrice: string | undefined;
  size: string | undefined;
  exitPrice: string | undefined;
  pnl: string | number | undefined;
};

export class OverlaySDKUnwindPositions extends OverlaySDKModule {
  private sdk: OverlaySDK;

  constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK) {
    super(props);
    this.sdk = sdk;
  }
  transformUnwindPositions = async (account?: Address): // unwindPositions: Unwind[]
  Promise<TransformedUnwind[]> => {
    let walletClient = account;
    if (!walletClient) {
      invariant(this.sdk.core.web3Provider, "Web3 provider is not set");
      walletClient = account ?? (await this.sdk.core.web3Provider?.requestAddresses())[0] as Address;
    }
    const chainId = this.core.chainId;
    const rawUnwindData = await getUnwindPositions({
      chainId: chainId,
      account: walletClient,
      first: FIRST,
    });
    const transformedUnwinds: TransformedUnwind[] = [];
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
      });
    }
    return transformedUnwinds;
  };
}
