export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    BigDecimal: {
        input: any;
        output: any;
    };
    BigInt: {
        input: any;
        output: any;
    };
    Bytes: {
        input: any;
        output: any;
    };
    Int8: {
        input: any;
        output: any;
    };
    Timestamp: {
        input: any;
        output: any;
    };
};
export type Account = {
    __typename?: 'Account';
    builds: Array<Build>;
    id: Scalars['ID']['output'];
    liquidates: Array<Liquidate>;
    nfts: Array<Erc721Nft>;
    numberOfLiquidatedPositions: Scalars['BigInt']['output'];
    numberOfOpenPositions: Scalars['BigInt']['output'];
    numberOfUnwinds: Scalars['BigInt']['output'];
    ovlVolumeTraded: Scalars['BigInt']['output'];
    planckCatBalance: Scalars['BigInt']['output'];
    positions: Array<Position>;
    realizedPnl: Scalars['BigInt']['output'];
    referralPositions: Array<ReferralPosition>;
    stakingPositions: Array<StakingPosition>;
    tokens: Array<TokenPosition>;
    tradingMiningEpochVolumes: Array<TradingMiningEpochVolume>;
    unwinds: Array<Unwind>;
};
export type AccountBuildsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Build_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<Build_Filter>;
};
export type AccountLiquidatesArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Liquidate_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<Liquidate_Filter>;
};
export type AccountNftsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Erc721Nft_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<Erc721Nft_Filter>;
};
export type AccountPositionsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Position_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<Position_Filter>;
};
export type AccountReferralPositionsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<ReferralPosition_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ReferralPosition_Filter>;
};
export type AccountStakingPositionsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<StakingPosition_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<StakingPosition_Filter>;
};
export type AccountTokensArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<TokenPosition_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<TokenPosition_Filter>;
};
export type AccountTradingMiningEpochVolumesArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<TradingMiningEpochVolume_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<TradingMiningEpochVolume_Filter>;
};
export type AccountUnwindsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Unwind_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<Unwind_Filter>;
};
export type Account_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
    builds_?: InputMaybe<Build_Filter>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    liquidates_?: InputMaybe<Liquidate_Filter>;
    nfts_?: InputMaybe<Erc721Nft_Filter>;
    numberOfLiquidatedPositions?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfLiquidatedPositions_gt?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfLiquidatedPositions_gte?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfLiquidatedPositions_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    numberOfLiquidatedPositions_lt?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfLiquidatedPositions_lte?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfLiquidatedPositions_not?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfLiquidatedPositions_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    numberOfOpenPositions?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfOpenPositions_gt?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfOpenPositions_gte?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfOpenPositions_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    numberOfOpenPositions_lt?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfOpenPositions_lte?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfOpenPositions_not?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfOpenPositions_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    numberOfUnwinds?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfUnwinds_gt?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfUnwinds_gte?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfUnwinds_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    numberOfUnwinds_lt?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfUnwinds_lte?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfUnwinds_not?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfUnwinds_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
    ovlVolumeTraded?: InputMaybe<Scalars['BigInt']['input']>;
    ovlVolumeTraded_gt?: InputMaybe<Scalars['BigInt']['input']>;
    ovlVolumeTraded_gte?: InputMaybe<Scalars['BigInt']['input']>;
    ovlVolumeTraded_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    ovlVolumeTraded_lt?: InputMaybe<Scalars['BigInt']['input']>;
    ovlVolumeTraded_lte?: InputMaybe<Scalars['BigInt']['input']>;
    ovlVolumeTraded_not?: InputMaybe<Scalars['BigInt']['input']>;
    ovlVolumeTraded_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    planckCatBalance?: InputMaybe<Scalars['BigInt']['input']>;
    planckCatBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
    planckCatBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
    planckCatBalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    planckCatBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
    planckCatBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
    planckCatBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
    planckCatBalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    positions_?: InputMaybe<Position_Filter>;
    realizedPnl?: InputMaybe<Scalars['BigInt']['input']>;
    realizedPnl_gt?: InputMaybe<Scalars['BigInt']['input']>;
    realizedPnl_gte?: InputMaybe<Scalars['BigInt']['input']>;
    realizedPnl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    realizedPnl_lt?: InputMaybe<Scalars['BigInt']['input']>;
    realizedPnl_lte?: InputMaybe<Scalars['BigInt']['input']>;
    realizedPnl_not?: InputMaybe<Scalars['BigInt']['input']>;
    realizedPnl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    referralPositions_?: InputMaybe<ReferralPosition_Filter>;
    stakingPositions_?: InputMaybe<StakingPosition_Filter>;
    tokens_?: InputMaybe<TokenPosition_Filter>;
    tradingMiningEpochVolumes_?: InputMaybe<TradingMiningEpochVolume_Filter>;
    unwinds_?: InputMaybe<Unwind_Filter>;
};
export declare enum Account_OrderBy {
    Builds = "builds",
    Id = "id",
    Liquidates = "liquidates",
    Nfts = "nfts",
    NumberOfLiquidatedPositions = "numberOfLiquidatedPositions",
    NumberOfOpenPositions = "numberOfOpenPositions",
    NumberOfUnwinds = "numberOfUnwinds",
    OvlVolumeTraded = "ovlVolumeTraded",
    PlanckCatBalance = "planckCatBalance",
    Positions = "positions",
    RealizedPnl = "realizedPnl",
    ReferralPositions = "referralPositions",
    StakingPositions = "stakingPositions",
    Tokens = "tokens",
    TradingMiningEpochVolumes = "tradingMiningEpochVolumes",
    Unwinds = "unwinds"
}
export declare enum Aggregation_Interval {
    Day = "day",
    Hour = "hour"
}
export type BlockChangedFilter = {
    number_gte: Scalars['Int']['input'];
};
export type Block_Height = {
    hash?: InputMaybe<Scalars['Bytes']['input']>;
    number?: InputMaybe<Scalars['Int']['input']>;
    number_gte?: InputMaybe<Scalars['Int']['input']>;
};
export type Build = {
    __typename?: 'Build';
    collateral: Scalars['BigInt']['output'];
    currentDebt: Scalars['BigInt']['output'];
    currentOi: Scalars['BigInt']['output'];
    feeAmount: Scalars['BigInt']['output'];
    id: Scalars['ID']['output'];
    isLong: Scalars['Boolean']['output'];
    owner: Account;
    position: Position;
    price: Scalars['BigInt']['output'];
    timestamp: Scalars['BigInt']['output'];
    transaction: Transaction;
    value: Scalars['BigInt']['output'];
};
export type Build_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Build_Filter>>>;
    collateral?: InputMaybe<Scalars['BigInt']['input']>;
    collateral_gt?: InputMaybe<Scalars['BigInt']['input']>;
    collateral_gte?: InputMaybe<Scalars['BigInt']['input']>;
    collateral_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    collateral_lt?: InputMaybe<Scalars['BigInt']['input']>;
    collateral_lte?: InputMaybe<Scalars['BigInt']['input']>;
    collateral_not?: InputMaybe<Scalars['BigInt']['input']>;
    collateral_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    currentDebt?: InputMaybe<Scalars['BigInt']['input']>;
    currentDebt_gt?: InputMaybe<Scalars['BigInt']['input']>;
    currentDebt_gte?: InputMaybe<Scalars['BigInt']['input']>;
    currentDebt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    currentDebt_lt?: InputMaybe<Scalars['BigInt']['input']>;
    currentDebt_lte?: InputMaybe<Scalars['BigInt']['input']>;
    currentDebt_not?: InputMaybe<Scalars['BigInt']['input']>;
    currentDebt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    currentOi?: InputMaybe<Scalars['BigInt']['input']>;
    currentOi_gt?: InputMaybe<Scalars['BigInt']['input']>;
    currentOi_gte?: InputMaybe<Scalars['BigInt']['input']>;
    currentOi_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    currentOi_lt?: InputMaybe<Scalars['BigInt']['input']>;
    currentOi_lte?: InputMaybe<Scalars['BigInt']['input']>;
    currentOi_not?: InputMaybe<Scalars['BigInt']['input']>;
    currentOi_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    feeAmount?: InputMaybe<Scalars['BigInt']['input']>;
    feeAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    feeAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    feeAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    feeAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    feeAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    feeAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
    feeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    isLong?: InputMaybe<Scalars['Boolean']['input']>;
    isLong_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    isLong_not?: InputMaybe<Scalars['Boolean']['input']>;
    isLong_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    or?: InputMaybe<Array<InputMaybe<Build_Filter>>>;
    owner?: InputMaybe<Scalars['String']['input']>;
    owner_?: InputMaybe<Account_Filter>;
    owner_contains?: InputMaybe<Scalars['String']['input']>;
    owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_gt?: InputMaybe<Scalars['String']['input']>;
    owner_gte?: InputMaybe<Scalars['String']['input']>;
    owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_lt?: InputMaybe<Scalars['String']['input']>;
    owner_lte?: InputMaybe<Scalars['String']['input']>;
    owner_not?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    position?: InputMaybe<Scalars['String']['input']>;
    position_?: InputMaybe<Position_Filter>;
    position_contains?: InputMaybe<Scalars['String']['input']>;
    position_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    position_ends_with?: InputMaybe<Scalars['String']['input']>;
    position_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    position_gt?: InputMaybe<Scalars['String']['input']>;
    position_gte?: InputMaybe<Scalars['String']['input']>;
    position_in?: InputMaybe<Array<Scalars['String']['input']>>;
    position_lt?: InputMaybe<Scalars['String']['input']>;
    position_lte?: InputMaybe<Scalars['String']['input']>;
    position_not?: InputMaybe<Scalars['String']['input']>;
    position_not_contains?: InputMaybe<Scalars['String']['input']>;
    position_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    position_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    position_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    position_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    position_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    position_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    position_starts_with?: InputMaybe<Scalars['String']['input']>;
    position_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    price?: InputMaybe<Scalars['BigInt']['input']>;
    price_gt?: InputMaybe<Scalars['BigInt']['input']>;
    price_gte?: InputMaybe<Scalars['BigInt']['input']>;
    price_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    price_lt?: InputMaybe<Scalars['BigInt']['input']>;
    price_lte?: InputMaybe<Scalars['BigInt']['input']>;
    price_not?: InputMaybe<Scalars['BigInt']['input']>;
    price_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    timestamp?: InputMaybe<Scalars['BigInt']['input']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    transaction?: InputMaybe<Scalars['String']['input']>;
    transaction_?: InputMaybe<Transaction_Filter>;
    transaction_contains?: InputMaybe<Scalars['String']['input']>;
    transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
    transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction_gt?: InputMaybe<Scalars['String']['input']>;
    transaction_gte?: InputMaybe<Scalars['String']['input']>;
    transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
    transaction_lt?: InputMaybe<Scalars['String']['input']>;
    transaction_lte?: InputMaybe<Scalars['String']['input']>;
    transaction_not?: InputMaybe<Scalars['String']['input']>;
    transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
    transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
    transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    value?: InputMaybe<Scalars['BigInt']['input']>;
    value_gt?: InputMaybe<Scalars['BigInt']['input']>;
    value_gte?: InputMaybe<Scalars['BigInt']['input']>;
    value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    value_lt?: InputMaybe<Scalars['BigInt']['input']>;
    value_lte?: InputMaybe<Scalars['BigInt']['input']>;
    value_not?: InputMaybe<Scalars['BigInt']['input']>;
    value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum Build_OrderBy {
    Collateral = "collateral",
    CurrentDebt = "currentDebt",
    CurrentOi = "currentOi",
    FeeAmount = "feeAmount",
    Id = "id",
    IsLong = "isLong",
    Owner = "owner",
    OwnerId = "owner__id",
    OwnerNumberOfLiquidatedPositions = "owner__numberOfLiquidatedPositions",
    OwnerNumberOfOpenPositions = "owner__numberOfOpenPositions",
    OwnerNumberOfUnwinds = "owner__numberOfUnwinds",
    OwnerOvlVolumeTraded = "owner__ovlVolumeTraded",
    OwnerPlanckCatBalance = "owner__planckCatBalance",
    OwnerRealizedPnl = "owner__realizedPnl",
    Position = "position",
    PositionCreatedAtBlockNumber = "position__createdAtBlockNumber",
    PositionCreatedAtTimestamp = "position__createdAtTimestamp",
    PositionCurrentDebt = "position__currentDebt",
    PositionCurrentOi = "position__currentOi",
    PositionEntryPrice = "position__entryPrice",
    PositionFractionUnwound = "position__fractionUnwound",
    PositionId = "position__id",
    PositionInitialCollateral = "position__initialCollateral",
    PositionInitialDebt = "position__initialDebt",
    PositionInitialNotional = "position__initialNotional",
    PositionInitialOi = "position__initialOi",
    PositionIsLiquidated = "position__isLiquidated",
    PositionIsLong = "position__isLong",
    PositionLeverage = "position__leverage",
    PositionMint = "position__mint",
    PositionNumberOfUniwnds = "position__numberOfUniwnds",
    PositionPositionId = "position__positionId",
    Price = "price",
    Timestamp = "timestamp",
    Transaction = "transaction",
    TransactionBlockNumber = "transaction__blockNumber",
    TransactionGasLimit = "transaction__gasLimit",
    TransactionGasPrice = "transaction__gasPrice",
    TransactionId = "transaction__id",
    TransactionTimestamp = "transaction__timestamp",
    Value = "value"
}
export type Erc20Token = {
    __typename?: 'ERC20Token';
    id: Scalars['Bytes']['output'];
    name: Scalars['String']['output'];
    symbol: Scalars['String']['output'];
    totalSupply: Scalars['BigInt']['output'];
};
export type Erc20Token_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Erc20Token_Filter>>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_contains?: InputMaybe<Scalars['String']['input']>;
    name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    name_ends_with?: InputMaybe<Scalars['String']['input']>;
    name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name_gt?: InputMaybe<Scalars['String']['input']>;
    name_gte?: InputMaybe<Scalars['String']['input']>;
    name_in?: InputMaybe<Array<Scalars['String']['input']>>;
    name_lt?: InputMaybe<Scalars['String']['input']>;
    name_lte?: InputMaybe<Scalars['String']['input']>;
    name_not?: InputMaybe<Scalars['String']['input']>;
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name_starts_with?: InputMaybe<Scalars['String']['input']>;
    name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<Erc20Token_Filter>>>;
    symbol?: InputMaybe<Scalars['String']['input']>;
    symbol_contains?: InputMaybe<Scalars['String']['input']>;
    symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
    symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    symbol_gt?: InputMaybe<Scalars['String']['input']>;
    symbol_gte?: InputMaybe<Scalars['String']['input']>;
    symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
    symbol_lt?: InputMaybe<Scalars['String']['input']>;
    symbol_lte?: InputMaybe<Scalars['String']['input']>;
    symbol_not?: InputMaybe<Scalars['String']['input']>;
    symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
    symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
    symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    totalSupply?: InputMaybe<Scalars['BigInt']['input']>;
    totalSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum Erc20Token_OrderBy {
    Id = "id",
    Name = "name",
    Symbol = "symbol",
    TotalSupply = "totalSupply"
}
export type Erc721Nft = {
    __typename?: 'ERC721NFT';
    contract: Erc721Token;
    id: Scalars['Bytes']['output'];
    owner: Account;
    tokenId: Scalars['BigInt']['output'];
    tokenUri: Scalars['String']['output'];
};
export type Erc721Nft_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Erc721Nft_Filter>>>;
    contract?: InputMaybe<Scalars['String']['input']>;
    contract_?: InputMaybe<Erc721Token_Filter>;
    contract_contains?: InputMaybe<Scalars['String']['input']>;
    contract_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    contract_ends_with?: InputMaybe<Scalars['String']['input']>;
    contract_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    contract_gt?: InputMaybe<Scalars['String']['input']>;
    contract_gte?: InputMaybe<Scalars['String']['input']>;
    contract_in?: InputMaybe<Array<Scalars['String']['input']>>;
    contract_lt?: InputMaybe<Scalars['String']['input']>;
    contract_lte?: InputMaybe<Scalars['String']['input']>;
    contract_not?: InputMaybe<Scalars['String']['input']>;
    contract_not_contains?: InputMaybe<Scalars['String']['input']>;
    contract_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    contract_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    contract_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    contract_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    contract_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    contract_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    contract_starts_with?: InputMaybe<Scalars['String']['input']>;
    contract_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    or?: InputMaybe<Array<InputMaybe<Erc721Nft_Filter>>>;
    owner?: InputMaybe<Scalars['String']['input']>;
    owner_?: InputMaybe<Account_Filter>;
    owner_contains?: InputMaybe<Scalars['String']['input']>;
    owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_gt?: InputMaybe<Scalars['String']['input']>;
    owner_gte?: InputMaybe<Scalars['String']['input']>;
    owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_lt?: InputMaybe<Scalars['String']['input']>;
    owner_lte?: InputMaybe<Scalars['String']['input']>;
    owner_not?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    tokenId?: InputMaybe<Scalars['BigInt']['input']>;
    tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
    tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    tokenUri?: InputMaybe<Scalars['String']['input']>;
    tokenUri_contains?: InputMaybe<Scalars['String']['input']>;
    tokenUri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    tokenUri_ends_with?: InputMaybe<Scalars['String']['input']>;
    tokenUri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    tokenUri_gt?: InputMaybe<Scalars['String']['input']>;
    tokenUri_gte?: InputMaybe<Scalars['String']['input']>;
    tokenUri_in?: InputMaybe<Array<Scalars['String']['input']>>;
    tokenUri_lt?: InputMaybe<Scalars['String']['input']>;
    tokenUri_lte?: InputMaybe<Scalars['String']['input']>;
    tokenUri_not?: InputMaybe<Scalars['String']['input']>;
    tokenUri_not_contains?: InputMaybe<Scalars['String']['input']>;
    tokenUri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    tokenUri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    tokenUri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    tokenUri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    tokenUri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    tokenUri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    tokenUri_starts_with?: InputMaybe<Scalars['String']['input']>;
    tokenUri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};
