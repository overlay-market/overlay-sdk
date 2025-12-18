
import { describe, it, expect, beforeAll } from 'vitest'
import { OverlaySDK } from '../src/sdk'
import { CHAINS } from '../src/common'
import { Address, encodeFunctionData, decodeFunctionData, createPublicClient, http } from 'viem'
import { ShivaABI } from '../src/shiva/abis/Shiva'
import { OVL_ADDRESS } from '../src/constants'
import { OverlaySDKShiva } from '../src/shiva/shiva'

// Legacy ABI for transfer
const ERC20_TRANSFER_ABI = [
    {
        type: 'function',
        name: 'transfer',
        inputs: [
            { name: 'to', type: 'address' },
            { name: 'amount', type: 'uint256' },
        ],
        outputs: [{ name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
] as const

// Legacy function extracted from previous implementation
async function getUnwindOvlAmountLegacy(
    shiva: OverlaySDKShiva,
    params: {
        account: Address
        marketAddress: Address
        positionId: bigint
        fraction: bigint
        priceLimit: bigint
        brokerId?: number
    }
): Promise<bigint> {
    const accountAddress = params.account
    const shivaAddress = shiva.getShivaAddress()

    const unwindData = encodeFunctionData({
        abi: ShivaABI,
        functionName: 'unwind',
        args: [
            {
                ovlMarket: params.marketAddress,
                brokerId: params.brokerId ?? 0,
                positionId: params.positionId,
                fraction: params.fraction,
                priceLimit: params.priceLimit,
            },
        ],
    })

    // Access the underlying RPC provider from the core
    // @ts-ignore
    const rpcClient: any = shiva.core.rpcProvider

    // NOTE: This assumes the RPC supports debug_traceCall
    const trace: any = await rpcClient.request({
        method: 'debug_traceCall',
        params: [
            {
                from: accountAddress,
                to: shivaAddress,
                data: unwindData,
            },
            'latest',
            { tracer: 'callTracer' },
        ],
    })

    const ovlToken = OVL_ADDRESS[shiva.core.chainId as CHAINS].toLowerCase()
    const receiver = accountAddress.toLowerCase()
    const amount = extractTransferAmountFromTrace(trace, ovlToken, receiver)

    if (amount !== null) {
        return amount
    }

    throw new Error('Transfer amount not found in unwind trace')
}

function extractTransferAmountFromTrace(
    trace: any,
    tokenAddress: string,
    receiver: string
): bigint | null {
    if (!trace) return null

    const to = typeof trace.to === 'string' ? trace.to.toLowerCase() : ''
    const input = typeof trace.input === 'string' ? trace.input : ''

    if (to === tokenAddress && input.startsWith('0xa9059cbb')) {
        try {
            const { args } = decodeFunctionData({
                abi: ERC20_TRANSFER_ABI,
                data: input as `0x${string}`,
            })

            const [decodedReceiver, amount] = args as readonly [Address, bigint]
            if ((decodedReceiver as string).toLowerCase() === receiver) {
                return amount
            }
        } catch {
            // ignore decoding issues and continue searching
        }
    }

    if (Array.isArray((trace as any).calls)) {
        for (const call of trace.calls) {
            const amount = extractTransferAmountFromTrace(call, tokenAddress, receiver)
            if (amount !== null) return amount
        }
    }

    return null
}

describe('Shiva Unwind Comparison', () => {
    let sdk: OverlaySDK

    // Use BSC Mainnet as requested
    const chainId = CHAINS.BscMainnet
    // Public RPC for testing
    const rpcUrl = 'https://api.zan.top/bsc-mainnet'

    beforeAll(() => {
        sdk = new OverlaySDK({
            chainId,
            rpcUrls: {
                [chainId]: rpcUrl
            }
        })
    })

    it.skip('compares getUnwindOvlAmount (new) vs debug_traceCall (old)', async () => {
        const marketAddress = '0x2be9Fcd44635ae5d2c0BD39ae1FB5615D9e5299d' as Address
        const positionId = 12n
        const fraction = 1000000000000000000n // 1e18
        const brokerId = 0
        const priceLimit = 0n

        // Using a random address for simulation (account doesn't strictly need to own it for view/trace calls usually, 
        // but for traceCall it might fail if not owner. 
        // However, the debug_traceCall logic provided by user doesn't seem to sign, just simulates 'from'.
        // shiva.unwind checks ownership? 
        // shiva.unwind calls `_validatePositionOwnership`.
        // So we might need the actual owner.
        // We can find the owner using positionOwners view function if needed, but let's try with a dummy first 
        // or maybe the user implies checking the view function which doesn't check owner?
        // Wait, shiva.unwind -> build/unwind check owner.
        // The legacy `debug_traceCall` simulated the call from `normalizedAccount.address`.
        // If the account passed isn't the owner, `shiva.unwind` would revert, and the trace would be a revert.

        // For the NEW implementation (view functions), it doesn't care about the account, it just uses `marketAddress`, `shivaAddress`, `positionId` to read `value` and `tradingFee`.

        // For the OLD implementation (debug_traceCall), it simulates `shiva.unwind`. `shiva.unwind` checks ownership.
        // So we MUST use the owner's address for `debug_traceCall` to work without reverting.

        // Let's first fetch the owner using the SDK/contract.
        // We can use `shiva.getShivaContract().read.positionOwners(...)` but `positionOwners` is on `Shiva`.
        // Wait, `Shiva` has `positionOwners` mapping?
        // Let's check `ShivaABI`.

        // Reading ShivaABI from file content in history...
        // 266:     "name": "positionOwners",
        // 267:     "inputs": [
        // 268:       { "name": "", "type": "address", "internalType": "contract IOverlayV1Market" },
        // 269:       { "name": "", "type": "uint256", "internalType": "uint256" }
        // 270:     ],

        // Yes, we can fetch the owner using `sdk.shiva.getShivaContract().read.positionOwners([marketAddress, positionId])`.

        const shivaContract = sdk.shiva.getShivaContract()
        const owner = await shivaContract.read.positionOwners([marketAddress, positionId])
        console.log('Position owner:', owner)

        // Params object
        const params = {
            account: owner,
            marketAddress,
            positionId,
            fraction,
            priceLimit,
            brokerId
        }

        console.log('Calculating NEW method...')
        const amountNew = await sdk.shiva.getUnwindOvlAmount({
            ...params,
            account: { address: owner, type: 'json-rpc' }
        })
        console.log('New Amount:', amountNew.toString())

        console.log('Calculating OLD method (debug_traceCall)...')
        // We wrap this in try/catch because the public RPC might not support debug_traceCall
        let diff: bigint | null = null
        try {
            const amountOld = await getUnwindOvlAmountLegacy(sdk.shiva, params)
            console.log('Old Amount:', amountOld.toString())

            diff = amountNew > amountOld ? amountNew - amountOld : amountOld - amountNew
            console.log('Different:', diff.toString())

            // Allow for small rounding differences if any, though they should be identical integers ideally
            // But wait, `tradingFee` in view function might be calculated slightly differently or rounding?
            // Should be same.

        } catch (e: any) {
            console.error('Skipping OLD method check due to error (likely RPC not supporting debug_traceCall):', e.message)
            // If debug_traceCall fails, we can't strictly compare, but at least we ran the NEW method.
            // The user specifically asked for comparison, so we hope the RPC works.
            // Llamarpc often doesn't support debug calls.

            // If it fails, I should probably output a warning but let the test pass if the new method worked.
        }
        if (diff) {
            // Let's check closeness.
            // 0.01% tolerance and console log it.
            console.log('Percentage diff with 1e18 precision:', BigInt(1e18) * diff / amountNew * 100n)
            expect(diff).toBeLessThan(amountNew * 1n / 10000n)
        } else {
            // fail the test if diff is null
            expect(diff).not.toBeNull()
        }
    })
})
