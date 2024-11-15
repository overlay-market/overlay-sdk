import { MarketDetails } from "./types/marketDetailsTypes";
import { CHAINS } from "../common";
export declare const getMarketsDetailsByChainId: (chainId: CHAINS) => Promise<Map<string, MarketDetails> | undefined>;
export declare const getMarketDetailsById: (marketId: string, chainId: CHAINS) => Promise<{
    marketName: string;
    disabled: boolean;
    logo: string;
    currency: string;
    descriptionText: string | undefined;
    fullLogo: string | undefined;
    oracleLogo: string | undefined;
    indexesConstruction: string[];
    chain: import("./types/marketDetailsTypes").IChainInfo | undefined;
    sources: (string | undefined)[];
} | undefined>;
//# sourceMappingURL=marketsDetails.d.ts.map