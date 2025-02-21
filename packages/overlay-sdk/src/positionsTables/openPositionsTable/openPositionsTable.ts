import { OverlaySDK } from "../../sdk";
import { OpenPositionsQuery } from "../../types";
import {
  formatBigNumber,
  formatUnixTimestampToDate,
  toPercentUnit,
  toScientificNumber,
} from "../../common/utils";
import { Abi, Address } from "viem";
import JSBI from "jsbi";
import { TickMath } from "@uniswap/v3-sdk";
import {
  ONE_BN,
  PRICE_CURRENCY_FROM_QUOTE,
  V1_PERIPHERY_ADDRESS,
} from "../../constants";
import { getMarketsDetailsByChainId } from "../../services/marketsDetails";
import { OverlaySDKModule } from "../../common/class-primitives/sdk-module";
import { OverlaySDKCommonProps } from "../../core/types";
import { getOpenPositions } from "../../subgraph";
import { CHAINS, invariant } from "../../common";
import { paginate } from "../../common/utils/paginate";
import { OverlayV1StateABI } from "../../markets/abis/OverlayV1State";

type OpenPosition = NonNullable<
  NonNullable<OpenPositionsQuery["account"]>["positions"]
>[number];

export type OpenPositionData = {
  marketName: string | undefined;
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
  priceCurrency: string;
};

