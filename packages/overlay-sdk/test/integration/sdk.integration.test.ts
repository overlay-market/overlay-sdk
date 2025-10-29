import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { Address, createPublicClient, createWalletClient, http, parseUnits } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { OverlaySDK } from '@src/sdk.js';
import { CHAINS, VIEM_CHAINS } from '@src/common/constants.js';

const CHAIN_ID = CHAINS.BscMainnet;
const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000' as const;
const TEST_ACCOUNT = ((process.env.SUBGRAPH_TEST_ACCOUNT ?? ZERO_ADDRESS).toLowerCase()) as Address;
const RPC_REQUIRED = process.env.BSC_MAINNET_RPC_URL ?? process.env.BSC_RPC_URL;
const PINNED_BLOCK =
  process.env.FORK_BLOCK_NUMBER !== undefined
    ? BigInt(process.env.FORK_BLOCK_NUMBER)
    : undefined;
const SHOULD_RUN = Boolean(RPC_REQUIRED);
const MARKET_PREFERRED = 'btc dominance';

describe.skipIf(!SHOULD_RUN)('OverlaySDK BSC fork integration', () => {
  const cleanupSpies: Array<() => void> = [];
  let publicClient: ReturnType<typeof createPublicClient>;
  let sdk: OverlaySDK;
  let marketAddress: Address;
  let peripheryAddress: Address;
  let marketId: string;
  let forkAccount: Address;
  let shivaAddress: Address;

  beforeAll(async () => {
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    cleanupSpies.push(() => logSpy.mockRestore());
    cleanupSpies.push(() => errorSpy.mockRestore());

    forkAccount = TEST_ACCOUNT;

    const transport = http(RPC_REQUIRED);
    if (PINNED_BLOCK !== undefined) {
      console.warn(
        `FORK_BLOCK_NUMBER=${PINNED_BLOCK.toString()} is set but ignored when running against a live RPC provider.`,
      );
    }

    publicClient = createPublicClient({
      chain: VIEM_CHAINS[CHAIN_ID],
      transport,
      batch: {
        multicall: true,
      },
    });

    const signerAccount = privateKeyToAccount(
      // Deterministic dummy account. Never funded on mainnet.
      '0x59c6995e998f97a5a004497e5d0af478d3e0d1c57b4e8c772b82dce4b5d9f0d6',
    );

    const walletClient = createWalletClient({
      account: signerAccount,
      chain: publicClient.chain,
      transport,
    });

    sdk = new OverlaySDK({
      chainId: CHAIN_ID,
      rpcProvider: publicClient,
      web3Provider: walletClient,
      useShiva: true,
    });

    const activeMarkets = await sdk.markets.getActiveMarkets(true);
    expect(activeMarkets.length).toBeGreaterThan(0);

    const sortedMarkets = activeMarkets
      .filter((market): market is NonNullable<typeof market> => Boolean(market))
      .sort((a, b) => a.marketName.localeCompare(b.marketName));

    const preferred = sortedMarkets.find(
      (market) => market.marketName.toLowerCase() === MARKET_PREFERRED,
    );

    const selectedMarket = preferred ?? sortedMarkets[0];

    expect(selectedMarket, 'No markets returned from getActiveMarkets').toBeDefined();

    marketAddress = selectedMarket.marketAddress as Address | undefined;
    marketId = selectedMarket.marketId ?? selectedMarket.marketAddress ?? selectedMarket.id;

    if (!marketId) {
      throw new Error('Unable to determine market identifier from active markets response');
    }

    if (!marketAddress) {
      const details = await sdk.markets.getMarketDetails(marketId, true);
      marketAddress = details.marketAddress as Address;
    }

    shivaAddress = sdk.shiva.getShivaAddress();
    peripheryAddress = await sdk.market.periphery(marketAddress);
  }, 120_000);

  afterAll(async () => {
    cleanupSpies.forEach((restore) => restore());
  });

  it(
    'executes read-only flows across core modules',
    async () => {
      // Core
      const factories = sdk.core.getFactories();
      expect(factories.length).toBeGreaterThan(0);

      // Verify each factory has a corresponding periphery
      factories.forEach(factory => {
        const peripheryForFactory = sdk.core.getPeripheryForFactory(factory);
        expect(peripheryForFactory).toBeDefined();
      });
 
      const feeData = await sdk.core.getFeeData();
      expect(feeData.maxFeePerGas).toBeGreaterThan(0n);

      const lastBlock = await sdk.core.getLastSubgraphProcessedBlock();
      expect(lastBlock).toBeGreaterThan(0);

      // Markets list + details
      const expandedMarkets = await sdk.markets.getActiveMarkets(true);
      expect(expandedMarkets.some((market) => market.marketId === marketId)).toBe(true);

      const btcDetails = await sdk.markets.getMarketDetails(marketId, true);
      expect(btcDetails.marketName?.toLowerCase()).toContain('btc');

      const transformedMarkets = await sdk.markets.transformMarketsData();
      expect(transformedMarkets.length).toBeGreaterThan(0);

      // Market module
      expect(await sdk.market.isValidMarket(marketAddress)).toBe(true);
      const capLeverage = await sdk.market.getCapLeverage(marketAddress);
      expect(capLeverage).toBeGreaterThan(0n);

      const tradingFeeRate = await sdk.market.getTradingFeeRate(marketAddress);
      expect(tradingFeeRate).toBeGreaterThan(0n);

      const minCollateral = await sdk.market.getMinCollateral(marketAddress);
      expect(minCollateral).toBeGreaterThanOrEqual(0n);
      const shutdown = await sdk.market.getIsShutdown(marketAddress);
      expect(typeof shutdown).toBe('boolean');

      // State module
      const marketState = await sdk.state.getMarketState(peripheryAddress, marketAddress);
      expect(marketState.mid).toBeGreaterThan(0n);

      const collateral = parseUnits('5', 18);
      const leverage = parseUnits('2', 18);
      const isLong = true;

      const oiEstimate = await sdk.state.getOiEstimate(
        peripheryAddress,
        marketAddress,
        collateral,
        leverage,
        isLong,
      );
      expect(oiEstimate).toBeGreaterThan(0n);

      const fractionOfCapOi = await sdk.state.getFractionOfCapOi(
        peripheryAddress,
        marketAddress,
        oiEstimate,
      );
      expect(fractionOfCapOi).toBeGreaterThan(0n);

      const liquidationEstimate = await sdk.state.getLiquidationPriceEstimate(
        peripheryAddress,
        marketAddress,
        collateral,
        leverage,
        isLong,
      );
      expect(typeof liquidationEstimate).toBe('bigint');

      // Trade module
      const funding = await sdk.trade.getFunding(marketId);
      expect(typeof funding).toBe('string');

      const oiBalance = await sdk.trade.getOIBalance(marketId, 4);
      expect(oiBalance.longPercentageOfTotalOi).toBeDefined();

      const marketPrice = (await sdk.trade.getPrice(marketId, collateral, leverage, isLong)) as bigint;
      expect(marketPrice).toBeGreaterThan(0n);

      const priceInfo = await sdk.trade.getPriceInfo(marketId, collateral, leverage, 50, isLong, 6);
      expect(priceInfo.price).toBeDefined();

      const tradeState = await sdk.trade.getTradeState(
        marketId,
        collateral,
        leverage,
        50,
        isLong,
        forkAccount,
      );
      expect(tradeState.tradeState).toBeDefined();

      const bidAsk = await sdk.trade.getBidAndAsk(marketId, 6);
      expect(bidAsk.bid).toBeDefined();
      expect(bidAsk.ask).toBeDefined();

      // Market helper simulations
      const buildProps = {
        marketAddress,
        collateral,
        leverage,
        isLong,
        priceLimit: marketPrice,
      };

      const populateBuild = await sdk.market.populateBuild(buildProps);
      const buildTarget = (populateBuild.to ?? '').toLowerCase();
      expect([marketAddress.toLowerCase(), shivaAddress.toLowerCase()]).toContain(buildTarget);

      // Positions & account tables
      const openPositions = await sdk.openPositions.transformOpenPositions(
        1,
        5,
        undefined,
        forkAccount,
        true,
      );
      expect(openPositions.total).toBeGreaterThanOrEqual(0);

      const unwindPositions = await sdk.unwindPositions.transformUnwindPositions(
        1,
        5,
        undefined,
        forkAccount,
        true,
      );
      expect(unwindPositions.total).toBeGreaterThanOrEqual(0);

      const liquidatedPositions = await sdk.liquidatedPositions.transformLiquidatedPositions(
        1,
        5,
        undefined,
        forkAccount,
        true,
      );
      expect(liquidatedPositions.total).toBeGreaterThanOrEqual(0);

      const overview = await sdk.accountDetails.getOverview('1D', forkAccount, true);
      expect(overview.numberOfOpenPositions).toBeGreaterThanOrEqual(0);

      // OVL token module
      const ovlBalance = await sdk.ovl.balance(forkAccount, 6);
      expect(typeof ovlBalance === 'string' || typeof ovlBalance === 'number' || typeof ovlBalance === 'bigint').toBe(
        true,
      );

      const ovlAllowance = await sdk.ovl.allowance({
        account: forkAccount,
        to: peripheryAddress,
      });
      expect(typeof ovlAllowance).toBe('bigint');

      const ovlPrice = await sdk.ovl.price(4);
      expect(ovlPrice).toBeGreaterThan(0);

      const ovlSupply = await sdk.ovl.totalSupply();
      expect(ovlSupply).toBeGreaterThan(0n);
    },
    150_000,
  );
});
