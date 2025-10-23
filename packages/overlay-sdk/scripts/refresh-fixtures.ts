import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { CHAINS } from '../src/common/constants.js';
import { NETWORKS } from '../src/constants.js';

const chainId = CHAINS.BscMainnet;
const fixturesDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '../test/fixtures',
);

const subgraphUrl = NETWORKS[chainId].SUBGRAPH_URL;
const marketDetailsUrl = NETWORKS[chainId].MARKETS_DETAILS_API;

const testAccountEnv = process.env.SUBGRAPH_TEST_ACCOUNT;
if (!testAccountEnv) {
  console.error('SUBGRAPH_TEST_ACCOUNT environment variable is required to refresh fixtures.');
  process.exit(1);
}

const testAccount = testAccountEnv.toLowerCase();

const headers = {
  'Content-Type': 'application/json',
};

const activeMarketsQuery = /* GraphQL */ `
  query activeMarkets {
    markets(where: { isShutdown: false }) {
      id
      feedAddress
      factory {
        id
      }
      k
      lmbda
      delta
      capPayoff
      capNotional
      capLeverage
      circuitBreakerWindow
      circuitBreakerMintTarget
      maintenanceMarginFraction
      maintenanceMarginBurnRate
      liquidationFeeRate
      tradingFeeRate
      minCollateral
      priceDriftUpperLimit
      averageBlockTime
      isShutdown
    }
  }
`;

const openPositionsQuery = /* GraphQL */ `
  query openPositions($account: ID!, $first: Int, $skip: Int) {
    account(id: $account) {
      positions(
        where: {
          isLiquidated: false
          fractionUnwound_lt: "1000000000000000000"
        }
        orderBy: createdAtTimestamp
        orderDirection: desc
        first: $first
        skip: $skip
      ) {
        fractionUnwound
        id
        createdAtTimestamp
        currentOi
        entryPrice
        initialCollateral
        isLiquidated
        isLong
        leverage
        numberOfUniwnds
        positionId
        market {
          feedAddress
          id
          isShutdown
        }
        router {
          id
        }
      }
    }
  }
`;

async function fetchGraphQL<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  const response = await fetch(subgraphUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
  });
  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.status}`);
  }
  const json = await response.json();
  if (json.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`);
  }
  return json.data as T;
}

async function fetchMarketDetails<T>(chain: number): Promise<T> {
  const response = await fetch(`${marketDetailsUrl}/chain/${chain}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch market details: ${response.status}`);
  }
  return response.json() as Promise<T>;
}

async function fetchOpenPositions(account: string) {
  const pageSize = 1000;
  const positions: unknown[] = [];
  let skip = 0;
  while (true) {
    const data = await fetchGraphQL<{
      account?: { positions?: unknown[] };
    }>(openPositionsQuery, {
      account: account.toLowerCase(),
      first: pageSize,
      skip,
    });
    const current =
      data?.account?.positions?.map((position) => ({
        ...position,
        account,
      })) ?? [];
    positions.push(...current);
    if (current.length < pageSize) break;
    skip += pageSize;
  }
  return positions;
}

async function refresh() {
  await mkdir(fixturesDir, { recursive: true });

  const [marketsDetails, activeMarkets, openPositions, lastBlock] = await Promise.all([
    fetchMarketDetails(chainId),
    fetchGraphQL(activeMarketsQuery),
    fetchOpenPositions(testAccount),
    fetchGraphQL<{ _meta?: { block?: { number?: number } } }>(
      `
        query LastBlock {
          _meta {
            block {
              number
            }
          }
        }
      `,
    ).then((data) => data?._meta?.block?.number ?? null),
  ]);

  const tasks = [
    ['markets-details.bsc.json', marketsDetails],
    ['subgraph-active-markets.bsc.json', activeMarkets],
    [
      'subgraph-open-positions.bsc.json',
      {
        account: testAccount,
        positions: openPositions,
      },
    ],
    ['subgraph-last-block.bsc.json', { block: lastBlock }],
  ].map(async ([filename, payload]) => {
    const filePath = path.join(fixturesDir, filename);
    await writeFile(filePath, JSON.stringify(payload, null, 2));
    console.log(`Saved ${filePath}`);
  });

  await Promise.all(tasks);
}

refresh().catch((error) => {
  console.error(error);
  process.exit(1);
});
