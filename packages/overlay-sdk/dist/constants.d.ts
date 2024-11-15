import { Address } from "viem";
export type MarketDetailsData = {
    marketName: string;
    currency: string;
};
export declare const ONE_BN: bigint;
export declare const PRICE_CURRENCY_FROM_QUOTE: {
    USD: string;
    USDC: string;
    DAI: string;
    ETH: string;
    WETH: string;
    AETH: string;
    BTC: string;
    PERCENTAGE: string;
};
export declare const MARKET_LOGO: {
    BtcdLogo: string;
    EthDominanceLogo: string;
    csgoLogo: string;
    BtcFrogsLogo: string;
    NodeMonkesLogo: string;
    QuantumCatsLogo: string;
    InkLogo: string;
    EvIndexLogo: string;
    EthSolLogo: string;
    AIIndexLogo: string;
};
export declare const ORACLE_LOGO: {
    CHAINLINK: string;
    UNISWAP: string;
    NFTPERP: string;
    OVERLAY: string;
    TRUFLATION: string;
    PYTH: string;
};
export declare const FIRST = 10;
export type AddressMap = {
    [chainId: number]: Address;
};
export declare const V1_PERIPHERY_ADDRESS: AddressMap;
export declare const OV_ADDRESS: AddressMap;
interface Network {
    MARKET_PRICES_API: string;
    SUBGRAPH_URL: string;
    MARKETS_DETAILS_API: string;
}
export declare const NETWORKS: {
    [chainId: number]: Network;
};
export {};
//# sourceMappingURL=constants.d.ts.map