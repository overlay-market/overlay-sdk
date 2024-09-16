import axios from "axios";
import { IMarketDetails, MarketDetails } from "./types/marketDetailsTypes";
import { type Address } from "viem";
import { NETWORKS } from "../constants";
import { CHAINS, invariant } from "../common";

export const getMarketsDetailsByChainId = async (chainId: CHAINS) => {
  invariant(chainId in CHAINS, "Unsupported chainId");
  const url = NETWORKS[chainId].MARKETS_DETAILS_API;
  try {
    const marketsDetailsData = (await axios.get(`${url}/chain/${chainId}`))
      .data as IMarketDetails[];

      const marketsDetailsMap: Map<string, MarketDetails> = new Map(
        marketsDetailsData.map((market) => {
          const marketDetail = {
            id: market.chains[0].deploymentAddress,
            marketName: market.marketName,
            disabled: market.chains[0].disabled,
            logo: market.logo,
            currency: market.currency,
            descriptionText: market.descriptionText,
            fullLogo: market.fullLogo,
            oracleLogo: market.oracleLogo,
          };
      
          return [marketDetail.id, marketDetail];
        })
      );
        
      return marketsDetailsMap;
  } catch (error) {
    console.error("market details", error);
    return undefined;
  }
};
