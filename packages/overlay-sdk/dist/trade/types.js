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
//# sourceMappingURL=types.js.map