export declare enum Erc721Nft_OrderBy {
    Contract = "contract",
    ContractId = "contract__id",
    ContractName = "contract__name",
    ContractSymbol = "contract__symbol",
    ContractTotalSupply = "contract__totalSupply",
    Id = "id",
    Owner = "owner",
    OwnerId = "owner__id",
    OwnerNumberOfLiquidatedPositions = "owner__numberOfLiquidatedPositions",
    OwnerNumberOfOpenPositions = "owner__numberOfOpenPositions",
    OwnerNumberOfUnwinds = "owner__numberOfUnwinds",
    OwnerOvlVolumeTraded = "owner__ovlVolumeTraded",
    OwnerPlanckCatBalance = "owner__planckCatBalance",
    OwnerRealizedPnl = "owner__realizedPnl",
    TokenId = "tokenId",
    TokenUri = "tokenUri"
}
export type Erc721Token = {
    __typename?: 'ERC721Token';
    id: Scalars['Bytes']['output'];
    name: Scalars['String']['output'];
    symbol: Scalars['String']['output'];
    totalSupply: Scalars['BigInt']['output'];
};
export type Erc721Token_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Erc721Token_Filter>>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_contains?: InputMaybe<Scalars['String']['input']>;
    name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    name_ends_with?: InputMaybe<Scalars['String']['input']>;
    name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name_gt?: InputMaybe<Scalars['String']['input']>;
    name_gte?: InputMaybe<Scalars['String']['input']>;
    name_in?: InputMaybe<Array<Scalars['String']['input']>>;
    name_lt?: InputMaybe<Scalars['String']['input']>;
    name_lte?: InputMaybe<Scalars['String']['input']>;
    name_not?: InputMaybe<Scalars['String']['input']>;
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    name_starts_with?: InputMaybe<Scalars['String']['input']>;
    name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<Erc721Token_Filter>>>;
    symbol?: InputMaybe<Scalars['String']['input']>;
    symbol_contains?: InputMaybe<Scalars['String']['input']>;
    symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
    symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    symbol_gt?: InputMaybe<Scalars['String']['input']>;
    symbol_gte?: InputMaybe<Scalars['String']['input']>;
    symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
    symbol_lt?: InputMaybe<Scalars['String']['input']>;
    symbol_lte?: InputMaybe<Scalars['String']['input']>;
    symbol_not?: InputMaybe<Scalars['String']['input']>;
    symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
    symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
    symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    totalSupply?: InputMaybe<Scalars['BigInt']['input']>;
    totalSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum Erc721Token_OrderBy {
    Id = "id",
    Name = "name",
    Symbol = "symbol",
    TotalSupply = "totalSupply"
}
export type Erc721Transfer = {
    __typename?: 'ERC721Transfer';
    from: Account;
    id: Scalars['Bytes']['output'];
    nft: Erc721Nft;
    to: Account;
    transaction: Transaction;
};
export type Erc721Transfer_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Erc721Transfer_Filter>>>;
    from?: InputMaybe<Scalars['String']['input']>;
    from_?: InputMaybe<Account_Filter>;
    from_contains?: InputMaybe<Scalars['String']['input']>;
    from_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    from_ends_with?: InputMaybe<Scalars['String']['input']>;
    from_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    from_gt?: InputMaybe<Scalars['String']['input']>;
    from_gte?: InputMaybe<Scalars['String']['input']>;
    from_in?: InputMaybe<Array<Scalars['String']['input']>>;
    from_lt?: InputMaybe<Scalars['String']['input']>;
    from_lte?: InputMaybe<Scalars['String']['input']>;
    from_not?: InputMaybe<Scalars['String']['input']>;
    from_not_contains?: InputMaybe<Scalars['String']['input']>;
    from_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    from_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    from_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    from_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    from_starts_with?: InputMaybe<Scalars['String']['input']>;
    from_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    nft?: InputMaybe<Scalars['String']['input']>;
    nft_?: InputMaybe<Erc721Nft_Filter>;
    nft_contains?: InputMaybe<Scalars['String']['input']>;
    nft_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    nft_ends_with?: InputMaybe<Scalars['String']['input']>;
    nft_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    nft_gt?: InputMaybe<Scalars['String']['input']>;
    nft_gte?: InputMaybe<Scalars['String']['input']>;
    nft_in?: InputMaybe<Array<Scalars['String']['input']>>;
    nft_lt?: InputMaybe<Scalars['String']['input']>;
    nft_lte?: InputMaybe<Scalars['String']['input']>;
    nft_not?: InputMaybe<Scalars['String']['input']>;
    nft_not_contains?: InputMaybe<Scalars['String']['input']>;
    nft_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    nft_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    nft_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    nft_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    nft_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    nft_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    nft_starts_with?: InputMaybe<Scalars['String']['input']>;
    nft_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<Erc721Transfer_Filter>>>;
    to?: InputMaybe<Scalars['String']['input']>;
    to_?: InputMaybe<Account_Filter>;
    to_contains?: InputMaybe<Scalars['String']['input']>;
    to_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    to_ends_with?: InputMaybe<Scalars['String']['input']>;
    to_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    to_gt?: InputMaybe<Scalars['String']['input']>;
    to_gte?: InputMaybe<Scalars['String']['input']>;
    to_in?: InputMaybe<Array<Scalars['String']['input']>>;
    to_lt?: InputMaybe<Scalars['String']['input']>;
    to_lte?: InputMaybe<Scalars['String']['input']>;
    to_not?: InputMaybe<Scalars['String']['input']>;
    to_not_contains?: InputMaybe<Scalars['String']['input']>;
    to_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    to_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    to_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    to_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    to_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    to_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    to_starts_with?: InputMaybe<Scalars['String']['input']>;
    to_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction?: InputMaybe<Scalars['String']['input']>;
    transaction_?: InputMaybe<Transaction_Filter>;
    transaction_contains?: InputMaybe<Scalars['String']['input']>;
    transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
    transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction_gt?: InputMaybe<Scalars['String']['input']>;
    transaction_gte?: InputMaybe<Scalars['String']['input']>;
    transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
    transaction_lt?: InputMaybe<Scalars['String']['input']>;
    transaction_lte?: InputMaybe<Scalars['String']['input']>;
    transaction_not?: InputMaybe<Scalars['String']['input']>;
    transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
    transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
    transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};
