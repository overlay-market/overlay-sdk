import { type Address } from "viem";
import { OverlaySDKModule } from "../common/class-primitives/sdk-module.js";
import { OverlaySDKCommonProps } from "../core/types.js";
import { OverlaySDK } from "../sdk.js";
export type MarketData = {
    id: string;
    marketName: string;
    disabled: boolean;
    logo: string;
    currency: string;
    descriptionText?: string;
    fullLogo?: string;
    oracleLogo?: string;
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
export declare class OverlaySDKMarkets extends OverlaySDKModule {
    private sdk;
    private marketDetailsCache;
    private activeMarketsCache?;
    constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK);
    getMarketDetails(marketId: string, noCaching?: boolean): Promise<any>;
    getActiveMarkets(noCaching?: boolean): Promise<ExpandedMarketData[]>;
    transformMarketsData(): Promise<TransformedMarketData[]>;
}
//# sourceMappingURL=markets.d.ts.map