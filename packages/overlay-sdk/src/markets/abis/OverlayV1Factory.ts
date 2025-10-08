// Minimal ABI for OverlayV1Factory contract
// Used to validate markets and query factory state
export const OverlayV1FactoryABI = [
  {
    inputs: [{ internalType: "address", name: "market", type: "address" }],
    name: "isMarket",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "feed", type: "address" }],
    name: "getMarket",
    outputs: [{ internalType: "address", name: "market_", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "feedFactory", type: "address" }],
    name: "isFeedFactory",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ovl",
    outputs: [{ internalType: "contract IOverlayV1Token", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeRecipient",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
] as const;
