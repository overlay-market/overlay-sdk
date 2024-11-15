import { formatBigNumber, formatUnixTimestampToDate, toPercentUnit, toScientificNumber, } from "../../common/utils";
import JSBI from "jsbi";
import { TickMath } from "@uniswap/v3-sdk";
import { ONE_BN, PRICE_CURRENCY_FROM_QUOTE, V1_PERIPHERY_ADDRESS, } from "../../constants";
import { getMarketsDetailsByChainId } from "../../services/marketsDetails";
import { OverlaySDKModule } from "../../common/class-primitives/sdk-module";
import { getOpenPositions } from "../../subgraph";
import { invariant } from "../../common";
import { paginate } from "../../common/utils/paginate";
import { OverlayV1StateABI } from "../../markets/abis/OverlayV1State";
export class OverlaySDKOpenPositions extends OverlaySDKModule {
    constructor(props, sdk) {
        super(props);
        this.openPositionsCache = {};
        this.transformOpenPositions = async (page = 1, pageSize = 10, marketId, account, noCaching) => {
            let walletClient = account;
            if (!walletClient) {
                invariant(this.sdk.core.web3Provider, "Web3 provider is not set");
                walletClient = account ?? (await this.sdk.core.web3Provider?.requestAddresses())[0];
            }
            const chainId = this.core.chainId;
            // check if we have the data in cache and if it's not too old
            const cacheKey = `${walletClient}-${chainId}`;
            if (!noCaching && this.openPositionsCache[cacheKey]) {
                const cachedData = this.openPositionsCache[cacheKey];
                const isCacheValid = Date.now() - cachedData.lastUpdated < 300 * 1000; // 5 minutes
                if (isCacheValid) {
                    return paginate(this.filterOpenPositionsByMarketId(cachedData.data, marketId), page, pageSize);
                }
            }
            const rawOpenData = await getOpenPositions({
                chainId: chainId,
                account: walletClient.toLowerCase()
            });
            const transformedOpens = [];
            const marketDetails = await getMarketsDetailsByChainId(chainId);
            invariant(marketDetails, "Failed to get market details");
            const formattedOpens = await Promise.all(rawOpenData.map(async (open) => {
                return this.formatOpenPosition(open, walletClient, marketDetails);
            }));
            for (const formattedOpen of formattedOpens) {
                if (formattedOpen) {
                    transformedOpens.push(formattedOpen);
                }
            }
            // cache the data
            if (!noCaching) {
                this.openPositionsCache[cacheKey] = {
                    data: transformedOpens,
                    lastUpdated: Date.now(),
                };
            }
            return paginate(this.filterOpenPositionsByMarketId(transformedOpens, marketId), page, pageSize);
        };
        // private method to filter open positions by marketId
        this.filterOpenPositionsByMarketId = (openPositions, marketId) => {
            if (!marketId)
                return openPositions;
            return openPositions.filter((open) => open.marketName === marketId);
        };
        this.sdk = sdk;
    }
    async formatOpenPosition(open, walletClient, marketDetails) {
        const positionId = BigInt(open.id.split("-")[1]);
        const marketId = open.market.id;
        const entryPrice = open.entryPrice;
        const isLong = open.isLong;
        const leverage = open.leverage;
        try {
            const { positionValue, currentOi, liquidatePrice, info, cost, tradingFee, marketMid } = await this.getOpenPositionData(this.core.chainId, walletClient, marketId, positionId);
            if (positionValue === BigInt(0)) {
                return;
            }
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
            return {
                marketName: marketName,
                marketAddress: marketId,
                positionId: Number(positionId),
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
                priceCurrency: priceCurrency,
            };
        }
        catch (error) {
            console.error("Failed to format open position", error);
            return;
        }
    }
    async getOpenPositionData(chainId, walletClient, marketId, positionId) {
        const contract = { address: V1_PERIPHERY_ADDRESS[chainId], abi: OverlayV1StateABI };
        const [positionValue, currentOi, liquidatePrice, info, cost, tradingFee, marketMid, debt, collateral, notional, maintenanceMargin, prices,] = await this.core.rpcProvider.multicall({
            allowFailure: false,
            contracts: [
                {
                    ...contract,
                    functionName: "value",
                    args: [marketId, walletClient, positionId],
                },
                {
                    ...contract,
                    functionName: "oi",
                    args: [marketId, walletClient, positionId],
                },
                {
                    ...contract,
                    functionName: "liquidationPrice",
                    args: [marketId, walletClient, positionId],
                },
                {
                    ...contract,
                    functionName: "position",
                    args: [marketId, walletClient, positionId],
                },
                {
                    ...contract,
                    functionName: "cost",
                    args: [marketId, walletClient, positionId],
                },
                {
                    ...contract,
                    functionName: "tradingFee",
                    args: [marketId, walletClient, positionId],
                },
                {
                    ...contract,
                    functionName: "mid",
                    args: [marketId],
                },
                {
                    ...contract,
                    functionName: "debt",
                    args: [marketId, walletClient, positionId],
                },
                {
                    ...contract,
                    functionName: "collateral",
                    args: [marketId, walletClient, positionId],
                },
                {
                    ...contract,
                    functionName: "notional",
                    args: [marketId, walletClient, positionId],
                },
                {
                    ...contract,
                    functionName: "maintenanceMargin",
                    args: [marketId, walletClient, positionId],
                },
                {
                    ...contract,
                    functionName: "prices",
                    args: [marketId],
                }
            ],
        });
        return {
            positionValue,
            currentOi,
            liquidatePrice,
            info,
            cost,
            tradingFee,
            marketMid,
            debt,
            collateral,
            notional,
            maintenanceMargin,
            prices: {
                bid: prices[0],
                ask: prices[1],
                mid: prices[2]
            }
        };
    }
}
//# sourceMappingURL=openPositionsTable.js.map