import { Address, zeroAddress } from "viem";
import BtcdLogo from "./assets/markets_logo/bitcoin-dominance-logo.png";
import EthDominanceLogo from "./assets/markets_logo/eth-dominance.png";
import csgoLogo from "./assets/markets_logo/csgo-logo.svg";
import BtcFrogsLogo from "./assets/markets_logo/btc-frogs.png";
import NodeMonkesLogo from "./assets/markets_logo/node-monkes.png";
import QuantumCatsLogo from "./assets/markets_logo/quantum-cats.png";
import InkLogo from "./assets/markets_logo/ink.png";
import EvIndexLogo from "./assets/markets_logo/ev-index.png";
import EthSolLogo from "./assets/markets_logo/ethsol.png";
import AIIndexLogo from "./assets/markets_logo/AI_Index.png";
import ChainlinkOracleLogo from "./assets/oracles_logo/oracle-type-chainlink.png";
import UniswapOracleLogo from "./assets/oracles_logo/oracle-type-uniswap.png";
import NFTPerpOracleLogo from "./assets/oracles_logo/oracle-type-nftperp.png";
import OverlayOracleLogo from "./assets/oracles_logo/oracle-type-overlay.png";
import TruflationOracleLogo from "./assets/oracles_logo/oracle-type-truflation.png";
import PythOracleLogo from "./assets/oracles_logo/oracle-type-pyth.png";
import { CHAINS } from "./common";

export type MarketDetailsData = {
  marketName: string;
  currency: string;
};

export const ONE_BN = 10n ** 18n;

export const PRICE_CURRENCY_FROM_QUOTE = {
  USD: "$",
  USDC: "$",
  DAI: "$",
  ETH: "Ξ",
  WETH: "Ξ",
  AETH: "Ξ",
  BTC: "₿",
  PERCENTAGE: "%",
  BERA: "BERA",
};

export const MARKET_LOGO = {
  BtcdLogo: BtcdLogo,
  EthDominanceLogo: EthDominanceLogo,
  csgoLogo: csgoLogo,
  BtcFrogsLogo: BtcFrogsLogo,
  NodeMonkesLogo: NodeMonkesLogo,
  QuantumCatsLogo: QuantumCatsLogo,
  InkLogo: InkLogo,
  EvIndexLogo: EvIndexLogo,
  EthSolLogo: EthSolLogo,
  AIIndexLogo: AIIndexLogo,
};

export const ORACLE_LOGO = {
  CHAINLINK: ChainlinkOracleLogo,
  UNISWAP: UniswapOracleLogo,
  NFTPERP: NFTPerpOracleLogo,
  OVERLAY: OverlayOracleLogo,
  TRUFLATION: TruflationOracleLogo,
  PYTH: PythOracleLogo,
};

export const FIRST = 10;
export type AddressMap = { [chainId: number]: Address };
export type AddressFactoryPeriphery = { factory: Address; periphery: Address };
export type AddressFactoryPeripheryMap = { [chainId: number]: AddressFactoryPeriphery[] };

// V1 Periphery (State) contract addresses - used for querying position state
// These are legacy single-periphery addresses for chains that don't use multiple factories
export const V1_PERIPHERY_ADDRESS: AddressMap = {
  [CHAINS.ArbitrumSepolia]: "0x2878837ea173e8bd40db7cee360b15c1c27deb5a",
  [CHAINS.Imola]: "0x0CA6128B528f503C7c649ba9cc02560a8B9fD55e",
  [CHAINS.Bartio]: "0x4f69dfb24958fcf69b70bca73c3e74f2c82bb405",
  [CHAINS.BerachainMainnet]: "0x2a154ebA61A182e726a540ae2856fc012106e763",
  [CHAINS.Bepolia]: "0xC50C7a502e6aE874A6299f385F938aF5C30CB91d",
  [CHAINS.BscTestnet]: "0x6C57F1d360027c10b3b698b302120DaD31CB34c9",
  [CHAINS.BscMainnet]: "0x10575a9C8F36F9F42D7DB71Ef179eD9BEf8Df238",
};

/**
 * @deprecated Factory deployments are now fetched automatically from API.
 *
 * Factory to periphery (state) mappings per chain.
 * Each factory has its own periphery contract for querying position state.
 *
 * The SDK automatically fetches latest factory deployments from the API on initialization.
 * This constant is kept as a fallback for when API is unavailable or returns no data.
 */
export const V1_FACTORY_PERIPHERY: AddressFactoryPeripheryMap = {
  [CHAINS.BscTestnet]: [
    {
      factory: "0x222Ef39b61f868992F77bd68Fc9d7c82683ffA20",
      periphery: "0x6C57F1d360027c10b3b698b302120DaD31CB34c9",
    },
    {
      factory: "0xb5F885b61e2cC1515a66A2E6636FCAA43daBf044",
      periphery: "0x3A6892e5da2f87F3865aA1aEA2fcaCCE27C44ea8",
    },
    {
      // Old deployment - kept for backward compatibility with existing positions
      factory: "0xB49a63B267515FC1D8232604d05Db4D8Daf00648",
      periphery: "0x81BdBf6C69882Fe7c958018D3fF7FcAcb59EF8b7",
    },
  ],
  [CHAINS.BscMainnet]: [
    {
      factory: "0xC35093f76fF3D31Af27A893CDcec585F1899eE54",
      periphery: "0x10575a9C8F36F9F42D7DB71Ef179eD9BEf8Df238",
    },
    {
      factory: "0x5e6613da86099c264ef9cd56c142506bbf642825",
      periphery: "0x6fecbf42b2dcf4bfd3c1c60dcd956247f4abd35e",
    },
  ],
};

