export enum TradeState {
  PositionUnderwater = "Position Underwater",
  ExceedsOICap = "Exceeds OI Cap",
  ExceedsCircuitBreakerOICap = "Exceeds Circuit Breaker OI Cap",
  OVLBalanceBelowMinimum = "OVL Balance Below Minimum",
  NeedsApproval = "Approve OVL",
  Trade = "Trade",
  TradeHighPriceImpact = "Trade - High Price Impact",
  AmountExceedsMaxInput = "Amount Exceeds Max Input",
}

export enum UnwindState {
  PositionUnderwater = "Position Underwater",
  PercentageBelowMinimum = "Percentage Below Minimum",
  UnwindAmountTooHigh = "Unwind Amount Too High",
  Unwind = "Unwind",
  PositionNotFound = "Position Not Found",
  Withdraw = "Withdraw OVL",
}

export type TradeStateData = {
  liquidationPriceEstimate: string | number;
  expectedOi: string | number;
  maxInputIncludingFees: number;
  priceInfo: {
    price: string | number | bigint;
    minPrice: string | number | bigint;
    priceImpactPercentage: string;
  };
  tradeState: TradeState;
  tradingFeeRate: number;
  estimatedCollateral: number;
}

export type UnwindStateSuccess = {
  pnl: string | number;
  side: string;
  value: string | number;
  rawValue: bigint;
  oi: string | number;
  rawOi: bigint;
  leverage: string;
  debt: string | number;
  cost: string;
  currentCollateral: string | number;
  currentNotional: string | number;
  initialCollateral: string | number;
  initialNotional: string | number;
  maintenanceMargin: string | number;
  entryPrice: string;
  currentPrice: string | number | bigint;
  estimatedReceivedPrice: string | number | bigint;
  priceImpact: string;
  liquidationPrice: string | number | bigint;
  unwindState: UnwindState;
  priceLimit: bigint;
}

export type UnwindStateError = {
  error: string;
  isShutdown: boolean;
  cost: number | string | bigint;
  unwindState: UnwindState;
}

export type UnwindStateData = UnwindStateSuccess | UnwindStateError;