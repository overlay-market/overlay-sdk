export declare const walletClient: {
    account: undefined;
    batch?: import("viem").ClientConfig["batch"] | undefined;
    cacheTime: number;
    ccipRead?: import("viem").ClientConfig["ccipRead"] | undefined;
    chain: {
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://etherscan.io";
                readonly apiUrl: "https://api.etherscan.io/api";
            };
        };
        contracts: {
            readonly ensRegistry: {
                readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
            };
            readonly ensUniversalResolver: {
                readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
                readonly blockCreated: 19258213;
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 14353601;
            };
        };
        id: 1;
        name: "Ethereum";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://cloudflare-eth.com"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    };
    key: string;
    name: string;
    pollingInterval: number;
    request: import("viem").EIP1193RequestFn<import("viem").WalletRpcSchema>;
    transport: import("viem").TransportConfig<"http", import("viem").EIP1193RequestFn> & {
        fetchOptions?: import("viem").HttpTransportConfig["fetchOptions"] | undefined;
        url?: string | undefined;
    };
    type: string;
    uid: string;
    addChain: (args: import("viem").AddChainParameters) => Promise<void>;
    deployContract: <const abi extends import("viem").Abi | readonly unknown[], chainOverride extends import("viem").Chain | undefined>(args: import("viem").DeployContractParameters<abi, {
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://etherscan.io";
                readonly apiUrl: "https://api.etherscan.io/api";
            };
        };
        contracts: {
            readonly ensRegistry: {
                readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
            };
            readonly ensUniversalResolver: {
                readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
                readonly blockCreated: 19258213;
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 14353601;
            };
        };
        id: 1;
        name: "Ethereum";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://cloudflare-eth.com"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    }, undefined, chainOverride>) => Promise<import("viem").DeployContractReturnType>;
    getAddresses: () => Promise<import("viem").GetAddressesReturnType>;
    getChainId: () => Promise<import("viem").GetChainIdReturnType>;
    getPermissions: () => Promise<import("viem").GetPermissionsReturnType>;
    prepareTransactionRequest: <const request extends import("viem").PrepareTransactionRequestRequest<{
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://etherscan.io";
                readonly apiUrl: "https://api.etherscan.io/api";
            };
        };
        contracts: {
            readonly ensRegistry: {
                readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
            };
            readonly ensUniversalResolver: {
                readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
                readonly blockCreated: 19258213;
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 14353601;
            };
        };
        id: 1;
        name: "Ethereum";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://cloudflare-eth.com"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    }, chainOverride>, chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(args: import("viem").PrepareTransactionRequestParameters<{
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://etherscan.io";
                readonly apiUrl: "https://api.etherscan.io/api";
            };
        };
        contracts: {
            readonly ensRegistry: {
                readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
            };
            readonly ensUniversalResolver: {
                readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
                readonly blockCreated: 19258213;
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 14353601;
            };
        };
        id: 1;
        name: "Ethereum";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://cloudflare-eth.com"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    }, undefined, chainOverride, accountOverride, request>) => Promise<import("viem").UnionRequiredBy<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://etherscan.io";
                readonly apiUrl: "https://api.etherscan.io/api";
            };
        };
        contracts: {
            readonly ensRegistry: {
                readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
            };
            readonly ensUniversalResolver: {
                readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
                readonly blockCreated: 19258213;
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 14353601;
            };
        };
        id: 1;
        name: "Ethereum";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://cloudflare-eth.com"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> & (import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://etherscan.io";
                readonly apiUrl: "https://api.etherscan.io/api";
            };
        };
        contracts: {
            readonly ensRegistry: {
                readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
            };
            readonly ensUniversalResolver: {
                readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
                readonly blockCreated: 19258213;
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 14353601;
            };
        };
        id: 1;
        name: "Ethereum";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://cloudflare-eth.com"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    }, chainOverride> extends infer T_1 ? T_1 extends import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://etherscan.io";
                readonly apiUrl: "https://api.etherscan.io/api";
            };
        };
        contracts: {
            readonly ensRegistry: {
                readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
            };
            readonly ensUniversalResolver: {
                readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
                readonly blockCreated: 19258213;
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 14353601;
            };
        };
        id: 1;
        name: "Ethereum";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://cloudflare-eth.com"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    }, chainOverride> ? T_1 extends import("viem").Chain ? {
        chain: T_1;
    } : {
        chain?: undefined;
    } : never : never) & (import("viem").DeriveAccount<undefined, accountOverride> extends infer T_2 ? T_2 extends import("viem").DeriveAccount<undefined, accountOverride> ? T_2 extends import("viem").Account ? {
        account: T_2;
        from: import("viem").Address;
    } : {
        account?: undefined;
        from?: undefined;
    } : never : never), import("viem").IsNever<((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_3 ? T_3 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_3 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_4 ? T_4 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_4 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_5 ? T_5 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_5 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_6 ? T_6 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_6 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_7 ? T_7 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_7 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)> extends true ? unknown : import("viem").ExactPartial<((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_3 ? T_3 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_3 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_4 ? T_4 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_4 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_5 ? T_5 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_5 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_6 ? T_6 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_6 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_7 ? T_7 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_7 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)>> & {
        chainId?: number | undefined;
    }, (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "fees" | "gas" | "nonce" | "blobVersionedHashes" | "chainId" | "type") extends infer T_8 ? T_8 extends (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "fees" | "gas" | "nonce" | "blobVersionedHashes" | "chainId" | "type") ? T_8 extends "fees" ? "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" : T_8 : never : never> & (unknown extends request["kzg"] ? {} : Pick<request, "kzg">) extends infer T ? { [K in keyof T]: (import("viem").UnionRequiredBy<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://etherscan.io";
                readonly apiUrl: "https://api.etherscan.io/api";
            };
        };
        contracts: {
            readonly ensRegistry: {
                readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
            };
            readonly ensUniversalResolver: {
                readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
                readonly blockCreated: 19258213;
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 14353601;
            };
        };
        id: 1;
        name: "Ethereum";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://cloudflare-eth.com"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    }, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> & (import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://etherscan.io";
                readonly apiUrl: "https://api.etherscan.io/api";
            };
        };
        contracts: {
            readonly ensRegistry: {
                readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
            };
            readonly ensUniversalResolver: {
                readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
                readonly blockCreated: 19258213;
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 14353601;
            };
        };
        id: 1;
        name: "Ethereum";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://cloudflare-eth.com"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    }, chainOverride> extends infer T_1 ? T_1 extends import("viem").DeriveChain<{
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://etherscan.io";
                readonly apiUrl: "https://api.etherscan.io/api";
            };
        };
        contracts: {
            readonly ensRegistry: {
                readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
            };
            readonly ensUniversalResolver: {
                readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
                readonly blockCreated: 19258213;
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 14353601;
            };
        };
        id: 1;
        name: "Ethereum";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://cloudflare-eth.com"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    }, chainOverride> ? T_1 extends import("viem").Chain ? {
        chain: T_1;
    } : {
        chain?: undefined;
    } : never : never) & (import("viem").DeriveAccount<undefined, accountOverride> extends infer T_2 ? T_2 extends import("viem").DeriveAccount<undefined, accountOverride> ? T_2 extends import("viem").Account ? {
        account: T_2;
        from: import("viem").Address;
    } : {
        account?: undefined;
        from?: undefined;
    } : never : never), import("viem").IsNever<((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_3 ? T_3 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_3 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_4 ? T_4 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_4 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_5 ? T_5 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_5 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_6 ? T_6 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_6 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_7 ? T_7 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_7 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)> extends true ? unknown : import("viem").ExactPartial<((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_3 ? T_3 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_3 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_4 ? T_4 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_4 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_5 ? T_5 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_5 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_6 ? T_6 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_6 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_7 ? T_7 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "chainId" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_7 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)>> & {
        chainId?: number | undefined;
    }, (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "fees" | "gas" | "nonce" | "blobVersionedHashes" | "chainId" | "type") extends infer T_8 ? T_8 extends (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "fees" | "gas" | "nonce" | "blobVersionedHashes" | "chainId" | "type") ? T_8 extends "fees" ? "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" : T_8 : never : never> & (unknown extends request["kzg"] ? {} : Pick<request, "kzg">))[K]; } : never>;
    requestAddresses: () => Promise<import("viem").RequestAddressesReturnType>;
    requestPermissions: (args: import("viem").RequestPermissionsParameters) => Promise<import("viem").RequestPermissionsReturnType>;
    sendRawTransaction: (args: import("viem").SendRawTransactionParameters) => Promise<import("viem").SendRawTransactionReturnType>;
    sendTransaction: <const request extends import("viem").SendTransactionRequest<{
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://etherscan.io";
                readonly apiUrl: "https://api.etherscan.io/api";
            };
        };
        contracts: {
            readonly ensRegistry: {
                readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
            };
            readonly ensUniversalResolver: {
                readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
                readonly blockCreated: 19258213;
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 14353601;
            };
        };
        id: 1;
        name: "Ethereum";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://cloudflare-eth.com"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    }, chainOverride>, chainOverride extends import("viem").Chain | undefined = undefined>(args: import("viem").SendTransactionParameters<{
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://etherscan.io";
                readonly apiUrl: "https://api.etherscan.io/api";
            };
        };
        contracts: {
            readonly ensRegistry: {
                readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
            };
            readonly ensUniversalResolver: {
                readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
                readonly blockCreated: 19258213;
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 14353601;
            };
        };
        id: 1;
        name: "Ethereum";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://cloudflare-eth.com"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    }, undefined, chainOverride, request>) => Promise<import("viem").SendTransactionReturnType>;
    signMessage: (args: import("viem").SignMessageParameters<undefined>) => Promise<import("viem").SignMessageReturnType>;
    signTransaction: <chainOverride extends import("viem").Chain | undefined>(args: import("viem").SignTransactionParameters<{
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://etherscan.io";
                readonly apiUrl: "https://api.etherscan.io/api";
            };
        };
        contracts: {
            readonly ensRegistry: {
                readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
            };
            readonly ensUniversalResolver: {
                readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
                readonly blockCreated: 19258213;
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 14353601;
            };
        };
        id: 1;
        name: "Ethereum";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://cloudflare-eth.com"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    }, undefined, chainOverride>) => Promise<import("viem").SignTransactionReturnType>;
    signTypedData: <const typedData extends {
        [x: string]: readonly import("viem").TypedDataParameter[];
        [x: `string[${string}]`]: undefined;
        [x: `function[${string}]`]: undefined;
        [x: `address[${string}]`]: undefined;
        [x: `bool[${string}]`]: undefined;
        [x: `bytes[${string}]`]: undefined;
        [x: `bytes18[${string}]`]: undefined;
        [x: `bytes1[${string}]`]: undefined;
        [x: `bytes12[${string}]`]: undefined;
        [x: `bytes9[${string}]`]: undefined;
        [x: `bytes6[${string}]`]: undefined;
        [x: `bytes2[${string}]`]: undefined;
        [x: `bytes3[${string}]`]: undefined;
        [x: `bytes4[${string}]`]: undefined;
        [x: `bytes5[${string}]`]: undefined;
        [x: `bytes7[${string}]`]: undefined;
        [x: `bytes8[${string}]`]: undefined;
        [x: `bytes10[${string}]`]: undefined;
        [x: `bytes32[${string}]`]: undefined;
        [x: `bytes31[${string}]`]: undefined;
        [x: `bytes30[${string}]`]: undefined;
        [x: `bytes29[${string}]`]: undefined;
        [x: `bytes28[${string}]`]: undefined;
        [x: `bytes27[${string}]`]: undefined;
        [x: `bytes26[${string}]`]: undefined;
        [x: `bytes25[${string}]`]: undefined;
        [x: `bytes24[${string}]`]: undefined;
        [x: `bytes23[${string}]`]: undefined;
        [x: `bytes22[${string}]`]: undefined;
        [x: `bytes21[${string}]`]: undefined;
        [x: `bytes20[${string}]`]: undefined;
        [x: `bytes19[${string}]`]: undefined;
        [x: `bytes17[${string}]`]: undefined;
        [x: `bytes16[${string}]`]: undefined;
        [x: `bytes15[${string}]`]: undefined;
        [x: `bytes14[${string}]`]: undefined;
        [x: `bytes13[${string}]`]: undefined;
        [x: `bytes11[${string}]`]: undefined;
        [x: `int[${string}]`]: undefined;
        [x: `int8[${string}]`]: undefined;
        [x: `int40[${string}]`]: undefined;
        [x: `int32[${string}]`]: undefined;
        [x: `int24[${string}]`]: undefined;
        [x: `int16[${string}]`]: undefined;
        [x: `int48[${string}]`]: undefined;
        [x: `int56[${string}]`]: undefined;
        [x: `int64[${string}]`]: undefined;
        [x: `int72[${string}]`]: undefined;
        [x: `int80[${string}]`]: undefined;
        [x: `int88[${string}]`]: undefined;
        [x: `int96[${string}]`]: undefined;
        [x: `int104[${string}]`]: undefined;
        [x: `int112[${string}]`]: undefined;
        [x: `int120[${string}]`]: undefined;
        [x: `int128[${string}]`]: undefined;
        [x: `int136[${string}]`]: undefined;
        [x: `int144[${string}]`]: undefined;
        [x: `int152[${string}]`]: undefined;
        [x: `int160[${string}]`]: undefined;
        [x: `int168[${string}]`]: undefined;
        [x: `int176[${string}]`]: undefined;
        [x: `int184[${string}]`]: undefined;
        [x: `int192[${string}]`]: undefined;
        [x: `int200[${string}]`]: undefined;
        [x: `int208[${string}]`]: undefined;
        [x: `int216[${string}]`]: undefined;
        [x: `int224[${string}]`]: undefined;
        [x: `int232[${string}]`]: undefined;
        [x: `int240[${string}]`]: undefined;
        [x: `int248[${string}]`]: undefined;
        [x: `int256[${string}]`]: undefined;
        [x: `uint[${string}]`]: undefined;
        [x: `uint8[${string}]`]: undefined;
        [x: `uint40[${string}]`]: undefined;
        [x: `uint32[${string}]`]: undefined;
        [x: `uint24[${string}]`]: undefined;
        [x: `uint16[${string}]`]: undefined;
        [x: `uint48[${string}]`]: undefined;
        [x: `uint56[${string}]`]: undefined;
        [x: `uint64[${string}]`]: undefined;
        [x: `uint72[${string}]`]: undefined;
        [x: `uint80[${string}]`]: undefined;
        [x: `uint88[${string}]`]: undefined;
        [x: `uint96[${string}]`]: undefined;
        [x: `uint104[${string}]`]: undefined;
        [x: `uint112[${string}]`]: undefined;
        [x: `uint120[${string}]`]: undefined;
        [x: `uint128[${string}]`]: undefined;
        [x: `uint136[${string}]`]: undefined;
        [x: `uint144[${string}]`]: undefined;
        [x: `uint152[${string}]`]: undefined;
        [x: `uint160[${string}]`]: undefined;
        [x: `uint168[${string}]`]: undefined;
        [x: `uint176[${string}]`]: undefined;
        [x: `uint184[${string}]`]: undefined;
        [x: `uint192[${string}]`]: undefined;
        [x: `uint200[${string}]`]: undefined;
        [x: `uint208[${string}]`]: undefined;
        [x: `uint216[${string}]`]: undefined;
        [x: `uint224[${string}]`]: undefined;
        [x: `uint232[${string}]`]: undefined;
        [x: `uint240[${string}]`]: undefined;
        [x: `uint248[${string}]`]: undefined;
        [x: `uint256[${string}]`]: undefined;
        string?: undefined;
        address?: undefined;
        bool?: undefined;
        bytes?: undefined;
        bytes18?: undefined;
        bytes1?: undefined;
        bytes12?: undefined;
        bytes9?: undefined;
        bytes6?: undefined;
        bytes2?: undefined;
        bytes3?: undefined;
        bytes4?: undefined;
        bytes5?: undefined;
        bytes7?: undefined;
        bytes8?: undefined;
        bytes10?: undefined;
        bytes32?: undefined;
        bytes31?: undefined;
        bytes30?: undefined;
        bytes29?: undefined;
        bytes28?: undefined;
        bytes27?: undefined;
        bytes26?: undefined;
        bytes25?: undefined;
        bytes24?: undefined;
        bytes23?: undefined;
        bytes22?: undefined;
        bytes21?: undefined;
        bytes20?: undefined;
        bytes19?: undefined;
        bytes17?: undefined;
        bytes16?: undefined;
        bytes15?: undefined;
        bytes14?: undefined;
        bytes13?: undefined;
        bytes11?: undefined;
        int8?: undefined;
        int40?: undefined;
        int32?: undefined;
        int24?: undefined;
        int16?: undefined;
        int48?: undefined;
        int56?: undefined;
        int64?: undefined;
        int72?: undefined;
        int80?: undefined;
        int88?: undefined;
        int96?: undefined;
        int104?: undefined;
        int112?: undefined;
        int120?: undefined;
        int128?: undefined;
        int136?: undefined;
        int144?: undefined;
        int152?: undefined;
        int160?: undefined;
        int168?: undefined;
        int176?: undefined;
        int184?: undefined;
        int192?: undefined;
        int200?: undefined;
        int208?: undefined;
        int216?: undefined;
        int224?: undefined;
        int232?: undefined;
        int240?: undefined;
        int248?: undefined;
        int256?: undefined;
        uint8?: undefined;
        uint40?: undefined;
        uint32?: undefined;
        uint24?: undefined;
        uint16?: undefined;
        uint48?: undefined;
        uint56?: undefined;
        uint64?: undefined;
        uint72?: undefined;
        uint80?: undefined;
        uint88?: undefined;
        uint96?: undefined;
        uint104?: undefined;
        uint112?: undefined;
        uint120?: undefined;
        uint128?: undefined;
        uint136?: undefined;
        uint144?: undefined;
        uint152?: undefined;
        uint160?: undefined;
        uint168?: undefined;
        uint176?: undefined;
        uint184?: undefined;
        uint192?: undefined;
        uint200?: undefined;
        uint208?: undefined;
        uint216?: undefined;
        uint224?: undefined;
        uint232?: undefined;
        uint240?: undefined;
        uint248?: undefined;
        uint256?: undefined;
    } | {
        [key: string]: unknown;
    }, primaryType extends string>(args: import("viem").SignTypedDataParameters<typedData, primaryType, undefined>) => Promise<import("viem").SignTypedDataReturnType>;
    switchChain: (args: import("viem").SwitchChainParameters) => Promise<void>;
    watchAsset: (args: import("viem").WatchAssetParameters) => Promise<import("viem").WatchAssetReturnType>;
    writeContract: <const abi extends import("viem").Abi | readonly unknown[], functionName extends import("viem").ContractFunctionName<abi, "nonpayable" | "payable">, args_1 extends import("viem").ContractFunctionArgs<abi, "nonpayable" | "payable", functionName>, chainOverride extends import("viem").Chain | undefined = undefined>(args: import("viem").WriteContractParameters<abi, functionName, args_1, {
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://etherscan.io";
                readonly apiUrl: "https://api.etherscan.io/api";
            };
        };
        contracts: {
            readonly ensRegistry: {
                readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
            };
            readonly ensUniversalResolver: {
                readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
                readonly blockCreated: 19258213;
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 14353601;
            };
        };
        id: 1;
        name: "Ethereum";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://cloudflare-eth.com"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    }, undefined, chainOverride>) => Promise<import("viem").WriteContractReturnType>;
    extend: <const client extends {
        [x: string]: unknown;
        account?: undefined;
        batch?: undefined;
        cacheTime?: undefined;
        ccipRead?: undefined;
        chain?: undefined;
        key?: undefined;
        name?: undefined;
        pollingInterval?: undefined;
        request?: undefined;
        transport?: undefined;
        type?: undefined;
        uid?: undefined;
    } & import("viem").ExactPartial<Pick<import("viem").PublicActions<import("viem").HttpTransport, {
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://etherscan.io";
                readonly apiUrl: "https://api.etherscan.io/api";
            };
        };
        contracts: {
            readonly ensRegistry: {
                readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
            };
            readonly ensUniversalResolver: {
                readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
                readonly blockCreated: 19258213;
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 14353601;
            };
        };
        id: 1;
        name: "Ethereum";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://cloudflare-eth.com"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    }, undefined>, "call" | "createContractEventFilter" | "createEventFilter" | "estimateContractGas" | "estimateGas" | "getBlock" | "getBlockNumber" | "getChainId" | "getContractEvents" | "getEnsText" | "getFilterChanges" | "getGasPrice" | "getLogs" | "getTransaction" | "getTransactionCount" | "getTransactionReceipt" | "prepareTransactionRequest" | "readContract" | "sendRawTransaction" | "simulateContract" | "uninstallFilter" | "watchBlockNumber" | "watchContractEvent"> & Pick<import("viem").WalletActions<{
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://etherscan.io";
                readonly apiUrl: "https://api.etherscan.io/api";
            };
        };
        contracts: {
            readonly ensRegistry: {
                readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
            };
            readonly ensUniversalResolver: {
                readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
                readonly blockCreated: 19258213;
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 14353601;
            };
        };
        id: 1;
        name: "Ethereum";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://cloudflare-eth.com"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    }, undefined>, "sendTransaction" | "writeContract">>>(fn: (client: import("viem").Client<import("viem").HttpTransport, {
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://etherscan.io";
                readonly apiUrl: "https://api.etherscan.io/api";
            };
        };
        contracts: {
            readonly ensRegistry: {
                readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
            };
            readonly ensUniversalResolver: {
                readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
                readonly blockCreated: 19258213;
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 14353601;
            };
        };
        id: 1;
        name: "Ethereum";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://cloudflare-eth.com"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    }, undefined, import("viem").WalletRpcSchema, import("viem").WalletActions<{
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://etherscan.io";
                readonly apiUrl: "https://api.etherscan.io/api";
            };
        };
        contracts: {
            readonly ensRegistry: {
                readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
            };
            readonly ensUniversalResolver: {
                readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
                readonly blockCreated: 19258213;
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 14353601;
            };
        };
        id: 1;
        name: "Ethereum";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://cloudflare-eth.com"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    }, undefined>>) => client) => import("viem").Client<import("viem").HttpTransport, {
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://etherscan.io";
                readonly apiUrl: "https://api.etherscan.io/api";
            };
        };
        contracts: {
            readonly ensRegistry: {
                readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
            };
            readonly ensUniversalResolver: {
                readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
                readonly blockCreated: 19258213;
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 14353601;
            };
        };
        id: 1;
        name: "Ethereum";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://cloudflare-eth.com"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    }, undefined, import("viem").WalletRpcSchema, { [K in keyof client]: client[K]; } & import("viem").WalletActions<{
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://etherscan.io";
                readonly apiUrl: "https://api.etherscan.io/api";
            };
        };
        contracts: {
            readonly ensRegistry: {
                readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
            };
            readonly ensUniversalResolver: {
                readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
                readonly blockCreated: 19258213;
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 14353601;
            };
        };
        id: 1;
        name: "Ethereum";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://cloudflare-eth.com"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    }, undefined>>;
};
//# sourceMappingURL=walletAddress.d.ts.map