import { Address, getContract, GetContractReturnType, WalletClient } from "viem";
import { OverlaySDKModule } from "../common/class-primitives/sdk-module";
import { erc20abi } from './abi/erc20abi.js';
import { ApproveProps, ParsedTransactionProps } from "./types";
import { CommonTransactionProps, EtherValue, TransactionResult } from "../core/types";
import { parseValue } from "../common/utils/parse-value";
import { NOOP } from "../common";

export class OverlaySDKOverlayToken extends OverlaySDKModule {

  public ov_address: Address = '0x3E27fAe625f25291bFda517f74bf41DC40721dA2';

  public contractAddress() {
    return this.ov_address;
  }

  public async getContract(): Promise<
    GetContractReturnType<typeof erc20abi, WalletClient>
  > {
    const address = await this.contractAddress();
    return getContract({
      address,
      abi: erc20abi,
      client: {
        public: this.core.rpcProvider,
        wallet: this.core.web3Provider as WalletClient,
      },
    });
  }

  public async balance(address?: Address): Promise<bigint> {
    const { address: parsedAddress } = await this.core.useAccount(address);
    const contract = await this.getContract();
    return contract.read.balanceOf([parsedAddress]);
  }

  // Allowance

  // @Logger('Call:')
  // @ErrorHandler()
  public async approve(props: ApproveProps): Promise<TransactionResult> {
    this.core.useWeb3Provider();
    const parsedProps = await this.parseProps(props);
    const contract = await this.getContract();
    const txArguments = [parsedProps.to, parsedProps.amount] as const;
    return this.core.performTransaction({
      ...parsedProps,
      getGasLimit: (options) =>
        contract.estimateGas.approve(txArguments, options),
      sendTransaction: (options) =>
        contract.write.approve(txArguments, options),
    });
  }

  private async parseProps<
    TProps extends CommonTransactionProps & { amount: EtherValue },
  >(props: TProps): Promise<ParsedTransactionProps<TProps>> {
    return {
      ...props,
      account: await this.core.useAccount(props.account),
      amount: parseValue(props.amount),
      callback: props.callback ?? NOOP,
    };
  }
}