import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

/**
 * Root directory of the test utilities
 */
const rootDir = path.dirname(fileURLToPath(import.meta.url));

/**
 * Directory containing cached fixture data
 */
const fixturesRoot = path.resolve(rootDir, '../fixtures');

/**
 * Loads a JSON fixture file from the test fixtures directory
 *
 * Fixtures are cached snapshots of external API responses (subgraph, markets API)
 * that enable tests to run without live network dependencies. This improves test
 * reliability and speed, especially in CI/CD environments.
 *
 * The function gracefully handles missing files by returning undefined, allowing
 * tests to implement fallback logic (e.g., try live API, fallback to fixture).
 *
 * @template T - Expected type of the fixture data
 * @param filename - Name of the fixture file in test/fixtures/ (e.g., 'markets-details.bsc.json')
 * @returns Parsed JSON data typed as T, or undefined if file doesn't exist or parsing fails
 *
 * @example
 * ```typescript
 * // Load markets fixture with type safety
 * const markets = loadJSONFixture<{ markets: MarketData[] }>(
 *   'subgraph-active-markets.bsc.json'
 * );
 *
 * // Use with fallback pattern
 * const data = await getLiveData().catch(() => undefined)
 *   ?? loadJSONFixture('cached-data.json')
 *   ?? defaultData;
 * ```
 *
 * @remarks
 * Available fixtures (refreshed with `pnpm fixtures`):
 * - `markets-details.bsc.json` - Market metadata from Markets API
 * - `subgraph-active-markets.bsc.json` - Active markets from subgraph
 * - `subgraph-open-positions.bsc.json` - Open positions for test account
 * - `subgraph-last-block.bsc.json` - Latest indexed block number
 */
export function loadJSONFixture<T = unknown>(filename: string): T | undefined {
  try {
    const filePath = path.join(fixturesRoot, filename);
    const raw = readFileSync(filePath, 'utf-8');
    return JSON.parse(raw) as T;
  } catch {
    // Gracefully handle missing or invalid fixtures
    // Tests should implement fallback logic
    return undefined;
  }
}
