import { OverlaySDK } from "../../sdk";
import { OpenPositionsQuery } from "../../types";
import {
  formatBigNumber,
  formatUnixTimestampToDate,
  toLowercaseKeys,
} from "../../common/utils";
import { Abi, Address, zeroAddress } from "viem";
import JSBI from "jsbi";
import { TickMath } from "@uniswap/v3-sdk";
import {
  ONE_BN,
  PRICE_CURRENCY_FROM_QUOTE,
  SHIVA_ADDRESS,
} from "../../constants";
import { getMarketsDetailsByChainId } from "../../services/marketsDetails";
import { OverlaySDKModule } from "../../common/class-primitives/sdk-module";
import { OverlaySDKCommonProps } from "../../core/types";
import { getOpenPositions } from "../../subgraph";
import { CHAINS, invariant } from "../../common";
import { paginate } from "../../common/utils/paginate";
import { OverlayV1StateABI } from "../../markets/abis/OverlayV1State";
import { formatPriceWithCurrency } from "../../common/utils/formatPriceWithCurrency";

type OpenPosition = NonNullable<
  NonNullable<OpenPositionsQuery["account"]>["positions"]
>[number];

export type OpenPositionData = {
  marketName: string | undefined;
  positionSide: string | undefined;
  parsedCreatedTimestamp: string | undefined;
  entryPrice: string | undefined;
  liquidatePrice: string | undefined;
  currentPrice: string | undefined;
  size: number | string | undefined;
  unrealizedPnL: string | number | undefined;
  parsedFunding: string | number | undefined;
  marketAddress: Address;
  positionId: number;
  priceCurrency: string;
};

export type PositionData = {
  positionValue: bigint;
  currentOi: bigint;
  liquidatePrice: bigint;
  info: {
    notionalInitial: bigint;
    debtInitial: bigint;
    midTick: number;
    entryTick: number;
    isLong: boolean;
    liquidated: boolean;
    oiShares: bigint;
    fractionRemaining: number;
  };
  cost: bigint;
  tradingFee: bigint;
  marketMid: bigint;
};

export class OverlaySDKOpenPositions extends OverlaySDKModule {
  private sdk: OverlaySDK;
  private openPositionsCache: Record<string, { data: any; lastUpdated: number }> = {};

  constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK) {
    super(props);
    this.sdk = sdk;
  }

  transformOpenPositions = async (
    page = 1, 
    pageSize = 10, 
    marketId?: string, 
    account?: Address,
    refreshData?: boolean
  ): Promise<{ data: OpenPositionData[]; total: number }> => {
    console.log('transformOpenPositions called params', page, pageSize, marketId, account, refreshData);
    let walletClient = account;
    if (!walletClient) {
      invariant(this.sdk.core.web3Provider, "Web3 provider is not set");
      walletClient = account ?? (await this.sdk.core.web3Provider?.requestAddresses())[0] as Address;
    }
    const chainId = this.core.chainId;

    const baseCacheKey = `${walletClient}-${chainId}`;
    const cacheKeyToUse = marketId ? `${baseCacheKey}-${marketId.toLowerCase()}` : baseCacheKey;

    let openPositionsData: OpenPositionData[] = [];

    if (!refreshData && this.openPositionsCache[cacheKeyToUse]) {
      const cachedData = this.openPositionsCache[cacheKeyToUse];
      if (Date.now() - cachedData.lastUpdated < 3 * 60 * 1000) { // 3 minutes
        openPositionsData = cachedData.data;
        // console.log(`Using cached data for key: ${cacheKeyToUse}`);
        return {
          data: paginate(openPositionsData, page, pageSize).data,
          total: openPositionsData.length
        };
      }
      // console.log(`Cache stale for key: ${cacheKeyToUse}, deleting.`);
      delete this.openPositionsCache[cacheKeyToUse];
    }
    
    // console.log(`Fetching fresh data. refreshData: ${refreshData}, cacheKey: ${cacheKeyToUse}`);

    const [allRawOpenDataFromSubgraph, marketDetails] = await Promise.all([
      getOpenPositions({
        chainId: chainId,
        account: walletClient.toLowerCase()
      }),
      getMarketsDetailsByChainId(chainId as CHAINS)
    ]);
    // console.log('Fetched all raw open data from subgraph:', allRawOpenDataFromSubgraph.length, 'items');

    const lowercasedMarketDetails = marketDetails && toLowercaseKeys(marketDetails);
    invariant(lowercasedMarketDetails, "Failed to get market details");

    // Filter raw data if marketId is provided, before heavy processing
    let dataToProcess = allRawOpenDataFromSubgraph; // Default to all if marketId is not provided

    if (marketId) { // marketId is the parameter, e.g., "Cats vs Dogs - Meme War" or "Cats%20vs%20Dogs%20-%20Meme%20War"
      let targetMarketAddress: string | undefined = undefined;
      
      // Iterate through marketDetails to find the address corresponding to the marketId parameter
      // The marketId parameter could match either the 'marketName' or 'marketId' field within the marketDetails object
      for (const [address, detail] of lowercasedMarketDetails.entries()) {
        // detail.marketName (e.g., "Cats vs Dogs - Meme War")
        // detail.marketId (e.g., "Cats%20vs%20Dogs%20-%20Meme%20War" - as per user's example of marketDetails structure)
        // The 'address' variable here is the actual market contract address (already lowercased)
        if (detail.marketName === marketId || (detail as any).marketId === marketId) { 
          targetMarketAddress = address;
          break;
        }
      }

      if (targetMarketAddress) {
        // console.log(`Found target market address ${targetMarketAddress} for marketId param "${marketId}"`);
        dataToProcess = allRawOpenDataFromSubgraph.filter(
          (open) => open.market.id.toLowerCase() === targetMarketAddress // targetMarketAddress is already lowercase
        );
      } else {
        console.warn(`MarketId param "${marketId}" not found in marketDetails. Processing no positions for this specific marketId.`);
        dataToProcess = []; // No market found for the given name/ID, so process nothing for this specific call
      }
    }

    console.log(`Processing ${dataToProcess.length} positions. Original count from subgraph: ${allRawOpenDataFromSubgraph.length}. MarketId param: ${marketId || 'Not specified'}`);
    
    let positionsDataFromContracts: {
      [key: string]: PositionData | null | undefined
    } = {};

    // Process only the dataToProcess array (which is filtered if marketId was provided)
    for (let i = 0; i < dataToProcess.length; i += 15) {
      const positionsBatch = dataToProcess.slice(i, i + 15).map((position) => ({
        marketId: position.market.id as Address,
        positionId: BigInt(position.id.split("-")[1]),
        walletClient: (position.router.id === zeroAddress ? walletClient.toLowerCase() : SHIVA_ADDRESS[chainId].toLowerCase()) as Address
      }));
      if (positionsBatch.length > 0) {
        // console.log(`Fetching contract data for batch of ${positionsBatch.length} positions.`);
        Object.assign(positionsDataFromContracts, await this.getPositionsData(chainId, positionsBatch));
      }
    }

    const transformedOpens: OpenPositionData[] = [];
    // Transform only the dataToProcess
    for (const open of dataToProcess) {
      const positionId = BigInt(open.id.split("-")[1]);
      const currentMarketAddress = open.market.id as Address;
      let positionContractData = positionsDataFromContracts[`${currentMarketAddress}-${positionId}`];

      const formattedOpen = await this.formatOpenPosition(open, lowercasedMarketDetails, positionContractData ?? undefined);
      if (formattedOpen) {
        transformedOpens.push(formattedOpen);
      }
    }

    // Cache the newly fetched and processed data (which is already filtered if marketId was used)
    this.openPositionsCache[cacheKeyToUse] = {
      data: transformedOpens,
      lastUpdated: Date.now()
    };
    // console.log(`Cached ${transformedOpens.length} items under key: ${cacheKeyToUse}`);

    openPositionsData = transformedOpens; // Data is already correctly filtered or general as needed

    // console.log('Final open positions data before pagination:', openPositionsData.length, 'items');
    return {
      data: paginate(openPositionsData, page, pageSize).data,
      total: openPositionsData.length
    };
  };

  private async formatOpenPosition(
    open: OpenPosition,
    marketDetails: Map<string, { marketName: string; currency: string }>,
    positionData?: PositionData
  ) {
    const positionId = BigInt(open.id.split("-")[1]);
    const marketId = open.market.id as Address;
    const entryPrice = open.entryPrice;
    const isLong = open.isLong;
    const leverage = open.leverage;

    const {
      positionValue,
      currentOi,
      liquidatePrice,
      info,
      cost,
      tradingFee,
      marketMid,
    } = positionData || {
      positionValue: undefined,
      currentOi: undefined,
      liquidatePrice: undefined,
      info: undefined,
      cost: undefined,
      tradingFee: undefined,
      marketMid: undefined,
    };

    if (open.market.isShutdown) {
      const formattedOpen: OpenPositionData = {
        marketName: 'Market is shutdown',
        marketAddress: marketId,
        positionId: Number(positionId),
        size: '0',
        positionSide: open.leverage + "x " + (open.isLong ? "Long" : "Short"),
        entryPrice: '0',
        liquidatePrice: '0',
        currentPrice: '0',
        parsedCreatedTimestamp: formatUnixTimestampToDate(
          open.createdAtTimestamp
        ),
        unrealizedPnL: '0',
        parsedFunding: '0',
        priceCurrency: '0'
      };

      return formattedOpen;
    }
  
    const marketName =
      marketDetails?.get(open.id.split("-")[0].toLowerCase())?.marketName ?? "";
    const marketDetailsCurrency = marketDetails
      ?.get(open.id.split("-")[0].toLowerCase())
      ?.currency.trim();
    const priceCurrency = marketDetailsCurrency
      ? PRICE_CURRENCY_FROM_QUOTE[
          marketDetailsCurrency as keyof typeof PRICE_CURRENCY_FROM_QUOTE
        ]
      : "";
    const parsedEntryPrice = formatBigNumber(entryPrice, Number(18));
    const parsedValue: string | number | undefined = (() => {
      if (positionValue === undefined) return undefined;
      if (positionValue === BigInt(0)) return "0";
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
        (Number(positionValue) - Number(cost) - Number(tradingFee)) /
        10 ** 18;
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
      const remainingNotionalInitial =
        (BigInt(info.notionalInitial) * BigInt(info.fractionRemaining)) /
        baseFractionRemaining;

      const remainingOiInitial =
        (remainingNotionalInitial * ONE_BN) / tickToPrice(info.midTick);

      if (remainingOiInitial === 0n) return undefined;

      const fundingPayments =
        (BigInt(marketMid) * (BigInt(currentOi) - remainingOiInitial)) /
        ONE_BN;

      const fullValue = formatBigNumber(
        fundingPayments < 0n ? -fundingPayments : fundingPayments,
        18,
        18
      );

      if (fullValue === undefined) return "-";

      return +fullValue < 1
        ? formatBigNumber(fundingPayments, 18, 6)
        : formatBigNumber(fundingPayments, 18, 2);
    })();

    return {
      marketName: marketName,
      marketAddress: marketId,
      positionId: Number(positionId),
      size: parsedValue,
      positionSide: leverage + "x " + (isLong ? "Long" : "Short"),
      entryPrice: parsedEntryPrice ? formatPriceWithCurrency(parsedEntryPrice, priceCurrency) : "-",
      liquidatePrice: liquidatePrice && formatBigNumber(liquidatePrice, Number(18), 4) ? formatPriceWithCurrency(formatBigNumber(liquidatePrice, Number(18), 4), priceCurrency) : "-",
      currentPrice: marketMid && formatBigNumber(marketMid, Number(18), 4) ? formatPriceWithCurrency(formatBigNumber(marketMid, Number(18), 4), priceCurrency) : "-",
      parsedCreatedTimestamp: formatUnixTimestampToDate(
        open.createdAtTimestamp
      ),
      unrealizedPnL: unrealizedPnL,
      parsedFunding: parsedFunding,
      priceCurrency: priceCurrency,
    };
  }

  async getPositionsData(
    chainId: CHAINS,
    positions: { marketId: Address; positionId: bigint, walletClient: Address }[]
  ): Promise<{
    [key: string]: PositionData | null
  }> {
    const OverlayV1StateABIFunctions = OverlayV1StateABI.filter((abi) => abi.type === "function")
    const OverlayV1StateABIPositionFunctions = OverlayV1StateABIFunctions.filter(
      (abi) => abi.name === "value" || 
      abi.name === "oi" || 
      abi.name === "liquidationPrice" || 
      abi.name === "position" || 
      abi.name === "cost" || 
      abi.name === "tradingFee" ||
      abi.name === "mid"
    );

    const calls: {
      address: Address;
      abi: Abi;
      functionName: string;
      args: readonly unknown[];
    }[] = [];

    const uniqueMarkets = new Map<string, Address>();
    for (const { marketId } of positions) {
      const key = marketId.toLowerCase();
      if (!uniqueMarkets.has(key)) {
        uniqueMarkets.set(key, marketId);
      }
    }

    const peripheryByMarket = new Map<string, Address>();
    await Promise.all(
      Array.from(uniqueMarkets.entries()).map(async ([key, marketAddress]) => {
        const periphery = await this.sdk.market.periphery(marketAddress);
        invariant(periphery, `Periphery not configured for market ${marketAddress}`);
        peripheryByMarket.set(key, periphery);
      })
    );

    for (const { marketId, positionId, walletClient } of positions) {
      const periphery = peripheryByMarket.get(marketId.toLowerCase());
      invariant(periphery, `Missing periphery for market ${marketId}`);
      const positionCalls = [
        {
          address: periphery,
          abi: OverlayV1StateABIPositionFunctions.filter((abi) => abi.name === "value"),
          functionName: "value",
          args: [marketId, walletClient, positionId],
        },
        {
          address: periphery,
          abi: OverlayV1StateABIPositionFunctions.filter((abi) => abi.name === "oi"),
          functionName: "oi",
          args: [marketId, walletClient, positionId],
        },
        {
          address: periphery,
          abi: OverlayV1StateABIPositionFunctions.filter((abi) => abi.name === "liquidationPrice"),
          functionName: "liquidationPrice",
          args: [marketId, walletClient, positionId],
        },
        {
          address: periphery,
          abi: OverlayV1StateABIPositionFunctions.filter((abi) => abi.name === "position"),
          functionName: "position",
          args: [marketId, walletClient, positionId],
        },
        {
          address: periphery,
          abi: OverlayV1StateABIPositionFunctions.filter((abi) => abi.name === "cost"),
          functionName: "cost",
          args: [marketId, walletClient, positionId],
        },
        {
          address: periphery,
          abi: OverlayV1StateABIPositionFunctions.filter((abi) => abi.name === "tradingFee"),
          functionName: "tradingFee",
          args: [marketId, walletClient, positionId],
        },
        {
          address: periphery,
          abi: OverlayV1StateABIPositionFunctions.filter((abi) => abi.name === "mid"),
          functionName: "mid",
          args: [marketId],
        }
      ];

      calls.push(...positionCalls);
    }

    const results = await this.core.rpcProvider.multicall({
      allowFailure: true,
      contracts: calls,
    });

    const data: {
      [key: string]: PositionData | null
    } = {};

    for (let i = 0; i < positions.length; i++) {
      const { marketId, positionId } = positions[i];

      data[`${marketId}-${positionId}`] = {
        positionValue: results[i * 7].result as bigint,
        currentOi: results[i * 7 + 1].result as bigint,
        liquidatePrice: results[i * 7 + 2].result as bigint,
        info: results[i * 7 + 3].result as {
          notionalInitial: bigint;
          debtInitial: bigint;
          midTick: number;
          entryTick: number;
          isLong: boolean;
          liquidated: boolean;
          oiShares: bigint;
          fractionRemaining: number;
        },
        cost: results[i * 7 + 4].result as bigint,
        tradingFee: results[i * 7 + 5].result as bigint,
        marketMid: results[i * 7 + 6].result as bigint,
      };
    }

    return data;
  }

  async getOpenPositionData(
    chainId: CHAINS,
    walletClient: Address,
    marketId: Address,
    positionId: bigint
  ): Promise<{
    positionValue: bigint;
    currentOi: bigint;
    liquidatePrice: bigint;
    info: {
      notionalInitial: bigint;
      debtInitial: bigint;
      midTick: number;
      entryTick: number;
      isLong: boolean;
      liquidated: boolean;
      oiShares: bigint;
      fractionRemaining: number;
    };
    cost: bigint;
    tradingFee: bigint;
    marketMid: bigint;
    debt: bigint;
    collateral: bigint;
    notional: bigint;
    maintenanceMargin: bigint;
    prices: {
      bid: bigint;
      ask: bigint;
      mid: bigint;
    }
  }> {
    const periphery = await this.sdk.market.periphery(marketId);
    invariant(periphery, `Periphery not configured for market ${marketId}`);
    const contract = { address: periphery, abi: OverlayV1StateABI };

    const [
      positionValue,
      currentOi,
      liquidatePrice,
      info,
      cost,
      tradingFee,
      marketMid,
      debt,
      collateral,
      notional,
      maintenanceMargin,
      prices,
    ] = await this.core.rpcProvider.multicall({
        allowFailure: false,
        contracts: [
          {
            ...contract,
            functionName: "value",
            args: [marketId, walletClient, positionId],
          },
          {
            ...contract,
            functionName: "oi",
            args: [marketId, walletClient, positionId],
          },
          {
            ...contract,
            functionName: "liquidationPrice",
            args: [marketId, walletClient, positionId],
          },
          {
            ...contract,
            functionName: "position",
            args: [marketId, walletClient, positionId],
          },
          {
            ...contract,
            functionName: "cost",
            args: [marketId, walletClient, positionId],
          },
          {
            ...contract,
            functionName: "tradingFee",
            args: [marketId, walletClient, positionId],
          },
          {
            ...contract,
            functionName: "mid",
            args: [marketId],
          },
          {
            ...contract,
            functionName: "debt",
            args: [marketId, walletClient, positionId],
          },
          {
            ...contract,
            functionName: "collateral",
            args: [marketId, walletClient, positionId],
          },
          {
            ...contract,
            functionName: "notional",
            args: [marketId, walletClient, positionId],
          },
          {
            ...contract,
            functionName: "maintenanceMargin",
            args: [marketId, walletClient, positionId],
          },
          {
            ...contract,
            functionName: "prices",
            args: [marketId],
          }
        ] as const,
      });

    return {
      positionValue,
      currentOi,
      liquidatePrice,
      info,
      cost,
      tradingFee,
      marketMid,
      debt,
      collateral,
      notional,
      maintenanceMargin,
      prices: {
        bid: prices[0],
        ask: prices[1],
        mid: prices[2]
      }
    };
  }
}
