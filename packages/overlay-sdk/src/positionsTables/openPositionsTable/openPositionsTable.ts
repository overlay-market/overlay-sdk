import { OverlaySDK } from "../../sdk";
import { OpenPositionsQuery } from "../../types";
import {
  formatBigNumber,
  formatUnixTimestampToDate,
  toPercentUnit,
  toScientificNumber,
} from "../../common/utils";
import { Address, createWalletClient, http } from "viem";
import JSBI from "jsbi";
import { TickMath } from "@uniswap/v3-sdk";
import {
  FIRST,
  LINKS,
  ONE_BN,
  PRICE_CURRENCY_FROM_QUOTE,
} from "../../constants";
import { getMarketsDetailsByChainId } from "../../services/marketsDetails";
import { OverlaySDKModule } from "../../common/class-primitives/sdk-module";
import { OverlaySDKCommonProps } from "../../core/types";
import { getOpenPositions } from "../../subgraph";
import { mainnet } from "viem/chains";

const walletClient = createWalletClient({
  chain: mainnet,
  transport: http(),
});

type OpenPosition = NonNullable<
  NonNullable<OpenPositionsQuery["account"]>["positions"]
>[number];

type TransformedOpen = {
  marketName: string | Address | undefined;
  positionSide: string | undefined;
  parsedCreatedTimestamp: string | undefined;
  entryPrice: string | undefined;
  liquidatePrice: string | undefined;
  currentPrice: string | undefined;
  size: number | string | undefined;
  unrealizedPnL: string | number | undefined;
  parsedFunding: string | number | undefined;
};

export class OverlaySDKOpenPositions extends OverlaySDKModule {
  private sdk: OverlaySDK;

  constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK) {
    super(props);
    this.sdk = sdk;
  }
  transformOpenPositions = async (): Promise<TransformedOpen[]> => {
    const rawOpenData = await getOpenPositions({
      url: LINKS.URL,
      account: (await walletClient.getAddresses()).join(","),
      first: FIRST,
    });
    const prueba = await walletClient.getAddresses();
    console.log("prueba", prueba);
    const transformedOpens: TransformedOpen[] = [];
    const chainId = this.core.chainId;
    const marketDetails = await getMarketsDetailsByChainId(
      chainId as unknown as Address
    );
    for (const open of rawOpenData) {
      const positionId = BigInt(open.id.split("-")[1]);
      const walletAddress = await this.sdk.core.getWeb3Address();
      const marketId = open.market.id as Address;
      const entryPrice = open.entryPrice;
      const isLong = open.isLong;
      const leverage = open.leverage;
      const positionValue = await this.sdk.state.getValue(
        "0x2878837ea173e8bd40db7cee360b15c1c27deb5a",
        marketId,
        walletAddress,
        positionId
      );
      if (positionValue === BigInt(0)) {
        continue;
      }
      const currentOi = await this.sdk.state.getCurrentOi(
        "0x2878837ea173e8bd40db7cee360b15c1c27deb5a",
        marketId,
        walletAddress,
        positionId
      );
      const liquidatePrice = await this.sdk.state.getLiquidatePrice(
        "0x2878837ea173e8bd40db7cee360b15c1c27deb5a",
        marketId,
        walletAddress,
        positionId
      );
      const info = await this.sdk.state.getInfo(
        "0x2878837ea173e8bd40db7cee360b15c1c27deb5a",
        marketId,
        walletAddress,
        positionId
      );
      const cost = await this.sdk.state.getCost(
        "0x2878837ea173e8bd40db7cee360b15c1c27deb5a",
        marketId,
        walletAddress,
        positionId
      );
      const tradingFee = await this.sdk.state.getTradingFee(
        "0x2878837ea173e8bd40db7cee360b15c1c27deb5a",
        marketId,
        walletAddress,
        positionId
      );
      const marketMid = await this.sdk.state.getMidPrice(
        "0x2878837ea173e8bd40db7cee360b15c1c27deb5a",
        marketId
      );
      const marketName =
        marketDetails?.get(open.id.split("-")[0])?.marketName ?? "";
      const marketDetailsCurrency = marketDetails
        ?.get(open.id.split("-")[0])
        ?.currency.trim();
      const priceCurrency = marketDetailsCurrency
        ? PRICE_CURRENCY_FROM_QUOTE[
            marketDetailsCurrency as keyof typeof PRICE_CURRENCY_FROM_QUOTE
          ]
        : "";
      const parsedEntryPrice = formatBigNumber(entryPrice, Number(18));
      const parsedValue: string | number | undefined = (() => {
        if (!positionValue && positionValue === undefined) return undefined;
        const fullValue = formatBigNumber(positionValue, 18, 18);
        if (fullValue === undefined) return "-";
        return +fullValue < 1
          ? formatBigNumber(positionValue, 18, 6)
          : formatBigNumber(positionValue, 18, 2);
      })();
      const unrealizedPnL: string | number | undefined = (() => {
        if (
          positionValue === undefined ||
          cost === undefined ||
          tradingFee === undefined
        )
          return undefined;
        const diff =
          (Number(positionValue) - Number(cost) - Number(tradingFee)) /
          10 ** 18;
        return diff < 1 ? diff.toFixed(6) : diff.toFixed(2);
      })();
      function tickToPrice(tick: number): bigint {
        const Q96 = JSBI.exponentiate(JSBI.BigInt(2), JSBI.BigInt(96));
        const Q192 = JSBI.exponentiate(Q96, JSBI.BigInt(2));
        const ONE_JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(18));
        const sqrtRatio = TickMath.getSqrtRatioAtTick(tick);
        const ratio = JSBI.multiply(sqrtRatio, sqrtRatio);
        const ratio18 = JSBI.multiply(ratio, ONE_JSBI);
        const priceJSBI = JSBI.divide(ratio18, Q192);
        return BigInt(priceJSBI.toString());
      }
      const parsedFunding: string | number | undefined = (() => {
        if (info === undefined || !currentOi || !marketMid) return undefined;
        const baseFractionRemaining = 10000n;
        const remainingNotionalInitial =
          (BigInt(info.notionalInitial) * BigInt(info.fractionRemaining)) /
          baseFractionRemaining;

        const remainingOiInitial =
          (remainingNotionalInitial * ONE_BN) / tickToPrice(info.midTick);

        if (remainingOiInitial === 0n) return undefined;

        const fundingPayments =
          (BigInt(marketMid) * (BigInt(currentOi) - remainingOiInitial)) /
          ONE_BN;

        const fullValue = formatBigNumber(
          fundingPayments < 0n ? -fundingPayments : fundingPayments,
          18,
          18
        );

        if (fullValue === undefined) return "-";

        return +fullValue < 1
          ? formatBigNumber(fundingPayments, 18, 6)
          : formatBigNumber(fundingPayments, 18, 2);
      })();

      transformedOpens.push({
        marketName: marketName,
        size: parsedValue,
        positionSide: leverage + "x " + (isLong ? "Long" : "Short"),
        entryPrice: `${priceCurrency ? priceCurrency : ""}${
          parsedEntryPrice
            ? priceCurrency === "%"
              ? toPercentUnit(parsedEntryPrice)
              : toScientificNumber(parsedEntryPrice)
            : "-"
        }`,
        liquidatePrice: `${priceCurrency ? priceCurrency : ""}${
          formatBigNumber(liquidatePrice, Number(18), 4)
            ? priceCurrency === "%"
              ? toPercentUnit(formatBigNumber(liquidatePrice, Number(18), 4))
              : toScientificNumber(
                  formatBigNumber(liquidatePrice, Number(18), 4)
                )
            : "-"
        }`,
        currentPrice: `${priceCurrency ? priceCurrency : ""}${
          formatBigNumber(marketMid, Number(18), 4)
            ? priceCurrency === "%"
              ? toPercentUnit(formatBigNumber(marketMid, Number(18), 4))
              : toScientificNumber(formatBigNumber(marketMid, Number(18), 4))
            : "-"
        }`,
        parsedCreatedTimestamp: formatUnixTimestampToDate(
          open.createdAtTimestamp
        ),
        unrealizedPnL: unrealizedPnL,
        parsedFunding: parsedFunding,
      });
    }
    return transformedOpens;
  };
}