export const OVL_ADDRESS: AddressMap = {
  [CHAINS.ArbitrumSepolia]: "0x3E27fAe625f25291bFda517f74bf41DC40721dA2",
  [CHAINS.Imola]: "0xCde46284D32148c4D470fA33BA788710b3d21E89",
  [CHAINS.Bartio]: "0x97576e088f0d05EF68cac2EEc63d017FE90952a0",
  [CHAINS.BerachainMainnet]: "0xaeD2f0c7AaCfE2B59Cc70964833EA4C28C2CdbDB",
  [CHAINS.Bepolia]: "0xd37f15e6f2E5F4A624bbb9864f56bbd2e9b201b5",
  [CHAINS.BscTestnet]: "0x1A0eF183D548405705bb9B00E8b4ef3524AE090E",
  [CHAINS.BscMainnet]: "0x1F34c87ded863Fe3A3Cd76FAc8adA9608137C8c3",
};

export const OVL_USDT_POOL_ADDRESS: AddressMap = {
  [CHAINS.ArbitrumSepolia]: zeroAddress,
  [CHAINS.Imola]: zeroAddress,
  [CHAINS.Bartio]: zeroAddress,
  [CHAINS.BerachainMainnet]: zeroAddress,
  [CHAINS.Bepolia]: zeroAddress,
  [CHAINS.BscTestnet]: zeroAddress,
  [CHAINS.BscMainnet]: "0x927aE3c2cd88717a1525a55021AF9612C3F04583"
}

export const SHIVA_ADDRESS: AddressMap = {
  [CHAINS.ArbitrumSepolia]: zeroAddress,
  [CHAINS.Imola]: zeroAddress,
  [CHAINS.Bartio]: '0x3Cd0bC7E680006A322536311F3a9B0235bb6d865',
  [CHAINS.BerachainMainnet]: "0x7a555c83F7d2D26362C2b4954Cf01EBf9fA07DA0",
  [CHAINS.Bepolia]: "0xFf84cb66F0c302Cd860244868E10D110D8dc505D",
  [CHAINS.BscTestnet]: "0x9fB7D92526Fc13bB3c0603d39E55e5C371c26Ce6",
  [CHAINS.BscMainnet]: "0xeB497c228F130BD91E7F13f81c312243961d894A",
};

interface Network {
  MARKET_PRICES_API: string;
  SUBGRAPH_URL: string;
  MARKETS_DETAILS_API: string;
  hasShiva: boolean;
}

export const NETWORKS: { [chainId: number]: Network } = {
  [CHAINS.ArbitrumSepolia]: {
    MARKET_PRICES_API: "https://api.overlay.market/sepolia-charts/v1/charts",
    SUBGRAPH_URL:
      "https://api.studio.thegraph.com/query/77621/overlay-sepolia-test-less-call/version/latest",
    MARKETS_DETAILS_API: "https://api.overlay.market/data/api/markets",
    hasShiva: false,
  },
  [CHAINS.Imola]: {
    MARKET_PRICES_API: "https://api.overlay.market/imola-charts/v1/charts",
    SUBGRAPH_URL:
      "https://subgraph.overlay.market/query/subgraphs/NETWORKS/overlay/v1-subgraph",
    MARKETS_DETAILS_API: "https://api.overlay.market/data/api/markets",
    hasShiva: false,
  },
  [CHAINS.Bartio]: {
    MARKET_PRICES_API: "https://api.overlay.market/bartio-charts/v1/charts",
    SUBGRAPH_URL:
      "https://api.goldsky.com/api/public/project_clyiptt06ifuv01ul9xiwfj28/subgraphs/overlay-bartio/prod/gn",
    MARKETS_DETAILS_API: "https://api.overlay.market/data/api/markets",
    hasShiva: true,
  },
  [CHAINS.BerachainMainnet]: {
    MARKET_PRICES_API: "https://api.overlay.market/berachain-charts/v1/charts",
    SUBGRAPH_URL:
      "https://api.goldsky.com/api/public/project_clyiptt06ifuv01ul9xiwfj28/subgraphs/overlay-berachain/prod/gn",
    MARKETS_DETAILS_API: "https://api.overlay.market/data/api/markets",
    hasShiva: true,
  },
  [CHAINS.Bepolia]: {
    MARKET_PRICES_API: "https://api.overlay.market/bepolia-charts/v1/charts",
    SUBGRAPH_URL:
      "https://api.goldsky.com/api/public/project_cm3n5avsu08tw01vthbry8fl7/subgraphs/overlay-bepolia/latest/gn",
    MARKETS_DETAILS_API: "https://api.overlay.market/data/api/markets",
    hasShiva: true,
  },
  [CHAINS.BscTestnet]: {
    MARKET_PRICES_API: "https://api.overlay.market/bsc-testnet-charts/v1/charts",
    SUBGRAPH_URL:
      "https://api.goldsky.com/api/public/project_clyiptt06ifuv01ul9xiwfj28/subgraphs/overlay-bnb-testnet/multi-factory/gn",
    MARKETS_DETAILS_API: "https://api.overlay.market/data/api/markets",
    hasShiva: true,
  },
  [CHAINS.BscMainnet]: {
    MARKET_PRICES_API: "https://api.overlay.market/bsc-mainnet-charts/v1/charts",
    SUBGRAPH_URL:
      "https://api.goldsky.com/api/public/project_clyiptt06ifuv01ul9xiwfj28/subgraphs/overlay-bsc/prod/gn",
    MARKETS_DETAILS_API: "https://api.overlay.market/data/api/markets",
    hasShiva: true,
  },
};