export type PositionData = {
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
    refreshData?: boolean
  ): Promise<{ data: OpenPositionData[]; total: number }> => {
    let walletClient = account;
    if (!walletClient) {
      invariant(this.sdk.core.web3Provider, "Web3 provider is not set");
      walletClient = account ?? (await this.sdk.core.web3Provider?.requestAddresses())[0] as Address;
    }
    const chainId = this.core.chainId;

    const cacheKey = `${walletClient}-${chainId}`;
    let openPositionsData: OpenPositionData[] = [];

    if (!refreshData && this.openPositionsCache[cacheKey]) {
      const cachedData = this.openPositionsCache[cacheKey];
      if (Date.now() - cachedData.lastUpdated < 3 * 60 * 1000) { // 3 minutes
        openPositionsData = cachedData.data;
        return {
          data: paginate(openPositionsData, page, pageSize).data,
          total: openPositionsData.length
        };
      }
      delete this.openPositionsCache[cacheKey];
    }

    if (!this.openPositionsCache[cacheKey] || refreshData) {
      const [rawOpenData, marketDetails] = await Promise.all([
        getOpenPositions({
          chainId: chainId,
          account: walletClient.toLowerCase()
        }),
        getMarketsDetailsByChainId(chainId as CHAINS)
      ]);

      let positionsData: {
        [key: string]: PositionData | null | undefined
      } = {};

      for (let i = 0; i < rawOpenData.length; i += 15) {
        const positions = rawOpenData.slice(i, i + 15).map((position) => ({
          marketId: position.market.id as Address,
          positionId: BigInt(position.id.split("-")[1])
        }));
        Object.assign(positionsData, await this.getPositionsData(chainId, walletClient, positions));
      }

      const transformedOpens: OpenPositionData[] = [];
      invariant(marketDetails, "Failed to get market details");

      for (const open of rawOpenData) {
        const positionId = BigInt(open.id.split("-")[1]);
        const marketId = open.market.id as Address;
        let positionData = positionsData[`${marketId}-${positionId}`];

        const formattedOpen = await this.formatOpenPosition(open, marketDetails, positionData ?? undefined);
        if (formattedOpen) {
          transformedOpens.push(formattedOpen);
        }
      }

      this.openPositionsCache[cacheKey] = {
        data: transformedOpens,
        lastUpdated: Date.now()
      };

      openPositionsData = this.filterOpenPositionsByMarketId(transformedOpens, marketId);
    }

    return {
      data: paginate(openPositionsData, page, pageSize).data,
      total: openPositionsData.length
    }
  };

  private async formatOpenPosition(
    open: OpenPosition,
    marketDetails: Map<string, { marketName: string; currency: string }>,
    positionData?: PositionData
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
      marketMid,
    } = positionData || {
      positionValue: undefined,
      currentOi: undefined,
      liquidatePrice: undefined,
      info: undefined,
      cost: undefined,
      tradingFee: undefined,
      marketMid: undefined,
    };

    if (open.market.isShutdown) {
      const formattedOpen: OpenPositionData = {
        marketName: 'Market is shutdown',
        marketAddress: marketId,
        positionId: Number(positionId),
        size: '0',
        positionSide: open.leverage + "x " + (open.isLong ? "Long" : "Short"),
        entryPrice: '0',
        liquidatePrice: '0',
        currentPrice: '0',
        parsedCreatedTimestamp: formatUnixTimestampToDate(
          open.createdAtTimestamp
        ),
        unrealizedPnL: '0',
        parsedFunding: '0',
        priceCurrency: '0'
      };

      return formattedOpen;
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
        liquidatePrice && formatBigNumber(liquidatePrice, Number(18), 4)
          ? priceCurrency === "%"
            ? toPercentUnit(formatBigNumber(liquidatePrice, Number(18), 4))
            : toScientificNumber(
                formatBigNumber(liquidatePrice, Number(18), 4)
              )
          : "-"
      }`,
      currentPrice: `${priceCurrency ? priceCurrency : ""}${
        marketMid && formatBigNumber(marketMid, Number(18), 4)
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

  async getPositionsData(
    chainId: CHAINS,
    walletClient: Address,
    positions: { marketId: Address; positionId: bigint }[]
  ): Promise<{
    [key: string]: PositionData | null
  }> {
    const OverlayV1StateABIFunctions = OverlayV1StateABI.filter((abi) => abi.type === "function")
    const OverlayV1StateABIPositionFunctions = OverlayV1StateABIFunctions.filter(
      (abi) => abi.name === "value" || 
      abi.name === "oi" || 
      abi.name === "liquidationPrice" || 
      abi.name === "position" || 
      abi.name === "cost" || 
      abi.name === "tradingFee" ||
      abi.name === "mid"
    );

    const calls: {
      address: Address;
      abi: Abi;
      functionName: string;
      args: readonly unknown[];
    }[] = [];

    for (const { marketId, positionId } of positions) {
      const positionCalls = [
        {
          address: V1_PERIPHERY_ADDRESS[chainId],
          abi: OverlayV1StateABIPositionFunctions.filter((abi) => abi.name === "value"),
          functionName: "value",
          args: [marketId, walletClient, positionId],
        },
        {
          address: V1_PERIPHERY_ADDRESS[chainId],
          abi: OverlayV1StateABIPositionFunctions.filter((abi) => abi.name === "oi"),
          functionName: "oi",
          args: [marketId, walletClient, positionId],
        },
        {
          address: V1_PERIPHERY_ADDRESS[chainId],
          abi: OverlayV1StateABIPositionFunctions.filter((abi) => abi.name === "liquidationPrice"),
          functionName: "liquidationPrice",
          args: [marketId, walletClient, positionId],
        },
        {
          address: V1_PERIPHERY_ADDRESS[chainId],
          abi: OverlayV1StateABIPositionFunctions.filter((abi) => abi.name === "position"),
          functionName: "position",
          args: [marketId, walletClient, positionId],
        },
        {
          address: V1_PERIPHERY_ADDRESS[chainId],
          abi: OverlayV1StateABIPositionFunctions.filter((abi) => abi.name === "cost"),
          functionName: "cost",
          args: [marketId, walletClient, positionId],
        },
        {
          address: V1_PERIPHERY_ADDRESS[chainId],
          abi: OverlayV1StateABIPositionFunctions.filter((abi) => abi.name === "tradingFee"),
          functionName: "tradingFee",
          args: [marketId, walletClient, positionId],
        },
        {
          address: V1_PERIPHERY_ADDRESS[chainId],
          abi: OverlayV1StateABIPositionFunctions.filter((abi) => abi.name === "mid"),
          functionName: "mid",
          args: [marketId],
        }
      ];

      calls.push(...positionCalls);
    }

    const results = await this.core.rpcProvider.multicall({
      allowFailure: true,
      contracts: calls,
    });

    const data: {
      [key: string]: PositionData | null
    } = {};

    for (let i = 0; i < positions.length; i++) {
      const { marketId, positionId } = positions[i];

      if (results[i * 7].status === 'success' && results[i * 7].result as bigint === BigInt(0)) {
        data[`${marketId}-${positionId}`] = null;
        console.log('position not found', marketId, positionId);
        continue;
      }

      data[`${marketId}-${positionId}`] = {
        positionValue: results[i * 7].result as bigint,
        currentOi: results[i * 7 + 1].result as bigint,
        liquidatePrice: results[i * 7 + 2].result as bigint,
        info: results[i * 7 + 3].result as {
          notionalInitial: bigint;
          debtInitial: bigint;
          midTick: number;
          entryTick: number;
          isLong: boolean;
          liquidated: boolean;
          oiShares: bigint;
          fractionRemaining: number;
        },
        cost: results[i * 7 + 4].result as bigint,
        tradingFee: results[i * 7 + 5].result as bigint,
        marketMid: results[i * 7 + 6].result as bigint,
      };
    }

    return data;
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
    openPositions: OpenPositionData[],
    marketId?: string
  ): OpenPositionData[] => {
    if (!marketId) return openPositions;
    return openPositions.filter(
      (open) => open.marketName === marketId
    );
  }
}
