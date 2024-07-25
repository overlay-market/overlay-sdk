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
} from 'viem';
import {
  ERROR_CODE,
  invariant,
} from '../common/utils/sdk-error.js';
import { type SDKErrorProps, SDKError } from '../common/utils/index.js';
import {
  SUPPORTED_CHAINS,  
  type CHAINS,  
  VIEM_CHAINS  
} from '../common/constants.js';
import type {
  OverlaySDKCoreProps,
  LOG_MODE,
  AccountValue,
} from './types.js';
import { OverlaySDKCacheable } from '../common/class-primitives/cacheable.js';

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
    this.logMode = props.logMode ?? 'info';

    const { chain, rpcProvider, web3Provider } = this.init(props);

    this.chain = chain;
    this.rpcProvider = rpcProvider;
    this.#web3Provider = web3Provider;
  }

  // Static Provider Creation

  public static createRpcProvider(
    chainId: CHAINS,
    rpcUrls: string[],
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
    transportConfig?: CustomTransportConfig,
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
      'Web3 Provider is not defined',
      ERROR_CODE.PROVIDER_ERROR,
    );
    return this.#web3Provider;
  }

  public async getWeb3Address(accountValue?: AccountValue): Promise<Address> {
    if (typeof accountValue === 'string') return accountValue;
    if (accountValue) return accountValue.address;
    const web3Provider = this.useWeb3Provider();

    if (web3Provider.account) return web3Provider.account.address;

    const walletClient = OverlaySDKCore.createWeb3Provider(this.chainId, this.#web3Provider);

    const accounts = await walletClient.requestAddresses();
    invariant(
      accounts,
      'web3provider must have at least 1 account',
      ERROR_CODE.PROVIDER_ERROR,
    );
    return accounts[0];
  }
}
