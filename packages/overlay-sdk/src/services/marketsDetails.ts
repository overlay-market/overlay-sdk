import axios from "axios";
import { IMarketDetails, MarketDetails } from "./types/marketDetailsTypes";
import { type Address } from "viem";
import { LINKS } from "../constants";

export const getMarketsDetailsByChainId = async (chainId: Address) => {
  try {
    const marketsDetailsData = (await axios.get(`${LINKS.MARKETS_DETAILS_API}/chain/${chainId}`))
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
