import { OverlaySDKModule } from "../common/class-primitives/sdk-module.js";
import { MARKET_LOGO, PRICE_CURRENCY_FROM_QUOTE, V1_PERIPHERY_ADDRESS, ORACLE_LOGO } from "../constants.js";
import { formatBigNumber } from "../common/utils/formatBigNumber.js";
import { formatFundingRateToAnnual, formatFundingRateToDaily } from "../common/utils/formatWei.js";
import { getMarketDetailsById, getMarketsDetailsByChainId } from "../services/marketsDetails.js";
import { CHAINS, invariant } from "../common/index.js";
export class OverlaySDKMarkets extends OverlaySDKModule {
    constructor(props, sdk) {
        super(props);
        this.marketDetailsCache = {};
        this.sdk = sdk;
    }
    async getMarketDetails(marketId, noCaching = false) {
        const chainId = this.core.chainId;
        invariant(chainId in CHAINS, "Unsupported chainId");
        // check if we have the data in cache and if it's not too old
        if (!noCaching && this.marketDetailsCache[marketId]) {
            const cachedData = this.marketDetailsCache[marketId];
            const isCacheValid = Date.now() - cachedData.lastUpdated < 3600 * 1000; // 1 hour
            if (isCacheValid) {
                return cachedData.data;
            }
        }
        // if not in cache or cache is too old or noCaching is true, fetch the data
        const marketDetails = await getMarketDetailsById(marketId, chainId);
        invariant(marketDetails, "Market not found");
        const marketAddress = marketDetails.chain?.deploymentAddress;
        const capLeverage = await this.sdk.market.getCapLeverage(marketAddress);
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
    async getActiveMarkets(noCaching = false) {
        const chainId = this.core.chainId;
        invariant(chainId in CHAINS, "Unsupported chainId");
        // check if we have the data in cache and if it's not too old
        if (!noCaching && this.activeMarketsCache) {
            const isCacheValid = Date.now() - this.activeMarketsCache.lastUpdated < 3600 * 1000; // 1 hour
            if (isCacheValid) {
                return this.activeMarketsCache.data;
            }
        }
        // if not in cache or cache is too old or noCaching is true, fetch the data
        const marketDetails = await getMarketsDetailsByChainId(chainId);
        const marketDetailsValues = marketDetails && Array.from(marketDetails?.values());
        const transformedMarketsData = marketDetailsValues
            ?
                await Promise.allSettled(marketDetailsValues.map(async (market) => {
                    if (market.disabled)
                        return undefined;
                    const marketId = market.id;
                    const result = await this.sdk.state.getMarketState(V1_PERIPHERY_ADDRESS[chainId], marketId);
                    if (result) {
                        let parsedBid = undefined;
                        let parsedAsk = undefined;
                        let parsedMid = undefined;
                        let parsedOiLong = undefined;
                        let parsedOiShort = undefined;
                        let parsedCapOi = undefined;
                        let parsedDailyFundingRate = undefined;
                        let parsedAnnualFundingRate = undefined;
                        const decimals = 18;
                        parsedBid = decimals && formatBigNumber(result.bid, decimals, 8);
                        parsedAsk = decimals && formatBigNumber(result.ask, decimals, 8);
                        parsedMid = decimals && formatBigNumber(result.mid, decimals, 8);
                        parsedOiLong = decimals && formatBigNumber(result.oiLong, decimals, 18);
                        parsedOiShort = decimals && formatBigNumber(result.oiShort, decimals, 18);
                        parsedCapOi = decimals && formatBigNumber(result.capOi, decimals, 18);
                        parsedDailyFundingRate = decimals && formatFundingRateToDaily(result.fundingRate, 18, 2);
                        parsedAnnualFundingRate = decimals && formatFundingRateToAnnual(result.fundingRate, 18, 2);
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
                        };
                    }
                    else {
                        return undefined;
                    }
                }))
            : undefined;
        const marketDetailsIds = marketDetails ? Array.from(marketDetails.keys()) : [];
        const expandedMarketsData = transformedMarketsData && marketDetails
            ? transformedMarketsData
                .filter(item => item.status === 'fulfilled')
                .map(item => item.value)
                .filter(item => item !== undefined)
                .map(market => {
                if (!marketDetails.get(market.id)?.disabled && marketDetailsIds.includes(market.id)) {
                    const marketName = marketDetails.get(market.id)?.marketName ?? '';
                    const marketDetailsCurrency = marketDetails.get(market.id)?.currency.trim();
                    const priceCurrency = marketDetailsCurrency ? PRICE_CURRENCY_FROM_QUOTE[marketDetailsCurrency] : '';
                    const marketDetailsLogo = marketDetails.get(market.id)?.logo;
                    const marketLogo = marketDetailsLogo ? MARKET_LOGO[marketDetailsLogo] : '';
                    const marketDetailsOracleLogo = marketDetails.get(market.id)?.oracleLogo;
                    const oracleLogo = marketDetailsOracleLogo ? ORACLE_LOGO[marketDetailsOracleLogo] : '';
                    return {
                        ...market,
                        marketName,
                        priceCurrency,
                        marketLogo,
                        oracleLogo
                    };
                }
                else {
                    return undefined;
                }
            })
                .filter(item => item !== undefined)
            : undefined;
        if (!noCaching) {
            this.activeMarketsCache = { data: expandedMarketsData, lastUpdated: Date.now() };
        }
        return expandedMarketsData;
    }
}
//# sourceMappingURL=markets.js.map