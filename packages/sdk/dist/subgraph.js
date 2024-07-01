"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUnwindPositions = exports.getOpenPositions = void 0;
const graphql_request_1 = require("graphql-request");
const queries_1 = require("./queries");
const parseSubgraphUrl = (value) => {
    if (typeof value === 'string')
        return { url: value };
    else
        return value;
};
const requestAllWithStep = async ({ url, step, document, variables, extractArray, }) => {
    let skip = 0;
    const results = [];
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const partialResult = await (0, graphql_request_1.request)({
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
        // break if we don't fetch more than step
        if (array.length < step)
            break;
        skip += step;
    }
    return results;
};
const getOpenPositions = async ({ url, account, first, }) => {
    return requestAllWithStep({
        url,
        document: queries_1.OpenPositionsQuery,
        step: first ?? 1000,
        extractArray: (result) => result?.account?.positions ?? [],
        variables: {
            account,
        },
    });
};
exports.getOpenPositions = getOpenPositions;
const getUnwindPositions = async ({ url, account, first, skip, }) => {
    return requestAllWithStep({
        url,
        document: queries_1.UnwindPositionsQuery,
        step: first ?? 1000,
        extractArray: (result) => result?.account?.unwinds ?? [],
        variables: {
            account,
        },
    });
};
exports.getUnwindPositions = getUnwindPositions;
