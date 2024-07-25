import type {
  WalletClient,
  PublicClient,
  Address,
  Account,
} from 'viem';

import { SUPPORTED_CHAINS } from '../common/constants.js';
import type OverlaySDKCore from './core.js';

export type LOG_MODE = 'info' | 'debug' | 'none';

type OverlaySDKCorePropsRpcProps =
  | {
      rpcUrls: string[];
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

