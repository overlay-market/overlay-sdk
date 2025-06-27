export enum TradeState {
  PositionUnderwater = "Position Underwater",
  ExceedsOICap = "Exceeds OI Cap",
  ExceedsCircuitBreakerOICap = "Exceeds Circuit Breaker OI Cap",
  OVLBalanceBelowMinimum = "OVL Balance Below Minimum",
  NeedsApproval = "Approve OVL",
  Trade = "Trade",
  TradeHighPriceImpact = "Trade - High Price Impact",
  AmountExceedsMaxInput = "Amount Exceeds Max Input",
  AmountBelowMinCollateral = "Amount Below Min Collateral",
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
  fractionValue: string | number;
  oi: string | number;
  fractionOi: string | number;
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
  positionId: number;
  marketAddress: string;
  useShiva: boolean;
}

export type UnwindStateError = {
  error: string;
  isShutdown: boolean;
  cost: number | string | bigint;
  unwindState: UnwindState;
  positionId: number;
  marketAddress: string;
}

export type UnwindStateData = UnwindStateSuccess | UnwindStateError;

export type TradeStateOnchainData = {
  midPrice: bigint,
  oiEstimated: bigint,
  ois: [bigint, bigint],
  capOi: bigint,
  circuitBreakerLevel: bigint,
  liquidationPrice: bigint,
  marketState: {
    bid: bigint;
    ask: bigint;
    mid: bigint;
    volumeBid: bigint;
    volumeAsk: bigint;
    oiLong: bigint;
    oiShort: bigint;
    capOi: bigint;
    circuitBreakerLevel: bigint;
    fundingRate: bigint;
  },
  minCollateral: bigint,
  tradingFeeRate: bigint,
  balance: bigint,
  currentAllowance: bigint
}