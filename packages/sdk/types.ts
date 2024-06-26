export interface OpenPosition {
    id: string;
    createdAtTimestamp: number;
    currentOi: string;
    entryPrice: string;
    initialCollateral: string;
    isLiquidated: boolean;
    isLong: boolean;
    leverage: number;
    numberOfUniwnds: number;
    positionId: string;
    market: {
      feedAddress: string;
      id: string;
    };
  }
  
  export interface GetOpenPositionsOptions {
    url: SubgraphUrl;
    account: string;
    first?: number; // Optional, defaults to 1000 in subgraph.ts
    skip?: number;
  }

  export interface UnwindPosition {
    collateral: string;
    currentDebt: string; // Assuming this field should be currentDebt, not currentDebtß
    currentOi: string;
    fraction: string;
    fractionOfPosition: string;
    id: string;
    isLong: boolean;
    mint: string;
    pnl: string;
    price: string;
    size: string;
    timestamp: number;
    transferAmount: string;
    unwindNumber: number;
    value: string;
    position: {
      createdAtTimestamp: number;
      currentOi: string;
      entryPrice: string;
      id: string;
      initialCollateral: string;
      isLong: boolean;
      leverage: number;
      numberOfUniwnds: number;
      positionId: string;
      market: {
        feedAddress: string;
        id: string;
      };
    };
  }
  
  export interface GetUnwindPositionsOptions {
    url: SubgraphUrl;
    account: string;
    first?: number; // Optional, defaults to 1000 in subgraph.ts
    skip?: number;
  }
  
  export type SubgraphUrl = string | { url: string };
  