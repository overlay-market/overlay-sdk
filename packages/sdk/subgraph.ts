import { request } from 'graphql-request';
import { OpenPositionsQuery, UnwindPositionsQuery } from './queries.js'; 
import type { GetOpenPositionsOptions, OpenPosition, SubgraphUrl, GetUnwindPositionsOptions, UnwindPosition } from './types'; 

const parseSubgraphUrl = (value: SubgraphUrl) => {
  if (typeof value === 'string') return { url: value };
  else return value;
};

const requestAllWithStep = async <TResult, TResultEntry, TVariables>({
  url,
  step,
  document,
  variables,
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

export const getOpenPositions = async ({
  url,
  account,
  first,
  skip,
}: GetOpenPositionsOptions): Promise<OpenPosition[]> => {
  return requestAllWithStep<typeof OpenPositionsQuery, OpenPosition, { account: string }>(
    {
      url,
      document: OpenPositionsQuery,
      step: first ?? 1000,
      extractArray: (result) => result?.account?.positions ?? [],
      variables: {
        account,
      },
    },
  );
};

export const getUnwindPositions = async ({
    url,
    account,
    first,
    skip,
  }: GetUnwindPositionsOptions): Promise<UnwindPosition[]> => {
    return requestAllWithStep<typeof UnwindPositionsQuery, UnwindPosition, { account: string }>(
      {
        url,
        document: UnwindPositionsQuery,
        step: first ?? 1000, // Default step size of 1000 if not provided
        extractArray: (result) => result?.account?.unwinds ?? [],
        variables: {
          account,
        },
      },
    );
  };