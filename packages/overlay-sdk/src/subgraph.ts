import axios from "axios";
import { request, RequestExtendedOptions } from "graphql-request";
import {
  UnwindPositionsQuery as UnwindPositionsQueryDocument,
  UnwindPositionsNoRouterQuery as UnwindPositionsNoRouterQueryDocument,
  ActiveMarketsQuery as ActiveMarketsQueryDocument,
  LiquidatedPositionsQuery as LiquidatedPositionsQueryDocument,
  LiquidatedPositionsNoRouterQuery as LiquidatedPositionsNoRouterQueryDocument,
  OpenPositionsQuery as OpenPositionsQueryDocument,
  OpenPositionsNoRouterQuery as OpenPositionsNoRouterQueryDocument,
  NumberOfPositionsQuery as NumberOfPositionsQueryDocument,
  PositionQuery as PositionQueryDocument,
  PositionNoRouterQuery as PositionNoRouterQueryDocument,
  TotalSupplyHistory as TotalSupplyHistoryDocument,
  LastBlockQuery as LastBlockQueryDocument
} from "./queries";
import {
  OpenPositionsQuery,
  OpenPositionsQueryVariables,
  OpenPositionsNoRouterQuery,
  OpenPositionsNoRouterQueryVariables,
  UnwindsQuery,
  UnwindsQueryVariables,
  UnwindsNoRouterQuery,
  UnwindsNoRouterQueryVariables,
  ActiveMarketsQuery,
  LiquidatedPositionsQuery,
  LiquidatedPositionsQueryVariables,
  LiquidatedPositionsNoRouterQuery,
  LiquidatedPositionsNoRouterQueryVariables,
  NumberOfPositionsQuery,
  NumberOfPositionsQueryVariables,
  QueryPositionQuery,
  QueryPositionQueryVariables,
  TotalSupplyHistoryQuery,
  TotalSupplyHistoryQueryVariables,
  LastBlockQueryQuery,
  QueryPositionNoRouterQuery,
  QueryPositionNoRouterQueryVariables
} from "./types";
import { NETWORKS } from "./constants";
import { CHAINS, invariant } from "./common";
import { zeroAddress } from "viem";

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
  noRouter?: boolean;
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
  const hasRouter = NETWORKS[chainId].hasShiva;
  
  if (hasRouter) {
    return requestAllWithStep<
    OpenPositionsQuery,
    OpenPosition,
    OpenPositionsQueryVariables
    >({
      url,
      document: OpenPositionsQueryDocument,
      step: first ?? 1000,
      extractArray: (result) => result?.account?.positions.map((position) => ({...position, router: position.router || {id: zeroAddress}})) ?? [],
      variables: {
        account,
      },
    });
  }

  return requestAllWithStep<
    OpenPositionsNoRouterQuery,
    OpenPosition,
    OpenPositionsNoRouterQueryVariables
  >({
    url,
    document: OpenPositionsNoRouterQueryDocument,
    step: first ?? 1000,
    extractArray: (result) => result?.account?.positions.map((position) => ({...position, router: {id: zeroAddress}})) ?? [],
    variables: {
      account,
    },
  });
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

export const getUnwindPositions = async ({
  chainId,
  account,
  first,
}: GetUnwindPositionsOptions): Promise<Unwind[]> => {
  invariant(chainId in CHAINS, "Unsupported chainId");
  const url = NETWORKS[chainId].SUBGRAPH_URL;
  const hasRouter = NETWORKS[chainId].hasShiva;

  if (hasRouter) {
    return requestAllWithStep<UnwindsQuery, Unwind, UnwindsQueryVariables>({
      url,
      document: UnwindPositionsQueryDocument,
      step: first ?? 1000,
      extractArray: (result) => result?.account?.unwinds.map((unwind) => ({...unwind, position: {...unwind.position, router: unwind.position.router || {id: zeroAddress}}})) ?? [],
      variables: {
        account,
      },
    });
  }

  return requestAllWithStep<UnwindsNoRouterQuery, Unwind, UnwindsNoRouterQueryVariables>({
    url,
    document: UnwindPositionsNoRouterQueryDocument,
    step: first ?? 1000,
    extractArray: (result) => result?.account?.unwinds.map((unwind) => ({...unwind, position: {...unwind.position, router: {id: zeroAddress}}})) ?? [],
    variables: {
      account,
    },
  });
};

export type GetliquidatedPositionsOptions = {
  chainId: CHAINS;
  account: string;
  first?: number;
  skip?: number;
};

type Liquidated = NonNullable<
  NonNullable<LiquidatedPositionsQuery["account"]>["liquidates"]
>[number];

