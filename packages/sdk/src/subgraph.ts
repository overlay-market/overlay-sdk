import { request, RequestExtendedOptions } from 'graphql-request';
import { OpenPositionsQuery as OpenPositionsQueryDocument, UnwindPositionsQuery as UnwindPositionsQueryDocument } from './queries'; 
import { OpenPositionsQuery, OpenPositionsQueryVariables, UnwindsQuery, UnwindsQueryVariables } from './types';

export type SubgraphUrl =
  | string
  | {
      url: string;
      requestHeaders?: RequestExtendedOptions['requestHeaders'];
    };

const parseSubgraphUrl = (value: SubgraphUrl) => {
  if (typeof value === 'string') return { url: value };
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

type OpenPosition = NonNullable<NonNullable<OpenPositionsQuery['account']>['positions']>[number];

export const getOpenPositions = async ({
  url,
  account,
  first,
}: GetOpenPositionsOptions): Promise<OpenPosition[]> => {
  return requestAllWithStep< OpenPositionsQuery, OpenPosition, OpenPositionsQueryVariables>(
    {
      url,
      document: OpenPositionsQueryDocument,
      step: first ?? 1000,
      extractArray: (result) => result?.account?.positions ?? [],
      variables: {
        account,
      },
    },
  );
};

export type GetUnwindPositionsOptions = {
  url: string;
  account: string;
  first?: number;
  skip?: number;
};

type Unwind = NonNullable<NonNullable<UnwindsQuery['account']>['unwinds']>[number];

export const getUnwindPositions = async ({
    url,
    account,
    first,
    skip,
  }: GetUnwindPositionsOptions): Promise<Unwind[]> => {
    return requestAllWithStep<UnwindsQuery, Unwind, UnwindsQueryVariables>(
      {
        url,
        document: UnwindPositionsQueryDocument,
        step: first ?? 1000,
        extractArray: (result) => result?.account?.unwinds ?? [],
        variables: {
          account,
        },
      },
    );
  };