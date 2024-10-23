import axios from "axios";
import { NETWORKS } from "../constants";
import { CHAINS, invariant } from "../common";
export const getMarketsDetailsByChainId = async (chainId) => {
    invariant(chainId in CHAINS, "Unsupported chainId");
    const url = NETWORKS[chainId].MARKETS_DETAILS_API;
    try {
        const marketsDetailsData = (await axios.get(`${url}/chain/${chainId}`))
            .data;
        const marketsDetailsMap = new Map(marketsDetailsData.map((market) => {
            const marketDetail = {
                id: market.chains[0].deploymentAddress,
                marketId: market.marketId,
                marketName: market.marketName,
                disabled: market.chains[0].disabled,
                logo: market.logo,
                currency: market.currency,
                descriptionText: market.descriptionText,
                fullLogo: market.fullLogo,
                oracleLogo: market.oracleLogo,
            };
            return [marketDetail.id, marketDetail];
        }));
        return marketsDetailsMap;
    }
    catch (error) {
        console.error("market details", error);
        return undefined;
    }
};
export const getMarketDetailsById = async (marketId, chainId) => {
    invariant(chainId in CHAINS, "Unsupported chainId");
    const url = NETWORKS[chainId].MARKETS_DETAILS_API;
    try {
        const marketDetailsData = (await axios.get(`${url}/${marketId}`))
            .data;
        const chain = marketDetailsData.chains.find((chain) => chain.chainId === chainId);
        const marketDetail = {
            marketName: marketDetailsData.marketName,
            disabled: marketDetailsData.chains[0].disabled,
            logo: marketDetailsData.logo,
            currency: marketDetailsData.currency,
            descriptionText: marketDetailsData.descriptionText,
            fullLogo: marketDetailsData.fullLogo,
            oracleLogo: marketDetailsData.oracleLogo,
            indexesConstruction: marketDetailsData.indexesConstruction || [],
            chain,
            sources: marketDetailsData.sources ? marketDetailsData.sources.map((source) => source.name) : [],
        };
        return marketDetail;
    }
    catch (error) {
        console.error("market details", error);
        return undefined;
    }
};
//# sourceMappingURL=marketsDetails.js.map