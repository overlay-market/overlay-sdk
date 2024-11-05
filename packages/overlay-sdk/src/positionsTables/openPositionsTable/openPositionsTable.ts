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
  ONE_BN,
  PRICE_CURRENCY_FROM_QUOTE,
  V1_PERIPHERY_ADDRESS,
} from "../../constants";
import { getMarketsDetailsByChainId } from "../../services/marketsDetails";
import { OverlaySDKModule } from "../../common/class-primitives/sdk-module";
import { OverlaySDKCommonProps } from "../../core/types";
import { getOpenPositions } from "../../subgraph";
import { mainnet } from "viem/chains";
import { CHAINS, invariant } from "../../common";
import { paginate } from "../../common/utils/paginate";
import { OverlayV1StateABI } from "../../markets/abis/OverlayV1State";

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
  marketAddress: Address;
  positionId: number;
};

export class OverlaySDKOpenPositions extends OverlaySDKModule {
  private sdk: OverlaySDK;
  private openPositionsCache: Record<string, { data: any; lastUpdated: number }> = {};

  constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK) {
    super(props);
    this.sdk = sdk;
  }

  transformOpenPositions = async (
    page = 1, 
    pageSize = 10, 
    marketId?: string, 
    account?: Address,
    noCaching?: boolean
  ): Promise<{ data: TransformedOpen[]; total: number }> => {
    let walletClient = account;
    if (!walletClient) {
      invariant(this.sdk.core.web3Provider, "Web3 provider is not set");
      walletClient = account ?? (await this.sdk.core.web3Provider?.requestAddresses())[0] as Address;
    }
    const chainId = this.core.chainId;

    // check if we have the data in cache and if it's not too old
    const cacheKey = `${walletClient}-${chainId}`;
    if (!noCaching && this.openPositionsCache[cacheKey]) {
      const cachedData = this.openPositionsCache[cacheKey];
      const isCacheValid = Date.now() - cachedData.lastUpdated < 300 * 1000; // 5 minutes
      if (isCacheValid) {
        return paginate(this.filterOpenPositionsByMarketId(cachedData.data, marketId), page, pageSize);
      }
    }

    const rawOpenData = await getOpenPositions({
      chainId: chainId,
      account: walletClient.toLowerCase()
    });
    const transformedOpens: TransformedOpen[] = [];
    const marketDetails = await getMarketsDetailsByChainId(chainId as CHAINS);
    invariant(marketDetails, "Failed to get market details");

    const formattedOpens = await Promise.all(
      rawOpenData.map(async (open) => {
      return this.formatOpenPosition(open, walletClient, marketDetails);
      })
    );

    for (const formattedOpen of formattedOpens) {
      if (formattedOpen) {
        transformedOpens.push(formattedOpen);
      }
    }

    // cache the data
    if (!noCaching) {
      this.openPositionsCache[cacheKey] = {
        data: transformedOpens,
        lastUpdated: Date.now(),
      };
    }

    return paginate(this.filterOpenPositionsByMarketId(transformedOpens, marketId), page, pageSize);
  };

  private async formatOpenPosition(
    open: OpenPosition,
    walletClient: Address,
    marketDetails: Map<string, { marketName: string; currency: string }>
  ) {
    const positionId = BigInt(open.id.split("-")[1]);
    const marketId = open.market.id as Address;
    const entryPrice = open.entryPrice;
    const isLong = open.isLong;
    const leverage = open.leverage;

    const {
      positionValue,
      currentOi,
      liquidatePrice,
      info,
      cost,
      tradingFee,
      marketMid
    } = await this.getOpenPositionData(
      this.core.chainId,
      walletClient,
      marketId,
      positionId
    );

    if (positionValue === BigInt(0)) {
      return
    }

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

    return {
      marketName: marketName,
      marketAddress: marketId,
      positionId: Number(positionId),
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
      priceCurrency: priceCurrency,
    };
  }

  async getOpenPositionData(
    chainId: CHAINS,
    walletClient: Address,
    marketId: Address,
    positionId: bigint
  ): Promise<{
    positionValue: bigint;
    currentOi: bigint;
    liquidatePrice: bigint;
    info: {
      notionalInitial: bigint;
      debtInitial: bigint;
      midTick: number;
      entryTick: number;
      isLong: boolean;
      liquidated: boolean;
      oiShares: bigint;
      fractionRemaining: number;
    };
    cost: bigint;
    tradingFee: bigint;
    marketMid: bigint;
    debt: bigint;
    collateral: bigint;
    notional: bigint;
    maintenanceMargin: bigint;
    prices: {
      bid: bigint;
      ask: bigint;
      mid: bigint;
    }
  }> {
    const contract = { address: V1_PERIPHERY_ADDRESS[chainId], abi: OverlayV1StateABI };

    const [
      positionValue,
      currentOi,
      liquidatePrice,
      info,
      cost,
      tradingFee,
      marketMid,
      debt,
      collateral,
      notional,
      maintenanceMargin,
      prices,
    ] = await this.core.rpcProvider.multicall({
        allowFailure: false,
        contracts: [
          {
            ...contract,
            functionName: "value",
            args: [marketId, walletClient, positionId],
          },
          {
            ...contract,
            functionName: "oi",
            args: [marketId, walletClient, positionId],
          },
          {
            ...contract,
            functionName: "liquidationPrice",
            args: [marketId, walletClient, positionId],
          },
          {
            ...contract,
            functionName: "position",
            args: [marketId, walletClient, positionId],
          },
          {
            ...contract,
            functionName: "cost",
            args: [marketId, walletClient, positionId],
          },
          {
            ...contract,
            functionName: "tradingFee",
            args: [marketId, walletClient, positionId],
          },
          {
            ...contract,
            functionName: "mid",
            args: [marketId],
          },
          {
            ...contract,
            functionName: "debt",
            args: [marketId, walletClient, positionId],
          },
          {
            ...contract,
            functionName: "collateral",
            args: [marketId, walletClient, positionId],
          },
          {
            ...contract,
            functionName: "notional",
            args: [marketId, walletClient, positionId],
          },
          {
            ...contract,
            functionName: "maintenanceMargin",
            args: [marketId, walletClient, positionId],
          },
          {
            ...contract,
            functionName: "prices",
            args: [marketId],
          }
        ] as const,
      });

    return {
      positionValue,
      currentOi,
      liquidatePrice,
      info,
      cost,
      tradingFee,
      marketMid,
      debt,
      collateral,
      notional,
      maintenanceMargin,
      prices: {
        bid: prices[0],
        ask: prices[1],
        mid: prices[2]
      }
    };
  }

  // private method to filter open positions by marketId
  private filterOpenPositionsByMarketId = (
    openPositions: TransformedOpen[],
    marketId?: string
  ): TransformedOpen[] => {
    if (!marketId) return openPositions;
    return openPositions.filter(
      (open) => open.marketName === marketId
    );
  }
}
