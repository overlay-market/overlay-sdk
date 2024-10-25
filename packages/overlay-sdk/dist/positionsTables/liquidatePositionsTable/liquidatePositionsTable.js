import { OverlaySDKModule } from "../../common/class-primitives/sdk-module.js";
import { PRICE_CURRENCY_FROM_QUOTE } from "../../constants.js";
import { formatBigNumber } from "../../common/utils/formatBigNumber.js";
import { getMarketsDetailsByChainId } from "../../services/marketsDetails.js";
import { getLiquidatedPositions } from "../../subgraph";
import { toPercentUnit, toScientificNumber, } from "../../common/utils/toScientificNumber.js";
import formatUnixTimestampToDate from "../../common/utils/formatUnixTimestampToDate.js";
import { invariant } from "../../common/index.js";
import { paginate } from "../../common/utils/paginate.js";
export class OverlaySDKLiquidatedPositions extends OverlaySDKModule {
    constructor(props, sdk) {
        super(props);
        this.transformLiquidatedPositions = async (page = 1, pageSize = 10, marketId, account) => {
            let walletClient = account;
            if (!walletClient) {
                invariant(this.sdk.core.web3Provider, "Web3 provider is not set");
                walletClient = account ?? (await this.sdk.core.web3Provider?.requestAddresses())[0];
            }
            const chainId = this.core.chainId;
            const rawliquidatedPositions = await getLiquidatedPositions({
                chainId: chainId,
                account: walletClient.toLowerCase(),
                first: 10,
            });
            const transformedLiquidated = [];
            const marketDetails = await getMarketsDetailsByChainId(chainId);
            for (const liquidated of rawliquidatedPositions) {
                const marketName = marketDetails?.get(liquidated.id.split("-")[0])?.marketName ?? "";
                const parsedSize = formatBigNumber(liquidated.size, Number(18));
                const positionSide = liquidated.isLong ? "Long" : "Short";
                const parsedEntryPrice = formatBigNumber(liquidated.position.entryPrice, Number(18));
                const marketDetailsCurrency = marketDetails
                    ?.get(liquidated.id.split("-")[0])
                    ?.currency.trim();
                const priceCurrency = marketDetailsCurrency
                    ? PRICE_CURRENCY_FROM_QUOTE[marketDetailsCurrency]
                    : "";
                const parsedExitPrice = formatBigNumber(liquidated.price, Number(18));
                const parsedCreatedTimestamp = formatUnixTimestampToDate(liquidated.position.createdAtTimestamp);
                const parsedClosedTimestamp = formatUnixTimestampToDate(liquidated.timestamp);
                transformedLiquidated.push({
                    marketName: marketName,
                    size: parsedSize + "OVL",
                    position: liquidated.position.leverage + "x " + positionSide,
                    entryPrice: `${priceCurrency ? priceCurrency : ""}${parsedEntryPrice
                        ? priceCurrency === "%"
                            ? toPercentUnit(parsedEntryPrice)
                            : toScientificNumber(parsedEntryPrice)
                        : "-"}`,
                    exitPrice: `${priceCurrency ? priceCurrency : ""}${parsedExitPrice
                        ? priceCurrency === "%"
                            ? toPercentUnit(parsedExitPrice)
                            : toScientificNumber(parsedExitPrice)
                        : "-"}`,
                    created: parsedCreatedTimestamp,
                    liquidated: parsedClosedTimestamp,
                });
            }
            // filter by marketId
            if (marketId) {
                const filteredLiquidated = transformedLiquidated.filter((liquidated) => liquidated.marketName === marketId);
                return paginate(filteredLiquidated, page, pageSize);
            }
            return paginate(transformedLiquidated, page, pageSize);
        };
        this.sdk = sdk;
    }
}
//# sourceMappingURL=liquidatePositionsTable.js.map