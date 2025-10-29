import axios from "axios";
import { IMarketDetails, MarketDetails } from "./types/marketDetailsTypes";
import { type Address } from "viem";
import { NETWORKS } from "../constants";
import { CHAINS, invariant } from "../common";

export const getMarketsDetailsByChainId = async (chainId: CHAINS): Promise<Map<string, MarketDetails> | undefined> => {
  invariant(chainId in CHAINS, "Unsupported chainId");
  const url = NETWORKS[chainId].MARKETS_DETAILS_API;
  try {
    const marketsDetailsData = (await axios.get(`${url}/chain/${chainId}`))
      .data as IMarketDetails[];

      const marketsDetailsMap: Map<string, MarketDetails> = new Map(
        marketsDetailsData.flatMap((market) =>
          market.chains.map((chain) => {
            const marketDetail: MarketDetails = {
              id: chain.deploymentAddress,
              marketId: market.marketId,
              marketName: market.marketName,
              disabled: chain.disabled,
              deprecated: chain.deprecated,
              logo: market.logo,
              currency: market.currency,
              descriptionText: market.descriptionText,
              fullLogo: market.fullLogo,
              oracleLogo: market.oracleLogo,
              buttons: market.buttons,
            };

            return [marketDetail.id, marketDetail] as [string, MarketDetails];
          })
        )
      );

      return marketsDetailsMap;
  } catch (error) {
    console.error("market details", error);
    return undefined;
  }
};

export const getMarketDetailsById = async (marketId: string, chainId: CHAINS) => {
  invariant(chainId in CHAINS, "Unsupported chainId");
  const url = NETWORKS[chainId].MARKETS_DETAILS_API;
  try {
    const marketDetailsData = (await axios.get(`${url}/${marketId}`))
      .data as IMarketDetails;
    // Prefer non-deprecated chains when multiple chains exist for the same chainId
    const chain = marketDetailsData.chains.find((chain) => chain.chainId === chainId && !chain.deprecated)
      || marketDetailsData.chains.find((chain) => chain.chainId === chainId);

    const marketDetail = {
      marketName: marketDetailsData.marketName,
      disabled: chain?.disabled ?? false,
      deprecated: chain?.deprecated ?? false,
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
  } catch (error) {
    console.error("market details", error);
    return undefined;
  }
}
