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
}