import { RequestExtendedOptions } from "graphql-request";
import { OpenPositionsQuery, UnwindsQuery, LiquidatedPositionsQuery } from "./types";
import { CHAINS } from "./common";
export type SubgraphUrl = string | {
    url: string;
    requestHeaders?: RequestExtendedOptions["requestHeaders"];
};
export type GetOpenPositionsOptions = {
    chainId: CHAINS;
    account: string;
    marketId?: string;
    first?: number;
    skip?: number;
};
type OpenPosition = NonNullable<NonNullable<OpenPositionsQuery["account"]>["positions"]>[number];
export declare const getOpenPositions: ({ chainId, account, first, marketId, }: GetOpenPositionsOptions) => Promise<OpenPosition[]>;
export type GetUnwindPositionsOptions = {
    chainId: CHAINS;
    account: string;
    first?: number;
    skip?: number;
};
type Unwind = NonNullable<NonNullable<UnwindsQuery["account"]>["unwinds"]>[number];
export declare const getUnwindPositions: ({ chainId, account, first, }: GetUnwindPositionsOptions) => Promise<Unwind[]>;
export type GetliquidatedPositionsOptions = {
    chainId: CHAINS;
    account: string;
    first?: number;
    skip?: number;
};
type Liquidated = NonNullable<NonNullable<LiquidatedPositionsQuery["account"]>["liquidates"]>[number];
export declare const getLiquidatedPositions: ({ chainId, account, first, }: GetliquidatedPositionsOptions) => Promise<Liquidated[]>;
export declare const getActiveMarketsFromSubgraph: (chainId: CHAINS) => Promise<{
    __typename?: "Market";
    id: string;
    feedAddress: string;
    k: any;
    lmbda: any;
    delta: any;
    capPayoff: any;
    capNotional: any;
    capLeverage: any;
    circuitBreakerWindow: any;
    circuitBreakerMintTarget: any;
    maintenanceMarginFraction: any;
    maintenanceMarginBurnRate: any;
    liquidationFeeRate: any;
    tradingFeeRate: any;
    minCollateral: any;
    priceDriftUpperLimit: any;
    averageBlockTime: any;
    isShutdown: boolean;
    factory: {
        __typename?: "Factory";
        id: string;
    };
}[] | undefined>;
export {};
//# sourceMappingURL=subgraph.d.ts.map