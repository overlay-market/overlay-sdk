# Overlay SDK Test Suite

Comprehensive testing suite for the Overlay Protocol SDK, covering unit tests, integration tests, and fork-based testing.

## 📋 Table of Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Environment Setup](#environment-setup)
- [Running Tests](#running-tests)
- [Test Architecture](#test-architecture)
- [Fork Testing](#fork-testing)
- [Fixture Management](#fixture-management)
- [Writing Tests](#writing-tests)
- [Troubleshooting](#troubleshooting)

## 🎯 Overview

The test suite is organized into three layers:

1. **Unit Tests** - Fast, isolated tests for individual modules and utilities
2. **Integration Tests** - Tests using live subgraph data with optional fixtures
3. **Fork Harness** - Optional smoke tests on a forked BSC mainnet/testnet

### Test Coverage

- **Common Utilities**: Wei conversions, formatters, error handling, helpers
- **Core Module**: Transaction handling, providers, gas estimation
- **Markets Module**: Market contracts, build/unwind operations, validation
- **Trade Module**: Price calculations, OI balance, funding rates
- **State Module**: Position state queries, liquidation prices
- **OVL Token**: Balance, transfer, approval operations
- **Shiva Router**: Multi-market operations, on-behalf-of transactions
- **Subgraph**: Query pagination, router injection, position data
- **Services**: Market details API integration

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run with coverage (already included by default)
pnpm test

# Run only unit tests (fast, no RPC required)
pnpm test:unit

# Run only integration tests (requires RPC)
pnpm test:integration
```

## ⚙️ Environment Setup

### Required Environment Variables

Create a `.env.test` file in the package root (see `.env.test.example`):

```bash
# BSC Mainnet RPC URL (required for live RPC and fork tests)
BSC_MAINNET_RPC_URL=https://bsc-mainnet.g.alchemy.com/v2/your-api-key

# Optional: pin to a deterministic block height
# FORK_BLOCK_NUMBER=63917062

# Optional: test account used when fetching live positions (defaults to zero address)
SUBGRAPH_TEST_ACCOUNT=0xYourTestAccountWithPositions

# Optional: Use cached fixtures instead of live API calls
USE_FIXTURES=1
```

### Obtaining RPC URLs

Fork tests require a BSC Mainnet RPC endpoint. Options:

- **Alchemy**: https://alchemy.com (Recommended)
- **Infura**: https://infura.io
- **QuickNode**: https://quicknode.com
- **Public RPC**: https://bsc-dataseed.binance.org (Rate limited)

## 🧪 Running Tests

### Test Commands

```bash
# All tests with coverage
pnpm test

# Watch mode (auto-rerun on changes)
pnpm test:watch

# Unit tests only (no RPC required)
pnpm test:unit

# Integration tests only (requires RPC)
pnpm test:integration

# Specific test file
pnpm vitest run test/common/utils/wei.test.ts

# Tests matching pattern (by name)
pnpm vitest run -t "formatWei"

# Watch specific file
pnpm vitest test/common/utils/wei.test.ts
```

### Test Modes

#### Unit Tests (Default)
- **Fast**: ~5-10 seconds total
- **No external dependencies**: No RPC, no subgraph
- **Always runnable**: Works in CI/CD without secrets
- **Location**: `test/{common,core,markets,services,trade,ovl,shiva}/`

#### Integration Tests
- **Moderate speed**: ~30-60 seconds
- **External dependencies**: Subgraph, Markets API, BSC mainnet RPC
- **Live data**: Runs against production services (falls back to fixtures when available)
- **Location**: `test/integration/{subgraph,sdk}.integration.test.ts`

#### Fork Harness
- **Slower**: ~2-4 minutes
- **Requires RPC**: BSC Mainnet RPC URL (block pin optional)
- **Scope**: Local Anvil fork smoke test for client wiring
- **Location**: `test/integration/anvil.integration.test.ts`

### Conditional Test Execution

Tests automatically skip when requirements aren't met:

```typescript
// Integration test skips if no subgraph URL configured
describe.skipIf(!subgraphUrl)('subgraph live integration', () => {
  // ...
});

// Fork test skips if no RPC URL is configured
describe.skipIf(!hasForkConfig)('anvil fork integration', () => {
  // ...
});
```

## 🏗️ Test Architecture

### Directory Structure

```
test/
├── README.md                          # This file
├── setup.ts                           # Global test setup (env loading, timezone)
├── vitest.config.mts                  # Vitest configuration
│
├── common/                            # Unit tests for common utilities
│   ├── constants.test.ts              # Chain constants, supported chains
│   ├── class-primitives.test.ts       # Base classes (Cacheable, Module)
│   └── utils/                         # Utility function tests
│       ├── wei.test.ts                # Wei conversions, funding rates
│       ├── sdk-error.test.ts          # Error handling, invariants
│       ├── formatters.test.ts         # Number/price formatting
│       ├── helpers.test.ts            # General helpers
│       └── toScientificNumber.test.ts # Scientific notation
│
├── core/                              # Core SDK functionality
│   └── core.test.ts                   # Provider setup, transactions, gas
│
├── markets/                           # Market operations
│   └── market.test.ts                 # Build, unwind, validation
│
├── services/                          # External API services
│   └── marketsDetails.test.ts         # Market metadata API
│
├── subgraph.test.ts                   # Subgraph query helpers
│
├── utils/                             # Test utilities
│   ├── anvil.ts                       # Anvil fork management
│   ├── anvil-helpers.ts               # Anvil state helpers (balance setup)
│   └── fixtures.ts                    # Fixture loading helper
│
├── fixtures/                          # Cached test data
│   ├── markets-details.bsc.json       # Market metadata from API
│   ├── subgraph-active-markets.bsc.json
│   ├── subgraph-open-positions.bsc.json
│   └── subgraph-last-block.bsc.json
│
└── integration/                       # Integration & E2E tests
    ├── subgraph.integration.test.ts   # Live subgraph queries
    ├── anvil.integration.test.ts      # Anvil fork setup validation
    └── sdk.integration.test.ts        # SDK read-only flows against live RPC
```

### Test Patterns

#### 1. Unit Test Pattern
```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('ModuleName', () => {
  beforeEach(() => {
    // Reset mocks
    vi.clearAllMocks();
  });

  it('does something specific with clear expected behavior', () => {
    // Arrange: Set up test data
    const input = '1000000000000000000'; // 1 OVL in wei

    // Act: Execute function
    const result = formatWeiToParsedNumber(input);

    // Assert: Verify behavior
    expect(result).toBeCloseTo(1.0);
  });
});
```

#### 2. Integration Test Pattern
```typescript
describe.skipIf(!hasRequiredConfig)('feature integration', () => {
  it('works with live services', async () => {
    // Try live service first
    const data = await fetchLiveData().catch(() => undefined);

    // Fall back to fixtures if unavailable
    const result = data ?? loadFixture('cached-data.json');

    // Validate structure regardless of source
    expect(result).toBeDefined();
    expect(result.field).toMatchSchema();
  }, 30_000); // 30 second timeout for network calls
});
```

#### 3. Fork Test Pattern

_The default suite keeps fork tests read-only. Use this pattern if you need to extend coverage with transactional flows._
```typescript
describe.skipIf(!hasForkConfig)('SDK on forked network', () => {
  let controller: AnvilController;
  let sdk: OverlaySDK;

  beforeAll(async () => {
    // Start forked network
    controller = await startAnvilFork({
      chainId: CHAINS.BscMainnet,
      forkBlockNumber: BigInt(process.env.FORK_BLOCK_NUMBER!),
    });

    // Initialize SDK with fork
    sdk = new OverlaySDK({
      chainId: CHAINS.BscMainnet,
      rpcProvider: controller.clients.publicClient,
      web3Provider: controller.clients.walletClient,
    });
  }, 120_000);

  afterAll(async () => {
    await controller.stop();
  });

  it('executes real transaction on fork', async () => {
    // Full E2E test with real transaction
    const result = await sdk.market.build({ /* ... */ });
    expect(result.hash).toMatch(/^0x[a-fA-F0-9]{64}$/);
  }, 240_000);
});
```

## 🍴 Fork Testing

Fork testing uses [Anvil](https://github.com/foundry-rs/foundry/tree/master/crates/anvil) to create a local fork of BSC Mainnet, enabling safe testing of real transactions.

### How It Works

1. **Fork Creation**: Anvil downloads blockchain state at a specific block
2. **Account Impersonation**: Test can impersonate any address (no private keys needed)
3. **State Manipulation**: Set balances, storage, etc. without mining
4. **Transaction Execution**: Send real transactions that modify forked state
5. **Isolation**: Each test run starts fresh from the same block

### Fork Test Capabilities

```typescript
// Set native token (BNB) balance
await setAccountEtherBalance(client, account, parseUnits('100', 18));

// Impersonate any account
await client.request({
  method: 'anvil_impersonateAccount',
  params: [address],
});

// Execute transactions as impersonated account
const hash = await client.request({
  method: 'eth_sendTransaction',
  params: [{ from: address, to: target, data: '0x...' }],
});
```

### Block Pinning

Fork tests pin to a specific block for determinism:

```bash
# .env.test
FORK_BLOCK_NUMBER=63917062
```

**Why pin blocks?**
- **Determinism**: Same input = same output
- **Reproducibility**: Tests pass consistently
- **Debugging**: Can replay exact chain state
- **CI/CD**: No flaky tests from chain state changes

**When to update block number:**
- Contract deployments change
- Market conditions need updating
- Position data becomes stale

## 📦 Fixture Management

Fixtures cache external API responses for faster, more reliable tests.

### Using Fixtures

```typescript
// Enable fixture mode
USE_FIXTURES=1 pnpm test:integration
```

### Refreshing Fixtures

When APIs change or data becomes stale:

```bash
# Refresh all fixtures from live APIs
pnpm fixtures
```

This script (`scripts/refresh-fixtures.ts`):
1. Fetches fresh data from Markets API
2. Queries latest subgraph data
3. Saves to `test/fixtures/*.json`
4. Uses the account supplied via `SUBGRAPH_TEST_ACCOUNT` (required when refreshing fixtures)

### Available Fixtures

| Fixture | Source | Contains |
|---------|--------|----------|
| `markets-details.bsc.json` | Markets API | Market metadata, logos, chains |
| `subgraph-active-markets.bsc.json` | Subgraph | Active markets with parameters |
| `subgraph-open-positions.bsc.json` | Subgraph | Open positions for test account |
| `subgraph-last-block.bsc.json` | Subgraph | Latest indexed block number |

### Creating New Fixtures

```typescript
// 1. Add fixture to refresh script
const newData = await fetchFromSource();
await writeFile(
  path.join(fixturesDir, 'new-fixture.bsc.json'),
  JSON.stringify(newData, null, 2)
);

// 2. Add loader to test
const fixtureData = loadJSONFixture<DataType>('new-fixture.bsc.json');

// 3. Use with fallback
const data = await liveSource().catch(() => fixtureData);
```

## ✍️ Writing Tests

### Best Practices

#### 1. **Descriptive Test Names**
```typescript
// ❌ Bad: Vague, doesn't explain what's being tested
it('works correctly', () => {});

// ✅ Good: Specific, explains input and expected output
it('converts 1 wei (10^18) to decimal 1.0 with 4 decimal places', () => {});
```

#### 2. **Arrange-Act-Assert Pattern**
```typescript
it('calculates funding rate from per-second to daily percentage', () => {
  // Arrange: Set up test data with clear constants
  const RATE_PER_SECOND = 1_000_000_000_000_000n; // 0.001 per second
  const DECIMALS = 18;
  const PRECISION = 4;

  // Act: Execute the function under test
  const dailyRate = formatFundingRateToDaily(RATE_PER_SECOND, DECIMALS, PRECISION);

  // Assert: Verify expected behavior with explanation
  // 0.001/sec * 86400sec/day = 8640% daily
  expect(dailyRate).toBe('8640.0000');
});
```

#### 3. **Test Edge Cases**
```typescript
describe('parseValue', () => {
  it('handles normal bigint values', () => {
    expect(parseValue(100n)).toBe(100n);
  });

  it('handles zero value', () => {
    expect(parseValue(0n)).toBe(0n);
  });

  it('handles maximum safe integer', () => {
    const max = (2n ** 256n) - 1n;
    expect(parseValue(max)).toBe(max);
  });

  it('throws on invalid string format', () => {
    expect(() => parseValue('invalid')).toThrow('Invalid number format');
  });
});
```

#### 4. **Use Context Blocks**
```typescript
describe('Market unwind operations', () => {
  describe('when position was created directly on market contract', () => {
    it('unwinds through market contract', () => {
      // Router is zero address = no router used
      mockPositionDetails({ router: { id: zeroAddress } });
      // ... test direct unwind
    });
  });

  describe('when position was created through Shiva router', () => {
    it('unwinds through Shiva router', () => {
      // Router is Shiva address = use router
      mockPositionDetails({ router: { id: SHIVA_ADDRESS } });
      // ... test router unwind
    });
  });
});
```

#### 5. **Document Complex Logic**
```typescript
it('calculates max collateral including fees for given balance', async () => {
  // BSC Mainnet trading fee is 0.75% (75 basis points)
  // To account for this, we need to divide user balance by (1 + fee rate)
  // Example: 100 OVL balance → ~99.25 OVL max collateral
  // Because: 99.25 + (99.25 * 0.0075) = 100

  const userBalance = parseUnits('100', 18);
  const feeRate = 75n; // 0.75% in basis points

  const maxCollateral = await sdk.trade.getMaxInputIncludingFees(
    marketAddress,
    userBalance,
    feeRate
  );

  // Verify max collateral is slightly less than balance
  expect(maxCollateral).toBeLessThan(userBalance);
  // Verify (maxCollateral + fees) ≈ userBalance
  const expectedFee = (maxCollateral * feeRate) / 10000n;
  expect(maxCollateral + expectedFee).toBeCloseTo(userBalance);
});
```

### Testing Async Code

```typescript
// ✅ Use async/await
it('fetches market details from API', async () => {
  const details = await getMarketDetailsById('0x123', CHAINS.BscMainnet);
  expect(details).toBeDefined();
});

// ✅ Test promise rejections
it('throws SDKError on unsupported chain', async () => {
  await expect(
    getMarketDetailsById('0x123', 9999 as CHAINS)
  ).rejects.toBeInstanceOf(SDKError);
});

// ✅ Test promise resolution
it('resolves with market data', async () => {
  await expect(
    getActiveMarketsFromSubgraph(CHAINS.BscMainnet)
  ).resolves.toEqual(
    expect.arrayContaining([
      expect.objectContaining({ id: expect.any(String) })
    ])
  );
});
```

### Mocking

```typescript
// ✅ Mock external dependencies
vi.mock('axios', () => ({
  default: {
    get: vi.fn(),
  },
}));

// ✅ Mock contracts
const mockMarketContract = {
  read: {
    params: vi.fn().mockResolvedValue(42n),
    isShutdown: vi.fn().mockResolvedValue(false),
  },
  write: {
    build: vi.fn().mockResolvedValue('0xhash'),
  },
};

// ✅ Clear mocks between tests
beforeEach(() => {
  vi.clearAllMocks();
});
```

## 🐛 Troubleshooting

### Common Issues

#### Tests Skipping / Not Running

**Symptom**: Integration or fork tests show as "skipped"

**Cause**: Missing required environment variables

**Solution**:
```bash
# Check your .env.test file
cat .env.test

# Ensure required variables are set:
# - BSC_MAINNET_RPC_URL (for integration/fork tests)
# - FORK_BLOCK_NUMBER (for fork tests)
```

#### Fork Tests Timeout

**Symptom**: Fork tests fail with timeout errors

**Cause**: Slow RPC provider or network issues

**Solutions**:
1. Use a premium RPC provider (Alchemy, Infura)
2. Increase test timeout:
   ```typescript
   it('test', async () => {
     // ...
   }, 300_000); // 5 minutes
   ```
3. Check your internet connection

#### "Insufficient Funds" in Fork Tests

**Symptom**: Transactions fail with "insufficient funds for gas"

**Cause**: Test account has no ETH on the fork

**Solution**: Use helper to set balance:
```typescript
await setAccountEtherBalance(
  publicClient,
  testAccount,
  parseUnits('100', 18) // Give 100 BNB
);
```

#### Fixture Data Stale

**Symptom**: Tests fail because fixture data doesn't match current state

**Solution**: Refresh fixtures:
```bash
pnpm fixtures
```

#### Subgraph Queries Failing

**Symptom**: Integration tests fail with GraphQL errors

**Solutions**:
1. Enable fixture mode: `USE_FIXTURES=1 pnpm test:integration`
2. Check subgraph status: https://thegraph.com/hosted-service
3. Verify `NETWORKS[chainId].SUBGRAPH_URL` in `src/constants.ts`

#### Coverage Not Generated

**Symptom**: `pnpm test --coverage` doesn't create coverage report

**Solution**:
```bash
# Ensure coverage dependency is installed
pnpm install -D @vitest/coverage-v8

# Run with explicit coverage flag
pnpm test -- --coverage
```

### Debug Mode

Enable verbose logging:

```bash
# Run with verbose reporter
pnpm vitest run test/markets/market.test.ts --reporter=verbose

# Run with UI mode for interactive debugging
pnpm test:ui

# Run single test file in watch mode
pnpm vitest test/markets/market.test.ts
```

### Getting Help

1. **Check test output**: Error messages usually indicate the issue
2. **Read test file**: Comments explain what's being tested
3. **Review this README**: Most issues are covered here
4. **Check SDK documentation**: Understanding SDK behavior helps debug tests
5. **Ask the team**: Create an issue or discussion on GitHub

## 📊 Coverage Goals

Current coverage targets:

- **Lines**: 80%
- **Functions**: 80%
- **Branches**: 75%
- **Statements**: 80%

View coverage report:

```bash
# Generate coverage
pnpm test --coverage

# Open HTML report
open coverage/index.html
```

## 🔄 Continuous Integration

Tests run automatically on:
- Pull requests
- Pushes to main
- Scheduled nightly runs (with fork tests)

CI configuration considerations:
- Unit tests: Always run (fast, no external deps)
- Integration tests: Run with fixtures enabled
- Fork tests: Run nightly only (slow, requires secrets)

## 📚 Additional Resources

- [Vitest Documentation](https://vitest.dev/)
- [Viem Testing Utils](https://viem.sh/docs/testing)
- [Anvil Documentation](https://book.getfoundry.sh/anvil/)
- [Overlay Protocol Docs](https://docs.overlay.market/)

## 🤝 Contributing

When adding new tests:

1. ✅ Follow existing patterns and structure
2. ✅ Add descriptive test names and comments
3. ✅ Test both success and error cases
4. ✅ Update this README if adding new patterns
5. ✅ Ensure tests pass in CI
6. ✅ Maintain or improve coverage

---

**Last Updated**: 2025-01-10
**SDK Version**: 0.1.27-alpha
**Supported Chains**: BSC Mainnet (56), BSC Testnet (97)