export declare enum Erc721Transfer_OrderBy {
    From = "from",
    FromId = "from__id",
    FromNumberOfLiquidatedPositions = "from__numberOfLiquidatedPositions",
    FromNumberOfOpenPositions = "from__numberOfOpenPositions",
    FromNumberOfUnwinds = "from__numberOfUnwinds",
    FromOvlVolumeTraded = "from__ovlVolumeTraded",
    FromPlanckCatBalance = "from__planckCatBalance",
    FromRealizedPnl = "from__realizedPnl",
    Id = "id",
    Nft = "nft",
    NftId = "nft__id",
    NftTokenId = "nft__tokenId",
    NftTokenUri = "nft__tokenUri",
    To = "to",
    ToId = "to__id",
    ToNumberOfLiquidatedPositions = "to__numberOfLiquidatedPositions",
    ToNumberOfOpenPositions = "to__numberOfOpenPositions",
    ToNumberOfUnwinds = "to__numberOfUnwinds",
    ToOvlVolumeTraded = "to__ovlVolumeTraded",
    ToPlanckCatBalance = "to__planckCatBalance",
    ToRealizedPnl = "to__realizedPnl",
    Transaction = "transaction",
    TransactionBlockNumber = "transaction__blockNumber",
    TransactionGasLimit = "transaction__gasLimit",
    TransactionGasPrice = "transaction__gasPrice",
    TransactionId = "transaction__id",
    TransactionTimestamp = "transaction__timestamp"
}
export type Factory = {
    __typename?: 'Factory';
    feeRecipient: Scalars['ID']['output'];
    id: Scalars['ID']['output'];
    marketCount: Scalars['BigInt']['output'];
    markets: Array<Market>;
    owner: Scalars['ID']['output'];
    totalFeesOVL: Scalars['BigDecimal']['output'];
    totalValueLockedOVL: Scalars['BigDecimal']['output'];
    totalVolumeOVL: Scalars['BigDecimal']['output'];
    txCount: Scalars['BigInt']['output'];
};
export type FactoryMarketsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Market_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<Market_Filter>;
};
export type Factory_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Factory_Filter>>>;
    feeRecipient?: InputMaybe<Scalars['ID']['input']>;
    feeRecipient_gt?: InputMaybe<Scalars['ID']['input']>;
    feeRecipient_gte?: InputMaybe<Scalars['ID']['input']>;
    feeRecipient_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    feeRecipient_lt?: InputMaybe<Scalars['ID']['input']>;
    feeRecipient_lte?: InputMaybe<Scalars['ID']['input']>;
    feeRecipient_not?: InputMaybe<Scalars['ID']['input']>;
    feeRecipient_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    marketCount?: InputMaybe<Scalars['BigInt']['input']>;
    marketCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    marketCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    marketCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    marketCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    marketCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    marketCount_not?: InputMaybe<Scalars['BigInt']['input']>;
    marketCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    markets_?: InputMaybe<Market_Filter>;
    or?: InputMaybe<Array<InputMaybe<Factory_Filter>>>;
    owner?: InputMaybe<Scalars['ID']['input']>;
    owner_gt?: InputMaybe<Scalars['ID']['input']>;
    owner_gte?: InputMaybe<Scalars['ID']['input']>;
    owner_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    owner_lt?: InputMaybe<Scalars['ID']['input']>;
    owner_lte?: InputMaybe<Scalars['ID']['input']>;
    owner_not?: InputMaybe<Scalars['ID']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    totalFeesOVL?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalFeesOVL_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalFeesOVL_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalFeesOVL_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    totalFeesOVL_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalFeesOVL_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalFeesOVL_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalFeesOVL_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    totalValueLockedOVL?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalValueLockedOVL_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalValueLockedOVL_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalValueLockedOVL_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    totalValueLockedOVL_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalValueLockedOVL_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalValueLockedOVL_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalValueLockedOVL_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    totalVolumeOVL?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalVolumeOVL_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalVolumeOVL_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalVolumeOVL_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    totalVolumeOVL_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalVolumeOVL_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalVolumeOVL_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    totalVolumeOVL_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    txCount?: InputMaybe<Scalars['BigInt']['input']>;
    txCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    txCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    txCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    txCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    txCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    txCount_not?: InputMaybe<Scalars['BigInt']['input']>;
    txCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum Factory_OrderBy {
    FeeRecipient = "feeRecipient",
    Id = "id",
    MarketCount = "marketCount",
    Markets = "markets",
    Owner = "owner",
    TotalFeesOvl = "totalFeesOVL",
    TotalValueLockedOvl = "totalValueLockedOVL",
    TotalVolumeOvl = "totalVolumeOVL",
    TxCount = "txCount"
}
export type Liquidate = {
    __typename?: 'Liquidate';
    collateral: Scalars['BigInt']['output'];
    currentDebt: Scalars['BigInt']['output'];
    currentOi: Scalars['BigInt']['output'];
    fractionOfPosition: Scalars['BigInt']['output'];
    id: Scalars['ID']['output'];
    isLong: Scalars['Boolean']['output'];
    mint: Scalars['BigInt']['output'];
    owner: Account;
    position: Position;
    price: Scalars['BigInt']['output'];
    sender: Account;
    size: Scalars['BigInt']['output'];
    timestamp: Scalars['BigInt']['output'];
    transaction: Transaction;
    value: Scalars['BigInt']['output'];
};
export type Liquidate_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Liquidate_Filter>>>;
    collateral?: InputMaybe<Scalars['BigInt']['input']>;
    collateral_gt?: InputMaybe<Scalars['BigInt']['input']>;
    collateral_gte?: InputMaybe<Scalars['BigInt']['input']>;
    collateral_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    collateral_lt?: InputMaybe<Scalars['BigInt']['input']>;
    collateral_lte?: InputMaybe<Scalars['BigInt']['input']>;
    collateral_not?: InputMaybe<Scalars['BigInt']['input']>;
    collateral_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    currentDebt?: InputMaybe<Scalars['BigInt']['input']>;
    currentDebt_gt?: InputMaybe<Scalars['BigInt']['input']>;
    currentDebt_gte?: InputMaybe<Scalars['BigInt']['input']>;
    currentDebt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    currentDebt_lt?: InputMaybe<Scalars['BigInt']['input']>;
    currentDebt_lte?: InputMaybe<Scalars['BigInt']['input']>;
    currentDebt_not?: InputMaybe<Scalars['BigInt']['input']>;
    currentDebt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    currentOi?: InputMaybe<Scalars['BigInt']['input']>;
    currentOi_gt?: InputMaybe<Scalars['BigInt']['input']>;
    currentOi_gte?: InputMaybe<Scalars['BigInt']['input']>;
    currentOi_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    currentOi_lt?: InputMaybe<Scalars['BigInt']['input']>;
    currentOi_lte?: InputMaybe<Scalars['BigInt']['input']>;
    currentOi_not?: InputMaybe<Scalars['BigInt']['input']>;
    currentOi_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fractionOfPosition?: InputMaybe<Scalars['BigInt']['input']>;
    fractionOfPosition_gt?: InputMaybe<Scalars['BigInt']['input']>;
    fractionOfPosition_gte?: InputMaybe<Scalars['BigInt']['input']>;
    fractionOfPosition_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fractionOfPosition_lt?: InputMaybe<Scalars['BigInt']['input']>;
    fractionOfPosition_lte?: InputMaybe<Scalars['BigInt']['input']>;
    fractionOfPosition_not?: InputMaybe<Scalars['BigInt']['input']>;
    fractionOfPosition_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    isLong?: InputMaybe<Scalars['Boolean']['input']>;
    isLong_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    isLong_not?: InputMaybe<Scalars['Boolean']['input']>;
    isLong_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    mint?: InputMaybe<Scalars['BigInt']['input']>;
    mint_gt?: InputMaybe<Scalars['BigInt']['input']>;
    mint_gte?: InputMaybe<Scalars['BigInt']['input']>;
    mint_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    mint_lt?: InputMaybe<Scalars['BigInt']['input']>;
    mint_lte?: InputMaybe<Scalars['BigInt']['input']>;
    mint_not?: InputMaybe<Scalars['BigInt']['input']>;
    mint_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<Liquidate_Filter>>>;
    owner?: InputMaybe<Scalars['String']['input']>;
    owner_?: InputMaybe<Account_Filter>;
    owner_contains?: InputMaybe<Scalars['String']['input']>;
    owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_gt?: InputMaybe<Scalars['String']['input']>;
    owner_gte?: InputMaybe<Scalars['String']['input']>;
    owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_lt?: InputMaybe<Scalars['String']['input']>;
    owner_lte?: InputMaybe<Scalars['String']['input']>;
    owner_not?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    position?: InputMaybe<Scalars['String']['input']>;
    position_?: InputMaybe<Position_Filter>;
    position_contains?: InputMaybe<Scalars['String']['input']>;
    position_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    position_ends_with?: InputMaybe<Scalars['String']['input']>;
    position_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    position_gt?: InputMaybe<Scalars['String']['input']>;
    position_gte?: InputMaybe<Scalars['String']['input']>;
    position_in?: InputMaybe<Array<Scalars['String']['input']>>;
    position_lt?: InputMaybe<Scalars['String']['input']>;
    position_lte?: InputMaybe<Scalars['String']['input']>;
    position_not?: InputMaybe<Scalars['String']['input']>;
    position_not_contains?: InputMaybe<Scalars['String']['input']>;
    position_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    position_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    position_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    position_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    position_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    position_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    position_starts_with?: InputMaybe<Scalars['String']['input']>;
    position_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    price?: InputMaybe<Scalars['BigInt']['input']>;
    price_gt?: InputMaybe<Scalars['BigInt']['input']>;
    price_gte?: InputMaybe<Scalars['BigInt']['input']>;
    price_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    price_lt?: InputMaybe<Scalars['BigInt']['input']>;
    price_lte?: InputMaybe<Scalars['BigInt']['input']>;
    price_not?: InputMaybe<Scalars['BigInt']['input']>;
    price_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    sender?: InputMaybe<Scalars['String']['input']>;
    sender_?: InputMaybe<Account_Filter>;
    sender_contains?: InputMaybe<Scalars['String']['input']>;
    sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    sender_ends_with?: InputMaybe<Scalars['String']['input']>;
    sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    sender_gt?: InputMaybe<Scalars['String']['input']>;
    sender_gte?: InputMaybe<Scalars['String']['input']>;
    sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
    sender_lt?: InputMaybe<Scalars['String']['input']>;
    sender_lte?: InputMaybe<Scalars['String']['input']>;
    sender_not?: InputMaybe<Scalars['String']['input']>;
    sender_not_contains?: InputMaybe<Scalars['String']['input']>;
    sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    sender_starts_with?: InputMaybe<Scalars['String']['input']>;
    sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    size?: InputMaybe<Scalars['BigInt']['input']>;
    size_gt?: InputMaybe<Scalars['BigInt']['input']>;
    size_gte?: InputMaybe<Scalars['BigInt']['input']>;
    size_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    size_lt?: InputMaybe<Scalars['BigInt']['input']>;
    size_lte?: InputMaybe<Scalars['BigInt']['input']>;
    size_not?: InputMaybe<Scalars['BigInt']['input']>;
    size_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    timestamp?: InputMaybe<Scalars['BigInt']['input']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    transaction?: InputMaybe<Scalars['String']['input']>;
    transaction_?: InputMaybe<Transaction_Filter>;
    transaction_contains?: InputMaybe<Scalars['String']['input']>;
    transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
    transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction_gt?: InputMaybe<Scalars['String']['input']>;
    transaction_gte?: InputMaybe<Scalars['String']['input']>;
    transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
    transaction_lt?: InputMaybe<Scalars['String']['input']>;
    transaction_lte?: InputMaybe<Scalars['String']['input']>;
    transaction_not?: InputMaybe<Scalars['String']['input']>;
    transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
    transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
    transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    value?: InputMaybe<Scalars['BigInt']['input']>;
    value_gt?: InputMaybe<Scalars['BigInt']['input']>;
    value_gte?: InputMaybe<Scalars['BigInt']['input']>;
    value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    value_lt?: InputMaybe<Scalars['BigInt']['input']>;
    value_lte?: InputMaybe<Scalars['BigInt']['input']>;
    value_not?: InputMaybe<Scalars['BigInt']['input']>;
    value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum Liquidate_OrderBy {
    Collateral = "collateral",
    CurrentDebt = "currentDebt",
    CurrentOi = "currentOi",
    FractionOfPosition = "fractionOfPosition",
    Id = "id",
    IsLong = "isLong",
    Mint = "mint",
    Owner = "owner",
    OwnerId = "owner__id",
    OwnerNumberOfLiquidatedPositions = "owner__numberOfLiquidatedPositions",
    OwnerNumberOfOpenPositions = "owner__numberOfOpenPositions",
    OwnerNumberOfUnwinds = "owner__numberOfUnwinds",
    OwnerOvlVolumeTraded = "owner__ovlVolumeTraded",
    OwnerPlanckCatBalance = "owner__planckCatBalance",
    OwnerRealizedPnl = "owner__realizedPnl",
    Position = "position",
    PositionCreatedAtBlockNumber = "position__createdAtBlockNumber",
    PositionCreatedAtTimestamp = "position__createdAtTimestamp",
    PositionCurrentDebt = "position__currentDebt",
    PositionCurrentOi = "position__currentOi",
    PositionEntryPrice = "position__entryPrice",
    PositionFractionUnwound = "position__fractionUnwound",
    PositionId = "position__id",
    PositionInitialCollateral = "position__initialCollateral",
    PositionInitialDebt = "position__initialDebt",
    PositionInitialNotional = "position__initialNotional",
    PositionInitialOi = "position__initialOi",
    PositionIsLiquidated = "position__isLiquidated",
    PositionIsLong = "position__isLong",
    PositionLeverage = "position__leverage",
    PositionMint = "position__mint",
    PositionNumberOfUniwnds = "position__numberOfUniwnds",
    PositionPositionId = "position__positionId",
    Price = "price",
    Sender = "sender",
    SenderId = "sender__id",
    SenderNumberOfLiquidatedPositions = "sender__numberOfLiquidatedPositions",
    SenderNumberOfOpenPositions = "sender__numberOfOpenPositions",
    SenderNumberOfUnwinds = "sender__numberOfUnwinds",
    SenderOvlVolumeTraded = "sender__ovlVolumeTraded",
    SenderPlanckCatBalance = "sender__planckCatBalance",
    SenderRealizedPnl = "sender__realizedPnl",
    Size = "size",
    Timestamp = "timestamp",
    Transaction = "transaction",
    TransactionBlockNumber = "transaction__blockNumber",
    TransactionGasLimit = "transaction__gasLimit",
    TransactionGasPrice = "transaction__gasPrice",
    TransactionId = "transaction__id",
    TransactionTimestamp = "transaction__timestamp",
    Value = "value"
}
export type Market = {
    __typename?: 'Market';
    averageBlockTime: Scalars['BigInt']['output'];
    capLeverage: Scalars['BigInt']['output'];
    capNotional: Scalars['BigInt']['output'];
    capPayoff: Scalars['BigInt']['output'];
    circuitBreakerMintTarget: Scalars['BigInt']['output'];
    circuitBreakerWindow: Scalars['BigInt']['output'];
    createdAtBlockNumber: Scalars['BigInt']['output'];
    createdAtTimestamp: Scalars['BigInt']['output'];
    delta: Scalars['BigInt']['output'];
    factory: Factory;
    feedAddress: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    isShutdown: Scalars['Boolean']['output'];
    k: Scalars['BigInt']['output'];
    liquidationFeeRate: Scalars['BigInt']['output'];
    lmbda: Scalars['BigInt']['output'];
    maintenanceMarginBurnRate: Scalars['BigInt']['output'];
    maintenanceMarginFraction: Scalars['BigInt']['output'];
    minCollateral: Scalars['BigInt']['output'];
    numberOfBuilds: Scalars['BigInt']['output'];
    numberOfLiquidates: Scalars['BigInt']['output'];
    numberOfUnwinds: Scalars['BigInt']['output'];
    oiLong: Scalars['BigInt']['output'];
    oiShort: Scalars['BigInt']['output'];
    positions: Array<Position>;
    priceDriftUpperLimit: Scalars['BigInt']['output'];
    totalBuildFees: Scalars['BigInt']['output'];
    totalFees: Scalars['BigInt']['output'];
    totalLiquidateFees: Scalars['BigInt']['output'];
    totalUnwindFees: Scalars['BigInt']['output'];
    tradingFeeRate: Scalars['BigInt']['output'];
};
export type MarketPositionsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Position_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<Position_Filter>;
};
export type Market_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Market_Filter>>>;
    averageBlockTime?: InputMaybe<Scalars['BigInt']['input']>;
    averageBlockTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
    averageBlockTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
    averageBlockTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    averageBlockTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
    averageBlockTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
    averageBlockTime_not?: InputMaybe<Scalars['BigInt']['input']>;
    averageBlockTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    capLeverage?: InputMaybe<Scalars['BigInt']['input']>;
    capLeverage_gt?: InputMaybe<Scalars['BigInt']['input']>;
    capLeverage_gte?: InputMaybe<Scalars['BigInt']['input']>;
    capLeverage_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    capLeverage_lt?: InputMaybe<Scalars['BigInt']['input']>;
    capLeverage_lte?: InputMaybe<Scalars['BigInt']['input']>;
    capLeverage_not?: InputMaybe<Scalars['BigInt']['input']>;
    capLeverage_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    capNotional?: InputMaybe<Scalars['BigInt']['input']>;
    capNotional_gt?: InputMaybe<Scalars['BigInt']['input']>;
    capNotional_gte?: InputMaybe<Scalars['BigInt']['input']>;
    capNotional_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    capNotional_lt?: InputMaybe<Scalars['BigInt']['input']>;
    capNotional_lte?: InputMaybe<Scalars['BigInt']['input']>;
    capNotional_not?: InputMaybe<Scalars['BigInt']['input']>;
    capNotional_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    capPayoff?: InputMaybe<Scalars['BigInt']['input']>;
    capPayoff_gt?: InputMaybe<Scalars['BigInt']['input']>;
    capPayoff_gte?: InputMaybe<Scalars['BigInt']['input']>;
    capPayoff_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    capPayoff_lt?: InputMaybe<Scalars['BigInt']['input']>;
    capPayoff_lte?: InputMaybe<Scalars['BigInt']['input']>;
    capPayoff_not?: InputMaybe<Scalars['BigInt']['input']>;
    capPayoff_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    circuitBreakerMintTarget?: InputMaybe<Scalars['BigInt']['input']>;
    circuitBreakerMintTarget_gt?: InputMaybe<Scalars['BigInt']['input']>;
    circuitBreakerMintTarget_gte?: InputMaybe<Scalars['BigInt']['input']>;
    circuitBreakerMintTarget_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    circuitBreakerMintTarget_lt?: InputMaybe<Scalars['BigInt']['input']>;
    circuitBreakerMintTarget_lte?: InputMaybe<Scalars['BigInt']['input']>;
    circuitBreakerMintTarget_not?: InputMaybe<Scalars['BigInt']['input']>;
    circuitBreakerMintTarget_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    circuitBreakerWindow?: InputMaybe<Scalars['BigInt']['input']>;
    circuitBreakerWindow_gt?: InputMaybe<Scalars['BigInt']['input']>;
    circuitBreakerWindow_gte?: InputMaybe<Scalars['BigInt']['input']>;
    circuitBreakerWindow_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    circuitBreakerWindow_lt?: InputMaybe<Scalars['BigInt']['input']>;
    circuitBreakerWindow_lte?: InputMaybe<Scalars['BigInt']['input']>;
    circuitBreakerWindow_not?: InputMaybe<Scalars['BigInt']['input']>;
    circuitBreakerWindow_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    delta?: InputMaybe<Scalars['BigInt']['input']>;
    delta_gt?: InputMaybe<Scalars['BigInt']['input']>;
    delta_gte?: InputMaybe<Scalars['BigInt']['input']>;
    delta_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    delta_lt?: InputMaybe<Scalars['BigInt']['input']>;
    delta_lte?: InputMaybe<Scalars['BigInt']['input']>;
    delta_not?: InputMaybe<Scalars['BigInt']['input']>;
    delta_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    factory?: InputMaybe<Scalars['String']['input']>;
    factory_?: InputMaybe<Factory_Filter>;
    factory_contains?: InputMaybe<Scalars['String']['input']>;
    factory_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    factory_ends_with?: InputMaybe<Scalars['String']['input']>;
    factory_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    factory_gt?: InputMaybe<Scalars['String']['input']>;
    factory_gte?: InputMaybe<Scalars['String']['input']>;
    factory_in?: InputMaybe<Array<Scalars['String']['input']>>;
    factory_lt?: InputMaybe<Scalars['String']['input']>;
    factory_lte?: InputMaybe<Scalars['String']['input']>;
    factory_not?: InputMaybe<Scalars['String']['input']>;
    factory_not_contains?: InputMaybe<Scalars['String']['input']>;
    factory_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    factory_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    factory_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    factory_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    factory_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    factory_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    factory_starts_with?: InputMaybe<Scalars['String']['input']>;
    factory_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    feedAddress?: InputMaybe<Scalars['String']['input']>;
    feedAddress_contains?: InputMaybe<Scalars['String']['input']>;
    feedAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    feedAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
    feedAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    feedAddress_gt?: InputMaybe<Scalars['String']['input']>;
    feedAddress_gte?: InputMaybe<Scalars['String']['input']>;
    feedAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
    feedAddress_lt?: InputMaybe<Scalars['String']['input']>;
    feedAddress_lte?: InputMaybe<Scalars['String']['input']>;
    feedAddress_not?: InputMaybe<Scalars['String']['input']>;
    feedAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
    feedAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    feedAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    feedAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    feedAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    feedAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    feedAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    feedAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
    feedAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    isShutdown?: InputMaybe<Scalars['Boolean']['input']>;
    isShutdown_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    isShutdown_not?: InputMaybe<Scalars['Boolean']['input']>;
    isShutdown_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    k?: InputMaybe<Scalars['BigInt']['input']>;
    k_gt?: InputMaybe<Scalars['BigInt']['input']>;
    k_gte?: InputMaybe<Scalars['BigInt']['input']>;
    k_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    k_lt?: InputMaybe<Scalars['BigInt']['input']>;
    k_lte?: InputMaybe<Scalars['BigInt']['input']>;
    k_not?: InputMaybe<Scalars['BigInt']['input']>;
    k_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    liquidationFeeRate?: InputMaybe<Scalars['BigInt']['input']>;
    liquidationFeeRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
    liquidationFeeRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
    liquidationFeeRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    liquidationFeeRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
    liquidationFeeRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
    liquidationFeeRate_not?: InputMaybe<Scalars['BigInt']['input']>;
    liquidationFeeRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lmbda?: InputMaybe<Scalars['BigInt']['input']>;
    lmbda_gt?: InputMaybe<Scalars['BigInt']['input']>;
    lmbda_gte?: InputMaybe<Scalars['BigInt']['input']>;
    lmbda_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lmbda_lt?: InputMaybe<Scalars['BigInt']['input']>;
    lmbda_lte?: InputMaybe<Scalars['BigInt']['input']>;
    lmbda_not?: InputMaybe<Scalars['BigInt']['input']>;
    lmbda_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    maintenanceMarginBurnRate?: InputMaybe<Scalars['BigInt']['input']>;
    maintenanceMarginBurnRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
    maintenanceMarginBurnRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
    maintenanceMarginBurnRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    maintenanceMarginBurnRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
    maintenanceMarginBurnRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
    maintenanceMarginBurnRate_not?: InputMaybe<Scalars['BigInt']['input']>;
    maintenanceMarginBurnRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    maintenanceMarginFraction?: InputMaybe<Scalars['BigInt']['input']>;
    maintenanceMarginFraction_gt?: InputMaybe<Scalars['BigInt']['input']>;
    maintenanceMarginFraction_gte?: InputMaybe<Scalars['BigInt']['input']>;
    maintenanceMarginFraction_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    maintenanceMarginFraction_lt?: InputMaybe<Scalars['BigInt']['input']>;
    maintenanceMarginFraction_lte?: InputMaybe<Scalars['BigInt']['input']>;
    maintenanceMarginFraction_not?: InputMaybe<Scalars['BigInt']['input']>;
    maintenanceMarginFraction_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    minCollateral?: InputMaybe<Scalars['BigInt']['input']>;
    minCollateral_gt?: InputMaybe<Scalars['BigInt']['input']>;
    minCollateral_gte?: InputMaybe<Scalars['BigInt']['input']>;
    minCollateral_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    minCollateral_lt?: InputMaybe<Scalars['BigInt']['input']>;
    minCollateral_lte?: InputMaybe<Scalars['BigInt']['input']>;
    minCollateral_not?: InputMaybe<Scalars['BigInt']['input']>;
    minCollateral_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    numberOfBuilds?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfBuilds_gt?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfBuilds_gte?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfBuilds_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    numberOfBuilds_lt?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfBuilds_lte?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfBuilds_not?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfBuilds_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    numberOfLiquidates?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfLiquidates_gt?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfLiquidates_gte?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfLiquidates_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    numberOfLiquidates_lt?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfLiquidates_lte?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfLiquidates_not?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfLiquidates_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    numberOfUnwinds?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfUnwinds_gt?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfUnwinds_gte?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfUnwinds_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    numberOfUnwinds_lt?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfUnwinds_lte?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfUnwinds_not?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfUnwinds_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    oiLong?: InputMaybe<Scalars['BigInt']['input']>;
    oiLong_gt?: InputMaybe<Scalars['BigInt']['input']>;
    oiLong_gte?: InputMaybe<Scalars['BigInt']['input']>;
    oiLong_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    oiLong_lt?: InputMaybe<Scalars['BigInt']['input']>;
    oiLong_lte?: InputMaybe<Scalars['BigInt']['input']>;
    oiLong_not?: InputMaybe<Scalars['BigInt']['input']>;
    oiLong_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    oiShort?: InputMaybe<Scalars['BigInt']['input']>;
    oiShort_gt?: InputMaybe<Scalars['BigInt']['input']>;
    oiShort_gte?: InputMaybe<Scalars['BigInt']['input']>;
    oiShort_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    oiShort_lt?: InputMaybe<Scalars['BigInt']['input']>;
    oiShort_lte?: InputMaybe<Scalars['BigInt']['input']>;
    oiShort_not?: InputMaybe<Scalars['BigInt']['input']>;
    oiShort_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<Market_Filter>>>;
    positions_?: InputMaybe<Position_Filter>;
    priceDriftUpperLimit?: InputMaybe<Scalars['BigInt']['input']>;
    priceDriftUpperLimit_gt?: InputMaybe<Scalars['BigInt']['input']>;
    priceDriftUpperLimit_gte?: InputMaybe<Scalars['BigInt']['input']>;
    priceDriftUpperLimit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    priceDriftUpperLimit_lt?: InputMaybe<Scalars['BigInt']['input']>;
    priceDriftUpperLimit_lte?: InputMaybe<Scalars['BigInt']['input']>;
    priceDriftUpperLimit_not?: InputMaybe<Scalars['BigInt']['input']>;
    priceDriftUpperLimit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalBuildFees?: InputMaybe<Scalars['BigInt']['input']>;
    totalBuildFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalBuildFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalBuildFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalBuildFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalBuildFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalBuildFees_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalBuildFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalFees?: InputMaybe<Scalars['BigInt']['input']>;
    totalFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalFees_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalLiquidateFees?: InputMaybe<Scalars['BigInt']['input']>;
    totalLiquidateFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalLiquidateFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalLiquidateFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalLiquidateFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalLiquidateFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalLiquidateFees_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalLiquidateFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalUnwindFees?: InputMaybe<Scalars['BigInt']['input']>;
    totalUnwindFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalUnwindFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalUnwindFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalUnwindFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalUnwindFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalUnwindFees_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalUnwindFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    tradingFeeRate?: InputMaybe<Scalars['BigInt']['input']>;
    tradingFeeRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
    tradingFeeRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
    tradingFeeRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    tradingFeeRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
    tradingFeeRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
    tradingFeeRate_not?: InputMaybe<Scalars['BigInt']['input']>;
    tradingFeeRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum Market_OrderBy {
    AverageBlockTime = "averageBlockTime",
    CapLeverage = "capLeverage",
    CapNotional = "capNotional",
    CapPayoff = "capPayoff",
    CircuitBreakerMintTarget = "circuitBreakerMintTarget",
    CircuitBreakerWindow = "circuitBreakerWindow",
    CreatedAtBlockNumber = "createdAtBlockNumber",
    CreatedAtTimestamp = "createdAtTimestamp",
    Delta = "delta",
    Factory = "factory",
    FactoryFeeRecipient = "factory__feeRecipient",
    FactoryId = "factory__id",
    FactoryMarketCount = "factory__marketCount",
    FactoryOwner = "factory__owner",
    FactoryTotalFeesOvl = "factory__totalFeesOVL",
    FactoryTotalValueLockedOvl = "factory__totalValueLockedOVL",
    FactoryTotalVolumeOvl = "factory__totalVolumeOVL",
    FactoryTxCount = "factory__txCount",
    FeedAddress = "feedAddress",
    Id = "id",
    IsShutdown = "isShutdown",
    K = "k",
    LiquidationFeeRate = "liquidationFeeRate",
    Lmbda = "lmbda",
    MaintenanceMarginBurnRate = "maintenanceMarginBurnRate",
    MaintenanceMarginFraction = "maintenanceMarginFraction",
    MinCollateral = "minCollateral",
    NumberOfBuilds = "numberOfBuilds",
    NumberOfLiquidates = "numberOfLiquidates",
    NumberOfUnwinds = "numberOfUnwinds",
    OiLong = "oiLong",
    OiShort = "oiShort",
    Positions = "positions",
    PriceDriftUpperLimit = "priceDriftUpperLimit",
    TotalBuildFees = "totalBuildFees",
    TotalFees = "totalFees",
    TotalLiquidateFees = "totalLiquidateFees",
    TotalUnwindFees = "totalUnwindFees",
    TradingFeeRate = "tradingFeeRate"
}
/** Defines the order direction, either ascending or descending */
export declare enum OrderDirection {
    Asc = "asc",
    Desc = "desc"
}
export type Position = {
    __typename?: 'Position';
    builds: Array<Build>;
    createdAtBlockNumber: Scalars['BigInt']['output'];
    createdAtTimestamp: Scalars['BigInt']['output'];
    currentDebt: Scalars['BigInt']['output'];
    currentOi: Scalars['BigInt']['output'];
    entryPrice: Scalars['BigInt']['output'];
    fractionUnwound: Scalars['BigInt']['output'];
    id: Scalars['ID']['output'];
    initialCollateral: Scalars['BigInt']['output'];
    initialDebt: Scalars['BigInt']['output'];
    initialNotional: Scalars['BigInt']['output'];
    initialOi: Scalars['BigInt']['output'];
    isLiquidated: Scalars['Boolean']['output'];
    isLong: Scalars['Boolean']['output'];
    leverage: Scalars['BigDecimal']['output'];
    liquidates: Array<Liquidate>;
    market: Market;
    mint: Scalars['BigInt']['output'];
    numberOfUniwnds: Scalars['BigInt']['output'];
    owner: Account;
    positionId: Scalars['String']['output'];
    unwinds: Array<Unwind>;
};
export type PositionBuildsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Build_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<Build_Filter>;
};
export type PositionLiquidatesArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Liquidate_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<Liquidate_Filter>;
};
export type PositionUnwindsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Unwind_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<Unwind_Filter>;
};
export type Position_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Position_Filter>>>;
    builds_?: InputMaybe<Build_Filter>;
    createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    currentDebt?: InputMaybe<Scalars['BigInt']['input']>;
    currentDebt_gt?: InputMaybe<Scalars['BigInt']['input']>;
    currentDebt_gte?: InputMaybe<Scalars['BigInt']['input']>;
    currentDebt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    currentDebt_lt?: InputMaybe<Scalars['BigInt']['input']>;
    currentDebt_lte?: InputMaybe<Scalars['BigInt']['input']>;
    currentDebt_not?: InputMaybe<Scalars['BigInt']['input']>;
    currentDebt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    currentOi?: InputMaybe<Scalars['BigInt']['input']>;
    currentOi_gt?: InputMaybe<Scalars['BigInt']['input']>;
    currentOi_gte?: InputMaybe<Scalars['BigInt']['input']>;
    currentOi_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    currentOi_lt?: InputMaybe<Scalars['BigInt']['input']>;
    currentOi_lte?: InputMaybe<Scalars['BigInt']['input']>;
    currentOi_not?: InputMaybe<Scalars['BigInt']['input']>;
    currentOi_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    entryPrice?: InputMaybe<Scalars['BigInt']['input']>;
    entryPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
    entryPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
    entryPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    entryPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
    entryPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
    entryPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
    entryPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fractionUnwound?: InputMaybe<Scalars['BigInt']['input']>;
    fractionUnwound_gt?: InputMaybe<Scalars['BigInt']['input']>;
    fractionUnwound_gte?: InputMaybe<Scalars['BigInt']['input']>;
    fractionUnwound_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fractionUnwound_lt?: InputMaybe<Scalars['BigInt']['input']>;
    fractionUnwound_lte?: InputMaybe<Scalars['BigInt']['input']>;
    fractionUnwound_not?: InputMaybe<Scalars['BigInt']['input']>;
    fractionUnwound_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    initialCollateral?: InputMaybe<Scalars['BigInt']['input']>;
    initialCollateral_gt?: InputMaybe<Scalars['BigInt']['input']>;
    initialCollateral_gte?: InputMaybe<Scalars['BigInt']['input']>;
    initialCollateral_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    initialCollateral_lt?: InputMaybe<Scalars['BigInt']['input']>;
    initialCollateral_lte?: InputMaybe<Scalars['BigInt']['input']>;
    initialCollateral_not?: InputMaybe<Scalars['BigInt']['input']>;
    initialCollateral_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    initialDebt?: InputMaybe<Scalars['BigInt']['input']>;
    initialDebt_gt?: InputMaybe<Scalars['BigInt']['input']>;
    initialDebt_gte?: InputMaybe<Scalars['BigInt']['input']>;
    initialDebt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    initialDebt_lt?: InputMaybe<Scalars['BigInt']['input']>;
    initialDebt_lte?: InputMaybe<Scalars['BigInt']['input']>;
    initialDebt_not?: InputMaybe<Scalars['BigInt']['input']>;
    initialDebt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    initialNotional?: InputMaybe<Scalars['BigInt']['input']>;
    initialNotional_gt?: InputMaybe<Scalars['BigInt']['input']>;
    initialNotional_gte?: InputMaybe<Scalars['BigInt']['input']>;
    initialNotional_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    initialNotional_lt?: InputMaybe<Scalars['BigInt']['input']>;
    initialNotional_lte?: InputMaybe<Scalars['BigInt']['input']>;
    initialNotional_not?: InputMaybe<Scalars['BigInt']['input']>;
    initialNotional_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    initialOi?: InputMaybe<Scalars['BigInt']['input']>;
    initialOi_gt?: InputMaybe<Scalars['BigInt']['input']>;
    initialOi_gte?: InputMaybe<Scalars['BigInt']['input']>;
    initialOi_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    initialOi_lt?: InputMaybe<Scalars['BigInt']['input']>;
    initialOi_lte?: InputMaybe<Scalars['BigInt']['input']>;
    initialOi_not?: InputMaybe<Scalars['BigInt']['input']>;
    initialOi_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    isLiquidated?: InputMaybe<Scalars['Boolean']['input']>;
    isLiquidated_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    isLiquidated_not?: InputMaybe<Scalars['Boolean']['input']>;
    isLiquidated_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    isLong?: InputMaybe<Scalars['Boolean']['input']>;
    isLong_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    isLong_not?: InputMaybe<Scalars['Boolean']['input']>;
    isLong_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    leverage?: InputMaybe<Scalars['BigDecimal']['input']>;
    leverage_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
    leverage_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
    leverage_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    leverage_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
    leverage_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
    leverage_not?: InputMaybe<Scalars['BigDecimal']['input']>;
    leverage_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
    liquidates_?: InputMaybe<Liquidate_Filter>;
    market?: InputMaybe<Scalars['String']['input']>;
    market_?: InputMaybe<Market_Filter>;
    market_contains?: InputMaybe<Scalars['String']['input']>;
    market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    market_ends_with?: InputMaybe<Scalars['String']['input']>;
    market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    market_gt?: InputMaybe<Scalars['String']['input']>;
    market_gte?: InputMaybe<Scalars['String']['input']>;
    market_in?: InputMaybe<Array<Scalars['String']['input']>>;
    market_lt?: InputMaybe<Scalars['String']['input']>;
    market_lte?: InputMaybe<Scalars['String']['input']>;
    market_not?: InputMaybe<Scalars['String']['input']>;
    market_not_contains?: InputMaybe<Scalars['String']['input']>;
    market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    market_starts_with?: InputMaybe<Scalars['String']['input']>;
    market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    mint?: InputMaybe<Scalars['BigInt']['input']>;
    mint_gt?: InputMaybe<Scalars['BigInt']['input']>;
    mint_gte?: InputMaybe<Scalars['BigInt']['input']>;
    mint_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    mint_lt?: InputMaybe<Scalars['BigInt']['input']>;
    mint_lte?: InputMaybe<Scalars['BigInt']['input']>;
    mint_not?: InputMaybe<Scalars['BigInt']['input']>;
    mint_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    numberOfUniwnds?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfUniwnds_gt?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfUniwnds_gte?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfUniwnds_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    numberOfUniwnds_lt?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfUniwnds_lte?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfUniwnds_not?: InputMaybe<Scalars['BigInt']['input']>;
    numberOfUniwnds_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<Position_Filter>>>;
    owner?: InputMaybe<Scalars['String']['input']>;
    owner_?: InputMaybe<Account_Filter>;
    owner_contains?: InputMaybe<Scalars['String']['input']>;
    owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_gt?: InputMaybe<Scalars['String']['input']>;
    owner_gte?: InputMaybe<Scalars['String']['input']>;
    owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_lt?: InputMaybe<Scalars['String']['input']>;
    owner_lte?: InputMaybe<Scalars['String']['input']>;
    owner_not?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    positionId?: InputMaybe<Scalars['String']['input']>;
    positionId_contains?: InputMaybe<Scalars['String']['input']>;
    positionId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    positionId_ends_with?: InputMaybe<Scalars['String']['input']>;
    positionId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    positionId_gt?: InputMaybe<Scalars['String']['input']>;
    positionId_gte?: InputMaybe<Scalars['String']['input']>;
    positionId_in?: InputMaybe<Array<Scalars['String']['input']>>;
    positionId_lt?: InputMaybe<Scalars['String']['input']>;
    positionId_lte?: InputMaybe<Scalars['String']['input']>;
    positionId_not?: InputMaybe<Scalars['String']['input']>;
    positionId_not_contains?: InputMaybe<Scalars['String']['input']>;
    positionId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    positionId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    positionId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    positionId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    positionId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    positionId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    positionId_starts_with?: InputMaybe<Scalars['String']['input']>;
    positionId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    unwinds_?: InputMaybe<Unwind_Filter>;
};
export declare enum Position_OrderBy {
    Builds = "builds",
    CreatedAtBlockNumber = "createdAtBlockNumber",
    CreatedAtTimestamp = "createdAtTimestamp",
    CurrentDebt = "currentDebt",
    CurrentOi = "currentOi",
    EntryPrice = "entryPrice",
    FractionUnwound = "fractionUnwound",
    Id = "id",
    InitialCollateral = "initialCollateral",
    InitialDebt = "initialDebt",
    InitialNotional = "initialNotional",
    InitialOi = "initialOi",
    IsLiquidated = "isLiquidated",
    IsLong = "isLong",
    Leverage = "leverage",
    Liquidates = "liquidates",
    Market = "market",
    MarketAverageBlockTime = "market__averageBlockTime",
    MarketCapLeverage = "market__capLeverage",
    MarketCapNotional = "market__capNotional",
    MarketCapPayoff = "market__capPayoff",
    MarketCircuitBreakerMintTarget = "market__circuitBreakerMintTarget",
    MarketCircuitBreakerWindow = "market__circuitBreakerWindow",
    MarketCreatedAtBlockNumber = "market__createdAtBlockNumber",
    MarketCreatedAtTimestamp = "market__createdAtTimestamp",
    MarketDelta = "market__delta",
    MarketFeedAddress = "market__feedAddress",
    MarketId = "market__id",
    MarketIsShutdown = "market__isShutdown",
    MarketK = "market__k",
    MarketLiquidationFeeRate = "market__liquidationFeeRate",
    MarketLmbda = "market__lmbda",
    MarketMaintenanceMarginBurnRate = "market__maintenanceMarginBurnRate",
    MarketMaintenanceMarginFraction = "market__maintenanceMarginFraction",
    MarketMinCollateral = "market__minCollateral",
    MarketNumberOfBuilds = "market__numberOfBuilds",
    MarketNumberOfLiquidates = "market__numberOfLiquidates",
    MarketNumberOfUnwinds = "market__numberOfUnwinds",
    MarketOiLong = "market__oiLong",
    MarketOiShort = "market__oiShort",
    MarketPriceDriftUpperLimit = "market__priceDriftUpperLimit",
    MarketTotalBuildFees = "market__totalBuildFees",
    MarketTotalFees = "market__totalFees",
    MarketTotalLiquidateFees = "market__totalLiquidateFees",
    MarketTotalUnwindFees = "market__totalUnwindFees",
    MarketTradingFeeRate = "market__tradingFeeRate",
    Mint = "mint",
    NumberOfUniwnds = "numberOfUniwnds",
    Owner = "owner",
    OwnerId = "owner__id",
    OwnerNumberOfLiquidatedPositions = "owner__numberOfLiquidatedPositions",
    OwnerNumberOfOpenPositions = "owner__numberOfOpenPositions",
    OwnerNumberOfUnwinds = "owner__numberOfUnwinds",
    OwnerOvlVolumeTraded = "owner__ovlVolumeTraded",
    OwnerPlanckCatBalance = "owner__planckCatBalance",
    OwnerRealizedPnl = "owner__realizedPnl",
    PositionId = "positionId",
    Unwinds = "unwinds"
}
export type Query = {
    __typename?: 'Query';
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
    account?: Maybe<Account>;
    accounts: Array<Account>;
    build?: Maybe<Build>;
    builds: Array<Build>;
    erc20Token?: Maybe<Erc20Token>;
    erc20Tokens: Array<Erc20Token>;
    erc721Nft?: Maybe<Erc721Nft>;
    erc721Nfts: Array<Erc721Nft>;
    erc721Token?: Maybe<Erc721Token>;
    erc721Tokens: Array<Erc721Token>;
    erc721Transfer?: Maybe<Erc721Transfer>;
    erc721Transfers: Array<Erc721Transfer>;
    factories: Array<Factory>;
    factory?: Maybe<Factory>;
    liquidate?: Maybe<Liquidate>;
    liquidates: Array<Liquidate>;
    market?: Maybe<Market>;
    markets: Array<Market>;
    position?: Maybe<Position>;
    positions: Array<Position>;
    referralPosition?: Maybe<ReferralPosition>;
    referralPositions: Array<ReferralPosition>;
    referralProgram?: Maybe<ReferralProgram>;
    referralPrograms: Array<ReferralProgram>;
    rewardsClaimed?: Maybe<RewardsClaimed>;
    rewardsClaimeds: Array<RewardsClaimed>;
    staking?: Maybe<Staking>;
    stakingPosition?: Maybe<StakingPosition>;
    stakingPositions: Array<StakingPosition>;
    stakings: Array<Staking>;
    tokenPosition?: Maybe<TokenPosition>;
    tokenPositions: Array<TokenPosition>;
    tokenTransfer?: Maybe<TokenTransfer>;
    tokenTransfers: Array<TokenTransfer>;
    tokensStaked?: Maybe<TokensStaked>;
    tokensStakeds: Array<TokensStaked>;
    tokensWithdrawn?: Maybe<TokensWithdrawn>;
    tokensWithdrawns: Array<TokensWithdrawn>;
    tradingMining?: Maybe<TradingMining>;
    tradingMiningEpoch?: Maybe<TradingMiningEpoch>;
    tradingMiningEpochVolume?: Maybe<TradingMiningEpochVolume>;
    tradingMiningEpochVolumes: Array<TradingMiningEpochVolume>;
    tradingMiningEpoches: Array<TradingMiningEpoch>;
    tradingMinings: Array<TradingMining>;
    transaction?: Maybe<Transaction>;
    transactions: Array<Transaction>;
    unwind?: Maybe<Unwind>;
    unwinds: Array<Unwind>;
};
export type Query_MetaArgs = {
    block?: InputMaybe<Block_Height>;
};
export type QueryAccountArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryAccountsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Account_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Account_Filter>;
};
export type QueryBuildArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryBuildsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Build_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Build_Filter>;
};
export type QueryErc20TokenArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryErc20TokensArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Erc20Token_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Erc20Token_Filter>;
};
export type QueryErc721NftArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryErc721NftsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Erc721Nft_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Erc721Nft_Filter>;
};
export type QueryErc721TokenArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryErc721TokensArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Erc721Token_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Erc721Token_Filter>;
};
export type QueryErc721TransferArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryErc721TransfersArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Erc721Transfer_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Erc721Transfer_Filter>;
};
export type QueryFactoriesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Factory_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Factory_Filter>;
};
export type QueryFactoryArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryLiquidateArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryLiquidatesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Liquidate_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Liquidate_Filter>;
};
export type QueryMarketArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryMarketsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Market_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Market_Filter>;
};
export type QueryPositionArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryPositionsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Position_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Position_Filter>;
};
export type QueryReferralPositionArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryReferralPositionsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<ReferralPosition_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<ReferralPosition_Filter>;
};
export type QueryReferralProgramArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryReferralProgramsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<ReferralProgram_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<ReferralProgram_Filter>;
};
export type QueryRewardsClaimedArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryRewardsClaimedsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<RewardsClaimed_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<RewardsClaimed_Filter>;
};
export type QueryStakingArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryStakingPositionArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryStakingPositionsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<StakingPosition_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<StakingPosition_Filter>;
};
export type QueryStakingsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Staking_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Staking_Filter>;
};
export type QueryTokenPositionArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryTokenPositionsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<TokenPosition_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<TokenPosition_Filter>;
};
export type QueryTokenTransferArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryTokenTransfersArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<TokenTransfer_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<TokenTransfer_Filter>;
};
export type QueryTokensStakedArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryTokensStakedsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<TokensStaked_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<TokensStaked_Filter>;
};
export type QueryTokensWithdrawnArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryTokensWithdrawnsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<TokensWithdrawn_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<TokensWithdrawn_Filter>;
};
export type QueryTradingMiningArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryTradingMiningEpochArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryTradingMiningEpochVolumeArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryTradingMiningEpochVolumesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<TradingMiningEpochVolume_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<TradingMiningEpochVolume_Filter>;
};
export type QueryTradingMiningEpochesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<TradingMiningEpoch_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<TradingMiningEpoch_Filter>;
};
export type QueryTradingMiningsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<TradingMining_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<TradingMining_Filter>;
};
export type QueryTransactionArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryTransactionsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Transaction_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Transaction_Filter>;
};
export type QueryUnwindArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryUnwindsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Unwind_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Unwind_Filter>;
};
export type ReferralPosition = {
    __typename?: 'ReferralPosition';
    affiliatedTo?: Maybe<Account>;
    id: Scalars['Bytes']['output'];
    owner: Account;
    referralProgram: ReferralProgram;
    tier: Scalars['Int']['output'];
    totalAffiliateComission: Scalars['BigInt']['output'];
    totalAirdroppedAmount: Scalars['BigInt']['output'];
    totalRewardsPending: Scalars['BigInt']['output'];
    totalTraderDiscount: Scalars['BigInt']['output'];
};
export type ReferralPosition_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    affiliatedTo?: InputMaybe<Scalars['String']['input']>;
    affiliatedTo_?: InputMaybe<Account_Filter>;
    affiliatedTo_contains?: InputMaybe<Scalars['String']['input']>;
    affiliatedTo_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliatedTo_ends_with?: InputMaybe<Scalars['String']['input']>;
    affiliatedTo_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliatedTo_gt?: InputMaybe<Scalars['String']['input']>;
    affiliatedTo_gte?: InputMaybe<Scalars['String']['input']>;
    affiliatedTo_in?: InputMaybe<Array<Scalars['String']['input']>>;
    affiliatedTo_lt?: InputMaybe<Scalars['String']['input']>;
    affiliatedTo_lte?: InputMaybe<Scalars['String']['input']>;
    affiliatedTo_not?: InputMaybe<Scalars['String']['input']>;
    affiliatedTo_not_contains?: InputMaybe<Scalars['String']['input']>;
    affiliatedTo_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliatedTo_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    affiliatedTo_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliatedTo_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    affiliatedTo_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    affiliatedTo_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    affiliatedTo_starts_with?: InputMaybe<Scalars['String']['input']>;
    affiliatedTo_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    and?: InputMaybe<Array<InputMaybe<ReferralPosition_Filter>>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    or?: InputMaybe<Array<InputMaybe<ReferralPosition_Filter>>>;
    owner?: InputMaybe<Scalars['String']['input']>;
    owner_?: InputMaybe<Account_Filter>;
    owner_contains?: InputMaybe<Scalars['String']['input']>;
    owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_gt?: InputMaybe<Scalars['String']['input']>;
    owner_gte?: InputMaybe<Scalars['String']['input']>;
    owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_lt?: InputMaybe<Scalars['String']['input']>;
    owner_lte?: InputMaybe<Scalars['String']['input']>;
    owner_not?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    referralProgram?: InputMaybe<Scalars['String']['input']>;
    referralProgram_?: InputMaybe<ReferralProgram_Filter>;
    referralProgram_contains?: InputMaybe<Scalars['String']['input']>;
    referralProgram_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    referralProgram_ends_with?: InputMaybe<Scalars['String']['input']>;
    referralProgram_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    referralProgram_gt?: InputMaybe<Scalars['String']['input']>;
    referralProgram_gte?: InputMaybe<Scalars['String']['input']>;
    referralProgram_in?: InputMaybe<Array<Scalars['String']['input']>>;
    referralProgram_lt?: InputMaybe<Scalars['String']['input']>;
    referralProgram_lte?: InputMaybe<Scalars['String']['input']>;
    referralProgram_not?: InputMaybe<Scalars['String']['input']>;
    referralProgram_not_contains?: InputMaybe<Scalars['String']['input']>;
    referralProgram_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    referralProgram_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    referralProgram_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    referralProgram_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    referralProgram_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    referralProgram_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    referralProgram_starts_with?: InputMaybe<Scalars['String']['input']>;
    referralProgram_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    tier?: InputMaybe<Scalars['Int']['input']>;
    tier_gt?: InputMaybe<Scalars['Int']['input']>;
    tier_gte?: InputMaybe<Scalars['Int']['input']>;
    tier_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    tier_lt?: InputMaybe<Scalars['Int']['input']>;
    tier_lte?: InputMaybe<Scalars['Int']['input']>;
    tier_not?: InputMaybe<Scalars['Int']['input']>;
    tier_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    totalAffiliateComission?: InputMaybe<Scalars['BigInt']['input']>;
    totalAffiliateComission_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalAffiliateComission_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalAffiliateComission_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalAffiliateComission_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalAffiliateComission_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalAffiliateComission_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalAffiliateComission_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalAirdroppedAmount?: InputMaybe<Scalars['BigInt']['input']>;
    totalAirdroppedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalAirdroppedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalAirdroppedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalAirdroppedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalAirdroppedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalAirdroppedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalAirdroppedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalRewardsPending?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewardsPending_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewardsPending_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewardsPending_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalRewardsPending_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewardsPending_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewardsPending_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewardsPending_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalTraderDiscount?: InputMaybe<Scalars['BigInt']['input']>;
    totalTraderDiscount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalTraderDiscount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalTraderDiscount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalTraderDiscount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalTraderDiscount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalTraderDiscount_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalTraderDiscount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum ReferralPosition_OrderBy {
    AffiliatedTo = "affiliatedTo",
    AffiliatedToId = "affiliatedTo__id",
    AffiliatedToNumberOfLiquidatedPositions = "affiliatedTo__numberOfLiquidatedPositions",
    AffiliatedToNumberOfOpenPositions = "affiliatedTo__numberOfOpenPositions",
    AffiliatedToNumberOfUnwinds = "affiliatedTo__numberOfUnwinds",
    AffiliatedToOvlVolumeTraded = "affiliatedTo__ovlVolumeTraded",
    AffiliatedToPlanckCatBalance = "affiliatedTo__planckCatBalance",
    AffiliatedToRealizedPnl = "affiliatedTo__realizedPnl",
    Id = "id",
    Owner = "owner",
    OwnerId = "owner__id",
    OwnerNumberOfLiquidatedPositions = "owner__numberOfLiquidatedPositions",
    OwnerNumberOfOpenPositions = "owner__numberOfOpenPositions",
    OwnerNumberOfUnwinds = "owner__numberOfUnwinds",
    OwnerOvlVolumeTraded = "owner__ovlVolumeTraded",
    OwnerPlanckCatBalance = "owner__planckCatBalance",
    OwnerRealizedPnl = "owner__realizedPnl",
    ReferralProgram = "referralProgram",
    ReferralProgramCreatedAtBlockNumber = "referralProgram__createdAtBlockNumber",
    ReferralProgramCreatedAtTimestamp = "referralProgram__createdAtTimestamp",
    ReferralProgramId = "referralProgram__id",
    ReferralProgramRewardToken = "referralProgram__rewardToken",
    ReferralProgramTotalAirdropped = "referralProgram__totalAirdropped",
    ReferralProgramTotalRewards = "referralProgram__totalRewards",
    Tier = "tier",
    TotalAffiliateComission = "totalAffiliateComission",
    TotalAirdroppedAmount = "totalAirdroppedAmount",
    TotalRewardsPending = "totalRewardsPending",
    TotalTraderDiscount = "totalTraderDiscount"
}
export type ReferralProgram = {
    __typename?: 'ReferralProgram';
    affiliateComission: Array<Scalars['BigInt']['output']>;
    createdAtBlockNumber: Scalars['BigInt']['output'];
    createdAtTimestamp: Scalars['BigInt']['output'];
    id: Scalars['Bytes']['output'];
    latestUpdateTransaction: Transaction;
    referralPositions: Array<ReferralPosition>;
    rewardToken: Scalars['Bytes']['output'];
    totalAirdropped: Scalars['BigInt']['output'];
    totalRewards: Scalars['BigInt']['output'];
    traderDiscount: Array<Scalars['BigInt']['output']>;
};
export type ReferralProgramReferralPositionsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<ReferralPosition_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ReferralPosition_Filter>;
};
export type ReferralProgram_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    affiliateComission?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    affiliateComission_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    affiliateComission_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    affiliateComission_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    affiliateComission_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    affiliateComission_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    and?: InputMaybe<Array<InputMaybe<ReferralProgram_Filter>>>;
    createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    latestUpdateTransaction?: InputMaybe<Scalars['String']['input']>;
    latestUpdateTransaction_?: InputMaybe<Transaction_Filter>;
    latestUpdateTransaction_contains?: InputMaybe<Scalars['String']['input']>;
    latestUpdateTransaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    latestUpdateTransaction_ends_with?: InputMaybe<Scalars['String']['input']>;
    latestUpdateTransaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    latestUpdateTransaction_gt?: InputMaybe<Scalars['String']['input']>;
    latestUpdateTransaction_gte?: InputMaybe<Scalars['String']['input']>;
    latestUpdateTransaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
    latestUpdateTransaction_lt?: InputMaybe<Scalars['String']['input']>;
    latestUpdateTransaction_lte?: InputMaybe<Scalars['String']['input']>;
    latestUpdateTransaction_not?: InputMaybe<Scalars['String']['input']>;
    latestUpdateTransaction_not_contains?: InputMaybe<Scalars['String']['input']>;
    latestUpdateTransaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    latestUpdateTransaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    latestUpdateTransaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    latestUpdateTransaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    latestUpdateTransaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    latestUpdateTransaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    latestUpdateTransaction_starts_with?: InputMaybe<Scalars['String']['input']>;
    latestUpdateTransaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<ReferralProgram_Filter>>>;
    referralPositions_?: InputMaybe<ReferralPosition_Filter>;
    rewardToken?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    rewardToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken_not?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    totalAirdropped?: InputMaybe<Scalars['BigInt']['input']>;
    totalAirdropped_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalAirdropped_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalAirdropped_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalAirdropped_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalAirdropped_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalAirdropped_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalAirdropped_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalRewards?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    traderDiscount?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    traderDiscount_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    traderDiscount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    traderDiscount_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    traderDiscount_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    traderDiscount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum ReferralProgram_OrderBy {
    AffiliateComission = "affiliateComission",
    CreatedAtBlockNumber = "createdAtBlockNumber",
    CreatedAtTimestamp = "createdAtTimestamp",
    Id = "id",
    LatestUpdateTransaction = "latestUpdateTransaction",
    LatestUpdateTransactionBlockNumber = "latestUpdateTransaction__blockNumber",
    LatestUpdateTransactionGasLimit = "latestUpdateTransaction__gasLimit",
    LatestUpdateTransactionGasPrice = "latestUpdateTransaction__gasPrice",
    LatestUpdateTransactionId = "latestUpdateTransaction__id",
    LatestUpdateTransactionTimestamp = "latestUpdateTransaction__timestamp",
    ReferralPositions = "referralPositions",
    RewardToken = "rewardToken",
    TotalAirdropped = "totalAirdropped",
    TotalRewards = "totalRewards",
    TraderDiscount = "traderDiscount"
}
export type RewardsClaimed = {
    __typename?: 'RewardsClaimed';
    blockNumber: Scalars['BigInt']['output'];
    blockTimestamp: Scalars['BigInt']['output'];
    id: Scalars['Bytes']['output'];
    rewardAmount: Scalars['BigInt']['output'];
    staker: Scalars['Bytes']['output'];
    stakingPosition: StakingPosition;
    transactionHash: Scalars['Bytes']['output'];
};
export type RewardsClaimed_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<RewardsClaimed_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    or?: InputMaybe<Array<InputMaybe<RewardsClaimed_Filter>>>;
    rewardAmount?: InputMaybe<Scalars['BigInt']['input']>;
    rewardAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rewardAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rewardAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rewardAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rewardAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rewardAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
    rewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    staker?: InputMaybe<Scalars['Bytes']['input']>;
    staker_contains?: InputMaybe<Scalars['Bytes']['input']>;
    staker_gt?: InputMaybe<Scalars['Bytes']['input']>;
    staker_gte?: InputMaybe<Scalars['Bytes']['input']>;
    staker_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    staker_lt?: InputMaybe<Scalars['Bytes']['input']>;
    staker_lte?: InputMaybe<Scalars['Bytes']['input']>;
    staker_not?: InputMaybe<Scalars['Bytes']['input']>;
    staker_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    staker_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    stakingPosition?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_?: InputMaybe<StakingPosition_Filter>;
    stakingPosition_contains?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_ends_with?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_gt?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_gte?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_in?: InputMaybe<Array<Scalars['String']['input']>>;
    stakingPosition_lt?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_lte?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_not?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_not_contains?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    stakingPosition_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_starts_with?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum RewardsClaimed_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    RewardAmount = "rewardAmount",
    Staker = "staker",
    StakingPosition = "stakingPosition",
    StakingPositionId = "stakingPosition__id",
    StakingPositionStakedBalance = "stakingPosition__stakedBalance",
    StakingPositionTotalRewardsClaimed = "stakingPosition__totalRewardsClaimed",
    TransactionHash = "transactionHash"
}
export type Staking = {
    __typename?: 'Staking';
    id: Scalars['Bytes']['output'];
    rewardRatioDenominator: Scalars['BigInt']['output'];
    rewardRatioNumerator: Scalars['BigInt']['output'];
    rewardToken: Scalars['Bytes']['output'];
    rewardsBalance: Scalars['BigInt']['output'];
    stakedBalance: Scalars['BigInt']['output'];
    stakingPositions: Array<StakingPosition>;
    stakingToken: Scalars['Bytes']['output'];
    timeUnit: Scalars['BigInt']['output'];
    totalRewardsClaimed: Scalars['BigInt']['output'];
    totalStaked: Scalars['BigInt']['output'];
};
export type StakingStakingPositionsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<StakingPosition_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<StakingPosition_Filter>;
};
export type StakingPosition = {
    __typename?: 'StakingPosition';
    id: Scalars['Bytes']['output'];
    owner: Account;
    pool: Staking;
    rewardsClaimed: Array<RewardsClaimed>;
    stakedBalance: Scalars['BigInt']['output'];
    tokensStaked: Array<TokensStaked>;
    tokensWithdrawn: Array<TokensWithdrawn>;
    totalRewardsClaimed: Scalars['BigInt']['output'];
};
export type StakingPositionRewardsClaimedArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<RewardsClaimed_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<RewardsClaimed_Filter>;
};
export type StakingPositionTokensStakedArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<TokensStaked_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<TokensStaked_Filter>;
};
export type StakingPositionTokensWithdrawnArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<TokensWithdrawn_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<TokensWithdrawn_Filter>;
};
export type StakingPosition_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<StakingPosition_Filter>>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    or?: InputMaybe<Array<InputMaybe<StakingPosition_Filter>>>;
    owner?: InputMaybe<Scalars['String']['input']>;
    owner_?: InputMaybe<Account_Filter>;
    owner_contains?: InputMaybe<Scalars['String']['input']>;
    owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_gt?: InputMaybe<Scalars['String']['input']>;
    owner_gte?: InputMaybe<Scalars['String']['input']>;
    owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_lt?: InputMaybe<Scalars['String']['input']>;
    owner_lte?: InputMaybe<Scalars['String']['input']>;
    owner_not?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    pool?: InputMaybe<Scalars['String']['input']>;
    pool_?: InputMaybe<Staking_Filter>;
    pool_contains?: InputMaybe<Scalars['String']['input']>;
    pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    pool_ends_with?: InputMaybe<Scalars['String']['input']>;
    pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    pool_gt?: InputMaybe<Scalars['String']['input']>;
    pool_gte?: InputMaybe<Scalars['String']['input']>;
    pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
    pool_lt?: InputMaybe<Scalars['String']['input']>;
    pool_lte?: InputMaybe<Scalars['String']['input']>;
    pool_not?: InputMaybe<Scalars['String']['input']>;
    pool_not_contains?: InputMaybe<Scalars['String']['input']>;
    pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    pool_starts_with?: InputMaybe<Scalars['String']['input']>;
    pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    rewardsClaimed_?: InputMaybe<RewardsClaimed_Filter>;
    stakedBalance?: InputMaybe<Scalars['BigInt']['input']>;
    stakedBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
    stakedBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
    stakedBalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    stakedBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
    stakedBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
    stakedBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
    stakedBalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    tokensStaked_?: InputMaybe<TokensStaked_Filter>;
    tokensWithdrawn_?: InputMaybe<TokensWithdrawn_Filter>;
    totalRewardsClaimed?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewardsClaimed_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewardsClaimed_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewardsClaimed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalRewardsClaimed_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewardsClaimed_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewardsClaimed_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewardsClaimed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum StakingPosition_OrderBy {
    Id = "id",
    Owner = "owner",
    OwnerId = "owner__id",
    OwnerNumberOfLiquidatedPositions = "owner__numberOfLiquidatedPositions",
    OwnerNumberOfOpenPositions = "owner__numberOfOpenPositions",
    OwnerNumberOfUnwinds = "owner__numberOfUnwinds",
    OwnerOvlVolumeTraded = "owner__ovlVolumeTraded",
    OwnerPlanckCatBalance = "owner__planckCatBalance",
    OwnerRealizedPnl = "owner__realizedPnl",
    Pool = "pool",
    PoolId = "pool__id",
    PoolRewardRatioDenominator = "pool__rewardRatioDenominator",
    PoolRewardRatioNumerator = "pool__rewardRatioNumerator",
    PoolRewardToken = "pool__rewardToken",
    PoolRewardsBalance = "pool__rewardsBalance",
    PoolStakedBalance = "pool__stakedBalance",
    PoolStakingToken = "pool__stakingToken",
    PoolTimeUnit = "pool__timeUnit",
    PoolTotalRewardsClaimed = "pool__totalRewardsClaimed",
    PoolTotalStaked = "pool__totalStaked",
    RewardsClaimed = "rewardsClaimed",
    StakedBalance = "stakedBalance",
    TokensStaked = "tokensStaked",
    TokensWithdrawn = "tokensWithdrawn",
    TotalRewardsClaimed = "totalRewardsClaimed"
}
export type Staking_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Staking_Filter>>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    or?: InputMaybe<Array<InputMaybe<Staking_Filter>>>;
    rewardRatioDenominator?: InputMaybe<Scalars['BigInt']['input']>;
    rewardRatioDenominator_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rewardRatioDenominator_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rewardRatioDenominator_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rewardRatioDenominator_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rewardRatioDenominator_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rewardRatioDenominator_not?: InputMaybe<Scalars['BigInt']['input']>;
    rewardRatioDenominator_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rewardRatioNumerator?: InputMaybe<Scalars['BigInt']['input']>;
    rewardRatioNumerator_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rewardRatioNumerator_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rewardRatioNumerator_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rewardRatioNumerator_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rewardRatioNumerator_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rewardRatioNumerator_not?: InputMaybe<Scalars['BigInt']['input']>;
    rewardRatioNumerator_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rewardToken?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    rewardToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken_not?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    rewardsBalance?: InputMaybe<Scalars['BigInt']['input']>;
    rewardsBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
    rewardsBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
    rewardsBalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    rewardsBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
    rewardsBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
    rewardsBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
    rewardsBalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    stakedBalance?: InputMaybe<Scalars['BigInt']['input']>;
    stakedBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
    stakedBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
    stakedBalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    stakedBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
    stakedBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
    stakedBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
    stakedBalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    stakingPositions_?: InputMaybe<StakingPosition_Filter>;
    stakingToken?: InputMaybe<Scalars['Bytes']['input']>;
    stakingToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
    stakingToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
    stakingToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
    stakingToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    stakingToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
    stakingToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
    stakingToken_not?: InputMaybe<Scalars['Bytes']['input']>;
    stakingToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    stakingToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    timeUnit?: InputMaybe<Scalars['BigInt']['input']>;
    timeUnit_gt?: InputMaybe<Scalars['BigInt']['input']>;
    timeUnit_gte?: InputMaybe<Scalars['BigInt']['input']>;
    timeUnit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    timeUnit_lt?: InputMaybe<Scalars['BigInt']['input']>;
    timeUnit_lte?: InputMaybe<Scalars['BigInt']['input']>;
    timeUnit_not?: InputMaybe<Scalars['BigInt']['input']>;
    timeUnit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalRewardsClaimed?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewardsClaimed_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewardsClaimed_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewardsClaimed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalRewardsClaimed_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewardsClaimed_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewardsClaimed_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewardsClaimed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalStaked?: InputMaybe<Scalars['BigInt']['input']>;
    totalStaked_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalStaked_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalStaked_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalStaked_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalStaked_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalStaked_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalStaked_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum Staking_OrderBy {
    Id = "id",
    RewardRatioDenominator = "rewardRatioDenominator",
    RewardRatioNumerator = "rewardRatioNumerator",
    RewardToken = "rewardToken",
    RewardsBalance = "rewardsBalance",
    StakedBalance = "stakedBalance",
    StakingPositions = "stakingPositions",
    StakingToken = "stakingToken",
    TimeUnit = "timeUnit",
    TotalRewardsClaimed = "totalRewardsClaimed",
    TotalStaked = "totalStaked"
}
export type Subscription = {
    __typename?: 'Subscription';
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
    account?: Maybe<Account>;
    accounts: Array<Account>;
    build?: Maybe<Build>;
    builds: Array<Build>;
    erc20Token?: Maybe<Erc20Token>;
    erc20Tokens: Array<Erc20Token>;
    erc721Nft?: Maybe<Erc721Nft>;
    erc721Nfts: Array<Erc721Nft>;
    erc721Token?: Maybe<Erc721Token>;
    erc721Tokens: Array<Erc721Token>;
    erc721Transfer?: Maybe<Erc721Transfer>;
    erc721Transfers: Array<Erc721Transfer>;
    factories: Array<Factory>;
    factory?: Maybe<Factory>;
    liquidate?: Maybe<Liquidate>;
    liquidates: Array<Liquidate>;
    market?: Maybe<Market>;
    markets: Array<Market>;
    position?: Maybe<Position>;
    positions: Array<Position>;
    referralPosition?: Maybe<ReferralPosition>;
    referralPositions: Array<ReferralPosition>;
    referralProgram?: Maybe<ReferralProgram>;
    referralPrograms: Array<ReferralProgram>;
    rewardsClaimed?: Maybe<RewardsClaimed>;
    rewardsClaimeds: Array<RewardsClaimed>;
    staking?: Maybe<Staking>;
    stakingPosition?: Maybe<StakingPosition>;
    stakingPositions: Array<StakingPosition>;
    stakings: Array<Staking>;
    tokenPosition?: Maybe<TokenPosition>;
    tokenPositions: Array<TokenPosition>;
    tokenTransfer?: Maybe<TokenTransfer>;
    tokenTransfers: Array<TokenTransfer>;
    tokensStaked?: Maybe<TokensStaked>;
    tokensStakeds: Array<TokensStaked>;
    tokensWithdrawn?: Maybe<TokensWithdrawn>;
    tokensWithdrawns: Array<TokensWithdrawn>;
    tradingMining?: Maybe<TradingMining>;
    tradingMiningEpoch?: Maybe<TradingMiningEpoch>;
    tradingMiningEpochVolume?: Maybe<TradingMiningEpochVolume>;
    tradingMiningEpochVolumes: Array<TradingMiningEpochVolume>;
    tradingMiningEpoches: Array<TradingMiningEpoch>;
    tradingMinings: Array<TradingMining>;
    transaction?: Maybe<Transaction>;
    transactions: Array<Transaction>;
    unwind?: Maybe<Unwind>;
    unwinds: Array<Unwind>;
};
export type Subscription_MetaArgs = {
    block?: InputMaybe<Block_Height>;
};
export type SubscriptionAccountArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionAccountsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Account_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Account_Filter>;
};
export type SubscriptionBuildArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionBuildsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Build_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Build_Filter>;
};
export type SubscriptionErc20TokenArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionErc20TokensArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Erc20Token_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Erc20Token_Filter>;
};
export type SubscriptionErc721NftArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionErc721NftsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Erc721Nft_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Erc721Nft_Filter>;
};
export type SubscriptionErc721TokenArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionErc721TokensArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Erc721Token_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Erc721Token_Filter>;
};
export type SubscriptionErc721TransferArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionErc721TransfersArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Erc721Transfer_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Erc721Transfer_Filter>;
};
export type SubscriptionFactoriesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Factory_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Factory_Filter>;
};
export type SubscriptionFactoryArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionLiquidateArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionLiquidatesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Liquidate_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Liquidate_Filter>;
};
export type SubscriptionMarketArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionMarketsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Market_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Market_Filter>;
};
export type SubscriptionPositionArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionPositionsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Position_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Position_Filter>;
};
export type SubscriptionReferralPositionArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionReferralPositionsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<ReferralPosition_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<ReferralPosition_Filter>;
};
export type SubscriptionReferralProgramArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionReferralProgramsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<ReferralProgram_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<ReferralProgram_Filter>;
};
export type SubscriptionRewardsClaimedArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionRewardsClaimedsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<RewardsClaimed_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<RewardsClaimed_Filter>;
};
export type SubscriptionStakingArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionStakingPositionArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionStakingPositionsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<StakingPosition_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<StakingPosition_Filter>;
};
export type SubscriptionStakingsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Staking_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Staking_Filter>;
};
export type SubscriptionTokenPositionArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionTokenPositionsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<TokenPosition_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<TokenPosition_Filter>;
};
export type SubscriptionTokenTransferArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionTokenTransfersArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<TokenTransfer_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<TokenTransfer_Filter>;
};
export type SubscriptionTokensStakedArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionTokensStakedsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<TokensStaked_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<TokensStaked_Filter>;
};
export type SubscriptionTokensWithdrawnArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionTokensWithdrawnsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<TokensWithdrawn_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<TokensWithdrawn_Filter>;
};
export type SubscriptionTradingMiningArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionTradingMiningEpochArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionTradingMiningEpochVolumeArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionTradingMiningEpochVolumesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<TradingMiningEpochVolume_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<TradingMiningEpochVolume_Filter>;
};
export type SubscriptionTradingMiningEpochesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<TradingMiningEpoch_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<TradingMiningEpoch_Filter>;
};
export type SubscriptionTradingMiningsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<TradingMining_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<TradingMining_Filter>;
};
export type SubscriptionTransactionArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionTransactionsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Transaction_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Transaction_Filter>;
};
export type SubscriptionUnwindArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID']['input'];
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionUnwindsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Unwind_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Unwind_Filter>;
};
export type TokenPosition = {
    __typename?: 'TokenPosition';
    balance: Scalars['BigInt']['output'];
    id: Scalars['Bytes']['output'];
    owner: Account;
    token: Erc20Token;
};
export type TokenPosition_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<TokenPosition_Filter>>>;
    balance?: InputMaybe<Scalars['BigInt']['input']>;
    balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
    balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
    balance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
    balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
    balance_not?: InputMaybe<Scalars['BigInt']['input']>;
    balance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    or?: InputMaybe<Array<InputMaybe<TokenPosition_Filter>>>;
    owner?: InputMaybe<Scalars['String']['input']>;
    owner_?: InputMaybe<Account_Filter>;
    owner_contains?: InputMaybe<Scalars['String']['input']>;
    owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_gt?: InputMaybe<Scalars['String']['input']>;
    owner_gte?: InputMaybe<Scalars['String']['input']>;
    owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_lt?: InputMaybe<Scalars['String']['input']>;
    owner_lte?: InputMaybe<Scalars['String']['input']>;
    owner_not?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    token?: InputMaybe<Scalars['String']['input']>;
    token_?: InputMaybe<Erc20Token_Filter>;
    token_contains?: InputMaybe<Scalars['String']['input']>;
    token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    token_ends_with?: InputMaybe<Scalars['String']['input']>;
    token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    token_gt?: InputMaybe<Scalars['String']['input']>;
    token_gte?: InputMaybe<Scalars['String']['input']>;
    token_in?: InputMaybe<Array<Scalars['String']['input']>>;
    token_lt?: InputMaybe<Scalars['String']['input']>;
    token_lte?: InputMaybe<Scalars['String']['input']>;
    token_not?: InputMaybe<Scalars['String']['input']>;
    token_not_contains?: InputMaybe<Scalars['String']['input']>;
    token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    token_starts_with?: InputMaybe<Scalars['String']['input']>;
    token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};
