export enum TradeState {
  PositionUnderwater = "Position Underwater",
  ExceedsOICap = "Exceeds OI Cap",
  ExceedsCircuitBreakerOICap = "Exceeds Circuit Breaker OI Cap",
  OVLBalanceBelowMinimum = "OVL Balance Below Minimum",
  NeedsApproval = "Needs Approval",
  Build = "Build",
  BuildHighPriceImpact = "Build - High Price Impact"
}