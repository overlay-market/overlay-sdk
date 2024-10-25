import { type Chain } from "viem";
export declare const imola: {
    blockExplorers: {
        readonly default: {
            readonly name: "Explorer";
            readonly url: "https://explorer.devnet.imola.movementlabs.xyz/#/?network=testnet";
        };
    };
    contracts?: {
        [x: string]: import("viem").ChainContract | {
            [sourceId: number]: import("viem").ChainContract | undefined;
        } | undefined;
        ensRegistry?: import("viem").ChainContract | undefined;
        ensUniversalResolver?: import("viem").ChainContract | undefined;
        multicall3?: import("viem").ChainContract | undefined;
    } | undefined;
    id: 30732;
    name: "Movement";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "MOVE";
        readonly symbol: "MOVE";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://overlay-rpc.devnet.imola.movementnetwork.xyz"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
};
export declare enum CHAINS {
    Mainnet = 1,
    Arbitrum = 42161,
    ArbitrumSepolia = 421614,
    Bartio = 80084,
    Imola = 30732
}
export declare const SUPPORTED_CHAINS: CHAINS[];
export declare const VIEM_CHAINS: {
    [key in CHAINS]: Chain;
};
export declare const enum OVERLAY_CONTRACT_NAMES {
    overlayV1Market = "overlayV1Market"
}
export declare const NOOP: () => void;
//# sourceMappingURL=constants.d.ts.map