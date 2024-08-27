import axios from "axios";
import { request, RequestExtendedOptions } from "graphql-request";
import {
  OpenPositionsQuery as OpenPositionsQueryDocument,
  UnwindPositionsQuery as UnwindPositionsQueryDocument,
} from "./queries";
import {
  OpenPositionsQuery,
  OpenPositionsQueryVariables,
  UnwindsQuery,
  UnwindsQueryVariables,
} from "./types";
import { LINKS, MarketDetails } from "./constants";
import { BigNumberish } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import {
  formatUnixTimestampToDate,
  toPercentUnit,
  toScientificNumber,
} from "./common/utils/index";
import { OverlaySDK } from "./sdk";
import { createPublicClient, createWalletClient, http } from "viem";
import { arbitrumSepolia, mainnet } from "viem/chains";

const rpcProvider = createPublicClient({
  chain: arbitrumSepolia,
  transport: http(),
});

const web3Provider = window.ethereum;

// Get the address
async function getWalletAddress() {
  const address = await sdk.core.getWeb3Address();
  return address;
}

const sdk = new OverlaySDK({
  chainId: 421614,
  rpcProvider,
  web3Provider,
});

export const getMarketNames = async (marketAddress: string) => {
  try {
    const response = await axios.get(`${LINKS.MARKET_PRICES_API}/markets`);
    const markets = (await axios.get(`${LINKS.MARKET_PRICES_API}/markets`))
      .data as {
      address: string;
      name?: string;
    }[];
    const market = markets.find(({ address }) => address === marketAddress);
    return market?.name;
  } catch (error) {
    console.error("Error fetching market names", error);
    return undefined;
  }
};

export const getCurrencySymbol = async (marketAddress: string) => {
  try {
    const markets = (await axios.get(`${LINKS.MARKET_PRICES_API}/markets`))
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

const formatBigNumber = (
  bignumber: BigNumberish,
  decimals: number = 18,
  digits: number = 4,
  returnNumberType: boolean = false
): number | string | undefined => {
  if (bignumber !== undefined) {
    const formatted: string = formatUnits(bignumber, decimals);
    const formatWithDigits: string =
      Number.parseFloat(formatted).toFixed(digits);
    return returnNumberType ? Number(formatWithDigits) : formatWithDigits;
  } else {
    return undefined;
  }
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
  url: string;
  account: string;
  first?: number;
  skip?: number;
};

type OpenPosition = NonNullable<
  NonNullable<OpenPositionsQuery["account"]>["positions"]
>[number];

export const getOpenPositions = async ({
  url,
  account,
  first,
}: GetOpenPositionsOptions): Promise<OpenPosition[]> => {
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
};

export const transformOpenPositions = async (
  openPositions: OpenPosition[]
): Promise<TransformedOpen[]> => {
  const transformedOpens: TransformedOpen[] = [];
  for (const open of openPositions) {
    const positionId = open.id.substring(2).split("-")[0];
    const walletAddress = await getWalletAddress();
    const marketId = open.market.id.substring(2);
    const entryPrice = open.entryPrice;
    const isLong = open.isLong;
    const leverage = open.leverage;
    console.log("isLong: ", isLong);
    console.log("leverage: ", leverage);
    console.log("entryPrice: ", entryPrice);
    console.log("positinoId: ", positionId);
    // console.log("marketId: ", marketId);
    console.log("walletAddress: ", walletAddress);
    const positionValue = await sdk.state.getValue(
      "0x2878837ea173e8bd40db7cee360b15c1c27deb5a",
      `0x${marketId}`,
      walletAddress,
      BigInt(`0x${positionId}`)
    );
    const currentOi = await sdk.state.getCurrentOi(
      "0x2878837ea173e8bd40db7cee360b15c1c27deb5a",
      `0x${marketId}`,
      walletAddress,
      BigInt(`0x${positionId}`)
    );
    const liquidatePrice = await sdk.state.getLiquidatePrice(
      "0x2878837ea173e8bd40db7cee360b15c1c27deb5a",
      `0x${marketId}`,
      walletAddress,
      BigInt(`0x${positionId}`)
    );
    console.log("liquidatePrice: ", liquidatePrice);
    console.log("positionValue: ", positionValue);
    console.log("currentOi: ", currentOi);
    const marketMid = await sdk.state.getMidPrice(
      "0x2878837ea173e8bd40db7cee360b15c1c27deb5a",
      `0x${marketId}`
    );
    console.log("marketMid tha real one: ", marketMid);
    const parsedLiquidatePrice = formatBigNumber(liquidatePrice, Number(18));
    const marketName = await getMarketNames(open.id.split("-")[0]);
    const priceCurrency = MarketDetails[open.id.split("-")[0]]?.currency;
    const parsedEntryPrice = formatBigNumber(open.entryPrice, Number(18));
    console.log("parcedLiquidatePrice: ", parsedLiquidatePrice);
    transformedOpens.push({
      marketName: marketName,
      positionSide: open.leverage + "x " + (open.isLong ? "Long" : "Short"),
      entryPrice: `${priceCurrency ? priceCurrency : ""}${
        parsedEntryPrice
          ? priceCurrency === "%"
            ? toPercentUnit(parsedEntryPrice)
            : toScientificNumber(parsedEntryPrice)
          : "-"
      }`,
      liquidatePrice: `${priceCurrency ? priceCurrency : ""}${
        parsedLiquidatePrice
          ? priceCurrency === "%"
            ? toPercentUnit(parsedLiquidatePrice)
            : toScientificNumber(parsedLiquidatePrice)
          : "-"
      }`,
      parsedCreatedTimestamp: formatUnixTimestampToDate(
        open.createdAtTimestamp
      ),
    });
  }
  return transformedOpens;
};

export type GetUnwindPositionsOptions = {
  url: string;
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
  url,
  account,
  first,
}: GetUnwindPositionsOptions): Promise<Unwind[]> => {
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
  unwindPositions: Unwind[]
): Promise<TransformedUnwind[]> => {
  const transformedUnwinds: TransformedUnwind[] = [];
  for (const unwind of unwindPositions) {
    const marketName = await getMarketNames(unwind.id.split("-")[0]);
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
