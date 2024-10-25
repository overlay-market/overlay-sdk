import { request } from "graphql-request";
import { UnwindPositionsQuery as UnwindPositionsQueryDocument, ActiveMarketsQuery as ActiveMarketsQueryDocument, LiquidatedPositionsQuery as LiquidatedPositionsQueryDocument, getOpenPositionsQuery, } from "./queries";
import { NETWORKS } from "./constants";
import { CHAINS, invariant } from "./common";
const parseSubgraphUrl = (value) => {
    if (typeof value === "string")
        return { url: value };
    else
        return value;
};
const requestAllWithStep = async ({ url, step, document, variables, extractArray, }) => {
    let skip = 0;
    const results = [];
    while (true) {
        const partialResult = await request({
            ...parseSubgraphUrl(url),
            document,
            variables: {
                ...variables,
                first: step,
                skip,
            },
        });
        const array = extractArray(partialResult);
        results.push(...array);
        if (array.length < step)
            break;
        skip += step;
    }
    return results;
};
export const getOpenPositions = async ({ chainId, account, first, marketId, }) => {
    invariant(chainId in CHAINS, "Unsupported chainId");
    const url = NETWORKS[chainId].SUBGRAPH_URL;
    return requestAllWithStep({
        url,
        document: getOpenPositionsQuery(!!marketId),
        step: first ?? 1000,
        extractArray: (result) => result?.account?.positions ?? [],
        variables: {
            account,
            ...(marketId && { marketId }),
        },
    });
};
export const getUnwindPositions = async ({ chainId, account, first, }) => {
    invariant(chainId in CHAINS, "Unsupported chainId");
    const url = NETWORKS[chainId].SUBGRAPH_URL;
    return requestAllWithStep({
        url,
        document: UnwindPositionsQueryDocument,
        step: first ?? 1000,
        extractArray: (result) => result?.account?.unwinds ?? [],
        variables: {
            account,
        },
    });
};
export const getLiquidatedPositions = async ({ chainId, account, first, }) => {
    invariant(chainId in CHAINS, "Unsupported chainId");
    const url = NETWORKS[chainId].SUBGRAPH_URL;
    return requestAllWithStep({
        url,
        document: LiquidatedPositionsQueryDocument,
        step: first ?? 1000,
        extractArray: (result) => result?.account?.liquidates ?? [],
        variables: {
            account,
        },
    });
};
export const getActiveMarketsFromSubgraph = async (chainId) => {
    invariant(chainId in CHAINS, "Unsupported chainId");
    try {
        const data = await request(NETWORKS[chainId].SUBGRAPH_URL, ActiveMarketsQueryDocument);
        return data.markets;
    }
    catch (error) {
        console.error("Error fetching active markets data:", error);
        return undefined;
    }
};
//# sourceMappingURL=subgraph.js.map