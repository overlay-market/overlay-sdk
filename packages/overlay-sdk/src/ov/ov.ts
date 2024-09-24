import { Address, encodeFunctionData, getContract, GetContractReturnType, WalletClient } from "viem";
import { OverlaySDKModule } from "../common/class-primitives/sdk-module";
import { erc20abi } from './abi/erc20abi.js';
import { AllowanceProps, ApproveProps, ParsedTransactionProps, TransferProps } from "./types";
import { CommonTransactionProps, EtherValue, NoCallback, TransactionOptions, TransactionResult } from "../core/types";
import { parseValue } from "../common/utils/parse-value";
import { CHAINS, invariant, NOOP } from "../common";
import { OV_ADDRESS } from "../constants";
import { formatBigNumber } from "../common/utils";

export class OverlaySDKOverlayToken extends OverlaySDKModule {
  public async contractAddress() {
    const chainId = await this.core.rpcProvider.getChainId();
    invariant(chainId in CHAINS, 'Unsupported chainId');
    return OV_ADDRESS[chainId as CHAINS];
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

  // Balance

  // @Logger('Balances:')
  // @ErrorHandler()
  public async balance(address?: Address) {
    const { address: parsedAddress } = await this.core.useAccount(address);
    const contract = await this.getContract();
    const balance = await contract.read.balanceOf([parsedAddress]);
    return formatBigNumber(balance, 18, 4)
  }

  // Transfer

  // @Logger('Call:')
  // @ErrorHandler()
  public async transfer(props: TransferProps): Promise<TransactionResult> {
    this.core.useWeb3Provider();
    const parsedProps = await this.parseProps(props);
    const { account, amount, to, from = account.address } = parsedProps;
    const isTransferFrom = from !== account.address;
    const contract = await this.getContract();

    const getGasLimit = async (overrides: TransactionOptions) =>
      isTransferFrom
        ? contract.estimateGas.transferFrom([from, to, amount], overrides)
        : contract.estimateGas.transfer([to, amount], overrides);

    const sendTransaction = async (overrides: TransactionOptions) =>
      isTransferFrom
        ? contract.write.transferFrom([from, to, amount], overrides)
        : contract.write.transfer([to, amount], overrides);

    return this.core.performTransaction({
      ...parsedProps,
      getGasLimit,
      sendTransaction,
    });
  }

  // @Logger('Utils:')
  // @ErrorHandler()
  public async populateTransfer(props: NoCallback<TransferProps>) {
    const parsedProps = await this.parseProps(props);
    const { account, amount, to, from = account.address } = parsedProps;
    const isTransferFrom = from !== account.address;
    const contractAddress = await this.contractAddress();

    return {
      to: contractAddress,
      from: account,
      data: isTransferFrom
        ? encodeFunctionData({
            abi: erc20abi,
            functionName: 'transferFrom',
            args: [from, to, amount],
          })
        : encodeFunctionData({
            abi: erc20abi,
            functionName: 'transfer',
            args: [to, amount],
          }),
    };
  }

  // @Logger('Utils:')
  // @ErrorHandler()
  public async simulateTransfer(props: NoCallback<TransferProps>) {
    const parsedProps = await this.parseProps(props);
    const { account, amount, to, from = account.address } = parsedProps;
    const isTransferFrom = from !== account.address;

    const contract = await this.getContract();
    return isTransferFrom
      ? contract.simulate.transferFrom([from, to, amount], { account: account as any })
      : contract.simulate.transfer([to, amount], { account: account as any });
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

  // @Logger('Utils:')
  // @ErrorHandler()
  public async populateApprove(props: NoCallback<ApproveProps>) {
    const { account, amount, to } = await this.parseProps(props);
    const address = await this.contractAddress();

    return {
      to: address,
      from: account.address,
      data: encodeFunctionData({
        abi: erc20abi,
        functionName: 'approve',
        args: [to, amount],
      }),
    };
  }

  // @Logger('Utils:')
  // @ErrorHandler()
  public async simulateApprove(props: NoCallback<ApproveProps>) {
    const { account, amount, to } = await this.parseProps(props);
    const contract = await this.getContract();
    return contract.simulate.approve([to, amount], { account: account as any });
  }

  // @Logger('Views:')
  public async allowance({
    account: accountProp,
    to,
  }: AllowanceProps): Promise<bigint> {
    const account = await this.core.useAccount(accountProp);
    return (await this.getContract()).read.allowance([account.address, to]);
  }

  // Views

  // @Logger('Views:')
  // @ErrorHandler()
  public async totalSupply(): Promise<bigint> {
    return (await this.getContract()).read.totalSupply();
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