var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _OverlaySDKCore_web3Provider;
import { createPublicClient, createWalletClient, fallback, http, custom, } from "viem";
import { invariant, invariantArgument, withSDKError } from "../common/utils/sdk-error.js";
import { SDKError } from "../common/utils/index.js";
import { SUPPORTED_CHAINS, VIEM_CHAINS, NOOP, } from "../common/constants.js";
import { TransactionCallbackStage } from "./types.js";
import { OverlaySDKCacheable } from "../common/class-primitives/cacheable.js";
class OverlaySDKCore extends OverlaySDKCacheable {
    get web3Provider() {
        return __classPrivateFieldGet(this, _OverlaySDKCore_web3Provider, "f");
    }
    constructor(props) {
        super();
        _OverlaySDKCore_web3Provider.set(this, void 0);
        this.chainId = props.chainId;
        this.rpcUrls = props.rpcUrls;
        this.logMode = props.logMode ?? "info";
        const { chain, rpcProvider, web3Provider } = this.init(props);
        this.chain = chain;
        this.rpcProvider = rpcProvider;
        __classPrivateFieldSet(this, _OverlaySDKCore_web3Provider, web3Provider, "f");
    }
    // Static Provider Creation
    static createRpcProvider(chainId, rpcUrls) {
        const rpcs = rpcUrls.map((url) => http(url));
        return createPublicClient({
            batch: {
                multicall: true,
            },
            chain: VIEM_CHAINS[chainId],
            transport: fallback(rpcs),
        });
    }
    static createWeb3Provider(chainId, transport, transportConfig) {
        return createWalletClient({
            chain: VIEM_CHAINS[chainId],
            transport: custom(transport, transportConfig),
        });
    }
    init(props) {
        const { chainId, rpcUrls, web3Provider, rpcProvider } = props;
        if (!SUPPORTED_CHAINS.includes(chainId)) {
            throw this.error({
                message: `Unsupported chain: ${chainId}`,
                code: "INVALID_ARGUMENT" /* ERROR_CODE.INVALID_ARGUMENT */,
            });
        }
        if (!rpcProvider && rpcUrls.length === 0) {
            throw this.error({
                message: `Either rpcProvider or rpcUrls are required`,
                code: "INVALID_ARGUMENT" /* ERROR_CODE.INVALID_ARGUMENT */,
            });
        }
        const chain = VIEM_CHAINS[chainId];
        const currentRpcProvider = rpcProvider ?? OverlaySDKCore.createRpcProvider(chainId, rpcUrls);
        const currentWeb3Provider = web3Provider;
        return {
            chain,
            rpcProvider: currentRpcProvider,
            web3Provider: currentWeb3Provider,
        };
    }
    error(props) {
        return new SDKError(props);
    }
    useWeb3Provider() {
        invariant(__classPrivateFieldGet(this, _OverlaySDKCore_web3Provider, "f"), "Web3 Provider is not defined", "PROVIDER_ERROR" /* ERROR_CODE.PROVIDER_ERROR */);
        return __classPrivateFieldGet(this, _OverlaySDKCore_web3Provider, "f");
    }
    // @Logger('Utils:')
    async useAccount(accountValue) {
        if (accountValue) {
            if (typeof accountValue === 'string')
                return { address: accountValue, type: 'json-rpc' };
            else
                return accountValue;
        }
        if (this.web3Provider) {
            if (!this.web3Provider.account) {
                const [account] = await withSDKError(this.web3Provider.requestAddresses(), "READ_ERROR" /* ERROR_CODE.READ_ERROR */);
                invariant(account, 'web3provider must have at least 1 account', "PROVIDER_ERROR" /* ERROR_CODE.PROVIDER_ERROR */);
                this.web3Provider.account = { address: account, type: 'json-rpc' };
            }
            return this.web3Provider.account;
        }
        invariantArgument(false, 'No account or web3Provider is available');
    }
    // @Logger('Utils:')
    // @Cache(60 * 60 * 1000, ['chain.id'])
    async isContract(address) {
        // eth_getCode returns hex string of bytecode at address
        // for accounts it's "0x"
        // for contract it's potentially very long hex (can't be safely&quickly parsed)
        const result = await this.rpcProvider.getBytecode({ address: address });
        return result ? result !== '0x' : false;
    }
    // @Logger('Utils:')
    async getFeeData() {
        // we look back 5 blocks at fees of botton 25% txs
        // if you want to increase maxPriorityFee output increase percentile
        const feeHistory = await this.rpcProvider.getFeeHistory({
            blockCount: 5,
            blockTag: 'pending',
            rewardPercentiles: [25],
        });
        // get average priority fee
        const maxPriorityFeePerGas = feeHistory.reward && feeHistory.reward.length > 0
            ? feeHistory.reward
                .map((fees) => (fees[0] ? BigInt(fees[0]) : 0n))
                .reduce((sum, fee) => sum + fee) / BigInt(feeHistory.reward.length)
            : 0n;
        const lastBaseFeePerGas = feeHistory.baseFeePerGas[0]
            ? BigInt(feeHistory.baseFeePerGas[0])
            : 0n;
        // we have to multiply by 2 until we find a reliable way to predict baseFee change
        const maxFeePerGas = lastBaseFeePerGas * 2n + maxPriorityFeePerGas;
        return {
            lastBaseFeePerGas,
            maxPriorityFeePerGas,
            maxFeePerGas,
            gasPrice: maxFeePerGas, // fallback
        };
    }
    async performTransaction(props) {
        // this guards against not having web3Provider
        this.useWeb3Provider();
        const { callback = NOOP, getGasLimit, sendTransaction, decodeResult, waitForTransactionReceiptParameters = {}, } = props;
        const account = await this.useAccount(props.account);
        const isContract = await this.isContract(account.address);
        let overrides = {
            account,
            chain: this.chain,
            gas: undefined,
            maxFeePerGas: undefined,
            maxPriorityFeePerGas: undefined,
        };
        if (isContract) {
            // passing these stub params prevent unnecessary possibly errorish RPC calls
            overrides = {
                ...overrides,
                gas: 21000n,
                maxFeePerGas: 1n,
                maxPriorityFeePerGas: 1n,
                nonce: 1,
            };
        }
        else {
            callback({ stage: TransactionCallbackStage.GAS_LIMIT });
            const feeData = await this.getFeeData();
            overrides.maxFeePerGas = feeData.maxFeePerGas;
            overrides.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
            try {
                overrides.gas = await getGasLimit({ ...overrides });
            }
            catch {
                // we retry without fees to see if tx will go trough
                await withSDKError(getGasLimit({
                    ...overrides,
                    maxFeePerGas: undefined,
                    maxPriorityFeePerGas: undefined,
                }), "TRANSACTION_ERROR" /* ERROR_CODE.TRANSACTION_ERROR */);
                throw this.error({
                    code: "TRANSACTION_ERROR" /* ERROR_CODE.TRANSACTION_ERROR */,
                    message: 'Not enough ether for gas',
                });
            }
        }
        callback({ stage: TransactionCallbackStage.SIGN, payload: overrides.gas });
        const hash = await withSDKError(sendTransaction({
            ...overrides,
        }), "TRANSACTION_ERROR" /* ERROR_CODE.TRANSACTION_ERROR */);
        if (isContract) {
            callback({ stage: TransactionCallbackStage.MULTISIG_DONE });
            return { hash };
        }
        callback({
            stage: TransactionCallbackStage.RECEIPT,
            payload: hash,
        });
        const receipt = await withSDKError(this.rpcProvider.waitForTransactionReceipt({
            hash,
            timeout: 120_000,
            ...waitForTransactionReceiptParameters,
        }), "TRANSACTION_ERROR" /* ERROR_CODE.TRANSACTION_ERROR */);
        callback({
            stage: TransactionCallbackStage.CONFIRMATION,
            payload: receipt,
        });
        const confirmations = await this.rpcProvider.getTransactionConfirmations({
            hash: receipt.transactionHash,
        });
        const result = await decodeResult?.(receipt);
        callback({
            stage: TransactionCallbackStage.DONE,
            payload: confirmations,
        });
        return {
            hash,
            receipt,
            result,
            confirmations,
        };
    }
}
_OverlaySDKCore_web3Provider = new WeakMap();
export default OverlaySDKCore;
//# sourceMappingURL=core.js.map