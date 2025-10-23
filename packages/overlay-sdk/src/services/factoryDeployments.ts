import axios from "axios";
import { type Address } from "viem";
import { CHAINS } from "../common";
import { NETWORKS } from "../constants";
import type { IMarketDetails, IFactoryDeployment } from "./types/marketDetailsTypes";

export type FactoryPeripheryPair = {
  factory: Address;
  periphery: Address;
};

type FactoryDeploymentsCache = {
  [chainId: number]: {
    data: FactoryPeripheryPair[];
    timestamp: number;
  };
};

const CACHE_TTL = 60 * 60 * 1000; // 1 hour in milliseconds
const cache: FactoryDeploymentsCache = {};

/**
 * Fetches factory→periphery mappings from the markets API
 * @param chainId - Chain ID to fetch deployments for
 * @returns Array of factory-periphery pairs
 */
export async function fetchFactoryDeployments(
  chainId: CHAINS
): Promise<FactoryPeripheryPair[]> {
  // Check cache first
  const cached = cache[chainId];
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }

  try {
    const apiUrl = NETWORKS[chainId].MARKETS_DETAILS_API;

    // Fetch all markets - API returns { "chainId": [...markets] } format
    const response = await axios.get(apiUrl);
    const allMarketsData = response.data as { [chainId: string]: IMarketDetails[] };

    // Get markets for this specific chain
    const marketsForChain = allMarketsData[chainId.toString()] || [];

    // Extract unique factory→periphery pairs from market deployments
    const factoryPeripheryMap = new Map<string, string>();

    for (const market of marketsForChain) {
      // Each market has a chains array
      if (!market.chains) continue;

      for (const chain of market.chains) {
        // Check if this chain matches our chainId and has factory deployment with required fields
        if (
          chain.chainId === chainId &&
          chain.factoryDeployment &&
          chain.factoryDeployment.factoryAddress &&
          chain.factoryDeployment.stateAddress
        ) {
          const deployment = chain.factoryDeployment;
          const factory = deployment.factoryAddress.toLowerCase() as Address;
          const periphery = deployment.stateAddress.toLowerCase() as Address;

          // Store unique factory→periphery mapping
          if (!factoryPeripheryMap.has(factory)) {
            factoryPeripheryMap.set(factory, periphery);
          }
        }
      }
    }

    // Convert Map to array of pairs
    const factoryPairs: FactoryPeripheryPair[] = Array.from(
      factoryPeripheryMap.entries()
    ).map(([factory, periphery]) => ({
      factory: factory as Address,
      periphery: periphery as Address,
    }));

    // Cache the result
    cache[chainId] = {
      data: factoryPairs,
      timestamp: Date.now(),
    };

    return factoryPairs;
  } catch (error) {
    console.error(`Failed to fetch factory deployments for chain ${chainId}:`, error);

    // If we have stale cache, return it
    if (cached) {
      console.warn(`Using stale cache for chain ${chainId} factory deployments`);
      return cached.data;
    }

    // Otherwise throw - this will cause SDK to fail, which is acceptable per requirements
    throw error;
  }
}
