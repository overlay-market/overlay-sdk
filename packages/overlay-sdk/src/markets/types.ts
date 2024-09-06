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

