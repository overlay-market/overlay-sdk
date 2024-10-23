import { formatBigNumber, formatUnixTimestampToDate, toPercentUnit, toScientificNumber, } from "../../common/utils";
import JSBI from "jsbi";
import { TickMath } from "@uniswap/v3-sdk";
import { FIRST, ONE_BN, PRICE_CURRENCY_FROM_QUOTE, V1_PERIPHERY_ADDRESS, } from "../../constants";
import { getMarketsDetailsByChainId } from "../../services/marketsDetails";
import { OverlaySDKModule } from "../../common/class-primitives/sdk-module";
import { getOpenPositions } from "../../subgraph";
import { invariant } from "../../common";
export class OverlaySDKOpenPositions extends OverlaySDKModule {
    constructor(props, sdk) {
        super(props);
        this.transformOpenPositions = async (account) => {
            let walletClient = account;
            if (!walletClient) {
                invariant(this.sdk.core.web3Provider, "Web3 provider is not set");
                walletClient = account ?? (await this.sdk.core.web3Provider?.requestAddresses())[0];
            }
            const chainId = this.core.chainId;
            const rawOpenData = await getOpenPositions({
                chainId: chainId,
                account: walletClient.toLowerCase(),
                first: FIRST,
            });
            const transformedOpens = [];
            const marketDetails = await getMarketsDetailsByChainId(chainId);
            for (const open of rawOpenData) {
                const positionId = BigInt(open.id.split("-")[1]);
                const marketId = open.market.id;
                const entryPrice = open.entryPrice;
                const isLong = open.isLong;
                const leverage = open.leverage;
                const positionValue = await this.sdk.state.getValue(V1_PERIPHERY_ADDRESS[chainId], marketId, walletClient, positionId);
                if (positionValue === BigInt(0)) {
                    continue;
                }
                const currentOi = await this.sdk.state.getCurrentOi(V1_PERIPHERY_ADDRESS[chainId], marketId, walletClient, positionId);
                const liquidatePrice = await this.sdk.state.getLiquidatePrice(V1_PERIPHERY_ADDRESS[chainId], marketId, walletClient, positionId);
                const info = await this.sdk.state.getInfo(V1_PERIPHERY_ADDRESS[chainId], marketId, walletClient, positionId);
                const cost = await this.sdk.state.getCost(V1_PERIPHERY_ADDRESS[chainId], marketId, walletClient, positionId);
                const tradingFee = await this.sdk.state.getTradingFee(V1_PERIPHERY_ADDRESS[chainId], marketId, walletClient, positionId);
                const marketMid = await this.sdk.state.getMidPrice(V1_PERIPHERY_ADDRESS[chainId], marketId);
                const marketName = marketDetails?.get(open.id.split("-")[0])?.marketName ?? "";
                const marketDetailsCurrency = marketDetails
                    ?.get(open.id.split("-")[0])
                    ?.currency.trim();
                const priceCurrency = marketDetailsCurrency
                    ? PRICE_CURRENCY_FROM_QUOTE[marketDetailsCurrency]
                    : "";
                const parsedEntryPrice = formatBigNumber(entryPrice, Number(18));
                const parsedValue = (() => {
                    if (!positionValue && positionValue === undefined)
                        return undefined;
                    const fullValue = formatBigNumber(positionValue, 18, 18);
                    if (fullValue === undefined)
                        return "-";
                    return +fullValue < 1
                        ? formatBigNumber(positionValue, 18, 6)
                        : formatBigNumber(positionValue, 18, 2);
                })();
                const unrealizedPnL = (() => {
                    if (positionValue === undefined ||
                        cost === undefined ||
                        tradingFee === undefined)
                        return undefined;
                    const diff = (Number(positionValue) - Number(cost) - Number(tradingFee)) /
                        10 ** 18;
                    return diff < 1 ? diff.toFixed(6) : diff.toFixed(2);
                })();
                function tickToPrice(tick) {
                    const Q96 = JSBI.exponentiate(JSBI.BigInt(2), JSBI.BigInt(96));
                    const Q192 = JSBI.exponentiate(Q96, JSBI.BigInt(2));
                    const ONE_JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(18));
                    const sqrtRatio = TickMath.getSqrtRatioAtTick(tick);
                    const ratio = JSBI.multiply(sqrtRatio, sqrtRatio);
                    const ratio18 = JSBI.multiply(ratio, ONE_JSBI);
                    const priceJSBI = JSBI.divide(ratio18, Q192);
                    return BigInt(priceJSBI.toString());
                }
                const parsedFunding = (() => {
                    if (info === undefined || !currentOi || !marketMid)
                        return undefined;
                    const baseFractionRemaining = 10000n;
                    const remainingNotionalInitial = (BigInt(info.notionalInitial) * BigInt(info.fractionRemaining)) /
                        baseFractionRemaining;
                    const remainingOiInitial = (remainingNotionalInitial * ONE_BN) / tickToPrice(info.midTick);
                    if (remainingOiInitial === 0n)
                        return undefined;
                    const fundingPayments = (BigInt(marketMid) * (BigInt(currentOi) - remainingOiInitial)) /
                        ONE_BN;
                    const fullValue = formatBigNumber(fundingPayments < 0n ? -fundingPayments : fundingPayments, 18, 18);
                    if (fullValue === undefined)
                        return "-";
                    return +fullValue < 1
                        ? formatBigNumber(fundingPayments, 18, 6)
                        : formatBigNumber(fundingPayments, 18, 2);
                })();
                transformedOpens.push({
                    marketName: marketName,
                    size: parsedValue,
                    positionSide: leverage + "x " + (isLong ? "Long" : "Short"),
                    entryPrice: `${priceCurrency ? priceCurrency : ""}${parsedEntryPrice
                        ? priceCurrency === "%"
                            ? toPercentUnit(parsedEntryPrice)
                            : toScientificNumber(parsedEntryPrice)
                        : "-"}`,
                    liquidatePrice: `${priceCurrency ? priceCurrency : ""}${formatBigNumber(liquidatePrice, Number(18), 4)
                        ? priceCurrency === "%"
                            ? toPercentUnit(formatBigNumber(liquidatePrice, Number(18), 4))
                            : toScientificNumber(formatBigNumber(liquidatePrice, Number(18), 4))
                        : "-"}`,
                    currentPrice: `${priceCurrency ? priceCurrency : ""}${formatBigNumber(marketMid, Number(18), 4)
                        ? priceCurrency === "%"
                            ? toPercentUnit(formatBigNumber(marketMid, Number(18), 4))
                            : toScientificNumber(formatBigNumber(marketMid, Number(18), 4))
                        : "-"}`,
                    parsedCreatedTimestamp: formatUnixTimestampToDate(open.createdAtTimestamp),
                    unrealizedPnL: unrealizedPnL,
                    parsedFunding: parsedFunding,
                });
            }
            return transformedOpens;
        };
        this.sdk = sdk;
    }
}
//# sourceMappingURL=openPositionsTable.js.map