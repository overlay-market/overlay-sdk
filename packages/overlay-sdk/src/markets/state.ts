import {
  type GetContractReturnType,
  type Address,
  type WalletClient,
  getContract,
  createWalletClient,
  http,
} from "viem";
import { OverlayV1StateABI } from "./abis/OverlayV1State.js";
import { OverlaySDKModule } from "../common/class-primitives/sdk-module.js";
import { OverlaySDKCommonProps } from "../core/types.js";
import { mainnet } from "viem/chains";

// Create a wallet client using the mainnet chain
const walletClient = createWalletClient({
  chain: mainnet,
  transport: http(),
});

// Get the address
async function getWalletAddress() {
  const [address] = await walletClient.getAddresses();
  return address;
}

export class OverlaySDKState extends OverlaySDKModule {
  static readonly PRECISION = 10n ** 27n;

  constructor(props: OverlaySDKCommonProps) {
    super(props);
  }

  // @Logger("Contracts:")
  //   @Cache(30 * 60 * 1000, ["core.chain.id", "contractAddressStETH"])
  public async getContractV1State(
    state: Address
  ): Promise<GetContractReturnType<typeof OverlayV1StateABI, WalletClient>> {
    const contract = await getContract({
      address: state,
      abi: OverlayV1StateABI,
      client: {
        public: this.core.rpcProvider,
        wallet: this.core.web3Provider as WalletClient,
      },
    });
    return contract;
  }
  public async getFactory(state: Address): Promise<Address> {
    try {
      const contract = await this.getContractV1State(state);
      const factoryAddress = await contract.read.factory();
      return factoryAddress;
    } catch (error) {
      console.error("Failed to get factory address:", error);
      throw error;
    }
  }

  public async getValue(
    state: Address,
    market: Address,
    address: Address,
    id: bigint
  ): Promise<bigint> {
    try {
      const contract = await this.getContractV1State(state);
      const value = await contract.read.value([market, address, id]);
      return value;
    } catch (error) {
      console.error("Failed to get value:", error);
      throw error;
    }
  }

  public async getCurrentOi(
    state: Address,
    market: Address,
    address: Address,
    id: bigint
  ): Promise<bigint> {
    try {
      const contract = await this.getContractV1State(state);
      const oi = await contract.read.oi([market, address, id]);
      return oi;
    } catch (error) {
      console.error("Failed to get current open interest:", error);
      throw error;
    }
  }

  public async getLiquidatePrice(
    state: Address,
    market: Address,
    address: Address,
    id: bigint
  ): Promise<bigint> {
    try {
      const contract = await this.getContractV1State(state);
      const liquidatePrice = await contract.read.liquidationPrice([
        market,
        address,
        id,
      ]);
      return liquidatePrice;
    } catch (error) {
      console.error("Failed to get current open interest:", error);
      throw error;
    }
  }

  public async getCost(
    state: Address,
    market: Address,
    address: Address,
    id: bigint
  ): Promise<bigint> {
    try {
      const contract = await this.getContractV1State(state);
      const liquidatePrice = await contract.read.cost([market, address, id]);
      return liquidatePrice;
    } catch (error) {
      console.error("Failed to get current open interest:", error);
      throw error;
    }
  }

  public async getTradingFee(
    state: Address,
    market: Address,
    address: Address,
    id: bigint
  ): Promise<bigint> {
    try {
      const contract = await this.getContractV1State(state);
      const liquidatePrice = await contract.read.tradingFee([
        market,
        address,
        id,
      ]);
      return liquidatePrice;
    } catch (error) {
      console.error("Failed to get current open interest:", error);
      throw error;
    }
  }

  public async getInfo(
    state: Address,
    market: Address,
    address: Address,
    id: bigint
  ): Promise<{
    notionalInitial: bigint;
    debtInitial: bigint;
    midTick: number;
    entryTick: number;
    isLong: boolean;
    liquidated: boolean;
    oiShares: bigint;
    fractionRemaining: number;
  }> {
    try {
      const contract = await this.getContractV1State(state);
      const info = await contract.read.position([market, address, id]);
      return info;
    } catch (error) {
      console.error("Failed to get current open interest:", error);
      throw error;
    }
  }

  public async getMarketState(
    state: Address,
    market: Address
  ): Promise<{
    bid: bigint;
    ask: bigint;
    mid: bigint;
    volumeBid: bigint;
    volumeAsk: bigint;
    oiLong: bigint;
    oiShort: bigint;
    capOi: bigint;
    circuitBreakerLevel: bigint;
    fundingRate: bigint;
  }> {
    const contract = await this.getContractV1State(state);
    const marketState = await contract.read.marketState([market]);
    return marketState;
  }

  public async getMidPrice(state: Address, market: Address): Promise<bigint> {
    const marketState = await this.getMarketState(state, market);
    const mid = marketState.mid;
    return mid;
  }

  public async getOiEstimate(state: Address, market: Address, collateral: bigint, leverage: bigint, isLong: boolean): Promise<bigint> {
    const contract = await this.getContractV1State(state);
    const oi = await contract.read.oiEstimate([market, collateral, leverage, isLong]);
    return oi;
  }

  public async getFractionOfCapOi(state: Address, market: Address, oi: bigint): Promise<bigint> {
    const contract = await this.getContractV1State(state);
    const fraction = await contract.read.fractionOfCapOi([market, oi]);
    return fraction;
  }

  public async getBid(state: Address, market: Address, fractionOfCapOi: bigint): Promise<bigint> {
    const contract = await this.getContractV1State(state);
    const bid = await contract.read.bid([market, fractionOfCapOi]);
    return bid;
  }

  public async getAsk(state: Address, market: Address, fractionOfCapOi: bigint): Promise<bigint> {
    const contract = await this.getContractV1State(state);
    const ask = await contract.read.ask([market, fractionOfCapOi]);
    return ask;
  }

  public async getLiquidationPriceEstimate(state: Address, market: Address, collateral: bigint, leverage: bigint, isLong: boolean): Promise<bigint> {
    const contract = await this.getContractV1State(state);
    const liquidationPrice = await contract.read.liquidationPriceEstimate([market, collateral, leverage, isLong]);
    return liquidationPrice;
  }
}
