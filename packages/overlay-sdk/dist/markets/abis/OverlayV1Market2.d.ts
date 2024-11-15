export declare const OverlayV1Market2ABI: readonly [{
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "positionId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "oi";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "debt";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "isLong";
        readonly type: "bool";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "price";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "oiAfterBuild";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "oiSharesAfterBuild";
        readonly type: "uint256";
    }];
    readonly name: "Build";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "newDpUpperLimit";
        readonly type: "uint256";
    }];
    readonly name: "CacheRiskCalc";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "positionId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "collateral";
        readonly type: "uint256";
    }];
    readonly name: "EmergencyWithdraw";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "positionId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "int256";
        readonly name: "mint";
        readonly type: "int256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "price";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "oiAfterLiquidate";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "oiSharesAfterLiquidate";
        readonly type: "uint256";
    }];
    readonly name: "Liquidate";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "Paused";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "Unpaused";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "positionId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "fraction";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "int256";
        readonly name: "mint";
        readonly type: "int256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "price";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "oiAfterUnwind";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "oiSharesAfterUnwind";
        readonly type: "uint256";
    }];
    readonly name: "Unwind";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "oiLong";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "oiShort";
        readonly type: "uint256";
    }];
    readonly name: "Update";
    readonly type: "event";
}, {
    readonly inputs: readonly [{
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
        readonly name: "data";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint256";
        readonly name: "volume";
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
        readonly name: "data";
        readonly type: "tuple";
    }];
    readonly name: "backRunBound";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
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
        readonly name: "data";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint256";
        readonly name: "volume";
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
    }, {
        readonly internalType: "uint256";
        readonly name: "priceLimit";
        readonly type: "uint256";
    }];
    readonly name: "build";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "positionId_";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
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
        readonly name: "data";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint256";
        readonly name: "cap";
        readonly type: "uint256";
    }];
    readonly name: "capNotionalAdjustedForBounds";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "cap";
        readonly type: "uint256";
    }];
    readonly name: "capOiAdjustedForCircuitBreaker";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint32";
            readonly name: "timestamp";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "window";
            readonly type: "uint32";
        }, {
            readonly internalType: "int192";
            readonly name: "accumulator";
            readonly type: "int192";
        }];
        readonly internalType: "struct Roller.Snapshot";
        readonly name: "snapshot";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint256";
        readonly name: "cap";
        readonly type: "uint256";
    }];
    readonly name: "circuitBreaker";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
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
        readonly name: "data";
        readonly type: "tuple";
    }];
    readonly name: "dataIsValid";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "dpUpperLimit";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "positionId";
        readonly type: "uint256";
    }];
    readonly name: "emergencyWithdraw";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
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
    readonly inputs: readonly [];
    readonly name: "feed";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
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
        readonly name: "data";
        readonly type: "tuple";
    }];
    readonly name: "frontRunBound";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256[15]";
        readonly name: "_params";
        readonly type: "uint256[15]";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "isShutdown";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "positionId";
        readonly type: "uint256";
    }];
    readonly name: "liquidate";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "oiOverweight";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "oiUnderweight";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "timeElapsed";
        readonly type: "uint256";
    }];
    readonly name: "oiAfterFunding";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "notional";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "midPrice";
        readonly type: "uint256";
    }];
    readonly name: "oiFromNotional";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "oiLong";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "oiLongShares";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "oiShort";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "oiShortShares";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "ov";
    readonly outputs: readonly [{
        readonly internalType: "contract IOverlayV1Token";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "params";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "pause";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "paused";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly name: "positions";
    readonly outputs: readonly [{
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
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "enum Risk.Parameters";
        readonly name: "name";
        readonly type: "uint8";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "setRiskParam";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "shutdown";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "snapshotMinted";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "timestamp";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint32";
        readonly name: "window";
        readonly type: "uint32";
    }, {
        readonly internalType: "int192";
        readonly name: "accumulator";
        readonly type: "int192";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "snapshotVolumeAsk";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "timestamp";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint32";
        readonly name: "window";
        readonly type: "uint32";
    }, {
        readonly internalType: "int192";
        readonly name: "accumulator";
        readonly type: "int192";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "snapshotVolumeBid";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "timestamp";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint32";
        readonly name: "window";
        readonly type: "uint32";
    }, {
        readonly internalType: "int192";
        readonly name: "accumulator";
        readonly type: "int192";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "timestampUpdateLast";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "unpause";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "positionId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "fraction";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "priceLimit";
        readonly type: "uint256";
    }];
    readonly name: "unwind";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "update";
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
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];
//# sourceMappingURL=OverlayV1Market2.d.ts.map