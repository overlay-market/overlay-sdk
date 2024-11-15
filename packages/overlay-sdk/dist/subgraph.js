import { request } from "graphql-request";
import { UnwindPositionsQuery as UnwindPositionsQueryDocument, ActiveMarketsQuery as ActiveMarketsQueryDocument, LiquidatedPositionsQuery as LiquidatedPositionsQueryDocument, OpenPositionsQuery as OpenPositionsQueryDocument, NumberOfPositionsQuery as NumberOfPositionsQueryDocument, PositionQuery as PositionQueryDocument, } from "./queries";
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
export const getOpenPositions = async ({ chainId, account, first, }) => {
    invariant(chainId in CHAINS, "Unsupported chainId");
    const url = NETWORKS[chainId].SUBGRAPH_URL;
    return requestAllWithStep({
        url,
        document: OpenPositionsQueryDocument,
        step: first ?? 1000,
        extractArray: (result) => result?.account?.positions ?? [],
        variables: {
            account,
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
export const getNumberOfPositions = async (chainId, account) => {
    invariant(chainId in CHAINS, "Unsupported chainId");
    const url = NETWORKS[chainId].SUBGRAPH_URL;
    try {
        const result = await request({
            document: NumberOfPositionsQueryDocument,
            url,
            variables: {
                account,
            },
        });
        return result;
    }
    catch (error) {
        console.error("Error fetching number of positions data:", error);
        return undefined;
    }
};
export const getPositionDetails = async (chainId, account, marketPositionId) => {
    invariant(chainId in CHAINS, "Unsupported chainId");
    const url = NETWORKS[chainId].SUBGRAPH_URL;
    try {
        const result = await request({
            document: PositionQueryDocument,
            url,
            variables: {
                account,
                marketPositionId,
            },
        });
        return result;
    }
    catch (error) {
        console.error("Error fetching number of positions data:", error);
        return undefined;
    }
};
//# sourceMappingURL=subgraph.js.map