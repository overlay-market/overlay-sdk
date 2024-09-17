import { Address, JsonRpcAccount } from "viem";
import { EtherValue } from "../core";
import { AccountValue, CommonTransactionProps } from "../core/types";

export type ParsedTransactionProps<TProps extends CommonTransactionProps> =
  Omit<TProps, 'callback'> & {
    callback: NonNullable<TProps['callback']>;
    account: JsonRpcAccount;
  } & (TProps extends { amount: EtherValue } ? { amount: bigint } : object);

export type TransferProps = {
  amount: EtherValue;
  to: Address;
  from?: Address;
} & CommonTransactionProps;
  
export type ApproveProps = {
  amount: EtherValue;
  to: Address;
} & CommonTransactionProps;

export type AllowanceProps = {
  account?: AccountValue;
  to: Address;
};
