import { BigNumber } from "ethers";

export const LINKS = {
  MARKET_PRICES_API: "https://api.overlay.market/sepolia-charts/v1/charts",
  URL: "https://api.studio.thegraph.com/query/77621/overlay-sepolia-test-less-call/version/latest",
};

export type MarketDetailsData = {
  marketName: string;
  currency: string;
};

export const ONE_BN = BigNumber.from(10).pow(18);

export const PRICE_CURRENCY_FROM_QUOTE = {
  USD: "$",
  USDC: "$",
  DAI: "$",
  ETH: "Ξ",
  WETH: "Ξ",
  AETH: "Ξ",
  BTC: "₿",
  PERCENTAGE: "%",
};

export const MarketDetails: { [address: string]: MarketDetailsData } = {
  "0x6aa41b8f2f858723aafcf388a90d34d1cb1162d9": {
    marketName: "Counter-Strike 2 Skins",
    currency: PRICE_CURRENCY_FROM_QUOTE["USD"],
  },
  "0x6bd76270a8e8e0c3c030f050134389777a3a7d7e": {
    marketName: "Counter-Strike 2 Skins",
    currency: PRICE_CURRENCY_FROM_QUOTE["USD"],
  },
  "0x7c65c99ba1edfc94c535b7aa2d72b0f7357a676b": {
    marketName: "Crypto Volatility Index",
    currency: "",
  },
  "0xf2ddf700fc481be8ce1f228da5c913f1a25a2d2d": {
    marketName: "ETH Burn Rate",
    currency: PRICE_CURRENCY_FROM_QUOTE["WETH"],
  },
  "0x553de578e68a4faa55d4522665cb2d2d53390d22": {
    marketName: "BTC Dominance",
    currency: PRICE_CURRENCY_FROM_QUOTE["PERCENTAGE"],
  },
  "0x56ff2e923e5c05479ac4c47a3d5ed9a204cc673b": {
    marketName: "BTC Dominance",
    currency: PRICE_CURRENCY_FROM_QUOTE["PERCENTAGE"],
  },
  "0xb31d222c23104cbc2c04df77941f1f2c478133dd": {
    marketName: "BAYC / WETH",
    currency: PRICE_CURRENCY_FROM_QUOTE["WETH"],
  },
  "0x35e1d28ad9d8a80cff5bbf163a735c54eb6c1342": {
    marketName: "AZUKI / WETH",
    currency: PRICE_CURRENCY_FROM_QUOTE["WETH"],
  },
  "0x8c82c349e349ffd9403c3984cb1ad1b0f76f7d2e": {
    marketName: "PUNKS / WETH",
    currency: PRICE_CURRENCY_FROM_QUOTE["WETH"],
  },
  "0xce45c64911bd0a088daabd73ee1bc09ae98cd84b": {
    marketName: "PUNKS / WETH",
    currency: PRICE_CURRENCY_FROM_QUOTE["WETH"],
  },
  "0xccd645835ca0033f0c1106e7b24f288e59e867e8": {
    marketName: "MILADY / WETH",
    currency: PRICE_CURRENCY_FROM_QUOTE["WETH"],
  },
  "0x8c7dc90243fc7984583339da8df0a5d57ec491db": {
    marketName: "PUDGIES / WETH",
    currency: PRICE_CURRENCY_FROM_QUOTE["WETH"],
  },
  "0x02e5938904014901c96f534b063ec732ea3b48d5": {
    marketName: "LINK / USD",
    currency: PRICE_CURRENCY_FROM_QUOTE["USD"],
  },
  "0x1067b7df86552a53d816ce3fed50d6d01310b48f": {
    marketName: "SOL / USD",
    currency: PRICE_CURRENCY_FROM_QUOTE["USD"],
  },
  "0x33659282d39e62b62060c3f9fb2230e97db15f1e": {
    marketName: "APE / USD",
    currency: PRICE_CURRENCY_FROM_QUOTE["USD"],
  },
  "0x5114215415ee91ab5d973ba62fa9153ece1f6c5a": {
    marketName: "NFT Blue Chip Index / USD",
    currency: PRICE_CURRENCY_FROM_QUOTE["USD"],
  },
  "0x833ba1a942dc6d33bc3e6959637ae00e0cdcb20b": {
    marketName: "AVAX / USD",
    currency: PRICE_CURRENCY_FROM_QUOTE["USD"],
  },
  "0xa811698d855153cc7472d1fb356149a94bd618e7": {
    marketName: "MATIC / USD",
    currency: PRICE_CURRENCY_FROM_QUOTE["USD"],
  },
  "0xc28350047d006ed387b0f210d4ea3218137a8a38": {
    marketName: "WBTC / USD",
    currency: PRICE_CURRENCY_FROM_QUOTE["USD"],
  },
  "0x3a204d03e9b1fee01b8989333665b6c46cc1f79e": {
    marketName: "ETH Dominance",
    currency: PRICE_CURRENCY_FROM_QUOTE["PERCENTAGE"],
  },
  "0xc7f3240d983fcab7a571be484d2b4da43b95efee": {
    marketName: "Bitcoin Frogs",
    currency: PRICE_CURRENCY_FROM_QUOTE["BTC"],
  },
  "0xef898dbf4f4d75bdfbdd85f781a6c1bf8edaf0ae": {
    marketName: "NodeMonkes",
    currency: PRICE_CURRENCY_FROM_QUOTE["BTC"],
  },
  "0x4edfb4057f3a448b2704df1a3665db4ae6371b69": {
    marketName: "Quantum Cats",
    currency: PRICE_CURRENCY_FROM_QUOTE["BTC"],
  },
  "0xe060ea13b2e710cefc5124bb790db4823b0f602a": {
    marketName: "Ink",
    currency: PRICE_CURRENCY_FROM_QUOTE["BTC"],
  },
  "0x770e3a8afc5c01855b5bd8eb5b96b23bd7af1e43": {
    marketName: "Electric Vehicle Commodity Index",
    currency: PRICE_CURRENCY_FROM_QUOTE["USD"],
  },
  "0xad90fff9d159e18cec2048dd6881e29886e4899e": {
    marketName: "AI Index",
    currency: PRICE_CURRENCY_FROM_QUOTE["USD"],
  },
  "0x3966f792517e2df998c48301163c2a95bfd3eff8": {
    marketName: "ETH / SOL",
    currency: "",
  },
};