export declare enum TokenPosition_OrderBy {
    Balance = "balance",
    Id = "id",
    Owner = "owner",
    OwnerId = "owner__id",
    OwnerNumberOfLiquidatedPositions = "owner__numberOfLiquidatedPositions",
    OwnerNumberOfOpenPositions = "owner__numberOfOpenPositions",
    OwnerNumberOfUnwinds = "owner__numberOfUnwinds",
    OwnerOvlVolumeTraded = "owner__ovlVolumeTraded",
    OwnerPlanckCatBalance = "owner__planckCatBalance",
    OwnerRealizedPnl = "owner__realizedPnl",
    Token = "token",
    TokenId = "token__id",
    TokenName = "token__name",
    TokenSymbol = "token__symbol",
    TokenTotalSupply = "token__totalSupply"
}
export type TokenTransfer = {
    __typename?: 'TokenTransfer';
    amount: Scalars['BigInt']['output'];
    from: Scalars['Bytes']['output'];
    id: Scalars['Bytes']['output'];
    to: Scalars['Bytes']['output'];
    token: Erc20Token;
    transaction: Transaction;
};
export type TokenTransfer_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    amount?: InputMaybe<Scalars['BigInt']['input']>;
    amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    amount_not?: InputMaybe<Scalars['BigInt']['input']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    and?: InputMaybe<Array<InputMaybe<TokenTransfer_Filter>>>;
    from?: InputMaybe<Scalars['Bytes']['input']>;
    from_contains?: InputMaybe<Scalars['Bytes']['input']>;
    from_gt?: InputMaybe<Scalars['Bytes']['input']>;
    from_gte?: InputMaybe<Scalars['Bytes']['input']>;
    from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    from_lt?: InputMaybe<Scalars['Bytes']['input']>;
    from_lte?: InputMaybe<Scalars['Bytes']['input']>;
    from_not?: InputMaybe<Scalars['Bytes']['input']>;
    from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    or?: InputMaybe<Array<InputMaybe<TokenTransfer_Filter>>>;
    to?: InputMaybe<Scalars['Bytes']['input']>;
    to_contains?: InputMaybe<Scalars['Bytes']['input']>;
    to_gt?: InputMaybe<Scalars['Bytes']['input']>;
    to_gte?: InputMaybe<Scalars['Bytes']['input']>;
    to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    to_lt?: InputMaybe<Scalars['Bytes']['input']>;
    to_lte?: InputMaybe<Scalars['Bytes']['input']>;
    to_not?: InputMaybe<Scalars['Bytes']['input']>;
    to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    token?: InputMaybe<Scalars['String']['input']>;
    token_?: InputMaybe<Erc20Token_Filter>;
    token_contains?: InputMaybe<Scalars['String']['input']>;
    token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    token_ends_with?: InputMaybe<Scalars['String']['input']>;
    token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    token_gt?: InputMaybe<Scalars['String']['input']>;
    token_gte?: InputMaybe<Scalars['String']['input']>;
    token_in?: InputMaybe<Array<Scalars['String']['input']>>;
    token_lt?: InputMaybe<Scalars['String']['input']>;
    token_lte?: InputMaybe<Scalars['String']['input']>;
    token_not?: InputMaybe<Scalars['String']['input']>;
    token_not_contains?: InputMaybe<Scalars['String']['input']>;
    token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    token_starts_with?: InputMaybe<Scalars['String']['input']>;
    token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction?: InputMaybe<Scalars['String']['input']>;
    transaction_?: InputMaybe<Transaction_Filter>;
    transaction_contains?: InputMaybe<Scalars['String']['input']>;
    transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
    transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction_gt?: InputMaybe<Scalars['String']['input']>;
    transaction_gte?: InputMaybe<Scalars['String']['input']>;
    transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
    transaction_lt?: InputMaybe<Scalars['String']['input']>;
    transaction_lte?: InputMaybe<Scalars['String']['input']>;
    transaction_not?: InputMaybe<Scalars['String']['input']>;
    transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
    transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
    transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};
