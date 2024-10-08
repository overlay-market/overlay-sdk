import axios from "axios";
import { request, RequestExtendedOptions } from "graphql-request";
import {
  OpenPositionsQuery as OpenPositionsQueryDocument,
  UnwindPositionsQuery as UnwindPositionsQueryDocument,
  ActiveMarketsQuery as ActiveMarketsQueryDocument,
} from "./queries";
import {
  OpenPositionsQuery,
  OpenPositionsQueryVariables,
  UnwindsQuery,
  UnwindsQueryVariables,
  ActiveMarketsQuery
} from "./types";
import { MarketDetails, NETWORKS, ONE_BN } from "./constants";
import {
  formatBigNumber,
  formatUnixTimestampToDate,
  toPercentUnit,
  toScientificNumber,
} from "./common/utils/index";
import { sdk } from "./sdk";
import { type Address } from "viem";
import JSBI from "jsbi";
import { TickMath } from "@uniswap/v3-sdk";
import { CHAINS, invariant } from "./common";

// Get the address
async function getWalletAddress() {
  const address = (await sdk.core.useAccount()).address;

  return address;
}

export const getMarketNames = async (chainId: CHAINS, marketAddress: string) => {
  try {
    invariant(chainId in CHAINS, "Unsupported chainId");
    const api_url = NETWORKS[chainId].MARKET_PRICES_API
    const markets = (await axios.get(`${api_url}/markets`))
      .data as {
      address: string;
      name?: string;
    }[];
    const market = markets.find(({ address }) => address === marketAddress);
    return market?.name;
  } catch (error) {
    console.error("market names", error);
    return undefined;
  }
};

export const getCurrencySymbol = async (chainId: CHAINS) => {
  try {
    invariant(chainId in CHAINS, "Unsupported chainId");
    const api_url = NETWORKS[chainId].MARKET_PRICES_API
    const markets = (await axios.get(`${api_url}/markets`))
      .data as {
      address: string;
      name: string;
    }[];
    const market = markets.find(({ address }) => address === marketAddress);
    const marketAddress: string | undefined = market?.address;
    return marketAddress;
  } catch (error) {
    console.error("Error fetching market names", error);
    return undefined;
  }
};

export type SubgraphUrl =
  | string
  | {
      url: string;
      requestHeaders?: RequestExtendedOptions["requestHeaders"];
    };

const parseSubgraphUrl = (value: SubgraphUrl) => {
  if (typeof value === "string") return { url: value };
  else return value;
};

const requestAllWithStep = async <TResult, TResultEntry, TVariables>({
  url,
  step,
  document,
  variables,
  extractArray,
}: {
  variables: TVariables;
  document: any;
  url: string;
  step: number;
  extractArray: (result: TResult | null) => TResultEntry[];
} & SubgraphUrl) => {
  let skip = 0;
  const results: TResultEntry[] = [];
  while (true) {
    const partialResult = await request<TResult>({
      ...parseSubgraphUrl(url),
      document,
      variables: {
        ...variables,
        first: step,
        skip,
      },
    });
    const array = extractArray(partialResult);
    results.push(...array);
    if (array.length < step) break;
    skip += step;
  }
  return results;
};

export type GetOpenPositionsOptions = {
  chainId: CHAINS;
  account: string;
  first?: number;
  skip?: number;
};

type OpenPosition = NonNullable<
  NonNullable<OpenPositionsQuery["account"]>["positions"]
>[number];

export const getOpenPositions = async ({
  chainId,
  account,
  first,
}: GetOpenPositionsOptions): Promise<OpenPosition[]> => {
  invariant(chainId in CHAINS, "Unsupported chainId");
  const url = NETWORKS[chainId].SUBGRAPH_URL;
  return requestAllWithStep<
    OpenPositionsQuery,
    OpenPosition,
    OpenPositionsQueryVariables
  >({
    url,
    document: OpenPositionsQueryDocument,
    step: first ?? 1000,
    extractArray: (result) => result?.account?.positions ?? [],
    variables: {
      account,
    },
  });
};

