import { OverlaySDKModule } from "../../common/class-primitives/sdk-module";
import { getMarketsDetailsByChainId } from "../../services/marketsDetails";
import { formatBigNumber, formatUnixTimestampToDate, toPercentUnit, toScientificNumber, } from "../../common/utils";
import { FIRST, PRICE_CURRENCY_FROM_QUOTE } from "../../constants";
import { getUnwindPositions } from "../../subgraph";
import { invariant } from "../../common";
import { paginate } from "../../common/utils/paginate";
export class OverlaySDKUnwindPositions extends OverlaySDKModule {
    constructor(props, sdk) {
        super(props);
        this.transformUnwindPositions = async (page = 1, pageSize = 10, marketId, account) => {
            let walletClient = account;
            if (!walletClient) {
                invariant(this.sdk.core.web3Provider, "Web3 provider is not set");
                walletClient = account ?? (await this.sdk.core.web3Provider?.requestAddresses())[0];
            }
            const chainId = this.core.chainId;
            const rawUnwindData = await getUnwindPositions({
                chainId: chainId,
                account: walletClient.toLowerCase(),
                first: FIRST,
            });
            const transformedUnwinds = [];
            const marketDetails = await getMarketsDetailsByChainId(chainId);
            for (const unwind of rawUnwindData) {
                const marketName = marketDetails?.get(unwind.id.split("-")[0])?.marketName ?? "";
                const marketDetailsCurrency = marketDetails
                    ?.get(unwind.id.split("-")[0])
                    ?.currency.trim();
                const priceCurrency = marketDetailsCurrency
                    ? PRICE_CURRENCY_FROM_QUOTE[marketDetailsCurrency]
                    : "";
                const parsedEntryPrice = formatBigNumber(unwind.position.entryPrice, Number(18));
                const parsedExitPrice = formatBigNumber(unwind.price, Number(18));
                transformedUnwinds.push({
                    marketName: marketName,
                    size: +unwind.size / 10 ** 18 < 1
                        ? (+unwind.size / 10 ** 18).toFixed(6)
                        : (+unwind.size / 10 ** 18).toFixed(2),
                    positionSide: unwind.position.leverage +
                        "x " +
                        (unwind.position.isLong ? "Long" : "Short"),
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
                    parsedCreatedTimestamp: formatUnixTimestampToDate(unwind.position.createdAtTimestamp),
                    parsedClosedTimestamp: formatUnixTimestampToDate(unwind.timestamp),
                    pnl: formatBigNumber(unwind.pnl, Number(18), Math.abs(+unwind.pnl) > 10 ** +18 ? 4 : 6),
                });
            }
            // filter by marketId
            if (marketId) {
                const filteredUnwinds = transformedUnwinds.filter((unwind) => unwind.marketName === marketId);
                return paginate(filteredUnwinds, page, pageSize);
            }
            return paginate(transformedUnwinds, page, pageSize);
        };
        this.sdk = sdk;
    }
}
//# sourceMappingURL=unwindPositionsTable.js.map