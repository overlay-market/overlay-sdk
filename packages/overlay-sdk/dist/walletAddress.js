import { createWalletClient, http } from "viem";
import { mainnet } from "viem/chains";
// Create a wallet client using the mainnet chain
export const walletClient = createWalletClient({
    chain: mainnet,
    transport: http(),
});
//# sourceMappingURL=walletAddress.js.map