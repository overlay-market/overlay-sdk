import { getContract, encodeFunctionData, toEventHash, getAbiItem, decodeEventLog, keccak256, encodePacked, } from "viem";
import { OverlayV1MarketABI } from "./abis/OverlayV1Market.js";
import { OverlayV1Market2ABI } from "./abis/OverlayV1Market2.js";
import { OverlaySDKModule } from "../common/class-primitives/sdk-module.js";
import { NOOP } from "../common/constants.js";
import { invariant } from "../common/index.js";
export class OverlaySDKMarket extends OverlaySDKModule {
    constructor(props) {
        super(props);
    }
    // @Logger("Contracts:")
    //   @Cache(30 * 60 * 1000, ["core.chain.id", "contractAddressStETH"])
    async getContractV1Market(market) {
        return getContract({
            address: market,
            abi: OverlayV1MarketABI,
            client: {
                public: this.core.rpcProvider,
                wallet: this.core.web3Provider,
            },
        });
    }
    // @Logger("Balances:")
    // @ErrorHandler()
    async factory(market) {
        const contract = await this.getContractV1Market(market);
        return contract.read.factory();
    }
    async getIsShutdown(market) {
        const contract = await this.getContractV1Market(market);
        return contract.read.isShutdown();
    }
    async getTradingFeeRate(market) {
        const contract = await this.getContractV1Market(market);
        // tradingFeeRate is at index 11
        return contract.read.params([11n]);
    }
    async getMinCollateral(market) {
        const contract = await this.getContractV1Market(market);
        // minCollateral is at index 12
        return contract.read.params([12n]);
    }
    async getCapLeverage(market) {
        const contract = await this.getContractV1Market(market);
        // capLeverage is at index 5
        return contract.read.params([5n]);
    }
    async getOiShares(market, positionId, owner) {
        const contract = await this.getContractV1Market(market);
        const encodedParams = encodePacked(['address', 'uint256'], [owner, positionId]);
        const hash = keccak256(encodedParams);
        const position = await contract.read.positions([hash]);
        return {
            oiShares: position[6],
            isLong: position[4],
        };
    }
    // Build
    // @Logger('Call:')
    // @ErrorHandler()
    async build(props) {
        this.core.useWeb3Provider();
        const { callback, account, marketAddress, ...rest } = await this.parseBuildProps(props);
        const contract = await this.getContractV1Market(marketAddress);
        const txArguments = [rest.collateral, rest.leverage, rest.isLong, rest.priceLimit];
        return this.core.performTransaction({
            ...rest,
            account,
            callback,
            getGasLimit: (options) => contract.estimateGas.build(txArguments, options),
            sendTransaction: (options) => contract.write.build(txArguments, options),
            decodeResult: async (receipt) => this.submitParse(receipt),
        });
    }
    // @Logger('Utils:')
    // @ErrorHandler()
    async populateBuild(props) {
        const { account, collateral, leverage, isLong, priceLimit, marketAddress } = await this.parseBuildProps(props);
        return {
            to: marketAddress,
            from: account.address,
            data: encodeFunctionData({
                abi: OverlayV1MarketABI,
                functionName: "build",
                args: [collateral, leverage, isLong, priceLimit],
            })
        };
    }
    // @Logger('Utils:')
    // @ErrorHandler()
    async simulateBuild(props) {
        const { account, collateral, leverage, isLong, priceLimit, marketAddress } = await this.parseBuildProps(props);
        const contract = await this.getContractV1Market(marketAddress);
        return contract.simulate.build([collateral, leverage, isLong, priceLimit], {
            account: account.address,
        });
    }
    // Unwind
    // @Logger('Call:')
    // @ErrorHandler()
    async unwind(props) {
        this.core.useWeb3Provider();
        const { callback, account, marketAddress, ...rest } = await this.parseUnwindProps(props);
        const contract = await this.getContractV1Market(marketAddress);
        const txArguments = [rest.positionId, rest.fraction, rest.priceLimit];
        return this.core.performTransaction({
            ...rest,
            account,
            callback,
            getGasLimit: (options) => contract.estimateGas.unwind(txArguments, options),
            sendTransaction: (options) => contract.write.unwind(txArguments, options),
        });
    }
    // @Logger('Utils:')
    // @ErrorHandler()
    async populateUnwind(props) {
        const { account, positionId, fraction, priceLimit, marketAddress } = await this.parseUnwindProps(props);
        return {
            to: marketAddress,
            from: account.address,
            data: encodeFunctionData({
                abi: OverlayV1MarketABI,
                functionName: "unwind",
                args: [positionId, fraction, priceLimit],
            })
        };
    }
    // @Logger('Utils:')
    // @ErrorHandler()
    async simulateUnwind(props) {
        const { account, positionId, fraction, priceLimit, marketAddress } = await this.parseUnwindProps(props);
        const contract = await this.getContractV1Market(marketAddress);
        return contract.simulate.unwind([positionId, fraction, priceLimit], {
            account: account.address,
        });
    }
    // EmergencyWithdraw
    // @Logger('Call:')
    // @ErrorHandler()
    async emergencyWithdraw(props) {
        this.core.useWeb3Provider();
        const { callback, account, marketAddress, ...rest } = await this.parseEmergencyWithdrawProps(props);
        const contract = await this.getContractV1Market(marketAddress);
        const txArguments = [rest.positionId];
        return this.core.performTransaction({
            ...rest,
            account,
            callback,
            getGasLimit: (options) => contract.estimateGas.emergencyWithdraw(txArguments, options),
            sendTransaction: (options) => contract.write.emergencyWithdraw(txArguments, options),
        });
    }
    // @Logger('Utils:')
    // @ErrorHandler()
    async populateEmergencyWithdraw(props) {
        const { account, positionId, marketAddress } = await this.parseEmergencyWithdrawProps(props);
        return {
            to: marketAddress,
            from: account.address,
            data: encodeFunctionData({
                abi: OverlayV1MarketABI,
                functionName: "emergencyWithdraw",
                args: [positionId],
            })
        };
    }
    // @Logger('Utils:')
    // @ErrorHandler()
    async simulateEmergencyWithdraw(props) {
        const { account, positionId, marketAddress } = await this.parseEmergencyWithdrawProps(props);
        const contract = await this.getContractV1Market(marketAddress);
        return contract.simulate.emergencyWithdraw([positionId], {
            account: account.address,
        });
    }
    submitParse(receipt) {
        let positionId;
        for (const log of receipt.logs) {
            if (log.topics[0] !== OverlaySDKMarket.BUILD_SIGNATURE_V1_1 && log.topics[0] !== OverlaySDKMarket.BUILD_SIGNATURE_V1_2) {
                continue;
            }
            let parsedLog;
            if (log.topics[0] === OverlaySDKMarket.BUILD_SIGNATURE_V1_1) {
                parsedLog = decodeEventLog({
                    abi: OverlayV1MarketABI,
                    strict: true,
                    ...log,
                });
            }
            else if (log.topics[0] === OverlaySDKMarket.BUILD_SIGNATURE_V1_2) {
                parsedLog = decodeEventLog({
                    abi: OverlayV1Market2ABI,
                    strict: true,
                    ...log,
                });
            }
            if (parsedLog && 'positionId' in parsedLog.args) {
                positionId = BigInt(parsedLog.args.positionId);
                break;
            }
        }
        invariant(positionId, "Position ID not found in the transaction receipt", "TRANSACTION_ERROR" /* ERROR_CODE.TRANSACTION_ERROR */);
        return { positionId };
    }
    async parseBuildProps(props) {
        return {
            ...props,
            account: await this.core.useAccount(props.account),
            callback: props.callback ?? NOOP,
        };
    }
    async parseUnwindProps(props) {
        return {
            ...props,
            account: await this.core.useAccount(props.account),
            callback: props.callback ?? NOOP,
        };
    }
    async parseEmergencyWithdrawProps(props) {
        return {
            ...props,
            account: await this.core.useAccount(props.account),
            callback: props.callback ?? NOOP,
        };
    }
}
OverlaySDKMarket.PRECISION = 10n ** 27n;
OverlaySDKMarket.BUILD_SIGNATURE_V1_1 = toEventHash(getAbiItem({ abi: OverlayV1MarketABI, name: "Build" }));
OverlaySDKMarket.BUILD_SIGNATURE_V1_2 = toEventHash(getAbiItem({ abi: OverlayV1Market2ABI, name: "Build" }));
//# sourceMappingURL=market.js.map