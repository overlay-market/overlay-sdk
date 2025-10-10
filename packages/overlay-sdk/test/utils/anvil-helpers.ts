import { Address, toHex } from 'viem';
import type { PublicClient } from 'viem';

/**
 * Sets the native token (BNB) balance of an account on the forked network
 *
 * Uses Anvil's `anvil_setBalance` RPC method to directly set account balance
 * without needing to transfer or mine blocks.
 *
 * @param client - Viem public client connected to Anvil fork
 * @param account - Address to set balance for
 * @param value - New balance in wei (e.g., parseUnits('100', 18) for 100 BNB)
 *
 * @example
 * ```typescript
 * // Give test account 100 BNB for gas
 * await setAccountEtherBalance(
 *   publicClient,
 *   '0x1234...',
 *   parseUnits('100', 18)
 * );
 * ```
 */
export async function setAccountEtherBalance(
  client: PublicClient,
  account: Address,
  value: bigint,
) {
  const desiredHex = toHex(value);

  let balanceSet = false;

  try {
    // Anvil-specific RPC method not in viem types
    await (client.request as any)({
      method: 'anvil_setBalance',
      params: [account, desiredHex],
    });
    balanceSet = true;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (!message.includes('missing trie node')) {
      throw error;
    }
  }

  let currentBalance = 0n;
  try {
    currentBalance = await client.getBalance({ address: account });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (!message.includes('missing trie node')) {
      throw error;
    }
  }

  if (currentBalance >= value) {
    return;
  }

  const requiredTopUp = value - currentBalance;
  if (requiredTopUp <= 0n) {
    return;
  }

  const accounts: Address[] = await (client.request as any)({
    method: 'eth_accounts',
    params: [],
  });

  const funder = accounts[0];
  if (!funder) {
    if (balanceSet) {
      // We attempted to set the balance directly and there are no local accounts to fall back to.
      // At this point we return the best effort result.
      return;
    }
    throw new Error('Unable to determine local Anvil account for fallback funding');
  }

  await (client.request as any)({
    method: 'anvil_impersonateAccount',
    params: [funder],
  });

  try {
    await (client.request as any)({
      method: 'eth_sendTransaction',
      params: [
        {
          from: funder,
          to: account,
          value: toHex(requiredTopUp),
        },
      ],
    });
  } finally {
    await (client.request as any)({
      method: 'anvil_stopImpersonatingAccount',
      params: [funder],
    });
  }
}
