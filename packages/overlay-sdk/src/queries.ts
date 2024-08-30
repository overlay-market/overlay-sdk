import { gql } from "graphql-request";

export const OpenPositionsQuery = gql`
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
    markets(where: {isShutdown: false}) {
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