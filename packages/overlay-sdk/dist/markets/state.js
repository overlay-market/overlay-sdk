import { getContract, createWalletClient, http, } from "viem";
import { OverlayV1StateABI } from "./abis/OverlayV1State.js";
import { OverlaySDKModule } from "../common/class-primitives/sdk-module.js";
import { mainnet } from "viem/chains";
// Create a wallet client using the mainnet chain
const walletClient = createWalletClient({
    chain: mainnet,
    transport: http(),
});
export class OverlaySDKState extends OverlaySDKModule {
    constructor(props) {
        super(props);
    }
    // @Logger("Contracts:")
    //   @Cache(30 * 60 * 1000, ["core.chain.id", "contractAddressStETH"])
    async getContractV1State(state) {
        const contract = await getContract({
            address: state,
            abi: OverlayV1StateABI,
            client: {
                public: this.core.rpcProvider,
                wallet: this.core.web3Provider,
            },
        });
        return contract;
    }
    async getFactory(state) {
        try {
            const contract = await this.getContractV1State(state);
            const factoryAddress = await contract.read.factory();
            return factoryAddress;
        }
        catch (error) {
            console.error("Failed to get factory address:", error);
            throw error;
        }
    }
    async getValue(state, market, address, id) {
        try {
            const contract = await this.getContractV1State(state);
            const value = await contract.read.value([market, address, id]);
            return value;
        }
        catch (error) {
            console.error("Failed to get value:", error);
            throw error;
        }
    }
    async getCurrentOi(state, market, address, id) {
        try {
            const contract = await this.getContractV1State(state);
            const oi = await contract.read.oi([market, address, id]);
            return oi;
        }
        catch (error) {
            console.error("Failed to get current open interest:", error);
            throw error;
        }
    }
    async getLiquidatePrice(state, market, address, id) {
        try {
            const contract = await this.getContractV1State(state);
            const liquidatePrice = await contract.read.liquidationPrice([
                market,
                address,
                id,
            ]);
            return liquidatePrice;
        }
        catch (error) {
            console.error("Failed to get current open interest:", error);
            throw error;
        }
    }
    async getCost(state, market, address, id) {
        try {
            const contract = await this.getContractV1State(state);
            const liquidatePrice = await contract.read.cost([market, address, id]);
            return liquidatePrice;
        }
        catch (error) {
            console.error("Failed to get current open interest:", error);
            throw error;
        }
    }
    async getTradingFee(state, market, address, id) {
        try {
            const contract = await this.getContractV1State(state);
            const liquidatePrice = await contract.read.tradingFee([
                market,
                address,
                id,
            ]);
            return liquidatePrice;
        }
        catch (error) {
            console.error("Failed to get current open interest:", error);
            throw error;
        }
    }
    async getInfo(state, market, address, id) {
        try {
            const contract = await this.getContractV1State(state);
            const info = await contract.read.position([market, address, id]);
            return info;
        }
        catch (error) {
            console.error("Failed to get current open interest:", error);
            throw error;
        }
    }
    async getMarketState(state, market) {
        const contract = await this.getContractV1State(state);
        const marketState = await contract.read.marketState([market]);
        return marketState;
    }
    async getMidPrice(state, market) {
        const marketState = await this.getMarketState(state, market);
        const mid = marketState.mid;
        return mid;
    }
    async getOiEstimate(state, market, collateral, leverage, isLong) {
        const contract = await this.getContractV1State(state);
        const oi = await contract.read.oiEstimate([market, collateral, leverage, isLong]);
        return oi;
    }
    async getFractionOfCapOi(state, market, oi) {
        const contract = await this.getContractV1State(state);
        const fraction = await contract.read.fractionOfCapOi([market, oi]);
        return fraction;
    }
    async getBid(state, market, fractionOfCapOi) {
        const contract = await this.getContractV1State(state);
        const bid = await contract.read.bid([market, fractionOfCapOi]);
        return bid;
    }
    async getAsk(state, market, fractionOfCapOi) {
        const contract = await this.getContractV1State(state);
        const ask = await contract.read.ask([market, fractionOfCapOi]);
        return ask;
    }
    async getLiquidationPriceEstimate(state, market, collateral, leverage, isLong) {
        const contract = await this.getContractV1State(state);
        const liquidationPrice = await contract.read.liquidationPriceEstimate([market, collateral, leverage, isLong]);
        return liquidationPrice;
    }
    async getOIs(state, market) {
        const contract = await this.getContractV1State(state);
        const oi = await contract.read.ois([market]);
        return oi;
    }
    async getCapOi(state, market) {
        const contract = await this.getContractV1State(state);
        const capOi = await contract.read.capOi([market]);
        return capOi;
    }
    async getCircuitBreakerLevel(state, market) {
        const contract = await this.getContractV1State(state);
        const circuitBreakerLevel = await contract.read.circuitBreakerLevel([market]);
        return circuitBreakerLevel;
    }
}
OverlaySDKState.PRECISION = 10n ** 27n;
//# sourceMappingURL=state.js.map