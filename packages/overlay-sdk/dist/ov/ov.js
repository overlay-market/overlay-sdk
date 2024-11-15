import { encodeFunctionData, getContract } from "viem";
import { OverlaySDKModule } from "../common/class-primitives/sdk-module";
import { erc20abi } from './abi/erc20abi.js';
import { parseValue } from "../common/utils/parse-value";
import { CHAINS, invariant, NOOP } from "../common";
import { OV_ADDRESS } from "../constants";
import { formatBigNumber } from "../common/utils";
export class OverlaySDKOverlayToken extends OverlaySDKModule {
    async contractAddress() {
        const chainId = await this.core.rpcProvider.getChainId();
        invariant(chainId in CHAINS, 'Unsupported chainId');
        return OV_ADDRESS[chainId];
    }
    async getContract() {
        const address = await this.contractAddress();
        return getContract({
            address,
            abi: erc20abi,
            client: {
                public: this.core.rpcProvider,
                wallet: this.core.web3Provider,
            },
        });
    }
    // Balance
    // @Logger('Balances:')
    // @ErrorHandler()
    async balance(address, decimals) {
        const { address: parsedAddress } = await this.core.useAccount(address);
        const contract = await this.getContract();
        const balance = await contract.read.balanceOf([parsedAddress]);
        return decimals ? formatBigNumber(balance, 18, decimals) : balance;
    }
    // Transfer
    // @Logger('Call:')
    // @ErrorHandler()
    async transfer(props) {
        this.core.useWeb3Provider();
        const parsedProps = await this.parseProps(props);
        const { account, amount, to, from = account.address } = parsedProps;
        const isTransferFrom = from !== account.address;
        const contract = await this.getContract();
        const getGasLimit = async (overrides) => isTransferFrom
            ? contract.estimateGas.transferFrom([from, to, amount], overrides)
            : contract.estimateGas.transfer([to, amount], overrides);
        const sendTransaction = async (overrides) => isTransferFrom
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
    async populateTransfer(props) {
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
    async simulateTransfer(props) {
        const parsedProps = await this.parseProps(props);
        const { account, amount, to, from = account.address } = parsedProps;
        const isTransferFrom = from !== account.address;
        const contract = await this.getContract();
        return isTransferFrom
            ? contract.simulate.transferFrom([from, to, amount], { account: account })
            : contract.simulate.transfer([to, amount], { account: account });
    }
    // Allowance
    // @Logger('Call:')
    // @ErrorHandler()
    async approve(props) {
        this.core.useWeb3Provider();
        const parsedProps = await this.parseProps(props);
        const contract = await this.getContract();
        const txArguments = [parsedProps.to, parsedProps.amount];
        return this.core.performTransaction({
            ...parsedProps,
            getGasLimit: (options) => contract.estimateGas.approve(txArguments, options),
            sendTransaction: (options) => contract.write.approve(txArguments, options),
        });
    }
    // @Logger('Utils:')
    // @ErrorHandler()
    async populateApprove(props) {
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
    async simulateApprove(props) {
        const { account, amount, to } = await this.parseProps(props);
        const contract = await this.getContract();
        return contract.simulate.approve([to, amount], { account: account });
    }
    // @Logger('Views:')
    async allowance({ account: accountProp, to, }) {
        const account = await this.core.useAccount(accountProp);
        return (await this.getContract()).read.allowance([account.address, to]);
    }
    // Views
    // @Logger('Views:')
    // @ErrorHandler()
    async totalSupply() {
        return (await this.getContract()).read.totalSupply();
    }
    async parseProps(props) {
        return {
            ...props,
            account: await this.core.useAccount(props.account),
            amount: parseValue(props.amount),
            callback: props.callback ?? NOOP,
        };
    }
}
//# sourceMappingURL=ov.js.map