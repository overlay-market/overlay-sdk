import { gql } from "graphql-request";

export const OpenPositionsQuery = gql`
  query openPositions($account: ID!, $first: Int, $skip: Int) {
    account(id: $account) {
      positions(
        where: {
          isLiquidated: false
          fractionUnwound_lt: "1000000000000000000"
        }
        orderBy: createdAtTimestamp
        orderDirection: desc
        first: $first
        skip: $skip
      ) {
        fractionUnwound
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

export const UnwindPositionsQuery = gql`
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