export const getLiquidatedPositions = async ({
  chainId,
  account,
  first,
}: GetliquidatedPositionsOptions): Promise<Liquidated[]> => {
  invariant(chainId in CHAINS, "Unsupported chainId");
  const url = NETWORKS[chainId].SUBGRAPH_URL;
  const hasRouter = NETWORKS[chainId].hasShiva;

  if (hasRouter) {
    return requestAllWithStep<
    LiquidatedPositionsQuery,
    Liquidated,
    LiquidatedPositionsQueryVariables
    >({
      url,
      document: LiquidatedPositionsQueryDocument,
      step: first ?? 1000,
      extractArray: (result) => result?.account?.liquidates.map((liquidate) => ({...liquidate, position: {...liquidate.position, router: liquidate.position.router || {id: zeroAddress}}})) ?? [],
      variables: {
        account,
      },
    });
  }

  return requestAllWithStep<
    LiquidatedPositionsNoRouterQuery,
    Liquidated,
    LiquidatedPositionsNoRouterQueryVariables
  >({
    url,
    document: LiquidatedPositionsNoRouterQueryDocument,
    step: first ?? 1000,
    extractArray: (result) => result?.account?.liquidates.map((liquidate) => ({...liquidate, position: {...liquidate.position, router: {id: zeroAddress}}})) ?? [],
    variables: {
      account,
    },
  });
};

export const getActiveMarketsFromSubgraph = async (chainId: CHAINS) => {
  invariant(chainId in CHAINS, "Unsupported chainId");
  try {
    const data = await request<ActiveMarketsQuery>(
      NETWORKS[chainId].SUBGRAPH_URL,
      ActiveMarketsQueryDocument
    );
    return data.markets;
  } catch (error) {
    console.error("Error fetching active markets data:", error);
    return undefined;
  }
};

type NumberOfPositions = NonNullable<
  NonNullable<NumberOfPositionsQuery["account"]>
>;

export const getNumberOfPositions = async (chainId: CHAINS, account: string) => {
  invariant(chainId in CHAINS, "Unsupported chainId");
  const url = NETWORKS[chainId].SUBGRAPH_URL;
  try {
    const result = await request<NumberOfPositionsQuery, NumberOfPositionsQueryVariables>({
      document: NumberOfPositionsQueryDocument,
      url,
      variables: {
        account,
      },
    });
    return result;
  } catch (error) {
    console.error("Error fetching number of positions data:", error);
    return undefined;
  }
}

type PositionDetails = NonNullable<NonNullable<QueryPositionQuery["account"]>["positions"]>[number]

export const getPositionDetails = async (chainId: CHAINS, account: string, marketPositionId: string): Promise<PositionDetails | undefined> => {
  invariant(chainId in CHAINS, "Unsupported chainId");
  const url = NETWORKS[chainId].SUBGRAPH_URL;
  const hasRouter = NETWORKS[chainId].hasShiva;
  
  if (hasRouter) {
    const result = await request<QueryPositionQuery, QueryPositionQueryVariables>({
      url,
      document: PositionQueryDocument,
      variables: {
        account,
        marketPositionId
      },
    });
    return result?.account?.positions[0] ? {...result.account.positions[0], router: result.account.positions[0].router || {id: zeroAddress}} : undefined;
  }

  const result = await request<QueryPositionNoRouterQuery, QueryPositionNoRouterQueryVariables>({
    url,
    document: PositionNoRouterQueryDocument,
    variables: {
      account,
      marketPositionId
    },
  });
  return result?.account?.positions[0] ? {...result.account.positions[0], router: {id: zeroAddress}} : undefined;
}

export const getTotalSupplyDayHistory = async (chainId: CHAINS) => {
  invariant(chainId in CHAINS, "Unsupported chainId");
  const url = NETWORKS[chainId].SUBGRAPH_URL;
  try {
    const result = await request<TotalSupplyHistoryQuery, TotalSupplyHistoryQueryVariables>({
      document: TotalSupplyHistoryDocument,
      url,
      variables: {
        first: 24 // first 24 hours
      },
    });

    if (result.totalSupplyHourDatas.length < 1) return undefined;

    return result.totalSupplyHourDatas;
  } catch (error) {
    console.error("Error fetching number of positions data:", error);
    return undefined;
  }
}

export const getLastProcessedBlock = async (chainId: CHAINS) => {
  invariant(chainId in CHAINS, "Unsupported chainId");
  const url = NETWORKS[chainId].SUBGRAPH_URL;
  try {
    const result = await request<LastBlockQueryQuery>({
      document: LastBlockQueryDocument,
      url,
    });

    if (!result._meta) return undefined

    return result._meta.block.number;
  } catch (error) {
    console.error("Error fetching block number data:", error);
    return undefined;
  }
}