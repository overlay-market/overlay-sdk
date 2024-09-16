import { Address, JsonRpcAccount } from "viem";
import { CommonTransactionProps } from "../core/types";

export type BuildProps = CommonTransactionProps & {
  marketAddress: Address;
  collateral: bigint;
  leverage: bigint;
  isLong: boolean;
  priceLimit: bigint;
};

export type BuildInnerProps = CommonTransactionProps & {
  marketAddress: Address;
  collateral: bigint;
  leverage: bigint;
  isLong: boolean;
  priceLimit: bigint;
  account: JsonRpcAccount;
};

export type BuildResult = {
  positionId: bigint;
};

export type UnwindProps = CommonTransactionProps & {
  marketAddress: Address;
  positionId: bigint;
  fraction: bigint;
  priceLimit: bigint;
};

export type UnwindInnerProps = CommonTransactionProps & {
  marketAddress: Address;
  positionId: bigint;
  fraction: bigint;
  priceLimit: bigint;
  account: JsonRpcAccount;
};

export type EmergencyWithdrawProps = CommonTransactionProps & {
  marketAddress: Address;
  positionId: bigint;
};

export type EmergencyWithdrawInnerProps = CommonTransactionProps & {
  marketAddress: Address;
  positionId: bigint;
  account: JsonRpcAccount;
};