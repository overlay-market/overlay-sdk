import { createWalletClient, http, type Address } from "viem";
import { OverlaySDKModule } from "../../common/class-primitives/sdk-module.js";
import { OverlaySDKCommonProps } from "../../core/types.js";
import { PRICE_CURRENCY_FROM_QUOTE, LINKS, FIRST } from "../../constants.js";
import { OverlaySDK } from "../../sdk.js";
import { formatBigNumber } from "../../common/utils/formatBigNumber.js";
import { getMarketsDetailsByChainId } from "../../services/marketsDetails.js";
import { getLiquidatedPositions } from "../../subgraph";
import {
  toPercentUnit,
  toScientificNumber,
} from "../../common/utils/toScientificNumber.js";
import formatUnixTimestampToDate from "../../common/utils/formatUnixTimestampToDate.js";
import { mainnet } from "viem/chains";

type TransformedLiquidated = {
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

  constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK) {
    super(props);
    this.sdk = sdk;
  }

  transformLiquidatedPositions = async (): Promise<TransformedLiquidated[]> => {
    const walletClient = (await this.sdk.core.getWeb3Address()).toLowerCase();
    const rawliquidatedPositions = await getLiquidatedPositions({
      url: LINKS.URL,
      account: walletClient,
      first: 10,
    });
    const transformedLiquidated: TransformedLiquidated[] = [];
    const chainId = this.core.chainId;
    const marketDetails = await getMarketsDetailsByChainId(
      chainId as unknown as Address
    );

    for (const liquidated of rawliquidatedPositions) {
      const marketName =
        marketDetails?.get(liquidated.id.split("-")[0])?.marketName ?? "";
      const parsedSize = formatBigNumber(liquidated.size, Number(18));
      const positionSide = liquidated.isLong ? "Long" : "Short";
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
        size: parsedSize + "OVL",
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
    return transformedLiquidated;
  };
}
