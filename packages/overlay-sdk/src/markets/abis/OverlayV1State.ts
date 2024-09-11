export const OverlayV1StateABI = [
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Factory",
        name: "_factory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
      { internalType: "uint256", name: "fractionOfCapOi", type: "uint256" },
    ],
    name: "ask",
    outputs: [{ internalType: "uint256", name: "ask_", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
      { internalType: "uint256", name: "fractionOfCapOi", type: "uint256" },
    ],
    name: "bid",
    outputs: [{ internalType: "uint256", name: "bid_", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
    ],
    name: "capOi",
    outputs: [{ internalType: "uint256", name: "capOi_", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
    ],
    name: "circuitBreakerLevel",
    outputs: [
      {
        internalType: "uint256",
        name: "circuitBreakerLevel_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "collateral",
    outputs: [
      { internalType: "uint256", name: "collateral_", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "cost",
    outputs: [{ internalType: "uint256", name: "cost_", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
      { internalType: "uint256", name: "collateral", type: "uint256" },
      { internalType: "uint256", name: "leverage", type: "uint256" },
      { internalType: "bool", name: "isLong", type: "bool" },
    ],
    name: "costEstimate",
    outputs: [{ internalType: "uint256", name: "cost_", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "feed", type: "address" }],
    name: "data",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "timestamp", type: "uint256" },
          { internalType: "uint256", name: "microWindow", type: "uint256" },
          { internalType: "uint256", name: "macroWindow", type: "uint256" },
          {
            internalType: "uint256",
            name: "priceOverMicroWindow",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "priceOverMacroWindow",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "priceOneMacroWindowAgo",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserveOverMicroWindow",
            type: "uint256",
          },
          { internalType: "bool", name: "hasReserve", type: "bool" },
        ],
        internalType: "struct Oracle.Data",
        name: "data_",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "debt",
    outputs: [{ internalType: "uint256", name: "debt_", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
      { internalType: "uint256", name: "collateral", type: "uint256" },
      { internalType: "uint256", name: "leverage", type: "uint256" },
      { internalType: "bool", name: "isLong", type: "bool" },
    ],
    name: "debtEstimate",
    outputs: [{ internalType: "uint256", name: "debt_", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
      { internalType: "uint256", name: "oi", type: "uint256" },
    ],
    name: "fractionOfCapOi",
    outputs: [
      { internalType: "uint256", name: "fractionOfCapOi_", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
    ],
    name: "fundingRate",
    outputs: [{ internalType: "int256", name: "fundingRate_", type: "int256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "liquidatable",
    outputs: [{ internalType: "bool", name: "liquidatable_", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "liquidationFee",
    outputs: [
      { internalType: "uint256", name: "liquidationFee_", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "liquidationPrice",
    outputs: [
      { internalType: "uint256", name: "liquidationPrice_", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
      { internalType: "uint256", name: "collateral", type: "uint256" },
      { internalType: "uint256", name: "leverage", type: "uint256" },
      { internalType: "bool", name: "isLong", type: "bool" },
    ],
    name: "liquidationPriceEstimate",
    outputs: [
      { internalType: "uint256", name: "liquidationPrice_", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "maintenanceMargin",
    outputs: [
      { internalType: "uint256", name: "maintenanceMargin_", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
      { internalType: "uint256", name: "collateral", type: "uint256" },
      { internalType: "uint256", name: "leverage", type: "uint256" },
      { internalType: "bool", name: "isLong", type: "bool" },
    ],
    name: "maintenanceMarginEstimate",
    outputs: [
      { internalType: "uint256", name: "maintenanceMargin_", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "marginExcessBeforeLiquidation",
    outputs: [{ internalType: "int256", name: "excess_", type: "int256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "feed", type: "address" }],
    name: "market",
    outputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
    ],
    name: "marketState",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "bid", type: "uint256" },
          { internalType: "uint256", name: "ask", type: "uint256" },
          { internalType: "uint256", name: "mid", type: "uint256" },
          { internalType: "uint256", name: "volumeBid", type: "uint256" },
          { internalType: "uint256", name: "volumeAsk", type: "uint256" },
          { internalType: "uint256", name: "oiLong", type: "uint256" },
          { internalType: "uint256", name: "oiShort", type: "uint256" },
          { internalType: "uint256", name: "capOi", type: "uint256" },
          {
            internalType: "uint256",
            name: "circuitBreakerLevel",
            type: "uint256",
          },
          { internalType: "int256", name: "fundingRate", type: "int256" },
        ],
        internalType: "struct IOverlayV1State.MarketState",
        name: "state_",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
    ],
    name: "mid",
    outputs: [{ internalType: "uint256", name: "mid_", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
    ],
    name: "minted",
    outputs: [{ internalType: "int256", name: "minted_", type: "int256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "notional",
    outputs: [{ internalType: "uint256", name: "notional_", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "oi",
    outputs: [{ internalType: "uint256", name: "oi_", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
      { internalType: "uint256", name: "collateral", type: "uint256" },
      { internalType: "uint256", name: "leverage", type: "uint256" },
      { internalType: "bool", name: "isLong", type: "bool" },
    ],
    name: "oiEstimate",
    outputs: [{ internalType: "uint256", name: "oi_", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
    ],
    name: "ois",
    outputs: [
      { internalType: "uint256", name: "oiLong_", type: "uint256" },
      { internalType: "uint256", name: "oiShort_", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "position",
    outputs: [
      {
        components: [
          { internalType: "uint96", name: "notionalInitial", type: "uint96" },
          { internalType: "uint96", name: "debtInitial", type: "uint96" },
          { internalType: "int24", name: "midTick", type: "int24" },
          { internalType: "int24", name: "entryTick", type: "int24" },
          { internalType: "bool", name: "isLong", type: "bool" },
          { internalType: "bool", name: "liquidated", type: "bool" },
          { internalType: "uint240", name: "oiShares", type: "uint240" },
          { internalType: "uint16", name: "fractionRemaining", type: "uint16" },
        ],
        internalType: "struct Position.Info",
        name: "position_",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
      { internalType: "uint256", name: "collateral", type: "uint256" },
      { internalType: "uint256", name: "leverage", type: "uint256" },
      { internalType: "bool", name: "isLong", type: "bool" },
    ],
    name: "positionEstimate",
    outputs: [
      {
        components: [
          { internalType: "uint96", name: "notionalInitial", type: "uint96" },
          { internalType: "uint96", name: "debtInitial", type: "uint96" },
          { internalType: "int24", name: "midTick", type: "int24" },
          { internalType: "int24", name: "entryTick", type: "int24" },
          { internalType: "bool", name: "isLong", type: "bool" },
          { internalType: "bool", name: "liquidated", type: "bool" },
          { internalType: "uint240", name: "oiShares", type: "uint240" },
          { internalType: "uint16", name: "fractionRemaining", type: "uint16" },
        ],
        internalType: "struct Position.Info",
        name: "position_",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
    ],
    name: "prices",
    outputs: [
      { internalType: "uint256", name: "bid_", type: "uint256" },
      { internalType: "uint256", name: "ask_", type: "uint256" },
      { internalType: "uint256", name: "mid_", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "tradingFee",
    outputs: [
      { internalType: "uint256", name: "tradingFee_", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "value",
    outputs: [{ internalType: "uint256", name: "value_", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
      { internalType: "uint256", name: "fractionOfCapOi", type: "uint256" },
    ],
    name: "volumeAsk",
    outputs: [{ internalType: "uint256", name: "volumeAsk_", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
      { internalType: "uint256", name: "fractionOfCapOi", type: "uint256" },
    ],
    name: "volumeBid",
    outputs: [{ internalType: "uint256", name: "volumeBid_", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOverlayV1Market",
        name: "market",
        type: "address",
      },
    ],
    name: "volumes",
    outputs: [
      { internalType: "uint256", name: "volumeBid_", type: "uint256" },
      { internalType: "uint256", name: "volumeAsk_", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
