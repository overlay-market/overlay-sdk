import {
  type Address,
  type WalletClient,
  type PublicClient,
  type Chain,
  type CustomTransportConfig,
  createPublicClient,
  createWalletClient,
  fallback,
  http,
  custom,
  GetContractReturnType,
  JsonRpcAccount,
} from "viem";
import { ERROR_CODE, invariant, invariantArgument, withSDKError } from "../common/utils/sdk-error.js";
import { type SDKErrorProps, SDKError } from "../common/utils/index.js";
import {
  SUPPORTED_CHAINS,
  type CHAINS,
  VIEM_CHAINS,
  OVERLAY_CONTRACT_NAMES,
  NOOP,
} from "../common/constants.js";
import { type OverlaySDKCoreProps, type LOG_MODE, type AccountValue, type PerformTransactionOptions, type TransactionResult, type TransactionOptions, TransactionCallbackStage, GetFeeDataResult } from "./types.js";
import { OverlaySDKCacheable } from "../common/class-primitives/cacheable.js";

export default class OverlaySDKCore extends OverlaySDKCacheable {
  #web3Provider: WalletClient | undefined;

  readonly chainId: CHAINS;
  readonly rpcUrls: string[] | undefined;
  readonly chain: Chain;
  readonly rpcProvider: PublicClient;
  readonly logMode: LOG_MODE;

  public get web3Provider(): WalletClient | undefined {
    return this.#web3Provider;
  }

  constructor(props: OverlaySDKCoreProps) {
    super();
    this.chainId = props.chainId;
    this.rpcUrls = props.rpcUrls;
    this.logMode = props.logMode ?? "info";

    const { chain, rpcProvider, web3Provider } = this.init(props);

    this.chain = chain;
    this.rpcProvider = rpcProvider;
    this.#web3Provider = web3Provider;
  }

  // Static Provider Creation

  public static createRpcProvider(
    chainId: CHAINS,
    rpcUrls: string[]
  ): PublicClient {
    const rpcs = rpcUrls.map((url) => http(url));

    return createPublicClient({
      batch: {
        multicall: true,
      },
      chain: VIEM_CHAINS[chainId],
      transport: fallback(rpcs),
    });
  }

  public static createWeb3Provider(
    chainId: CHAINS,
    transport: any,
    transportConfig?: CustomTransportConfig
  ): WalletClient {
    return createWalletClient({
      chain: VIEM_CHAINS[chainId],
      transport: custom(transport, transportConfig),
    });
  }

  private init(props: OverlaySDKCoreProps) {
    const { chainId, rpcUrls, web3Provider, rpcProvider } = props;
    if (!SUPPORTED_CHAINS.includes(chainId)) {
      throw this.error({
        message: `Unsupported chain: ${chainId}`,
        code: ERROR_CODE.INVALID_ARGUMENT,
      });
    }

    if (!rpcProvider && rpcUrls.length === 0) {
      throw this.error({
        message: `Either rpcProvider or rpcUrls are required`,
        code: ERROR_CODE.INVALID_ARGUMENT,
      });
    }

    const chain = VIEM_CHAINS[chainId];
    const currentRpcProvider =
      rpcProvider ?? OverlaySDKCore.createRpcProvider(chainId, rpcUrls);
    const currentWeb3Provider = web3Provider;

    return {
      chain,
      rpcProvider: currentRpcProvider,
      web3Provider: currentWeb3Provider,
    };
  }

  public error(props: SDKErrorProps): SDKError {
    return new SDKError(props);
  }

  public useWeb3Provider(): WalletClient {
    invariant(
      this.#web3Provider,
      "Web3 Provider is not defined",
      ERROR_CODE.PROVIDER_ERROR
    );
    return this.#web3Provider;
  }

  // @Logger('Utils:')
  public async useAccount(
    accountValue?: AccountValue,
  ): Promise<JsonRpcAccount> {
    if (accountValue) {
      if (typeof accountValue === 'string')
        return { address: accountValue, type: 'json-rpc' };
      else return accountValue as JsonRpcAccount;
    }
    if (this.web3Provider) {
      if (!this.web3Provider.account) {
        const [account] = await withSDKError(
          this.web3Provider.requestAddresses(),
          ERROR_CODE.READ_ERROR,
        );
        invariant(
          account,
          'web3provider must have at least 1 account',
          ERROR_CODE.PROVIDER_ERROR,
        );
        this.web3Provider.account = { address: account, type: 'json-rpc' };
      }
      return this.web3Provider.account as unknown as JsonRpcAccount;
    }
    invariantArgument(false, 'No account or web3Provider is available');
  }

  // @Logger('Utils:')
  // @Cache(60 * 60 * 1000, ['chain.id'])
  public async isContract(address: Address): Promise<boolean> {
    // eth_getCode returns hex string of bytecode at address
    // for accounts it's "0x"
    // for contract it's potentially very long hex (can't be safely&quickly parsed)
    const result = await this.rpcProvider.getBytecode({ address: address });
    return result ? result !== '0x' : false;
  }

  // @Logger('Utils:')
  public async getFeeData(): Promise<GetFeeDataResult> {
    // we look back 5 blocks at fees of botton 25% txs
    // if you want to increase maxPriorityFee output increase percentile
    const feeHistory = await this.rpcProvider.getFeeHistory({
      blockCount: 5,
      blockTag: 'pending',
      rewardPercentiles: [25],
    });

    // get average priority fee
    const maxPriorityFeePerGas =
      feeHistory.reward && feeHistory.reward.length > 0
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

  public async performTransaction<TDecodedResult = undefined>(
    props: PerformTransactionOptions<TDecodedResult>,
  ): Promise<TransactionResult<TDecodedResult>> {
    // this guards against not having web3Provider
    this.useWeb3Provider();
    const {
      callback = NOOP,
      getGasLimit,
      sendTransaction,
      decodeResult,
      waitForTransactionReceiptParameters = {},
    } = props;
    const account = await this.useAccount(props.account);
    const isContract = await this.isContract(account.address);

    let overrides: TransactionOptions = {
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
    } else {
      callback({ stage: TransactionCallbackStage.GAS_LIMIT });
      const feeData = await this.getFeeData();
      overrides.maxFeePerGas = feeData.maxFeePerGas;
      overrides.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
      try {
        overrides.gas = await getGasLimit({ ...overrides });
      } catch {
        // we retry without fees to see if tx will go trough
        await withSDKError(
          getGasLimit({
            ...overrides,
            maxFeePerGas: undefined,
            maxPriorityFeePerGas: undefined,
          }),
          ERROR_CODE.TRANSACTION_ERROR,
        );
        throw this.error({
          code: ERROR_CODE.TRANSACTION_ERROR,
          message: 'Not enough ether for gas',
        });
      }
    }

    callback({ stage: TransactionCallbackStage.SIGN, payload: overrides.gas });

    const hash = await withSDKError(
      sendTransaction({
        ...overrides,
      }),
      ERROR_CODE.TRANSACTION_ERROR,
    );

    if (isContract) {
      callback({ stage: TransactionCallbackStage.MULTISIG_DONE });
      return { hash };
    }

    callback({
      stage: TransactionCallbackStage.RECEIPT,
      payload: hash,
    });

    const receipt = await withSDKError(
      this.rpcProvider.waitForTransactionReceipt({
        hash,
        timeout: 120_000,
        ...waitForTransactionReceiptParameters,
      }),
      ERROR_CODE.TRANSACTION_ERROR,
    );

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
