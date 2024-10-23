import { mainnet, arbitrum, arbitrumSepolia, berachainTestnetbArtio } from "viem/chains";
import { defineChain } from 'viem';
export const imola = defineChain({
    id: 30732,
    name: 'Movement',
    nativeCurrency: {
        decimals: 18,
        name: 'MOVE',
        symbol: 'MOVE',
    },
    rpcUrls: {
        default: {
            http: ['https://overlay-rpc.devnet.imola.movementnetwork.xyz'],
        },
    },
    blockExplorers: {
        default: { name: 'Explorer', url: 'https://explorer.devnet.imola.movementlabs.xyz/#/?network=testnet' },
    }
});
export var CHAINS;
(function (CHAINS) {
    CHAINS[CHAINS["Mainnet"] = 1] = "Mainnet";
    CHAINS[CHAINS["Arbitrum"] = 42161] = "Arbitrum";
    CHAINS[CHAINS["ArbitrumSepolia"] = 421614] = "ArbitrumSepolia";
    CHAINS[CHAINS["Bartio"] = 80084] = "Bartio";
    CHAINS[CHAINS["Imola"] = 30732] = "Imola";
})(CHAINS || (CHAINS = {}));
export const SUPPORTED_CHAINS = [
    CHAINS.Mainnet,
    CHAINS.Arbitrum,
    CHAINS.ArbitrumSepolia,
    CHAINS.Bartio,
    CHAINS.Imola
];
export const VIEM_CHAINS = {
    [CHAINS.Mainnet]: mainnet,
    [CHAINS.Arbitrum]: arbitrum,
    [CHAINS.ArbitrumSepolia]: arbitrumSepolia,
    [CHAINS.Bartio]: berachainTestnetbArtio,
    [CHAINS.Imola]: imola
};
export const NOOP = () => { };
//# sourceMappingURL=constants.js.map