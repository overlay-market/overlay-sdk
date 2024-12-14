import type {
  WalletClient,
  PublicClient,
  Address,
  Account,
  Hash,
  TransactionReceipt,
  WaitForTransactionReceiptParameters,
  Chain,
} from 'viem';

import { SUPPORTED_CHAINS } from '../common/constants.js';
import type OverlaySDKCore from './core.js';
import { SDKError } from '../common/index.js';

export type LOG_MODE = 'info' | 'debug' | 'none';

export type CustomRPCs = {
  [chainId: number]: string;
};

type OverlaySDKCorePropsRpcProps =
  | {
      rpcUrls: CustomRPCs;
      rpcProvider?: undefined;
    }
  | {
      rpcUrls?: undefined;
      rpcProvider: PublicClient;
    };

export type OverlaySDKCoreProps = {
  chainId: (typeof SUPPORTED_CHAINS)[number];
  web3Provider?: WalletClient;
  logMode?: LOG_MODE;
} & OverlaySDKCorePropsRpcProps;

export type OverlaySDKCommonProps =
  | {
      core: OverlaySDKCore;
    }
  | ({ core?: undefined } & OverlaySDKCoreProps);


export type EtherValue = string | bigint;

export type AccountValue = Address | Account;

export enum TransactionCallbackStage {
  'PERMIT' = 'permit',
  'GAS_LIMIT' = 'gas_limit',
  'SIGN' = 'sign',
  'RECEIPT' = 'receipt',
  'CONFIRMATION' = 'confirmation',
  'DONE' = 'done',
  'MULTISIG_DONE' = 'multisig_done',
  'ERROR' = 'error',
}

export type TransactionCallbackProps =
  | { stage: TransactionCallbackStage.PERMIT; payload?: undefined }
  | { stage: TransactionCallbackStage.GAS_LIMIT; payload?: undefined }
  | { stage: TransactionCallbackStage.SIGN; payload?: bigint }
  | { stage: TransactionCallbackStage.RECEIPT; payload: Hash }
  | {
      stage: TransactionCallbackStage.CONFIRMATION;
      payload: TransactionReceipt;
    }
  | { stage: TransactionCallbackStage.DONE; payload: bigint }
  | { stage: TransactionCallbackStage.MULTISIG_DONE; payload?: undefined }
  | { stage: TransactionCallbackStage.ERROR; payload: SDKError };

export type TransactionCallback = (props: TransactionCallbackProps) => void;

export type CommonTransactionProps = {
  callback?: TransactionCallback;
  account?: AccountValue;
  waitForTransactionReceiptParameters?: WaitForTransactionReceiptParameters;
};

export type TransactionResult<TDecodedResult = undefined> = {
  hash: Hash;
  receipt?: TransactionReceipt;
  confirmations?: bigint;
  result?: TDecodedResult;
};

export type TransactionOptions = {
  account: AccountValue;
  chain: Chain;
  gas?: bigint;
  maxFeePerGas?: bigint;
  maxPriorityFeePerGas?: bigint;
  nonce?: number;
};

export type NoCallback<TProps extends { callback?: TransactionCallback }> =
  Omit<TProps, 'callback'>;

export type PerformTransactionSendTransaction = (
  override: TransactionOptions,
) => Promise<Hash>;

export type PerformTransactionGasLimit = (
  overrides: TransactionOptions,
) => Promise<bigint>;

export type PerformTransactionDecodeResult<TDecodedResult> = (
  receipt: TransactionReceipt,
) => Promise<TDecodedResult>;

type PerformTransactionOptionsDecodePartial<TDecodedResult> =
  TDecodedResult extends undefined
    ? { decodeResult?: undefined }
    : { decodeResult: PerformTransactionDecodeResult<TDecodedResult> };

export type PerformTransactionOptions<TDecodedResult> =
  CommonTransactionProps & {
    getGasLimit: PerformTransactionGasLimit;
    sendTransaction: PerformTransactionSendTransaction;
    waitForTransactionReceiptParameters?: WaitForTransactionReceiptParameters;
  } & PerformTransactionOptionsDecodePartial<TDecodedResult>;

export type GetFeeDataResult = {
  lastBaseFeePerGas: bigint;
  maxFeePerGas: bigint;
  maxPriorityFeePerGas: bigint;
  gasPrice: bigint;
};