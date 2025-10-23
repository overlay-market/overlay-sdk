import {Abi, type Address} from "viem";
import { OverlaySDKModule } from "../common/class-primitives/sdk-module.js";
import { OverlaySDKCommonProps } from "../core/types.js";
import { MARKET_LOGO, PRICE_CURRENCY_FROM_QUOTE, ORACLE_LOGO } from "../constants.js";
import { OverlaySDK } from "../sdk.js";
import { formatBigNumber } from "../common/utils/formatBigNumber.js";
import { formatFundingRateToAnnual, formatFundingRateToDaily } from "../common/utils/formatWei.js";
import { getMarketDetailsById, getMarketsDetailsByChainId } from "../services/marketsDetails.js";
import { CHAINS, invariant } from "../common/index.js";
import { OverlayV1Market2ABI } from "../markets/abis/OverlayV1Market2.js";
import { OverlayV1StateABI } from "../markets/abis/OverlayV1State.js";

export type MarketData = {
  id: string;
  marketName: string;
  disabled: boolean;
  logo: string;
  currency: string;
  descriptionText?: string;
  fullLogo?: string;
  oracleLogo?: string;
  buttons?: {
    long: string;
    short: string;
  };
  bid: bigint;
  ask: bigint;
  mid: bigint;
  volumeBid: bigint;
  volumeAsk: bigint;
  oiLong: bigint;
  oiShort: bigint;
  capOi: bigint;
  circuitBreakerLevel: bigint;
  fundingRate: bigint;
  parsedBid: string | number | undefined;
  parsedAsk: string | number | undefined;
  parsedMid: string | number | undefined;
  parsedOiLong: string | number | undefined;
  parsedOiShort: string | number | undefined;
  parsedCapOi: string | number | undefined;
  parsedDailyFundingRate: string | number | undefined;
  parsedAnnualFundingRate: string | number | undefined;
};

export type ExpandedMarketData = MarketData & {
  marketAddress: Address;
  capLeverage: string | number | undefined;
  priceCurrency: string;
  marketLogo: string;
  oracleLogo: string;
  marketId: string;
};

export type TransformedMarketData = {
  marketId: string;
  marketName: string;
  marketAddress: Address;
  price: string | number | undefined;
  funding: string | number | undefined;
  longPercentageOfTotalOi: string;
  shortPercentageOfTotalOi: string;
  oracleLogo: string;
  marketLogo: string;
  priceCurrency: string;
};

export type MarketOnchainData = {
  [key: string]: {
    marketState: MarketState;
    isShutdown: boolean;
  }
}

type MarketState = {
  bid: bigint;
  ask: bigint;
  mid: bigint;
  volumeBid: bigint;
  volumeAsk: bigint;
  oiLong: bigint;
  oiShort: bigint;
  capOi: bigint;
  circuitBreakerLevel: bigint;
  fundingRate: bigint;
}

export class OverlaySDKMarkets extends OverlaySDKModule {
  private sdk: OverlaySDK;
  private marketDetailsCache: Record<string, { data: any; lastUpdated: number }> = {};
  private activeMarketsCache?: { data: ExpandedMarketData[]; lastUpdated: number };

  constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK) {
    super(props);
    this.sdk = sdk;
  }

  public async getMarketDetails(marketId: string, noCaching: boolean = false) {
    const chainId = this.core.chainId;
    invariant(chainId in CHAINS, "Unsupported chainId");

    if (!noCaching && this.marketDetailsCache[marketId]) {
      const cachedData = this.marketDetailsCache[marketId];
      if (Date.now() - cachedData.lastUpdated < 60 * 60 * 1000) { // 1 hour
        return cachedData.data;
      }
      delete this.marketDetailsCache[marketId];
    }

    const marketDetails = await getMarketDetailsById(marketId, chainId)
    invariant(marketDetails, "Market not found");

    const marketAddress = marketDetails.chain?.deploymentAddress as Address

    const capLeverage = await this.sdk.market.getCapLeverage(marketAddress)

    const marketData = {
      ...marketDetails,
      marketAddress,
      capLeverage: formatBigNumber(capLeverage, 18, 2),
    };

    if (!noCaching) {
      this.marketDetailsCache[marketId] = { data: marketData, lastUpdated: Date.now() };
    }

    return marketData;
  }

  public async getActiveMarkets(noCaching: boolean = false) {
    const chainId = this.core.chainId;
    invariant(chainId in CHAINS, "Unsupported chainId");

    if (!noCaching && this.activeMarketsCache) {
      if (Date.now() - this.activeMarketsCache.lastUpdated < 60 * 60 * 1000) { // 1 hour
        return this.activeMarketsCache.data;
      }
      this.activeMarketsCache = undefined;
    }

    const marketDetails = await getMarketsDetailsByChainId(chainId)
    const marketDetailsValues = marketDetails && Array.from(marketDetails?.values())

    const marketAddresses = marketDetailsValues ? marketDetailsValues.map(market => market.id as Address) : []
    const marketOnchainData = await this._getMarketOnchainData(marketAddresses, chainId)

    const transformedMarketsData = marketDetailsValues 
    ?  
      await Promise.allSettled(marketDetailsValues.map(async(market) => {
        if (market.disabled) return undefined
        const marketId = market.id as Address
        
        const {marketState: result, isShutdown} = marketOnchainData[marketId]
        if (isShutdown) return undefined
       
        if (result) {
          let parsedBid: string | number | undefined = undefined
          let parsedAsk: string | number | undefined = undefined
          let parsedMid: string | number | undefined = undefined
          let parsedOiLong: string | number | undefined = undefined
          let parsedOiShort: string | number | undefined = undefined
          let parsedCapOi: string | number | undefined = undefined
          let parsedDailyFundingRate: string | number | undefined = undefined
          let parsedAnnualFundingRate: string | number | undefined = undefined
           
          const decimals = 18

          parsedBid = decimals && formatBigNumber(result.bid, decimals, 8)
          parsedAsk = decimals && formatBigNumber(result.ask, decimals, 8)
          parsedMid = decimals && formatBigNumber(result.mid, decimals, 8)
          parsedOiLong = decimals && formatBigNumber(result.oiLong, decimals, 18)
          parsedOiShort = decimals && formatBigNumber(result.oiShort, decimals, 18)
          parsedCapOi = decimals && formatBigNumber(result.capOi, decimals, 18)
          parsedDailyFundingRate = decimals && formatFundingRateToDaily(result.fundingRate, 18, 2)
          parsedAnnualFundingRate = decimals && formatFundingRateToAnnual(result.fundingRate, 18, 2)

          return {
            ...market,
            ...result,
            parsedBid,
            parsedAsk,
            parsedMid,
            parsedOiLong,
            parsedOiShort,
            parsedCapOi,
            parsedDailyFundingRate,
            parsedAnnualFundingRate,
          } as MarketData
        } else {
          return undefined
        }
        
      }))
    : undefined

    const marketDetailsIds = marketDetails ? Array.from(marketDetails.keys()) : []

    const expandedMarketsData = transformedMarketsData && marketDetails
      ? transformedMarketsData
        .filter(item => item.status === 'fulfilled')
        .map(item => item.value)
        .filter(item => item !== undefined)
        .map(market => {
          if (!marketDetails.get(market.id)?.disabled && marketDetailsIds.includes(market.id)
          ) {
            const marketName = marketDetails.get(market.id)?.marketName ?? '';
            const marketDetailsCurrency = marketDetails.get(market.id)?.currency.trim();
            const priceCurrency = marketDetailsCurrency ? PRICE_CURRENCY_FROM_QUOTE[marketDetailsCurrency as keyof typeof PRICE_CURRENCY_FROM_QUOTE] : '';
            const marketDetailsLogo = marketDetails.get(market.id)?.logo;
            const marketLogo = marketDetailsLogo ? MARKET_LOGO[marketDetailsLogo as keyof typeof MARKET_LOGO] : '';
            const marketDetailsOracleLogo = marketDetails.get(market.id)?.oracleLogo;
            const oracleLogo = marketDetailsOracleLogo ? ORACLE_LOGO[marketDetailsOracleLogo as keyof typeof ORACLE_LOGO] : '';

            return {
              ...market,
              marketName,
              priceCurrency,
              marketLogo,
              oracleLogo
            } as ExpandedMarketData
          }
           else {
            return undefined
          }
        })
        .filter(item => item !== undefined) 
      : undefined

    if (!noCaching && expandedMarketsData) {
      this.activeMarketsCache = { data: expandedMarketsData, lastUpdated: Date.now() };
    }

    return expandedMarketsData || [];
  }

  public async transformMarketsData(): Promise<TransformedMarketData[]> {
    const activeMarkets = await this.getActiveMarkets()
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, "Unsupported chainId");

    const transformedMarketsData = activeMarkets.map((market: ExpandedMarketData) => {
      const marketAddress = market.id as Address

      const oiLong = BigInt(market.oiLong || 0)
      const oiShort = BigInt(market.oiShort || 0)

      const shortPercentageOfTotalOi = (Number(oiShort) / (Number(oiLong) + Number(oiShort)) * 100).toFixed(2)
      const longPercentageOfTotalOi = (Number(oiLong) / (Number(oiLong) + Number(oiShort)) * 100).toFixed(2)

      return {
        marketId: market.marketId,
        marketName: market.marketName,
        marketAddress,
        price: market.parsedMid,
        funding: market.parsedDailyFundingRate,
        longPercentageOfTotalOi: longPercentageOfTotalOi,
        shortPercentageOfTotalOi: shortPercentageOfTotalOi,
        oracleLogo: market.oracleLogo,
        marketLogo: market.marketLogo,
        priceCurrency: market.priceCurrency,
      };
    });

    return transformedMarketsData || [];
  }

  private async _getMarketOnchainData(markets: Address[], chainId: CHAINS): Promise<MarketOnchainData> {
    const OverlayV1MarketABIFunctions = OverlayV1Market2ABI.filter((abi) => abi.type === "function")
    const OverlayV1StateABIFunctions = OverlayV1StateABI.filter((abi) => abi.type === "function")

    const marketsData: MarketOnchainData = {}

    const calls: {
      address: Address;
      abi: Abi;
      functionName: string;
      args: readonly unknown[];
    }[] = [];

    const marketPeripheries = await Promise.all(
      markets.map(async (marketAddress) => {
        const periphery = await this.sdk.market.periphery(marketAddress);
        invariant(periphery, `Periphery not configured for market ${marketAddress}`);
        return { marketAddress, periphery };
      })
    );

    for (const { marketAddress, periphery } of marketPeripheries) {
      const marketContract = { address: marketAddress, abi: OverlayV1MarketABIFunctions }
      
      calls.push({
        address: periphery,
        abi: OverlayV1StateABIFunctions,
        functionName: "marketState",
        args: [marketAddress],
      })

      calls.push({
        ...marketContract,
        functionName: "isShutdown",
        args: [],
      })
    }

    const results = await this.core.rpcProvider.multicall({
      allowFailure: true,
      contracts: calls
    })

    for (let i = 0; i < results.length; i += 2) {
      const marketAddress = markets[i / 2]
      const marketStateResult = results[i]
      const isShutdownResult = results[i + 1]

      // Check if either call failed (e.g., stale price feed)
      if (marketStateResult.status === 'failure' || isShutdownResult.status === 'failure') {
        console.warn(`⚠️ Skipping market ${marketAddress} due to stale price feed or contract error`)
        continue  // Skip this market
      }

      const marketState = marketStateResult.result as MarketState
      const isShutdown = isShutdownResult.result as boolean

      marketsData[marketAddress] = {
        marketState,
        isShutdown,
      }
    }

    return marketsData
  }
}
