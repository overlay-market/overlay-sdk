import { JsonRpcAccount } from "viem";
import { CommonTransactionProps } from "../core/types";
import { BuildPropsBase, EmergencyWithdrawPropsBase, UnwindMultiplePropsBase, UnwindPropsBase } from "../common/types";

export type BuildProps = CommonTransactionProps & BuildPropsBase

export type BuildInnerProps = BuildProps & {
  account: JsonRpcAccount;
};

export type BuildResult = {
  positionId: bigint;
};

export type UnwindProps = CommonTransactionProps & UnwindPropsBase

export type UnwindInnerProps = UnwindProps & {
  account: JsonRpcAccount;
};

export type UnwindMultipleProps = CommonTransactionProps & UnwindMultiplePropsBase

export type UnwindMultipleInnerProps = UnwindMultipleProps & {
  account: JsonRpcAccount;
};

export type EmergencyWithdrawProps = CommonTransactionProps & EmergencyWithdrawPropsBase

export type EmergencyWithdrawInnerProps = EmergencyWithdrawProps & {
  account: JsonRpcAccount;
};