export declare enum TokenTransfer_OrderBy {
    Amount = "amount",
    From = "from",
    Id = "id",
    To = "to",
    Token = "token",
    TokenId = "token__id",
    TokenName = "token__name",
    TokenSymbol = "token__symbol",
    TokenTotalSupply = "token__totalSupply",
    Transaction = "transaction",
    TransactionBlockNumber = "transaction__blockNumber",
    TransactionGasLimit = "transaction__gasLimit",
    TransactionGasPrice = "transaction__gasPrice",
    TransactionId = "transaction__id",
    TransactionTimestamp = "transaction__timestamp"
}
export type TokensStaked = {
    __typename?: 'TokensStaked';
    amount: Scalars['BigInt']['output'];
    blockNumber: Scalars['BigInt']['output'];
    blockTimestamp: Scalars['BigInt']['output'];
    id: Scalars['Bytes']['output'];
    staker: Scalars['Bytes']['output'];
    stakingPosition: StakingPosition;
    transactionHash: Scalars['Bytes']['output'];
};
export type TokensStaked_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    amount?: InputMaybe<Scalars['BigInt']['input']>;
    amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    amount_not?: InputMaybe<Scalars['BigInt']['input']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    and?: InputMaybe<Array<InputMaybe<TokensStaked_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    or?: InputMaybe<Array<InputMaybe<TokensStaked_Filter>>>;
    staker?: InputMaybe<Scalars['Bytes']['input']>;
    staker_contains?: InputMaybe<Scalars['Bytes']['input']>;
    staker_gt?: InputMaybe<Scalars['Bytes']['input']>;
    staker_gte?: InputMaybe<Scalars['Bytes']['input']>;
    staker_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    staker_lt?: InputMaybe<Scalars['Bytes']['input']>;
    staker_lte?: InputMaybe<Scalars['Bytes']['input']>;
    staker_not?: InputMaybe<Scalars['Bytes']['input']>;
    staker_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    staker_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    stakingPosition?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_?: InputMaybe<StakingPosition_Filter>;
    stakingPosition_contains?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_ends_with?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_gt?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_gte?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_in?: InputMaybe<Array<Scalars['String']['input']>>;
    stakingPosition_lt?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_lte?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_not?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_not_contains?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    stakingPosition_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_starts_with?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum TokensStaked_OrderBy {
    Amount = "amount",
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    Staker = "staker",
    StakingPosition = "stakingPosition",
    StakingPositionId = "stakingPosition__id",
    StakingPositionStakedBalance = "stakingPosition__stakedBalance",
    StakingPositionTotalRewardsClaimed = "stakingPosition__totalRewardsClaimed",
    TransactionHash = "transactionHash"
}
export type TokensWithdrawn = {
    __typename?: 'TokensWithdrawn';
    amount: Scalars['BigInt']['output'];
    blockNumber: Scalars['BigInt']['output'];
    blockTimestamp: Scalars['BigInt']['output'];
    id: Scalars['Bytes']['output'];
    staker: Scalars['Bytes']['output'];
    stakingPosition: StakingPosition;
    transactionHash: Scalars['Bytes']['output'];
};
export type TokensWithdrawn_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    amount?: InputMaybe<Scalars['BigInt']['input']>;
    amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    amount_not?: InputMaybe<Scalars['BigInt']['input']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    and?: InputMaybe<Array<InputMaybe<TokensWithdrawn_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    or?: InputMaybe<Array<InputMaybe<TokensWithdrawn_Filter>>>;
    staker?: InputMaybe<Scalars['Bytes']['input']>;
    staker_contains?: InputMaybe<Scalars['Bytes']['input']>;
    staker_gt?: InputMaybe<Scalars['Bytes']['input']>;
    staker_gte?: InputMaybe<Scalars['Bytes']['input']>;
    staker_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    staker_lt?: InputMaybe<Scalars['Bytes']['input']>;
    staker_lte?: InputMaybe<Scalars['Bytes']['input']>;
    staker_not?: InputMaybe<Scalars['Bytes']['input']>;
    staker_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    staker_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    stakingPosition?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_?: InputMaybe<StakingPosition_Filter>;
    stakingPosition_contains?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_ends_with?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_gt?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_gte?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_in?: InputMaybe<Array<Scalars['String']['input']>>;
    stakingPosition_lt?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_lte?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_not?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_not_contains?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    stakingPosition_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_starts_with?: InputMaybe<Scalars['String']['input']>;
    stakingPosition_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum TokensWithdrawn_OrderBy {
    Amount = "amount",
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    Staker = "staker",
    StakingPosition = "stakingPosition",
    StakingPositionId = "stakingPosition__id",
    StakingPositionStakedBalance = "stakingPosition__stakedBalance",
    StakingPositionTotalRewardsClaimed = "stakingPosition__totalRewardsClaimed",
    TransactionHash = "transactionHash"
}
export type TradingMining = {
    __typename?: 'TradingMining';
    epochDuration: Scalars['BigInt']['output'];
    id: Scalars['Bytes']['output'];
    maxRewardPerEpochPerAddress: Scalars['BigInt']['output'];
    pcdHolderBonusPercentage: Scalars['Int']['output'];
    rewardToken1: Scalars['Bytes']['output'];
    rewardToken2: Scalars['Bytes']['output'];
    startTime: Scalars['BigInt']['output'];
    token1Percentage: Scalars['Int']['output'];
    totalRewards: Scalars['BigInt']['output'];
};
export type TradingMiningEpoch = {
    __typename?: 'TradingMiningEpoch';
    epoch: Scalars['BigInt']['output'];
    id: Scalars['Bytes']['output'];
    token1Percentage: Scalars['Int']['output'];
    totalRewards: Scalars['BigInt']['output'];
    totalVolume: Scalars['BigInt']['output'];
};
export type TradingMiningEpochVolume = {
    __typename?: 'TradingMiningEpochVolume';
    epoch: Scalars['BigInt']['output'];
    id: Scalars['Bytes']['output'];
    trader: Account;
    volume: Scalars['BigInt']['output'];
};
export type TradingMiningEpochVolume_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<TradingMiningEpochVolume_Filter>>>;
    epoch?: InputMaybe<Scalars['BigInt']['input']>;
    epoch_gt?: InputMaybe<Scalars['BigInt']['input']>;
    epoch_gte?: InputMaybe<Scalars['BigInt']['input']>;
    epoch_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    epoch_lt?: InputMaybe<Scalars['BigInt']['input']>;
    epoch_lte?: InputMaybe<Scalars['BigInt']['input']>;
    epoch_not?: InputMaybe<Scalars['BigInt']['input']>;
    epoch_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    or?: InputMaybe<Array<InputMaybe<TradingMiningEpochVolume_Filter>>>;
    trader?: InputMaybe<Scalars['String']['input']>;
    trader_?: InputMaybe<Account_Filter>;
    trader_contains?: InputMaybe<Scalars['String']['input']>;
    trader_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    trader_ends_with?: InputMaybe<Scalars['String']['input']>;
    trader_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    trader_gt?: InputMaybe<Scalars['String']['input']>;
    trader_gte?: InputMaybe<Scalars['String']['input']>;
    trader_in?: InputMaybe<Array<Scalars['String']['input']>>;
    trader_lt?: InputMaybe<Scalars['String']['input']>;
    trader_lte?: InputMaybe<Scalars['String']['input']>;
    trader_not?: InputMaybe<Scalars['String']['input']>;
    trader_not_contains?: InputMaybe<Scalars['String']['input']>;
    trader_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    trader_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    trader_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    trader_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    trader_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    trader_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    trader_starts_with?: InputMaybe<Scalars['String']['input']>;
    trader_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    volume?: InputMaybe<Scalars['BigInt']['input']>;
    volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
    volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
    volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
    volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
    volume_not?: InputMaybe<Scalars['BigInt']['input']>;
    volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum TradingMiningEpochVolume_OrderBy {
    Epoch = "epoch",
    Id = "id",
    Trader = "trader",
    TraderId = "trader__id",
    TraderNumberOfLiquidatedPositions = "trader__numberOfLiquidatedPositions",
    TraderNumberOfOpenPositions = "trader__numberOfOpenPositions",
    TraderNumberOfUnwinds = "trader__numberOfUnwinds",
    TraderOvlVolumeTraded = "trader__ovlVolumeTraded",
    TraderPlanckCatBalance = "trader__planckCatBalance",
    TraderRealizedPnl = "trader__realizedPnl",
    Volume = "volume"
}
export type TradingMiningEpoch_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<TradingMiningEpoch_Filter>>>;
    epoch?: InputMaybe<Scalars['BigInt']['input']>;
    epoch_gt?: InputMaybe<Scalars['BigInt']['input']>;
    epoch_gte?: InputMaybe<Scalars['BigInt']['input']>;
    epoch_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    epoch_lt?: InputMaybe<Scalars['BigInt']['input']>;
    epoch_lte?: InputMaybe<Scalars['BigInt']['input']>;
    epoch_not?: InputMaybe<Scalars['BigInt']['input']>;
    epoch_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    or?: InputMaybe<Array<InputMaybe<TradingMiningEpoch_Filter>>>;
    token1Percentage?: InputMaybe<Scalars['Int']['input']>;
    token1Percentage_gt?: InputMaybe<Scalars['Int']['input']>;
    token1Percentage_gte?: InputMaybe<Scalars['Int']['input']>;
    token1Percentage_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    token1Percentage_lt?: InputMaybe<Scalars['Int']['input']>;
    token1Percentage_lte?: InputMaybe<Scalars['Int']['input']>;
    token1Percentage_not?: InputMaybe<Scalars['Int']['input']>;
    token1Percentage_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    totalRewards?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalVolume?: InputMaybe<Scalars['BigInt']['input']>;
    totalVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum TradingMiningEpoch_OrderBy {
    Epoch = "epoch",
    Id = "id",
    Token1Percentage = "token1Percentage",
    TotalRewards = "totalRewards",
    TotalVolume = "totalVolume"
}
export type TradingMining_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<TradingMining_Filter>>>;
    epochDuration?: InputMaybe<Scalars['BigInt']['input']>;
    epochDuration_gt?: InputMaybe<Scalars['BigInt']['input']>;
    epochDuration_gte?: InputMaybe<Scalars['BigInt']['input']>;
    epochDuration_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    epochDuration_lt?: InputMaybe<Scalars['BigInt']['input']>;
    epochDuration_lte?: InputMaybe<Scalars['BigInt']['input']>;
    epochDuration_not?: InputMaybe<Scalars['BigInt']['input']>;
    epochDuration_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    maxRewardPerEpochPerAddress?: InputMaybe<Scalars['BigInt']['input']>;
    maxRewardPerEpochPerAddress_gt?: InputMaybe<Scalars['BigInt']['input']>;
    maxRewardPerEpochPerAddress_gte?: InputMaybe<Scalars['BigInt']['input']>;
    maxRewardPerEpochPerAddress_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    maxRewardPerEpochPerAddress_lt?: InputMaybe<Scalars['BigInt']['input']>;
    maxRewardPerEpochPerAddress_lte?: InputMaybe<Scalars['BigInt']['input']>;
    maxRewardPerEpochPerAddress_not?: InputMaybe<Scalars['BigInt']['input']>;
    maxRewardPerEpochPerAddress_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<TradingMining_Filter>>>;
    pcdHolderBonusPercentage?: InputMaybe<Scalars['Int']['input']>;
    pcdHolderBonusPercentage_gt?: InputMaybe<Scalars['Int']['input']>;
    pcdHolderBonusPercentage_gte?: InputMaybe<Scalars['Int']['input']>;
    pcdHolderBonusPercentage_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    pcdHolderBonusPercentage_lt?: InputMaybe<Scalars['Int']['input']>;
    pcdHolderBonusPercentage_lte?: InputMaybe<Scalars['Int']['input']>;
    pcdHolderBonusPercentage_not?: InputMaybe<Scalars['Int']['input']>;
    pcdHolderBonusPercentage_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    rewardToken1?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken1_contains?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken1_gt?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken1_gte?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken1_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    rewardToken1_lt?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken1_lte?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken1_not?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken1_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken1_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    rewardToken2?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken2_contains?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken2_gt?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken2_gte?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken2_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    rewardToken2_lt?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken2_lte?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken2_not?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken2_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    rewardToken2_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    startTime?: InputMaybe<Scalars['BigInt']['input']>;
    startTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
    startTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
    startTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    startTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
    startTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
    startTime_not?: InputMaybe<Scalars['BigInt']['input']>;
    startTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    token1Percentage?: InputMaybe<Scalars['Int']['input']>;
    token1Percentage_gt?: InputMaybe<Scalars['Int']['input']>;
    token1Percentage_gte?: InputMaybe<Scalars['Int']['input']>;
    token1Percentage_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    token1Percentage_lt?: InputMaybe<Scalars['Int']['input']>;
    token1Percentage_lte?: InputMaybe<Scalars['Int']['input']>;
    token1Percentage_not?: InputMaybe<Scalars['Int']['input']>;
    token1Percentage_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
    totalRewards?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum TradingMining_OrderBy {
    EpochDuration = "epochDuration",
    Id = "id",
    MaxRewardPerEpochPerAddress = "maxRewardPerEpochPerAddress",
    PcdHolderBonusPercentage = "pcdHolderBonusPercentage",
    RewardToken1 = "rewardToken1",
    RewardToken2 = "rewardToken2",
    StartTime = "startTime",
    Token1Percentage = "token1Percentage",
    TotalRewards = "totalRewards"
}
export type Transaction = {
    __typename?: 'Transaction';
    blockNumber: Scalars['BigInt']['output'];
    builds: Array<Build>;
    gasLimit: Scalars['BigInt']['output'];
    gasPrice: Scalars['BigInt']['output'];
    id: Scalars['ID']['output'];
    liquidates: Array<Liquidate>;
    timestamp: Scalars['BigInt']['output'];
    tokenTransfers: Array<TokenTransfer>;
    unwinds: Array<Unwind>;
};
export type TransactionBuildsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Build_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<Build_Filter>;
};
export type TransactionLiquidatesArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Liquidate_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<Liquidate_Filter>;
};
export type TransactionTokenTransfersArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<TokenTransfer_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<TokenTransfer_Filter>;
};
export type TransactionUnwindsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Unwind_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<Unwind_Filter>;
};
export type Transaction_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Transaction_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    builds_?: InputMaybe<Build_Filter>;
    gasLimit?: InputMaybe<Scalars['BigInt']['input']>;
    gasLimit_gt?: InputMaybe<Scalars['BigInt']['input']>;
    gasLimit_gte?: InputMaybe<Scalars['BigInt']['input']>;
    gasLimit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    gasLimit_lt?: InputMaybe<Scalars['BigInt']['input']>;
    gasLimit_lte?: InputMaybe<Scalars['BigInt']['input']>;
    gasLimit_not?: InputMaybe<Scalars['BigInt']['input']>;
    gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
    gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
    gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
    gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
    gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
    gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
    gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    liquidates_?: InputMaybe<Liquidate_Filter>;
    or?: InputMaybe<Array<InputMaybe<Transaction_Filter>>>;
    timestamp?: InputMaybe<Scalars['BigInt']['input']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    tokenTransfers_?: InputMaybe<TokenTransfer_Filter>;
    unwinds_?: InputMaybe<Unwind_Filter>;
};
export declare enum Transaction_OrderBy {
    BlockNumber = "blockNumber",
    Builds = "builds",
    GasLimit = "gasLimit",
    GasPrice = "gasPrice",
    Id = "id",
    Liquidates = "liquidates",
    Timestamp = "timestamp",
    TokenTransfers = "tokenTransfers",
    Unwinds = "unwinds"
}
export type Unwind = {
    __typename?: 'Unwind';
    collateral: Scalars['BigInt']['output'];
    currentDebt: Scalars['BigInt']['output'];
    currentOi: Scalars['BigInt']['output'];
    feeAmount: Scalars['BigInt']['output'];
    fraction: Scalars['BigInt']['output'];
    fractionOfPosition: Scalars['BigInt']['output'];
    id: Scalars['ID']['output'];
    isLong: Scalars['Boolean']['output'];
    mint: Scalars['BigInt']['output'];
    owner: Account;
    pnl: Scalars['BigInt']['output'];
    position: Position;
    price: Scalars['BigInt']['output'];
    size: Scalars['BigInt']['output'];
    timestamp: Scalars['BigInt']['output'];
    transaction: Transaction;
    transferAmount: Scalars['BigInt']['output'];
    unwindNumber: Scalars['BigInt']['output'];
    value: Scalars['BigInt']['output'];
    volume: Scalars['BigInt']['output'];
};
export type Unwind_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Unwind_Filter>>>;
    collateral?: InputMaybe<Scalars['BigInt']['input']>;
    collateral_gt?: InputMaybe<Scalars['BigInt']['input']>;
    collateral_gte?: InputMaybe<Scalars['BigInt']['input']>;
    collateral_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    collateral_lt?: InputMaybe<Scalars['BigInt']['input']>;
    collateral_lte?: InputMaybe<Scalars['BigInt']['input']>;
    collateral_not?: InputMaybe<Scalars['BigInt']['input']>;
    collateral_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    currentDebt?: InputMaybe<Scalars['BigInt']['input']>;
    currentDebt_gt?: InputMaybe<Scalars['BigInt']['input']>;
    currentDebt_gte?: InputMaybe<Scalars['BigInt']['input']>;
    currentDebt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    currentDebt_lt?: InputMaybe<Scalars['BigInt']['input']>;
    currentDebt_lte?: InputMaybe<Scalars['BigInt']['input']>;
    currentDebt_not?: InputMaybe<Scalars['BigInt']['input']>;
    currentDebt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    currentOi?: InputMaybe<Scalars['BigInt']['input']>;
    currentOi_gt?: InputMaybe<Scalars['BigInt']['input']>;
    currentOi_gte?: InputMaybe<Scalars['BigInt']['input']>;
    currentOi_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    currentOi_lt?: InputMaybe<Scalars['BigInt']['input']>;
    currentOi_lte?: InputMaybe<Scalars['BigInt']['input']>;
    currentOi_not?: InputMaybe<Scalars['BigInt']['input']>;
    currentOi_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    feeAmount?: InputMaybe<Scalars['BigInt']['input']>;
    feeAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    feeAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    feeAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    feeAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    feeAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    feeAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
    feeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fraction?: InputMaybe<Scalars['BigInt']['input']>;
    fractionOfPosition?: InputMaybe<Scalars['BigInt']['input']>;
    fractionOfPosition_gt?: InputMaybe<Scalars['BigInt']['input']>;
    fractionOfPosition_gte?: InputMaybe<Scalars['BigInt']['input']>;
    fractionOfPosition_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fractionOfPosition_lt?: InputMaybe<Scalars['BigInt']['input']>;
    fractionOfPosition_lte?: InputMaybe<Scalars['BigInt']['input']>;
    fractionOfPosition_not?: InputMaybe<Scalars['BigInt']['input']>;
    fractionOfPosition_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fraction_gt?: InputMaybe<Scalars['BigInt']['input']>;
    fraction_gte?: InputMaybe<Scalars['BigInt']['input']>;
    fraction_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fraction_lt?: InputMaybe<Scalars['BigInt']['input']>;
    fraction_lte?: InputMaybe<Scalars['BigInt']['input']>;
    fraction_not?: InputMaybe<Scalars['BigInt']['input']>;
    fraction_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['ID']['input']>;
    id_gt?: InputMaybe<Scalars['ID']['input']>;
    id_gte?: InputMaybe<Scalars['ID']['input']>;
    id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    id_lt?: InputMaybe<Scalars['ID']['input']>;
    id_lte?: InputMaybe<Scalars['ID']['input']>;
    id_not?: InputMaybe<Scalars['ID']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
    isLong?: InputMaybe<Scalars['Boolean']['input']>;
    isLong_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    isLong_not?: InputMaybe<Scalars['Boolean']['input']>;
    isLong_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    mint?: InputMaybe<Scalars['BigInt']['input']>;
    mint_gt?: InputMaybe<Scalars['BigInt']['input']>;
    mint_gte?: InputMaybe<Scalars['BigInt']['input']>;
    mint_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    mint_lt?: InputMaybe<Scalars['BigInt']['input']>;
    mint_lte?: InputMaybe<Scalars['BigInt']['input']>;
    mint_not?: InputMaybe<Scalars['BigInt']['input']>;
    mint_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<Unwind_Filter>>>;
    owner?: InputMaybe<Scalars['String']['input']>;
    owner_?: InputMaybe<Account_Filter>;
    owner_contains?: InputMaybe<Scalars['String']['input']>;
    owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_gt?: InputMaybe<Scalars['String']['input']>;
    owner_gte?: InputMaybe<Scalars['String']['input']>;
    owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_lt?: InputMaybe<Scalars['String']['input']>;
    owner_lte?: InputMaybe<Scalars['String']['input']>;
    owner_not?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    pnl?: InputMaybe<Scalars['BigInt']['input']>;
    pnl_gt?: InputMaybe<Scalars['BigInt']['input']>;
    pnl_gte?: InputMaybe<Scalars['BigInt']['input']>;
    pnl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    pnl_lt?: InputMaybe<Scalars['BigInt']['input']>;
    pnl_lte?: InputMaybe<Scalars['BigInt']['input']>;
    pnl_not?: InputMaybe<Scalars['BigInt']['input']>;
    pnl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    position?: InputMaybe<Scalars['String']['input']>;
    position_?: InputMaybe<Position_Filter>;
    position_contains?: InputMaybe<Scalars['String']['input']>;
    position_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    position_ends_with?: InputMaybe<Scalars['String']['input']>;
    position_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    position_gt?: InputMaybe<Scalars['String']['input']>;
    position_gte?: InputMaybe<Scalars['String']['input']>;
    position_in?: InputMaybe<Array<Scalars['String']['input']>>;
    position_lt?: InputMaybe<Scalars['String']['input']>;
    position_lte?: InputMaybe<Scalars['String']['input']>;
    position_not?: InputMaybe<Scalars['String']['input']>;
    position_not_contains?: InputMaybe<Scalars['String']['input']>;
    position_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    position_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    position_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    position_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    position_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    position_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    position_starts_with?: InputMaybe<Scalars['String']['input']>;
    position_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    price?: InputMaybe<Scalars['BigInt']['input']>;
    price_gt?: InputMaybe<Scalars['BigInt']['input']>;
    price_gte?: InputMaybe<Scalars['BigInt']['input']>;
    price_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    price_lt?: InputMaybe<Scalars['BigInt']['input']>;
    price_lte?: InputMaybe<Scalars['BigInt']['input']>;
    price_not?: InputMaybe<Scalars['BigInt']['input']>;
    price_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    size?: InputMaybe<Scalars['BigInt']['input']>;
    size_gt?: InputMaybe<Scalars['BigInt']['input']>;
    size_gte?: InputMaybe<Scalars['BigInt']['input']>;
    size_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    size_lt?: InputMaybe<Scalars['BigInt']['input']>;
    size_lte?: InputMaybe<Scalars['BigInt']['input']>;
    size_not?: InputMaybe<Scalars['BigInt']['input']>;
    size_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    timestamp?: InputMaybe<Scalars['BigInt']['input']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    transaction?: InputMaybe<Scalars['String']['input']>;
    transaction_?: InputMaybe<Transaction_Filter>;
    transaction_contains?: InputMaybe<Scalars['String']['input']>;
    transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
    transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction_gt?: InputMaybe<Scalars['String']['input']>;
    transaction_gte?: InputMaybe<Scalars['String']['input']>;
    transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
    transaction_lt?: InputMaybe<Scalars['String']['input']>;
    transaction_lte?: InputMaybe<Scalars['String']['input']>;
    transaction_not?: InputMaybe<Scalars['String']['input']>;
    transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
    transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
    transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    transferAmount?: InputMaybe<Scalars['BigInt']['input']>;
    transferAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    transferAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    transferAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    transferAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    transferAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    transferAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
    transferAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    unwindNumber?: InputMaybe<Scalars['BigInt']['input']>;
    unwindNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    unwindNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    unwindNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    unwindNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    unwindNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    unwindNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    unwindNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    value?: InputMaybe<Scalars['BigInt']['input']>;
    value_gt?: InputMaybe<Scalars['BigInt']['input']>;
    value_gte?: InputMaybe<Scalars['BigInt']['input']>;
    value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    value_lt?: InputMaybe<Scalars['BigInt']['input']>;
    value_lte?: InputMaybe<Scalars['BigInt']['input']>;
    value_not?: InputMaybe<Scalars['BigInt']['input']>;
    value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    volume?: InputMaybe<Scalars['BigInt']['input']>;
    volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
    volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
    volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
    volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
    volume_not?: InputMaybe<Scalars['BigInt']['input']>;
    volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum Unwind_OrderBy {
    Collateral = "collateral",
    CurrentDebt = "currentDebt",
    CurrentOi = "currentOi",
    FeeAmount = "feeAmount",
    Fraction = "fraction",
    FractionOfPosition = "fractionOfPosition",
    Id = "id",
    IsLong = "isLong",
    Mint = "mint",
    Owner = "owner",
    OwnerId = "owner__id",
    OwnerNumberOfLiquidatedPositions = "owner__numberOfLiquidatedPositions",
    OwnerNumberOfOpenPositions = "owner__numberOfOpenPositions",
    OwnerNumberOfUnwinds = "owner__numberOfUnwinds",
    OwnerOvlVolumeTraded = "owner__ovlVolumeTraded",
    OwnerPlanckCatBalance = "owner__planckCatBalance",
    OwnerRealizedPnl = "owner__realizedPnl",
    Pnl = "pnl",
    Position = "position",
    PositionCreatedAtBlockNumber = "position__createdAtBlockNumber",
    PositionCreatedAtTimestamp = "position__createdAtTimestamp",
    PositionCurrentDebt = "position__currentDebt",
    PositionCurrentOi = "position__currentOi",
    PositionEntryPrice = "position__entryPrice",
    PositionFractionUnwound = "position__fractionUnwound",
    PositionId = "position__id",
    PositionInitialCollateral = "position__initialCollateral",
    PositionInitialDebt = "position__initialDebt",
    PositionInitialNotional = "position__initialNotional",
    PositionInitialOi = "position__initialOi",
    PositionIsLiquidated = "position__isLiquidated",
    PositionIsLong = "position__isLong",
    PositionLeverage = "position__leverage",
    PositionMint = "position__mint",
    PositionNumberOfUniwnds = "position__numberOfUniwnds",
    PositionPositionId = "position__positionId",
    Price = "price",
    Size = "size",
    Timestamp = "timestamp",
    Transaction = "transaction",
    TransactionBlockNumber = "transaction__blockNumber",
    TransactionGasLimit = "transaction__gasLimit",
    TransactionGasPrice = "transaction__gasPrice",
    TransactionId = "transaction__id",
    TransactionTimestamp = "transaction__timestamp",
    TransferAmount = "transferAmount",
    UnwindNumber = "unwindNumber",
    Value = "value",
    Volume = "volume"
}
export type _Block_ = {
    __typename?: '_Block_';
    /** The hash of the block */
    hash?: Maybe<Scalars['Bytes']['output']>;
    /** The block number */
    number: Scalars['Int']['output'];
    /** The hash of the parent block */
    parentHash?: Maybe<Scalars['Bytes']['output']>;
    /** Integer representation of the timestamp stored in blocks for the chain */
    timestamp?: Maybe<Scalars['Int']['output']>;
};
/** The type for the top-level _meta field */
export type _Meta_ = {
    __typename?: '_Meta_';
    /**
     * Information about a specific subgraph block. The hash of the block
     * will be null if the _meta field has a block constraint that asks for
     * a block number. It will be filled if the _meta field has no block constraint
     * and therefore asks for the latest  block
     *
     */
    block: _Block_;
    /** The deployment ID */
    deployment: Scalars['String']['output'];
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors: Scalars['Boolean']['output'];
};
export declare enum _SubgraphErrorPolicy_ {
    /** Data will be returned even if the subgraph has indexing errors */
    Allow = "allow",
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    Deny = "deny"
}
export type OpenPositionsQueryVariables = Exact<{
    account: Scalars['ID']['input'];
    first?: InputMaybe<Scalars['Int']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
}>;
export type OpenPositionsQuery = {
    __typename?: 'Query';
    account?: {
        __typename?: 'Account';
        positions: Array<{
            __typename?: 'Position';
            fractionUnwound: any;
            id: string;
            createdAtTimestamp: any;
            currentOi: any;
            entryPrice: any;
            initialCollateral: any;
            isLiquidated: boolean;
            isLong: boolean;
            leverage: any;
            numberOfUniwnds: any;
            positionId: string;
            market: {
                __typename?: 'Market';
                feedAddress: string;
                id: string;
            };
        }>;
    } | null;
};
export type UnwindsQueryVariables = Exact<{
    account: Scalars['ID']['input'];
    first?: InputMaybe<Scalars['Int']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
}>;
export type UnwindsQuery = {
    __typename?: 'Query';
    account?: {
        __typename?: 'Account';
        unwinds: Array<{
            __typename?: 'Unwind';
            collateral: any;
            currentDebt: any;
            currentOi: any;
            fraction: any;
            fractionOfPosition: any;
            id: string;
            isLong: boolean;
            mint: any;
            pnl: any;
            price: any;
            size: any;
            timestamp: any;
            transferAmount: any;
            unwindNumber: any;
            value: any;
            position: {
                __typename?: 'Position';
                createdAtTimestamp: any;
                currentOi: any;
                entryPrice: any;
                id: string;
                initialCollateral: any;
                isLong: boolean;
                leverage: any;
                numberOfUniwnds: any;
                positionId: string;
                market: {
                    __typename?: 'Market';
                    feedAddress: string;
                    id: string;
                };
            };
        }>;
    } | null;
};
export type ActiveMarketsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ActiveMarketsQuery = {
    __typename?: 'Query';
    markets: Array<{
        __typename?: 'Market';
        id: string;
        feedAddress: string;
        k: any;
        lmbda: any;
        delta: any;
        capPayoff: any;
        capNotional: any;
        capLeverage: any;
        circuitBreakerWindow: any;
        circuitBreakerMintTarget: any;
        maintenanceMarginFraction: any;
        maintenanceMarginBurnRate: any;
        liquidationFeeRate: any;
        tradingFeeRate: any;
        minCollateral: any;
        priceDriftUpperLimit: any;
        averageBlockTime: any;
        isShutdown: boolean;
        factory: {
            __typename?: 'Factory';
            id: string;
        };
    }>;
};
export type LiquidatedPositionsQueryVariables = Exact<{
    account: Scalars['ID']['input'];
    first?: InputMaybe<Scalars['Int']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
}>;
export type LiquidatedPositionsQuery = {
    __typename?: 'Query';
    account?: {
        __typename?: 'Account';
        liquidates: Array<{
            __typename?: 'Liquidate';
            collateral: any;
            currentDebt: any;
            currentOi: any;
            id: string;
            isLong: boolean;
            mint: any;
            price: any;
            timestamp: any;
            value: any;
            size: any;
            position: {
                __typename?: 'Position';
                createdAtTimestamp: any;
                currentOi: any;
                entryPrice: any;
                fractionUnwound: any;
                id: string;
                initialCollateral: any;
                isLong: boolean;
                leverage: any;
                market: {
                    __typename?: 'Market';
                    feedAddress: string;
                    id: string;
                };
            };
        }>;
    } | null;
};
//# sourceMappingURL=types.d.ts.map