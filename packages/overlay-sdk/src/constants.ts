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

export const V1_PERIPHERY_ADDRESS: AddressMap = {
  [CHAINS.ArbitrumSepolia]: "0x2878837ea173e8bd40db7cee360b15c1c27deb5a",
  [CHAINS.Imola]: "0x0CA6128B528f503C7c649ba9cc02560a8B9fD55e",
  [CHAINS.Bartio]: "0x4f69dfb24958fcf69b70bca73c3e74f2c82bb405",
};

export const OVL_ADDRESS: AddressMap = {
  [CHAINS.ArbitrumSepolia]: "0x3E27fAe625f25291bFda517f74bf41DC40721dA2",
  [CHAINS.Imola]: "0xCde46284D32148c4D470fA33BA788710b3d21E89",
  [CHAINS.Bartio]: "0x97576e088f0d05EF68cac2EEc63d017FE90952a0",
};

export const SHIVA_ADDRESS: AddressMap = {
  [CHAINS.ArbitrumSepolia]: zeroAddress,
  [CHAINS.Imola]: zeroAddress,
  [CHAINS.Bartio]: '0x464748df2135B372b7E18CB177297353Ddb0AA8F',
};

interface Network {
  MARKET_PRICES_API: string;
  SUBGRAPH_URL: string;
  MARKETS_DETAILS_API: string;
}

export const NETWORKS: { [chainId: number]: Network } = {
  [CHAINS.ArbitrumSepolia]: {
    MARKET_PRICES_API: "https://api.overlay.market/sepolia-charts/v1/charts",
    SUBGRAPH_URL:
      "https://api.studio.thegraph.com/query/77621/overlay-sepolia-test-less-call/version/latest",
    MARKETS_DETAILS_API: "https://api.overlay.market/data/api/markets",
  },
  [CHAINS.Imola]: {
    MARKET_PRICES_API: "https://api.overlay.market/imola-charts/v1/charts",
    SUBGRAPH_URL:
      "https://subgraph.overlay.market/query/subgraphs/NETWORKS/overlay/v1-subgraph",
    MARKETS_DETAILS_API: "https://api.overlay.market/data/api/markets",
  },
  [CHAINS.Bartio]: {
    MARKET_PRICES_API: "https://api.overlay.market/bartio-charts/v1/charts",
    SUBGRAPH_URL:
      "https://api.goldsky.com/api/public/project_clyiptt06ifuv01ul9xiwfj28/subgraphs/overlay-bartio/prod/gn",
    MARKETS_DETAILS_API: "https://api.overlay.market/data/api/markets",
  },
};
