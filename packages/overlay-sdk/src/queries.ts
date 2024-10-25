import { gql } from "graphql-request";

export const getOpenPositionsQuery = (filterByMarket: boolean) => {
  return gql`
    query openPositions($account: ID!, $first: Int, $skip: Int${filterByMarket ? ", $marketId: ID" : ""}) {
      account(id: $account) {
        positions(
          where: {
            isLiquidated: false
            fractionUnwound_lt: "1000000000000000000"
            ${filterByMarket ? "market_: {id: $marketId}" : ""}
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
}

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

export const ActiveMarketsQuery = gql`
  query activeMarkets {
    markets(where: { isShutdown: false }) {
      id
      feedAddress
      factory {
        id
      }
      k
      lmbda
      delta
      capPayoff
      capNotional
      capLeverage
      circuitBreakerWindow
      circuitBreakerMintTarget
      maintenanceMarginFraction
      maintenanceMarginBurnRate
      liquidationFeeRate
      tradingFeeRate
      minCollateral
      priceDriftUpperLimit
      averageBlockTime
      isShutdown
    }
  }
`;

export const LiquidatedPositionsQuery = gql`
  query liquidatedPositions($account: ID!, $first: Int, $skip: Int) {
    account(id: $account) {
      liquidates(
        orderBy: timestamp
        orderDirection: desc
        first: $first
        skip: $skip
      ) {
        collateral
        currentDebt
        currentOi
        id
        isLong
        mint
        price
        timestamp
        value
        size
        position {
          createdAtTimestamp
          currentOi
          entryPrice
          fractionUnwound
          id
          initialCollateral
          isLong
          leverage
          market {
            feedAddress
            id
          }
        }
      }
    }
  }
`;
