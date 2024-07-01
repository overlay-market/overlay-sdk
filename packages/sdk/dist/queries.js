"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnwindPositionsQuery = exports.OpenPositionsQuery = void 0;
const graphql_request_1 = require("graphql-request");
exports.OpenPositionsQuery = (0, graphql_request_1.gql) `
  query openPositions($account: ID!, $first: Int, $skip: Int) {
    account(id: $account) {
      positions(
        where: { isLiquidated: false, currentOi_gt: "0" }
        orderBy: createdAtTimestamp
        orderDirection: desc
        first: $first
        skip: $skip
      ) {
        id
        createdAtTimestamp
        currentOi
        entryPrice
        initialCollateral
        isLiquidated
        isLong
        leverage
        numberOfUniwnds
        positionId
        market {
          feedAddress
          id
        }
      }
    }
  }
`;
exports.UnwindPositionsQuery = (0, graphql_request_1.gql) `
  query unwinds($account: ID!, $first: Int, $skip: Int) {
    account(id: $account) {
      unwinds(
        orderBy: timestamp
        orderDirection: desc
        first: $first
        skip: $skip
      ) {
        collateral
        currentDebt
        currentOi
        fraction
        fractionOfPosition
        id
        isLong
        mint
        pnl
        price
        size
        timestamp
        transferAmount
        unwindNumber
        value
        position {
          createdAtTimestamp
          currentOi
          entryPrice
          id
          initialCollateral
          isLong
          leverage
          numberOfUniwnds
          positionId
          market {
            feedAddress
            id
          }
        }
      }
    }
  }
`;
