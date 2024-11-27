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
        fraction
        fractionOfPosition
        id
        mint
        pnl
        price
        size
        timestamp
        transferAmount
        unwindNumber
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
        id
        mint
        price
        timestamp
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

export const NumberOfPositionsQuery = gql`
  query numberOfPositions($account: ID!) {
    account(id: $account) {
      numberOfLiquidatedPositions
      numberOfOpenPositions
      numberOfUnwinds
      realizedPnl
    }
  }
`;

export const PositionQuery = gql`
query queryPosition($account: ID!, $marketPositionId: ID!) {
  account(id: $account) {
    positions(
      first: 1000
      orderBy: createdAtTimestamp
      orderDirection: desc
      where: { id: $marketPositionId }
    ) {
      id
      positionId
      market {
        id
        feedAddress
        isShutdown
      }
      initialOi
      initialDebt
      initialCollateral
      initialNotional
      leverage
      isLong
      entryPrice
      isLiquidated
      currentOi
      currentDebt
      mint
      createdAtTimestamp
      createdAtBlockNumber
      numberOfUniwnds
      fractionUnwound
      builds {
        id
        price
        timestamp
      }
      liquidates {
        id
        mint
        price
        timestamp
      }
      unwinds(orderBy: unwindNumber, orderDirection: asc) {
        fraction
        id
        mint
        timestamp
        price
        unwindNumber
        transferAmount
        pnl
        size
      }
    }
  }
}`

export const TotalSupplyHistory = gql`
query TotalSupplyHistory($first: Int!) {
  totalSupplyHourDatas(
    orderBy: periodStartUnix
    orderDirection: desc
    first: $first
  ) {
    periodStartUnix
    close
  }
}`;

export const LastBlockQuery = gql`
query LastBlockQuery {
  _meta {
    block {
      number
    }
  }
}`;