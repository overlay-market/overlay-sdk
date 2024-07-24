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
import axios from "axios";
import { BigNumberish } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import formatUnixTimestampToDate from "./utils/formatUnixTimestampToDate";
import { toPercentUnit, toScientificNumber } from "./utils/toScientificNumber";
// import { Loader, FlexRow } from "./components";
// import { TEXT } from "./constants";
// import { useMemo, JSX } from "react"; // Import the JSX namespace
// import { toPercentUnit, toScientificNumber } from "./utils";
// import { ProfitLossCell } from "./cells";

export const getMarketNames = async (marketAddress: string) => {
  try {
    const markets = (await axios.get(`${LINKS.MARKET_PRICES_API}/markets`))
      .data as {
      address: string;
      name?: string;
    }[];
    console.log("markets:", markets);
    const market = markets.find(({ address }) => address === marketAddress);
    console.log("market:", market);
    return market?.name;
  } catch (error) {
    console.error("Error fetching market names", error);
    return undefined;
  }
};

//export a function that get the currency symbol from the marketAddress
export const getCurrencySymbol = async (marketAddress: string) => {
  try {
    const markets = (await axios.get(`${LINKS.MARKET_PRICES_API}/markets`))
      .data as {
      address: string;
      name: string;
    }[];
    console.log("markets:", markets);
    const market = markets.find(({ address }) => address === marketAddress);
    console.log("market:", market);
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
  // eslint-disable-next-line no-constant-condition
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
    // break if we don't fetch more than step
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
  skip,
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

const formatValue = (value: any): any => {
  // Implement your formatting logic here
  // For example, converting a number to a fixed decimal string
  if (typeof value === "number") {
    // return value as a date string
    return new Date(value).toISOString();
  }
  return value;
};
