export declare const OverlayV1StateABI: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Factory";
        readonly name: "_factory";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "fractionOfCapOi";
        readonly type: "uint256";
    }];
    readonly name: "ask";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "ask_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "fractionOfCapOi";
        readonly type: "uint256";
    }];
    readonly name: "bid";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "bid_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }];
    readonly name: "capOi";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "capOi_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }];
    readonly name: "circuitBreakerLevel";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "circuitBreakerLevel_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "id";
        readonly type: "uint256";
    }];
    readonly name: "collateral";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "collateral_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "id";
        readonly type: "uint256";
    }];
    readonly name: "cost";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "cost_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "collateral";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "leverage";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "isLong";
        readonly type: "bool";
    }];
    readonly name: "costEstimate";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "cost_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "feed";
        readonly type: "address";
    }];
    readonly name: "data";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "microWindow";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "macroWindow";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "priceOverMicroWindow";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "priceOverMacroWindow";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "priceOneMacroWindowAgo";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "reserveOverMicroWindow";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "hasReserve";
            readonly type: "bool";
        }];
        readonly internalType: "struct Oracle.Data";
        readonly name: "data_";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "id";
        readonly type: "uint256";
    }];
    readonly name: "debt";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "debt_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "collateral";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "leverage";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "isLong";
        readonly type: "bool";
    }];
    readonly name: "debtEstimate";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "debt_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "factory";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "oi";
        readonly type: "uint256";
    }];
    readonly name: "fractionOfCapOi";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "fractionOfCapOi_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }];
    readonly name: "fundingRate";
    readonly outputs: readonly [{
        readonly internalType: "int256";
        readonly name: "fundingRate_";
        readonly type: "int256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "id";
        readonly type: "uint256";
    }];
    readonly name: "liquidatable";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "liquidatable_";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "id";
        readonly type: "uint256";
    }];
    readonly name: "liquidationFee";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "liquidationFee_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "id";
        readonly type: "uint256";
    }];
    readonly name: "liquidationPrice";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "liquidationPrice_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "collateral";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "leverage";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "isLong";
        readonly type: "bool";
    }];
    readonly name: "liquidationPriceEstimate";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "liquidationPrice_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "id";
        readonly type: "uint256";
    }];
    readonly name: "maintenanceMargin";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "maintenanceMargin_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "collateral";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "leverage";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "isLong";
        readonly type: "bool";
    }];
    readonly name: "maintenanceMarginEstimate";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "maintenanceMargin_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "id";
        readonly type: "uint256";
    }];
    readonly name: "marginExcessBeforeLiquidation";
    readonly outputs: readonly [{
        readonly internalType: "int256";
        readonly name: "excess_";
        readonly type: "int256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "feed";
        readonly type: "address";
    }];
    readonly name: "market";
    readonly outputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market_";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }];
    readonly name: "marketState";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "bid";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "ask";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "mid";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "volumeBid";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "volumeAsk";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "oiLong";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "oiShort";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "capOi";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "circuitBreakerLevel";
            readonly type: "uint256";
        }, {
            readonly internalType: "int256";
            readonly name: "fundingRate";
            readonly type: "int256";
        }];
        readonly internalType: "struct IOverlayV1State.MarketState";
        readonly name: "state_";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }];
    readonly name: "mid";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "mid_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }];
    readonly name: "minted";
    readonly outputs: readonly [{
        readonly internalType: "int256";
        readonly name: "minted_";
        readonly type: "int256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "id";
        readonly type: "uint256";
    }];
    readonly name: "notional";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "notional_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "id";
        readonly type: "uint256";
    }];
    readonly name: "oi";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "oi_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "collateral";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "leverage";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "isLong";
        readonly type: "bool";
    }];
    readonly name: "oiEstimate";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "oi_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }];
    readonly name: "ois";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "oiLong_";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "oiShort_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "id";
        readonly type: "uint256";
    }];
    readonly name: "position";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint96";
            readonly name: "notionalInitial";
            readonly type: "uint96";
        }, {
            readonly internalType: "uint96";
            readonly name: "debtInitial";
            readonly type: "uint96";
        }, {
            readonly internalType: "int24";
            readonly name: "midTick";
            readonly type: "int24";
        }, {
            readonly internalType: "int24";
            readonly name: "entryTick";
            readonly type: "int24";
        }, {
            readonly internalType: "bool";
            readonly name: "isLong";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "liquidated";
            readonly type: "bool";
        }, {
            readonly internalType: "uint240";
            readonly name: "oiShares";
            readonly type: "uint240";
        }, {
            readonly internalType: "uint16";
            readonly name: "fractionRemaining";
            readonly type: "uint16";
        }];
        readonly internalType: "struct Position.Info";
        readonly name: "position_";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "collateral";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "leverage";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "isLong";
        readonly type: "bool";
    }];
    readonly name: "positionEstimate";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint96";
            readonly name: "notionalInitial";
            readonly type: "uint96";
        }, {
            readonly internalType: "uint96";
            readonly name: "debtInitial";
            readonly type: "uint96";
        }, {
            readonly internalType: "int24";
            readonly name: "midTick";
            readonly type: "int24";
        }, {
            readonly internalType: "int24";
            readonly name: "entryTick";
            readonly type: "int24";
        }, {
            readonly internalType: "bool";
            readonly name: "isLong";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "liquidated";
            readonly type: "bool";
        }, {
            readonly internalType: "uint240";
            readonly name: "oiShares";
            readonly type: "uint240";
        }, {
            readonly internalType: "uint16";
            readonly name: "fractionRemaining";
            readonly type: "uint16";
        }];
        readonly internalType: "struct Position.Info";
        readonly name: "position_";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }];
    readonly name: "prices";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "bid_";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "ask_";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "mid_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "id";
        readonly type: "uint256";
    }];
    readonly name: "tradingFee";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "tradingFee_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "id";
        readonly type: "uint256";
    }];
    readonly name: "value";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "value_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "fractionOfCapOi";
        readonly type: "uint256";
    }];
    readonly name: "volumeAsk";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "volumeAsk_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "fractionOfCapOi";
        readonly type: "uint256";
    }];
    readonly name: "volumeBid";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "volumeBid_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IOverlayV1Market";
        readonly name: "market";
        readonly type: "address";
    }];
    readonly name: "volumes";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "volumeBid_";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "volumeAsk_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];
//# sourceMappingURL=OverlayV1State.d.ts.map