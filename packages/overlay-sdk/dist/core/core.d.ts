import { type Address, type WalletClient, type PublicClient, type Chain, type CustomTransportConfig, JsonRpcAccount } from "viem";
import { type SDKErrorProps, SDKError } from "../common/utils/index.js";
import { type CHAINS } from "../common/constants.js";
import { type OverlaySDKCoreProps, type LOG_MODE, type AccountValue, type PerformTransactionOptions, type TransactionResult, GetFeeDataResult } from "./types.js";
import { OverlaySDKCacheable } from "../common/class-primitives/cacheable.js";
export default class OverlaySDKCore extends OverlaySDKCacheable {
    #private;
    readonly chainId: CHAINS;
    readonly rpcUrls: string[] | undefined;
    readonly chain: Chain;
    readonly rpcProvider: PublicClient;
    readonly logMode: LOG_MODE;
    get web3Provider(): WalletClient | undefined;
    constructor(props: OverlaySDKCoreProps);
    static createRpcProvider(chainId: CHAINS, rpcUrls: string[]): PublicClient;
    static createWeb3Provider(chainId: CHAINS, transport: any, transportConfig?: CustomTransportConfig): WalletClient;
    private init;
    error(props: SDKErrorProps): SDKError;
    useWeb3Provider(): WalletClient;
    useAccount(accountValue?: AccountValue): Promise<JsonRpcAccount>;
    isContract(address: Address): Promise<boolean>;
    getFeeData(): Promise<GetFeeDataResult>;
    performTransaction<TDecodedResult = undefined>(props: PerformTransactionOptions<TDecodedResult>): Promise<TransactionResult<TDecodedResult>>;
}
//# sourceMappingURL=core.d.ts.map