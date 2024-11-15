export var TradeState;
(function (TradeState) {
    TradeState["PositionUnderwater"] = "Position Underwater";
    TradeState["ExceedsOICap"] = "Exceeds OI Cap";
    TradeState["ExceedsCircuitBreakerOICap"] = "Exceeds Circuit Breaker OI Cap";
    TradeState["OVLBalanceBelowMinimum"] = "OVL Balance Below Minimum";
    TradeState["NeedsApproval"] = "Approve OVL";
    TradeState["Trade"] = "Trade";
    TradeState["TradeHighPriceImpact"] = "Trade - High Price Impact";
    TradeState["AmountExceedsMaxInput"] = "Amount Exceeds Max Input";
})(TradeState || (TradeState = {}));
export var UnwindState;
(function (UnwindState) {
    UnwindState["PositionUnderwater"] = "Position Underwater";
    UnwindState["PercentageBelowMinimum"] = "Percentage Below Minimum";
    UnwindState["UnwindAmountTooHigh"] = "Unwind Amount Too High";
    UnwindState["Unwind"] = "Unwind";
    UnwindState["PositionNotFound"] = "Position Not Found";
    UnwindState["Withdraw"] = "Withdraw OVL";
})(UnwindState || (UnwindState = {}));
//# sourceMappingURL=types.js.map