type TransformedOpen = {
  marketName: string | undefined;
  positionSide: string | undefined;
  parsedCreatedTimestamp: string | undefined;
  entryPrice: string | undefined;
  liquidatePrice: string | undefined;
  currentPrice: string | undefined;
  size: number | string | undefined;
  unrealizedPnL: string | number | undefined;
  parsedFunding: string | number | undefined;
};
export const transformOpenPositions = async (
  chainId: CHAINS,
  openPositions: OpenPosition[]
): Promise<TransformedOpen[]> => {
  invariant(chainId in CHAINS, "Unsupported chainId");
  const transformedOpens: TransformedOpen[] = [];
  for (const open of openPositions) {
    const positionId = BigInt(open.id.split("-")[1]);
    const walletAddress = await getWalletAddress();
    const marketId = open.market.id as Address;
    const entryPrice = open.entryPrice;
    const isLong = open.isLong;
    const leverage = open.leverage;
    const positionValue = await sdk.state.getValue(
      "0x2878837ea173e8bd40db7cee360b15c1c27deb5a",
      marketId,
      walletAddress,
      positionId
    );
    if (positionValue === BigInt(0)) {
      continue;
    }
    const currentOi = await sdk.state.getCurrentOi(
      "0x2878837ea173e8bd40db7cee360b15c1c27deb5a",
      marketId,
      walletAddress,
      positionId
    );
    const liquidatePrice = await sdk.state.getLiquidatePrice(
      "0x2878837ea173e8bd40db7cee360b15c1c27deb5a",
      marketId,
      walletAddress,
      positionId
    );
    const info = await sdk.state.getInfo(
      "0x2878837ea173e8bd40db7cee360b15c1c27deb5a",
      marketId,
      walletAddress,
      positionId
    );
    const cost = await sdk.state.getCost(
      "0x2878837ea173e8bd40db7cee360b15c1c27deb5a",
      marketId,
      walletAddress,
      positionId
    );
    const tradingFee = await sdk.state.getTradingFee(
      "0x2878837ea173e8bd40db7cee360b15c1c27deb5a",
      marketId,
      walletAddress,
      positionId
    );
    const marketMid = await sdk.state.getMidPrice(
      "0x2878837ea173e8bd40db7cee360b15c1c27deb5a",
      marketId
    );
    const marketName = await getMarketNames(chainId, open.id.split("-")[0]);
    const priceCurrency = MarketDetails[open.id.split("-")[0]]?.currency;
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
        (Number(positionValue) - Number(cost) - Number(tradingFee)) / 10 ** 18;
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
      const remainingNotionalInitial = BigInt(info.notionalInitial)
        * BigInt(info.fractionRemaining) / baseFractionRemaining;

      const remainingOiInitial = remainingNotionalInitial
        * ONE_BN / tickToPrice(info.midTick);
      
      if (remainingOiInitial === 0n) return undefined;

      const fundingPayments = BigInt(marketMid)
        * (BigInt(currentOi) - remainingOiInitial) / ONE_BN;

      const fullValue = formatBigNumber(fundingPayments < 0n ? -fundingPayments : fundingPayments, 18, 18);
      
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
            : toScientificNumber(formatBigNumber(liquidatePrice, Number(18), 4))
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

export type GetUnwindPositionsOptions = {
  chainId: CHAINS;
  account: string;
  first?: number;
  skip?: number;
};

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

export const getUnwindPositions = async ({
  chainId,
  account,
  first,
}: GetUnwindPositionsOptions): Promise<Unwind[]> => {
  invariant(chainId in CHAINS, "Unsupported chainId");
  const url = NETWORKS[chainId].SUBGRAPH_URL;
  return requestAllWithStep<UnwindsQuery, Unwind, UnwindsQueryVariables>({
    url,
    document: UnwindPositionsQueryDocument,
    step: first ?? 1000,
    extractArray: (result) => result?.account?.unwinds ?? [],
    variables: {
      account,
    },
  });
};

export const transformUnwindPositions = async (
  chainId: CHAINS,
  unwindPositions: Unwind[]
): Promise<TransformedUnwind[]> => {
  const transformedUnwinds: TransformedUnwind[] = [];
  for (const unwind of unwindPositions) {
    const marketName = await getMarketNames(chainId, unwind.id.split("-")[0]);
    const priceCurrency = MarketDetails[unwind.id.split("-")[0]]?.currency;
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

export const getActiveMarketsFromSubgraph = async(chainId: CHAINS) => {
  invariant(chainId in CHAINS, "Unsupported chainId");
  try {
    const data = await request<ActiveMarketsQuery>(
      NETWORKS[chainId].SUBGRAPH_URL,
      ActiveMarketsQueryDocument
    );
   
    return data.markets
  } catch (error) {
    console.error('Error fetching active markets data:', error);
    return undefined
  }
}