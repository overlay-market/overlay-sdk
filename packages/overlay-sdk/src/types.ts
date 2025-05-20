export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  builds: Array<Build>;
  erc1155Tokens: Array<Erc1155TokenBalance>;
  id: Scalars['Bytes']['output'];
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


export type AccountErc1155TokensArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155TokenBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Erc1155TokenBalance_Filter>;
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
  erc1155Tokens_?: InputMaybe<Erc1155TokenBalance_Filter>;
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

export enum Account_OrderBy {
  Builds = 'builds',
  Erc1155Tokens = 'erc1155Tokens',
  Id = 'id',
  Liquidates = 'liquidates',
  Nfts = 'nfts',
  NumberOfLiquidatedPositions = 'numberOfLiquidatedPositions',
  NumberOfOpenPositions = 'numberOfOpenPositions',
  NumberOfUnwinds = 'numberOfUnwinds',
  OvlVolumeTraded = 'ovlVolumeTraded',
  PlanckCatBalance = 'planckCatBalance',
  Positions = 'positions',
  RealizedPnl = 'realizedPnl',
  ReferralPositions = 'referralPositions',
  StakingPositions = 'stakingPositions',
  Tokens = 'tokens',
  TradingMiningEpochVolumes = 'tradingMiningEpochVolumes',
  Unwinds = 'unwinds'
}

export enum Aggregation_Interval {
  Day = 'day',
  Hour = 'hour'
}

export type Analytics = {
  __typename?: 'Analytics';
  id: Scalars['Bytes']['output'];
  totalTokensLocked: Scalars['BigInt']['output'];
  totalTransactions: Scalars['BigInt']['output'];
  totalUsers: Scalars['BigInt']['output'];
  totalVolume: Scalars['BigInt']['output'];
  totalVolumeBuilds: Scalars['BigInt']['output'];
  totalVolumeLiquidations: Scalars['BigInt']['output'];
  totalVolumeUnwinds: Scalars['BigInt']['output'];
};

export type AnalyticsHourData = {
  __typename?: 'AnalyticsHourData';
  id: Scalars['Bytes']['output'];
  periodStartUnix: Scalars['Int']['output'];
  totalTokensLocked: Scalars['BigInt']['output'];
  totalTransactions: Scalars['BigInt']['output'];
  totalUsers: Scalars['BigInt']['output'];
  totalVolume: Scalars['BigInt']['output'];
  totalVolumeBuilds: Scalars['BigInt']['output'];
  totalVolumeLiquidations: Scalars['BigInt']['output'];
  totalVolumeUnwinds: Scalars['BigInt']['output'];
};

export type AnalyticsHourData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AnalyticsHourData_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<AnalyticsHourData_Filter>>>;
  periodStartUnix?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_gt?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_gte?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  periodStartUnix_lt?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_lte?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_not?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalTokensLocked?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensLocked_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensLocked_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensLocked_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTokensLocked_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensLocked_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensLocked_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensLocked_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTransactions?: InputMaybe<Scalars['BigInt']['input']>;
  totalTransactions_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTransactions_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTransactions_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTransactions_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTransactions_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTransactions_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUsers?: InputMaybe<Scalars['BigInt']['input']>;
  totalUsers_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUsers_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUsers_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUsers_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUsers_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUsers_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalUsers_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolume?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeBuilds?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeBuilds_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeBuilds_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeBuilds_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolumeBuilds_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeBuilds_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeBuilds_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeBuilds_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolumeLiquidations?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeLiquidations_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeLiquidations_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeLiquidations_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolumeLiquidations_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeLiquidations_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeLiquidations_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeLiquidations_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolumeUnwinds?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeUnwinds_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeUnwinds_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeUnwinds_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolumeUnwinds_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeUnwinds_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeUnwinds_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeUnwinds_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum AnalyticsHourData_OrderBy {
  Id = 'id',
  PeriodStartUnix = 'periodStartUnix',
  TotalTokensLocked = 'totalTokensLocked',
  TotalTransactions = 'totalTransactions',
  TotalUsers = 'totalUsers',
  TotalVolume = 'totalVolume',
  TotalVolumeBuilds = 'totalVolumeBuilds',
  TotalVolumeLiquidations = 'totalVolumeLiquidations',
  TotalVolumeUnwinds = 'totalVolumeUnwinds'
}

export type Analytics_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Analytics_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<Analytics_Filter>>>;
  totalTokensLocked?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensLocked_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensLocked_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensLocked_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTokensLocked_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensLocked_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensLocked_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensLocked_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTransactions?: InputMaybe<Scalars['BigInt']['input']>;
  totalTransactions_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTransactions_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTransactions_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTransactions_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTransactions_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTransactions_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalTransactions_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUsers?: InputMaybe<Scalars['BigInt']['input']>;
  totalUsers_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUsers_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUsers_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUsers_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUsers_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUsers_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalUsers_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolume?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeBuilds?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeBuilds_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeBuilds_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeBuilds_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolumeBuilds_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeBuilds_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeBuilds_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeBuilds_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolumeLiquidations?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeLiquidations_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeLiquidations_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeLiquidations_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolumeLiquidations_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeLiquidations_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeLiquidations_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeLiquidations_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolumeUnwinds?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeUnwinds_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeUnwinds_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeUnwinds_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolumeUnwinds_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeUnwinds_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeUnwinds_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolumeUnwinds_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Analytics_OrderBy {
  Id = 'id',
  TotalTokensLocked = 'totalTokensLocked',
  TotalTransactions = 'totalTransactions',
  TotalUsers = 'totalUsers',
  TotalVolume = 'totalVolume',
  TotalVolumeBuilds = 'totalVolumeBuilds',
  TotalVolumeLiquidations = 'totalVolumeLiquidations',
  TotalVolumeUnwinds = 'totalVolumeUnwinds'
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
  feeAmount: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  owner: Account;
  position: Position;
  price: Scalars['BigInt']['output'];
  routerParams?: Maybe<RouterParams>;
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type Build_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Build_Filter>>>;
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
  routerParams?: InputMaybe<Scalars['String']['input']>;
  routerParams_?: InputMaybe<RouterParams_Filter>;
  routerParams_contains?: InputMaybe<Scalars['String']['input']>;
  routerParams_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  routerParams_ends_with?: InputMaybe<Scalars['String']['input']>;
  routerParams_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  routerParams_gt?: InputMaybe<Scalars['String']['input']>;
  routerParams_gte?: InputMaybe<Scalars['String']['input']>;
  routerParams_in?: InputMaybe<Array<Scalars['String']['input']>>;
  routerParams_lt?: InputMaybe<Scalars['String']['input']>;
  routerParams_lte?: InputMaybe<Scalars['String']['input']>;
  routerParams_not?: InputMaybe<Scalars['String']['input']>;
  routerParams_not_contains?: InputMaybe<Scalars['String']['input']>;
  routerParams_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  routerParams_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  routerParams_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  routerParams_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  routerParams_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  routerParams_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  routerParams_starts_with?: InputMaybe<Scalars['String']['input']>;
  routerParams_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
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
};

export enum Build_OrderBy {
  FeeAmount = 'feeAmount',
  Id = 'id',
  Owner = 'owner',
  OwnerId = 'owner__id',
  OwnerNumberOfLiquidatedPositions = 'owner__numberOfLiquidatedPositions',
  OwnerNumberOfOpenPositions = 'owner__numberOfOpenPositions',
  OwnerNumberOfUnwinds = 'owner__numberOfUnwinds',
  OwnerOvlVolumeTraded = 'owner__ovlVolumeTraded',
  OwnerPlanckCatBalance = 'owner__planckCatBalance',
  OwnerRealizedPnl = 'owner__realizedPnl',
  Position = 'position',
  PositionCreatedAtBlockNumber = 'position__createdAtBlockNumber',
  PositionCreatedAtTimestamp = 'position__createdAtTimestamp',
  PositionCurrentDebt = 'position__currentDebt',
  PositionCurrentOi = 'position__currentOi',
  PositionEntryPrice = 'position__entryPrice',
  PositionFractionUnwound = 'position__fractionUnwound',
  PositionId = 'position__id',
  PositionInitialCollateral = 'position__initialCollateral',
  PositionInitialDebt = 'position__initialDebt',
  PositionInitialNotional = 'position__initialNotional',
  PositionInitialOi = 'position__initialOi',
  PositionIsLiquidated = 'position__isLiquidated',
  PositionIsLong = 'position__isLong',
  PositionLeverage = 'position__leverage',
  PositionMint = 'position__mint',
  PositionNumberOfUniwnds = 'position__numberOfUniwnds',
  PositionPositionId = 'position__positionId',
  Price = 'price',
  RouterParams = 'routerParams',
  RouterParamsBrokerId = 'routerParams__brokerId',
  RouterParamsId = 'routerParams__id',
  RouterParamsPerformer = 'routerParams__performer',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionGasLimit = 'transaction__gasLimit',
  TransactionGasPrice = 'transaction__gasPrice',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

export type Erc20Token = {
  __typename?: 'ERC20Token';
  id: Scalars['Bytes']['output'];
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['BigInt']['output'];
  totalSupplyHourData: Array<TotalSupplyHourData>;
};


export type Erc20TokenTotalSupplyHourDataArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TotalSupplyHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TotalSupplyHourData_Filter>;
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
  totalSupplyHourData_?: InputMaybe<TotalSupplyHourData_Filter>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Erc20Token_OrderBy {
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  TotalSupply = 'totalSupply',
  TotalSupplyHourData = 'totalSupplyHourData'
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

export enum Erc721Nft_OrderBy {
  Contract = 'contract',
  ContractId = 'contract__id',
  ContractName = 'contract__name',
  ContractSymbol = 'contract__symbol',
  ContractTotalSupply = 'contract__totalSupply',
  Id = 'id',
  Owner = 'owner',
  OwnerId = 'owner__id',
  OwnerNumberOfLiquidatedPositions = 'owner__numberOfLiquidatedPositions',
  OwnerNumberOfOpenPositions = 'owner__numberOfOpenPositions',
  OwnerNumberOfUnwinds = 'owner__numberOfUnwinds',
  OwnerOvlVolumeTraded = 'owner__ovlVolumeTraded',
  OwnerPlanckCatBalance = 'owner__planckCatBalance',
  OwnerRealizedPnl = 'owner__realizedPnl',
  TokenId = 'tokenId',
  TokenUri = 'tokenUri'
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

export enum Erc721Token_OrderBy {
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  TotalSupply = 'totalSupply'
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

export enum Erc721Transfer_OrderBy {
  From = 'from',
  FromId = 'from__id',
  FromNumberOfLiquidatedPositions = 'from__numberOfLiquidatedPositions',
  FromNumberOfOpenPositions = 'from__numberOfOpenPositions',
  FromNumberOfUnwinds = 'from__numberOfUnwinds',
  FromOvlVolumeTraded = 'from__ovlVolumeTraded',
  FromPlanckCatBalance = 'from__planckCatBalance',
  FromRealizedPnl = 'from__realizedPnl',
  Id = 'id',
  Nft = 'nft',
  NftId = 'nft__id',
  NftTokenId = 'nft__tokenId',
  NftTokenUri = 'nft__tokenUri',
  To = 'to',
  ToId = 'to__id',
  ToNumberOfLiquidatedPositions = 'to__numberOfLiquidatedPositions',
  ToNumberOfOpenPositions = 'to__numberOfOpenPositions',
  ToNumberOfUnwinds = 'to__numberOfUnwinds',
  ToOvlVolumeTraded = 'to__ovlVolumeTraded',
  ToPlanckCatBalance = 'to__planckCatBalance',
  ToRealizedPnl = 'to__realizedPnl',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionGasLimit = 'transaction__gasLimit',
  TransactionGasPrice = 'transaction__gasPrice',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

export type Erc1155Token = {
  __typename?: 'ERC1155Token';
  address: Scalars['String']['output'];
  id: Scalars['Bytes']['output'];
  tokenId: Scalars['BigInt']['output'];
  tokenUri: Scalars['String']['output'];
  totalBurnt: Scalars['BigInt']['output'];
  totalSupply: Scalars['BigInt']['output'];
};

export type Erc1155TokenBalance = {
  __typename?: 'ERC1155TokenBalance';
  amount: Scalars['BigInt']['output'];
  burnt: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  owner: Account;
  token: Erc1155Token;
};

export type Erc1155TokenBalance_Filter = {
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
  and?: InputMaybe<Array<InputMaybe<Erc1155TokenBalance_Filter>>>;
  burnt?: InputMaybe<Scalars['BigInt']['input']>;
  burnt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  burnt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  burnt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  burnt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  burnt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  burnt_not?: InputMaybe<Scalars['BigInt']['input']>;
  burnt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  or?: InputMaybe<Array<InputMaybe<Erc1155TokenBalance_Filter>>>;
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
  token_?: InputMaybe<Erc1155Token_Filter>;
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

export enum Erc1155TokenBalance_OrderBy {
  Amount = 'amount',
  Burnt = 'burnt',
  Id = 'id',
  Owner = 'owner',
  OwnerId = 'owner__id',
  OwnerNumberOfLiquidatedPositions = 'owner__numberOfLiquidatedPositions',
  OwnerNumberOfOpenPositions = 'owner__numberOfOpenPositions',
  OwnerNumberOfUnwinds = 'owner__numberOfUnwinds',
  OwnerOvlVolumeTraded = 'owner__ovlVolumeTraded',
  OwnerPlanckCatBalance = 'owner__planckCatBalance',
  OwnerRealizedPnl = 'owner__realizedPnl',
  Token = 'token',
  TokenAddress = 'token__address',
  TokenId = 'token__id',
  TokenTokenId = 'token__tokenId',
  TokenTokenUri = 'token__tokenUri',
  TokenTotalBurnt = 'token__totalBurnt',
  TokenTotalSupply = 'token__totalSupply'
}

export type Erc1155Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_gt?: InputMaybe<Scalars['String']['input']>;
  address_gte?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_lt?: InputMaybe<Scalars['String']['input']>;
  address_lte?: InputMaybe<Scalars['String']['input']>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<Erc1155Token_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<Erc1155Token_Filter>>>;
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
  totalBurnt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBurnt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBurnt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBurnt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBurnt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBurnt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBurnt_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalBurnt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Erc1155Token_OrderBy {
  Address = 'address',
  Id = 'id',
  TokenId = 'tokenId',
  TokenUri = 'tokenUri',
  TotalBurnt = 'totalBurnt',
  TotalSupply = 'totalSupply'
}

export type Erc1155Transfer = {
  __typename?: 'ERC1155Transfer';
  amount: Scalars['BigInt']['output'];
  from: Account;
  id: Scalars['Bytes']['output'];
  to: Account;
  token: Erc1155Token;
  transaction: Transaction;
};

export type Erc1155Transfer_Filter = {
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
  and?: InputMaybe<Array<InputMaybe<Erc1155Transfer_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<Erc1155Transfer_Filter>>>;
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
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Erc1155Token_Filter>;
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

export enum Erc1155Transfer_OrderBy {
  Amount = 'amount',
  From = 'from',
  FromId = 'from__id',
  FromNumberOfLiquidatedPositions = 'from__numberOfLiquidatedPositions',
  FromNumberOfOpenPositions = 'from__numberOfOpenPositions',
  FromNumberOfUnwinds = 'from__numberOfUnwinds',
  FromOvlVolumeTraded = 'from__ovlVolumeTraded',
  FromPlanckCatBalance = 'from__planckCatBalance',
  FromRealizedPnl = 'from__realizedPnl',
  Id = 'id',
  To = 'to',
  ToId = 'to__id',
  ToNumberOfLiquidatedPositions = 'to__numberOfLiquidatedPositions',
  ToNumberOfOpenPositions = 'to__numberOfOpenPositions',
  ToNumberOfUnwinds = 'to__numberOfUnwinds',
  ToOvlVolumeTraded = 'to__ovlVolumeTraded',
  ToPlanckCatBalance = 'to__planckCatBalance',
  ToRealizedPnl = 'to__realizedPnl',
  Token = 'token',
  TokenAddress = 'token__address',
  TokenId = 'token__id',
  TokenTokenId = 'token__tokenId',
  TokenTokenUri = 'token__tokenUri',
  TokenTotalBurnt = 'token__totalBurnt',
  TokenTotalSupply = 'token__totalSupply',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionGasLimit = 'transaction__gasLimit',
  TransactionGasPrice = 'transaction__gasPrice',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

export type Factory = {
  __typename?: 'Factory';
  feeRecipient: Scalars['ID']['output'];
  id: Scalars['Bytes']['output'];
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

export enum Factory_OrderBy {
  FeeRecipient = 'feeRecipient',
  Id = 'id',
  MarketCount = 'marketCount',
  Markets = 'markets',
  Owner = 'owner',
  TotalFeesOvl = 'totalFeesOVL',
  TotalValueLockedOvl = 'totalValueLockedOVL',
  TotalVolumeOvl = 'totalVolumeOVL',
  TxCount = 'txCount'
}

export type Liquidate = {
  __typename?: 'Liquidate';
  fractionOfPosition: Scalars['BigInt']['output'];
  fundingPayment: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  liquidationFee: Scalars['BigInt']['output'];
  marginToBurn: Scalars['BigInt']['output'];
  mint: Scalars['BigInt']['output'];
  owner: Account;
  position: Position;
  price: Scalars['BigInt']['output'];
  sender: Account;
  size: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
  transferFeeAmount: Scalars['BigInt']['output'];
  volume: Scalars['BigInt']['output'];
};

export type Liquidate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Liquidate_Filter>>>;
  fractionOfPosition?: InputMaybe<Scalars['BigInt']['input']>;
  fractionOfPosition_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fractionOfPosition_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fractionOfPosition_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fractionOfPosition_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fractionOfPosition_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fractionOfPosition_not?: InputMaybe<Scalars['BigInt']['input']>;
  fractionOfPosition_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingPayment?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingPayment_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_not?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidationFee?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marginToBurn?: InputMaybe<Scalars['BigInt']['input']>;
  marginToBurn_gt?: InputMaybe<Scalars['BigInt']['input']>;
  marginToBurn_gte?: InputMaybe<Scalars['BigInt']['input']>;
  marginToBurn_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marginToBurn_lt?: InputMaybe<Scalars['BigInt']['input']>;
  marginToBurn_lte?: InputMaybe<Scalars['BigInt']['input']>;
  marginToBurn_not?: InputMaybe<Scalars['BigInt']['input']>;
  marginToBurn_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  transferFeeAmount?: InputMaybe<Scalars['BigInt']['input']>;
  transferFeeAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  transferFeeAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  transferFeeAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transferFeeAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  transferFeeAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  transferFeeAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  transferFeeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Liquidate_OrderBy {
  FractionOfPosition = 'fractionOfPosition',
  FundingPayment = 'fundingPayment',
  Id = 'id',
  LiquidationFee = 'liquidationFee',
  MarginToBurn = 'marginToBurn',
  Mint = 'mint',
  Owner = 'owner',
  OwnerId = 'owner__id',
  OwnerNumberOfLiquidatedPositions = 'owner__numberOfLiquidatedPositions',
  OwnerNumberOfOpenPositions = 'owner__numberOfOpenPositions',
  OwnerNumberOfUnwinds = 'owner__numberOfUnwinds',
  OwnerOvlVolumeTraded = 'owner__ovlVolumeTraded',
  OwnerPlanckCatBalance = 'owner__planckCatBalance',
  OwnerRealizedPnl = 'owner__realizedPnl',
  Position = 'position',
  PositionCreatedAtBlockNumber = 'position__createdAtBlockNumber',
  PositionCreatedAtTimestamp = 'position__createdAtTimestamp',
  PositionCurrentDebt = 'position__currentDebt',
  PositionCurrentOi = 'position__currentOi',
  PositionEntryPrice = 'position__entryPrice',
  PositionFractionUnwound = 'position__fractionUnwound',
  PositionId = 'position__id',
  PositionInitialCollateral = 'position__initialCollateral',
  PositionInitialDebt = 'position__initialDebt',
  PositionInitialNotional = 'position__initialNotional',
  PositionInitialOi = 'position__initialOi',
  PositionIsLiquidated = 'position__isLiquidated',
  PositionIsLong = 'position__isLong',
  PositionLeverage = 'position__leverage',
  PositionMint = 'position__mint',
  PositionNumberOfUniwnds = 'position__numberOfUniwnds',
  PositionPositionId = 'position__positionId',
  Price = 'price',
  Sender = 'sender',
  SenderId = 'sender__id',
  SenderNumberOfLiquidatedPositions = 'sender__numberOfLiquidatedPositions',
  SenderNumberOfOpenPositions = 'sender__numberOfOpenPositions',
  SenderNumberOfUnwinds = 'sender__numberOfUnwinds',
  SenderOvlVolumeTraded = 'sender__ovlVolumeTraded',
  SenderPlanckCatBalance = 'sender__planckCatBalance',
  SenderRealizedPnl = 'sender__realizedPnl',
  Size = 'size',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionGasLimit = 'transaction__gasLimit',
  TransactionGasPrice = 'transaction__gasPrice',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp',
  TransferFeeAmount = 'transferFeeAmount',
  Volume = 'volume'
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
  dpUpperLimit: Scalars['BigInt']['output'];
  factory: Factory;
  feedAddress: Scalars['String']['output'];
  id: Scalars['Bytes']['output'];
  isShutdown: Scalars['Boolean']['output'];
  k: Scalars['BigInt']['output'];
  liquidationFeeRate: Scalars['BigInt']['output'];
  lmbda: Scalars['BigInt']['output'];
  maintenanceMarginBurnRate: Scalars['BigInt']['output'];
  maintenanceMarginFraction: Scalars['BigInt']['output'];
  marketHourData: Array<MarketHourData>;
  marketState: MarketState;
  minCollateral: Scalars['BigInt']['output'];
  numberOfBuilds: Scalars['BigInt']['output'];
  numberOfLiquidates: Scalars['BigInt']['output'];
  numberOfUnwinds: Scalars['BigInt']['output'];
  oiLong: Scalars['BigInt']['output'];
  oiLongShares: Scalars['BigInt']['output'];
  oiShort: Scalars['BigInt']['output'];
  oiShortShares: Scalars['BigInt']['output'];
  positions: Array<Position>;
  priceDriftUpperLimit: Scalars['BigInt']['output'];
  totalBuildFees: Scalars['BigInt']['output'];
  totalFees: Scalars['BigInt']['output'];
  totalLiquidateFees: Scalars['BigInt']['output'];
  totalMint: Scalars['BigInt']['output'];
  totalUnwindFees: Scalars['BigInt']['output'];
  totalVolume: Scalars['BigInt']['output'];
  tradingFeeRate: Scalars['BigInt']['output'];
};


export type MarketMarketHourDataArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MarketHourData_Filter>;
};


export type MarketPositionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Position_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Position_Filter>;
};

export type MarketHourData = {
  __typename?: 'MarketHourData';
  accumulatedTotalMint: Scalars['BigInt']['output'];
  burnt: Scalars['BigInt']['output'];
  fundingRate: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  market: Market;
  minted: Scalars['BigInt']['output'];
  oiLong: Scalars['BigInt']['output'];
  oiShort: Scalars['BigInt']['output'];
  periodStartUnix: Scalars['Int']['output'];
  totalMint: Scalars['BigInt']['output'];
  volume: Scalars['BigInt']['output'];
};

export type MarketHourData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accumulatedTotalMint?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedTotalMint_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedTotalMint_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedTotalMint_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedTotalMint_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedTotalMint_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedTotalMint_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedTotalMint_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<MarketHourData_Filter>>>;
  burnt?: InputMaybe<Scalars['BigInt']['input']>;
  burnt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  burnt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  burnt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  burnt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  burnt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  burnt_not?: InputMaybe<Scalars['BigInt']['input']>;
  burnt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingRate?: InputMaybe<Scalars['BigInt']['input']>;
  fundingRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  fundingRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  minted?: InputMaybe<Scalars['BigInt']['input']>;
  minted_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minted_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minted_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minted_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minted_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minted_not?: InputMaybe<Scalars['BigInt']['input']>;
  minted_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  or?: InputMaybe<Array<InputMaybe<MarketHourData_Filter>>>;
  periodStartUnix?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_gt?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_gte?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  periodStartUnix_lt?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_lte?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_not?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalMint?: InputMaybe<Scalars['BigInt']['input']>;
  totalMint_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalMint_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalMint_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalMint_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalMint_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalMint_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalMint_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum MarketHourData_OrderBy {
  AccumulatedTotalMint = 'accumulatedTotalMint',
  Burnt = 'burnt',
  FundingRate = 'fundingRate',
  Id = 'id',
  Market = 'market',
  MarketAverageBlockTime = 'market__averageBlockTime',
  MarketCapLeverage = 'market__capLeverage',
  MarketCapNotional = 'market__capNotional',
  MarketCapPayoff = 'market__capPayoff',
  MarketCircuitBreakerMintTarget = 'market__circuitBreakerMintTarget',
  MarketCircuitBreakerWindow = 'market__circuitBreakerWindow',
  MarketCreatedAtBlockNumber = 'market__createdAtBlockNumber',
  MarketCreatedAtTimestamp = 'market__createdAtTimestamp',
  MarketDelta = 'market__delta',
  MarketDpUpperLimit = 'market__dpUpperLimit',
  MarketFeedAddress = 'market__feedAddress',
  MarketId = 'market__id',
  MarketIsShutdown = 'market__isShutdown',
  MarketK = 'market__k',
  MarketLiquidationFeeRate = 'market__liquidationFeeRate',
  MarketLmbda = 'market__lmbda',
  MarketMaintenanceMarginBurnRate = 'market__maintenanceMarginBurnRate',
  MarketMaintenanceMarginFraction = 'market__maintenanceMarginFraction',
  MarketMinCollateral = 'market__minCollateral',
  MarketNumberOfBuilds = 'market__numberOfBuilds',
  MarketNumberOfLiquidates = 'market__numberOfLiquidates',
  MarketNumberOfUnwinds = 'market__numberOfUnwinds',
  MarketOiLong = 'market__oiLong',
  MarketOiLongShares = 'market__oiLongShares',
  MarketOiShort = 'market__oiShort',
  MarketOiShortShares = 'market__oiShortShares',
  MarketPriceDriftUpperLimit = 'market__priceDriftUpperLimit',
  MarketTotalBuildFees = 'market__totalBuildFees',
  MarketTotalFees = 'market__totalFees',
  MarketTotalLiquidateFees = 'market__totalLiquidateFees',
  MarketTotalMint = 'market__totalMint',
  MarketTotalUnwindFees = 'market__totalUnwindFees',
  MarketTotalVolume = 'market__totalVolume',
  MarketTradingFeeRate = 'market__tradingFeeRate',
  Minted = 'minted',
  OiLong = 'oiLong',
  OiShort = 'oiShort',
  PeriodStartUnix = 'periodStartUnix',
  TotalMint = 'totalMint',
  Volume = 'volume'
}

export type MarketState = {
  __typename?: 'MarketState';
  ask: Scalars['BigInt']['output'];
  bid: Scalars['BigInt']['output'];
  capOi: Scalars['BigInt']['output'];
  circuitBreakerLevel: Scalars['BigInt']['output'];
  fundingRate: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  market: Market;
  mid: Scalars['BigInt']['output'];
  oiLong: Scalars['BigInt']['output'];
  oiShort: Scalars['BigInt']['output'];
  volumeAsk: Scalars['BigInt']['output'];
  volumeBid: Scalars['BigInt']['output'];
};

export type MarketState_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MarketState_Filter>>>;
  ask?: InputMaybe<Scalars['BigInt']['input']>;
  ask_gt?: InputMaybe<Scalars['BigInt']['input']>;
  ask_gte?: InputMaybe<Scalars['BigInt']['input']>;
  ask_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ask_lt?: InputMaybe<Scalars['BigInt']['input']>;
  ask_lte?: InputMaybe<Scalars['BigInt']['input']>;
  ask_not?: InputMaybe<Scalars['BigInt']['input']>;
  ask_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bid?: InputMaybe<Scalars['BigInt']['input']>;
  bid_gt?: InputMaybe<Scalars['BigInt']['input']>;
  bid_gte?: InputMaybe<Scalars['BigInt']['input']>;
  bid_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bid_lt?: InputMaybe<Scalars['BigInt']['input']>;
  bid_lte?: InputMaybe<Scalars['BigInt']['input']>;
  bid_not?: InputMaybe<Scalars['BigInt']['input']>;
  bid_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  capOi?: InputMaybe<Scalars['BigInt']['input']>;
  capOi_gt?: InputMaybe<Scalars['BigInt']['input']>;
  capOi_gte?: InputMaybe<Scalars['BigInt']['input']>;
  capOi_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  capOi_lt?: InputMaybe<Scalars['BigInt']['input']>;
  capOi_lte?: InputMaybe<Scalars['BigInt']['input']>;
  capOi_not?: InputMaybe<Scalars['BigInt']['input']>;
  capOi_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  circuitBreakerLevel?: InputMaybe<Scalars['BigInt']['input']>;
  circuitBreakerLevel_gt?: InputMaybe<Scalars['BigInt']['input']>;
  circuitBreakerLevel_gte?: InputMaybe<Scalars['BigInt']['input']>;
  circuitBreakerLevel_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  circuitBreakerLevel_lt?: InputMaybe<Scalars['BigInt']['input']>;
  circuitBreakerLevel_lte?: InputMaybe<Scalars['BigInt']['input']>;
  circuitBreakerLevel_not?: InputMaybe<Scalars['BigInt']['input']>;
  circuitBreakerLevel_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingRate?: InputMaybe<Scalars['BigInt']['input']>;
  fundingRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  fundingRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  mid?: InputMaybe<Scalars['BigInt']['input']>;
  mid_gt?: InputMaybe<Scalars['BigInt']['input']>;
  mid_gte?: InputMaybe<Scalars['BigInt']['input']>;
  mid_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mid_lt?: InputMaybe<Scalars['BigInt']['input']>;
  mid_lte?: InputMaybe<Scalars['BigInt']['input']>;
  mid_not?: InputMaybe<Scalars['BigInt']['input']>;
  mid_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  or?: InputMaybe<Array<InputMaybe<MarketState_Filter>>>;
  volumeAsk?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsk_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsk_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsk_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeAsk_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsk_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsk_not?: InputMaybe<Scalars['BigInt']['input']>;
  volumeAsk_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeBid?: InputMaybe<Scalars['BigInt']['input']>;
  volumeBid_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeBid_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeBid_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeBid_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeBid_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeBid_not?: InputMaybe<Scalars['BigInt']['input']>;
  volumeBid_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum MarketState_OrderBy {
  Ask = 'ask',
  Bid = 'bid',
  CapOi = 'capOi',
  CircuitBreakerLevel = 'circuitBreakerLevel',
  FundingRate = 'fundingRate',
  Id = 'id',
  Market = 'market',
  MarketAverageBlockTime = 'market__averageBlockTime',
  MarketCapLeverage = 'market__capLeverage',
  MarketCapNotional = 'market__capNotional',
  MarketCapPayoff = 'market__capPayoff',
  MarketCircuitBreakerMintTarget = 'market__circuitBreakerMintTarget',
  MarketCircuitBreakerWindow = 'market__circuitBreakerWindow',
  MarketCreatedAtBlockNumber = 'market__createdAtBlockNumber',
  MarketCreatedAtTimestamp = 'market__createdAtTimestamp',
  MarketDelta = 'market__delta',
  MarketDpUpperLimit = 'market__dpUpperLimit',
  MarketFeedAddress = 'market__feedAddress',
  MarketId = 'market__id',
  MarketIsShutdown = 'market__isShutdown',
  MarketK = 'market__k',
  MarketLiquidationFeeRate = 'market__liquidationFeeRate',
  MarketLmbda = 'market__lmbda',
  MarketMaintenanceMarginBurnRate = 'market__maintenanceMarginBurnRate',
  MarketMaintenanceMarginFraction = 'market__maintenanceMarginFraction',
  MarketMinCollateral = 'market__minCollateral',
  MarketNumberOfBuilds = 'market__numberOfBuilds',
  MarketNumberOfLiquidates = 'market__numberOfLiquidates',
  MarketNumberOfUnwinds = 'market__numberOfUnwinds',
  MarketOiLong = 'market__oiLong',
  MarketOiLongShares = 'market__oiLongShares',
  MarketOiShort = 'market__oiShort',
  MarketOiShortShares = 'market__oiShortShares',
  MarketPriceDriftUpperLimit = 'market__priceDriftUpperLimit',
  MarketTotalBuildFees = 'market__totalBuildFees',
  MarketTotalFees = 'market__totalFees',
  MarketTotalLiquidateFees = 'market__totalLiquidateFees',
  MarketTotalMint = 'market__totalMint',
  MarketTotalUnwindFees = 'market__totalUnwindFees',
  MarketTotalVolume = 'market__totalVolume',
  MarketTradingFeeRate = 'market__tradingFeeRate',
  Mid = 'mid',
  OiLong = 'oiLong',
  OiShort = 'oiShort',
  VolumeAsk = 'volumeAsk',
  VolumeBid = 'volumeBid'
}

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
  dpUpperLimit?: InputMaybe<Scalars['BigInt']['input']>;
  dpUpperLimit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  dpUpperLimit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  dpUpperLimit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dpUpperLimit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  dpUpperLimit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  dpUpperLimit_not?: InputMaybe<Scalars['BigInt']['input']>;
  dpUpperLimit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  marketHourData_?: InputMaybe<MarketHourData_Filter>;
  marketState_?: InputMaybe<MarketState_Filter>;
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
  oiLongShares?: InputMaybe<Scalars['BigInt']['input']>;
  oiLongShares_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oiLongShares_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oiLongShares_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oiLongShares_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oiLongShares_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oiLongShares_not?: InputMaybe<Scalars['BigInt']['input']>;
  oiLongShares_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oiLong_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oiLong_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oiLong_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oiLong_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oiLong_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oiLong_not?: InputMaybe<Scalars['BigInt']['input']>;
  oiLong_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oiShort?: InputMaybe<Scalars['BigInt']['input']>;
  oiShortShares?: InputMaybe<Scalars['BigInt']['input']>;
  oiShortShares_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oiShortShares_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oiShortShares_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oiShortShares_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oiShortShares_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oiShortShares_not?: InputMaybe<Scalars['BigInt']['input']>;
  oiShortShares_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  totalMint?: InputMaybe<Scalars['BigInt']['input']>;
  totalMint_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalMint_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalMint_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalMint_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalMint_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalMint_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalMint_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnwindFees?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnwindFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnwindFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnwindFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnwindFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnwindFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnwindFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnwindFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolume?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tradingFeeRate?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeeRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeeRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeeRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tradingFeeRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeeRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeeRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeeRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Market_OrderBy {
  AverageBlockTime = 'averageBlockTime',
  CapLeverage = 'capLeverage',
  CapNotional = 'capNotional',
  CapPayoff = 'capPayoff',
  CircuitBreakerMintTarget = 'circuitBreakerMintTarget',
  CircuitBreakerWindow = 'circuitBreakerWindow',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  CreatedAtTimestamp = 'createdAtTimestamp',
  Delta = 'delta',
  DpUpperLimit = 'dpUpperLimit',
  Factory = 'factory',
  FactoryFeeRecipient = 'factory__feeRecipient',
  FactoryId = 'factory__id',
  FactoryMarketCount = 'factory__marketCount',
  FactoryOwner = 'factory__owner',
  FactoryTotalFeesOvl = 'factory__totalFeesOVL',
  FactoryTotalValueLockedOvl = 'factory__totalValueLockedOVL',
  FactoryTotalVolumeOvl = 'factory__totalVolumeOVL',
  FactoryTxCount = 'factory__txCount',
  FeedAddress = 'feedAddress',
  Id = 'id',
  IsShutdown = 'isShutdown',
  K = 'k',
  LiquidationFeeRate = 'liquidationFeeRate',
  Lmbda = 'lmbda',
  MaintenanceMarginBurnRate = 'maintenanceMarginBurnRate',
  MaintenanceMarginFraction = 'maintenanceMarginFraction',
  MarketHourData = 'marketHourData',
  MarketState = 'marketState',
  MarketStateAsk = 'marketState__ask',
  MarketStateBid = 'marketState__bid',
  MarketStateCapOi = 'marketState__capOi',
  MarketStateCircuitBreakerLevel = 'marketState__circuitBreakerLevel',
  MarketStateFundingRate = 'marketState__fundingRate',
  MarketStateId = 'marketState__id',
  MarketStateMid = 'marketState__mid',
  MarketStateOiLong = 'marketState__oiLong',
  MarketStateOiShort = 'marketState__oiShort',
  MarketStateVolumeAsk = 'marketState__volumeAsk',
  MarketStateVolumeBid = 'marketState__volumeBid',
  MinCollateral = 'minCollateral',
  NumberOfBuilds = 'numberOfBuilds',
  NumberOfLiquidates = 'numberOfLiquidates',
  NumberOfUnwinds = 'numberOfUnwinds',
  OiLong = 'oiLong',
  OiLongShares = 'oiLongShares',
  OiShort = 'oiShort',
  OiShortShares = 'oiShortShares',
  Positions = 'positions',
  PriceDriftUpperLimit = 'priceDriftUpperLimit',
  TotalBuildFees = 'totalBuildFees',
  TotalFees = 'totalFees',
  TotalLiquidateFees = 'totalLiquidateFees',
  TotalMint = 'totalMint',
  TotalUnwindFees = 'totalUnwindFees',
  TotalVolume = 'totalVolume',
  TradingFeeRate = 'tradingFeeRate'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
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
  router?: Maybe<Router>;
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
  router?: InputMaybe<Scalars['String']['input']>;
  router_?: InputMaybe<Router_Filter>;
  router_contains?: InputMaybe<Scalars['String']['input']>;
  router_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  router_ends_with?: InputMaybe<Scalars['String']['input']>;
  router_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  router_gt?: InputMaybe<Scalars['String']['input']>;
  router_gte?: InputMaybe<Scalars['String']['input']>;
  router_in?: InputMaybe<Array<Scalars['String']['input']>>;
  router_lt?: InputMaybe<Scalars['String']['input']>;
  router_lte?: InputMaybe<Scalars['String']['input']>;
  router_not?: InputMaybe<Scalars['String']['input']>;
  router_not_contains?: InputMaybe<Scalars['String']['input']>;
  router_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  router_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  router_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  router_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  router_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  router_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  router_starts_with?: InputMaybe<Scalars['String']['input']>;
  router_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unwinds_?: InputMaybe<Unwind_Filter>;
};

export enum Position_OrderBy {
  Builds = 'builds',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  CreatedAtTimestamp = 'createdAtTimestamp',
  CurrentDebt = 'currentDebt',
  CurrentOi = 'currentOi',
  EntryPrice = 'entryPrice',
  FractionUnwound = 'fractionUnwound',
  Id = 'id',
  InitialCollateral = 'initialCollateral',
  InitialDebt = 'initialDebt',
  InitialNotional = 'initialNotional',
  InitialOi = 'initialOi',
  IsLiquidated = 'isLiquidated',
  IsLong = 'isLong',
  Leverage = 'leverage',
  Liquidates = 'liquidates',
  Market = 'market',
  MarketAverageBlockTime = 'market__averageBlockTime',
  MarketCapLeverage = 'market__capLeverage',
  MarketCapNotional = 'market__capNotional',
  MarketCapPayoff = 'market__capPayoff',
  MarketCircuitBreakerMintTarget = 'market__circuitBreakerMintTarget',
  MarketCircuitBreakerWindow = 'market__circuitBreakerWindow',
  MarketCreatedAtBlockNumber = 'market__createdAtBlockNumber',
  MarketCreatedAtTimestamp = 'market__createdAtTimestamp',
  MarketDelta = 'market__delta',
  MarketDpUpperLimit = 'market__dpUpperLimit',
  MarketFeedAddress = 'market__feedAddress',
  MarketId = 'market__id',
  MarketIsShutdown = 'market__isShutdown',
  MarketK = 'market__k',
  MarketLiquidationFeeRate = 'market__liquidationFeeRate',
  MarketLmbda = 'market__lmbda',
  MarketMaintenanceMarginBurnRate = 'market__maintenanceMarginBurnRate',
  MarketMaintenanceMarginFraction = 'market__maintenanceMarginFraction',
  MarketMinCollateral = 'market__minCollateral',
  MarketNumberOfBuilds = 'market__numberOfBuilds',
  MarketNumberOfLiquidates = 'market__numberOfLiquidates',
  MarketNumberOfUnwinds = 'market__numberOfUnwinds',
  MarketOiLong = 'market__oiLong',
  MarketOiLongShares = 'market__oiLongShares',
  MarketOiShort = 'market__oiShort',
  MarketOiShortShares = 'market__oiShortShares',
  MarketPriceDriftUpperLimit = 'market__priceDriftUpperLimit',
  MarketTotalBuildFees = 'market__totalBuildFees',
  MarketTotalFees = 'market__totalFees',
  MarketTotalLiquidateFees = 'market__totalLiquidateFees',
  MarketTotalMint = 'market__totalMint',
  MarketTotalUnwindFees = 'market__totalUnwindFees',
  MarketTotalVolume = 'market__totalVolume',
  MarketTradingFeeRate = 'market__tradingFeeRate',
  Mint = 'mint',
  NumberOfUniwnds = 'numberOfUniwnds',
  Owner = 'owner',
  OwnerId = 'owner__id',
  OwnerNumberOfLiquidatedPositions = 'owner__numberOfLiquidatedPositions',
  OwnerNumberOfOpenPositions = 'owner__numberOfOpenPositions',
  OwnerNumberOfUnwinds = 'owner__numberOfUnwinds',
  OwnerOvlVolumeTraded = 'owner__ovlVolumeTraded',
  OwnerPlanckCatBalance = 'owner__planckCatBalance',
  OwnerRealizedPnl = 'owner__realizedPnl',
  PositionId = 'positionId',
  Router = 'router',
  RouterId = 'router__id',
  Unwinds = 'unwinds'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  analytics?: Maybe<Analytics>;
  analyticsHourData?: Maybe<AnalyticsHourData>;
  analyticsHourDatas: Array<AnalyticsHourData>;
  analytics_collection: Array<Analytics>;
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
  erc1155Token?: Maybe<Erc1155Token>;
  erc1155TokenBalance?: Maybe<Erc1155TokenBalance>;
  erc1155TokenBalances: Array<Erc1155TokenBalance>;
  erc1155Tokens: Array<Erc1155Token>;
  erc1155Transfer?: Maybe<Erc1155Transfer>;
  erc1155Transfers: Array<Erc1155Transfer>;
  factories: Array<Factory>;
  factory?: Maybe<Factory>;
  liquidate?: Maybe<Liquidate>;
  liquidates: Array<Liquidate>;
  market?: Maybe<Market>;
  marketHourData?: Maybe<MarketHourData>;
  marketHourDatas: Array<MarketHourData>;
  marketState?: Maybe<MarketState>;
  marketStates: Array<MarketState>;
  markets: Array<Market>;
  position?: Maybe<Position>;
  positions: Array<Position>;
  referralPosition?: Maybe<ReferralPosition>;
  referralPositions: Array<ReferralPosition>;
  referralProgram?: Maybe<ReferralProgram>;
  referralPrograms: Array<ReferralProgram>;
  rewardsClaimed?: Maybe<RewardsClaimed>;
  rewardsClaimeds: Array<RewardsClaimed>;
  router?: Maybe<Router>;
  routerParams?: Maybe<RouterParams>;
  routerParams_collection: Array<RouterParams>;
  routers: Array<Router>;
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
  totalSupplyHourData?: Maybe<TotalSupplyHourData>;
  totalSupplyHourDatas: Array<TotalSupplyHourData>;
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


export type QueryAnalyticsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAnalyticsHourDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAnalyticsHourDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AnalyticsHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AnalyticsHourData_Filter>;
};


export type QueryAnalytics_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Analytics_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics_Filter>;
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


export type QueryErc1155TokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc1155TokenBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc1155TokenBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155TokenBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155TokenBalance_Filter>;
};


export type QueryErc1155TokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Token_Filter>;
};


export type QueryErc1155TransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc1155TransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Transfer_Filter>;
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


export type QueryMarketHourDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketHourDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketHourData_Filter>;
};


export type QueryMarketStateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketStatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketState_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketState_Filter>;
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


export type QueryRouterArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRouterParamsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRouterParams_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RouterParams_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RouterParams_Filter>;
};


export type QueryRoutersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Router_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Router_Filter>;
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


export type QueryTotalSupplyHourDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTotalSupplyHourDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TotalSupplyHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TotalSupplyHourData_Filter>;
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
  accountsReferred: Scalars['Int']['output'];
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
  accountsReferred?: InputMaybe<Scalars['Int']['input']>;
  accountsReferred_gt?: InputMaybe<Scalars['Int']['input']>;
  accountsReferred_gte?: InputMaybe<Scalars['Int']['input']>;
  accountsReferred_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  accountsReferred_lt?: InputMaybe<Scalars['Int']['input']>;
  accountsReferred_lte?: InputMaybe<Scalars['Int']['input']>;
  accountsReferred_not?: InputMaybe<Scalars['Int']['input']>;
  accountsReferred_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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

export enum ReferralPosition_OrderBy {
  AccountsReferred = 'accountsReferred',
  AffiliatedTo = 'affiliatedTo',
  AffiliatedToId = 'affiliatedTo__id',
  AffiliatedToNumberOfLiquidatedPositions = 'affiliatedTo__numberOfLiquidatedPositions',
  AffiliatedToNumberOfOpenPositions = 'affiliatedTo__numberOfOpenPositions',
  AffiliatedToNumberOfUnwinds = 'affiliatedTo__numberOfUnwinds',
  AffiliatedToOvlVolumeTraded = 'affiliatedTo__ovlVolumeTraded',
  AffiliatedToPlanckCatBalance = 'affiliatedTo__planckCatBalance',
  AffiliatedToRealizedPnl = 'affiliatedTo__realizedPnl',
  Id = 'id',
  Owner = 'owner',
  OwnerId = 'owner__id',
  OwnerNumberOfLiquidatedPositions = 'owner__numberOfLiquidatedPositions',
  OwnerNumberOfOpenPositions = 'owner__numberOfOpenPositions',
  OwnerNumberOfUnwinds = 'owner__numberOfUnwinds',
  OwnerOvlVolumeTraded = 'owner__ovlVolumeTraded',
  OwnerPlanckCatBalance = 'owner__planckCatBalance',
  OwnerRealizedPnl = 'owner__realizedPnl',
  ReferralProgram = 'referralProgram',
  ReferralProgramCreatedAtBlockNumber = 'referralProgram__createdAtBlockNumber',
  ReferralProgramCreatedAtTimestamp = 'referralProgram__createdAtTimestamp',
  ReferralProgramId = 'referralProgram__id',
  ReferralProgramRewardToken = 'referralProgram__rewardToken',
  ReferralProgramTotalAirdropped = 'referralProgram__totalAirdropped',
  ReferralProgramTotalRewards = 'referralProgram__totalRewards',
  Tier = 'tier',
  TotalAffiliateComission = 'totalAffiliateComission',
  TotalAirdroppedAmount = 'totalAirdroppedAmount',
  TotalRewardsPending = 'totalRewardsPending',
  TotalTraderDiscount = 'totalTraderDiscount'
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

export enum ReferralProgram_OrderBy {
  AffiliateComission = 'affiliateComission',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  CreatedAtTimestamp = 'createdAtTimestamp',
  Id = 'id',
  LatestUpdateTransaction = 'latestUpdateTransaction',
  LatestUpdateTransactionBlockNumber = 'latestUpdateTransaction__blockNumber',
  LatestUpdateTransactionGasLimit = 'latestUpdateTransaction__gasLimit',
  LatestUpdateTransactionGasPrice = 'latestUpdateTransaction__gasPrice',
  LatestUpdateTransactionId = 'latestUpdateTransaction__id',
  LatestUpdateTransactionTimestamp = 'latestUpdateTransaction__timestamp',
  ReferralPositions = 'referralPositions',
  RewardToken = 'rewardToken',
  TotalAirdropped = 'totalAirdropped',
  TotalRewards = 'totalRewards',
  TraderDiscount = 'traderDiscount'
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

export enum RewardsClaimed_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  RewardAmount = 'rewardAmount',
  Staker = 'staker',
  StakingPosition = 'stakingPosition',
  StakingPositionId = 'stakingPosition__id',
  StakingPositionStakedBalance = 'stakingPosition__stakedBalance',
  StakingPositionTotalRewardsClaimed = 'stakingPosition__totalRewardsClaimed',
  TransactionHash = 'transactionHash'
}

export type Router = {
  __typename?: 'Router';
  id: Scalars['Bytes']['output'];
};

export type RouterParams = {
  __typename?: 'RouterParams';
  brokerId: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  performer: Scalars['Bytes']['output'];
  router: Router;
  transaction: Transaction;
};

export type RouterParams_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RouterParams_Filter>>>;
  brokerId?: InputMaybe<Scalars['BigInt']['input']>;
  brokerId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  brokerId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  brokerId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  brokerId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  brokerId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  brokerId_not?: InputMaybe<Scalars['BigInt']['input']>;
  brokerId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  or?: InputMaybe<Array<InputMaybe<RouterParams_Filter>>>;
  performer?: InputMaybe<Scalars['Bytes']['input']>;
  performer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  performer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  performer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  performer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  performer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  performer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  performer_not?: InputMaybe<Scalars['Bytes']['input']>;
  performer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  performer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  router?: InputMaybe<Scalars['String']['input']>;
  router_?: InputMaybe<Router_Filter>;
  router_contains?: InputMaybe<Scalars['String']['input']>;
  router_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  router_ends_with?: InputMaybe<Scalars['String']['input']>;
  router_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  router_gt?: InputMaybe<Scalars['String']['input']>;
  router_gte?: InputMaybe<Scalars['String']['input']>;
  router_in?: InputMaybe<Array<Scalars['String']['input']>>;
  router_lt?: InputMaybe<Scalars['String']['input']>;
  router_lte?: InputMaybe<Scalars['String']['input']>;
  router_not?: InputMaybe<Scalars['String']['input']>;
  router_not_contains?: InputMaybe<Scalars['String']['input']>;
  router_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  router_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  router_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  router_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  router_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  router_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  router_starts_with?: InputMaybe<Scalars['String']['input']>;
  router_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
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

export enum RouterParams_OrderBy {
  BrokerId = 'brokerId',
  Id = 'id',
  Performer = 'performer',
  Router = 'router',
  RouterId = 'router__id',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionGasLimit = 'transaction__gasLimit',
  TransactionGasPrice = 'transaction__gasPrice',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

export type Router_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Router_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<Router_Filter>>>;
};

export enum Router_OrderBy {
  Id = 'id'
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

export enum StakingPosition_OrderBy {
  Id = 'id',
  Owner = 'owner',
  OwnerId = 'owner__id',
  OwnerNumberOfLiquidatedPositions = 'owner__numberOfLiquidatedPositions',
  OwnerNumberOfOpenPositions = 'owner__numberOfOpenPositions',
  OwnerNumberOfUnwinds = 'owner__numberOfUnwinds',
  OwnerOvlVolumeTraded = 'owner__ovlVolumeTraded',
  OwnerPlanckCatBalance = 'owner__planckCatBalance',
  OwnerRealizedPnl = 'owner__realizedPnl',
  Pool = 'pool',
  PoolId = 'pool__id',
  PoolRewardRatioDenominator = 'pool__rewardRatioDenominator',
  PoolRewardRatioNumerator = 'pool__rewardRatioNumerator',
  PoolRewardToken = 'pool__rewardToken',
  PoolRewardsBalance = 'pool__rewardsBalance',
  PoolStakedBalance = 'pool__stakedBalance',
  PoolStakingToken = 'pool__stakingToken',
  PoolTimeUnit = 'pool__timeUnit',
  PoolTotalRewardsClaimed = 'pool__totalRewardsClaimed',
  PoolTotalStaked = 'pool__totalStaked',
  RewardsClaimed = 'rewardsClaimed',
  StakedBalance = 'stakedBalance',
  TokensStaked = 'tokensStaked',
  TokensWithdrawn = 'tokensWithdrawn',
  TotalRewardsClaimed = 'totalRewardsClaimed'
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

export enum Staking_OrderBy {
  Id = 'id',
  RewardRatioDenominator = 'rewardRatioDenominator',
  RewardRatioNumerator = 'rewardRatioNumerator',
  RewardToken = 'rewardToken',
  RewardsBalance = 'rewardsBalance',
  StakedBalance = 'stakedBalance',
  StakingPositions = 'stakingPositions',
  StakingToken = 'stakingToken',
  TimeUnit = 'timeUnit',
  TotalRewardsClaimed = 'totalRewardsClaimed',
  TotalStaked = 'totalStaked'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  analytics?: Maybe<Analytics>;
  analyticsHourData?: Maybe<AnalyticsHourData>;
  analyticsHourDatas: Array<AnalyticsHourData>;
  analytics_collection: Array<Analytics>;
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
  erc1155Token?: Maybe<Erc1155Token>;
  erc1155TokenBalance?: Maybe<Erc1155TokenBalance>;
  erc1155TokenBalances: Array<Erc1155TokenBalance>;
  erc1155Tokens: Array<Erc1155Token>;
  erc1155Transfer?: Maybe<Erc1155Transfer>;
  erc1155Transfers: Array<Erc1155Transfer>;
  factories: Array<Factory>;
  factory?: Maybe<Factory>;
  liquidate?: Maybe<Liquidate>;
  liquidates: Array<Liquidate>;
  market?: Maybe<Market>;
  marketHourData?: Maybe<MarketHourData>;
  marketHourDatas: Array<MarketHourData>;
  marketState?: Maybe<MarketState>;
  marketStates: Array<MarketState>;
  markets: Array<Market>;
  position?: Maybe<Position>;
  positions: Array<Position>;
  referralPosition?: Maybe<ReferralPosition>;
  referralPositions: Array<ReferralPosition>;
  referralProgram?: Maybe<ReferralProgram>;
  referralPrograms: Array<ReferralProgram>;
  rewardsClaimed?: Maybe<RewardsClaimed>;
  rewardsClaimeds: Array<RewardsClaimed>;
  router?: Maybe<Router>;
  routerParams?: Maybe<RouterParams>;
  routerParams_collection: Array<RouterParams>;
  routers: Array<Router>;
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
  totalSupplyHourData?: Maybe<TotalSupplyHourData>;
  totalSupplyHourDatas: Array<TotalSupplyHourData>;
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


export type SubscriptionAnalyticsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAnalyticsHourDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAnalyticsHourDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AnalyticsHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AnalyticsHourData_Filter>;
};


export type SubscriptionAnalytics_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Analytics_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Analytics_Filter>;
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


export type SubscriptionErc1155TokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc1155TokenBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc1155TokenBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155TokenBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155TokenBalance_Filter>;
};


export type SubscriptionErc1155TokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Token_Filter>;
};


export type SubscriptionErc1155TransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc1155TransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Transfer_Filter>;
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


export type SubscriptionMarketHourDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketHourDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketHourData_Filter>;
};


export type SubscriptionMarketStateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketStatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketState_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketState_Filter>;
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


export type SubscriptionRouterArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRouterParamsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRouterParams_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RouterParams_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RouterParams_Filter>;
};


export type SubscriptionRoutersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Router_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Router_Filter>;
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


export type SubscriptionTotalSupplyHourDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTotalSupplyHourDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TotalSupplyHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TotalSupplyHourData_Filter>;
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

export enum TokenPosition_OrderBy {
  Balance = 'balance',
  Id = 'id',
  Owner = 'owner',
  OwnerId = 'owner__id',
  OwnerNumberOfLiquidatedPositions = 'owner__numberOfLiquidatedPositions',
  OwnerNumberOfOpenPositions = 'owner__numberOfOpenPositions',
  OwnerNumberOfUnwinds = 'owner__numberOfUnwinds',
  OwnerOvlVolumeTraded = 'owner__ovlVolumeTraded',
  OwnerPlanckCatBalance = 'owner__planckCatBalance',
  OwnerRealizedPnl = 'owner__realizedPnl',
  Token = 'token',
  TokenId = 'token__id',
  TokenName = 'token__name',
  TokenSymbol = 'token__symbol',
  TokenTotalSupply = 'token__totalSupply'
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

export enum TokenTransfer_OrderBy {
  Amount = 'amount',
  From = 'from',
  Id = 'id',
  To = 'to',
  Token = 'token',
  TokenId = 'token__id',
  TokenName = 'token__name',
  TokenSymbol = 'token__symbol',
  TokenTotalSupply = 'token__totalSupply',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionGasLimit = 'transaction__gasLimit',
  TransactionGasPrice = 'transaction__gasPrice',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
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

export enum TokensStaked_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Staker = 'staker',
  StakingPosition = 'stakingPosition',
  StakingPositionId = 'stakingPosition__id',
  StakingPositionStakedBalance = 'stakingPosition__stakedBalance',
  StakingPositionTotalRewardsClaimed = 'stakingPosition__totalRewardsClaimed',
  TransactionHash = 'transactionHash'
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

export enum TokensWithdrawn_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Staker = 'staker',
  StakingPosition = 'stakingPosition',
  StakingPositionId = 'stakingPosition__id',
  StakingPositionStakedBalance = 'stakingPosition__stakedBalance',
  StakingPositionTotalRewardsClaimed = 'stakingPosition__totalRewardsClaimed',
  TransactionHash = 'transactionHash'
}

export type TotalSupplyHourData = {
  __typename?: 'TotalSupplyHourData';
  burnt: Scalars['BigInt']['output'];
  close: Scalars['BigInt']['output'];
  high: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  low: Scalars['BigInt']['output'];
  minted: Scalars['BigInt']['output'];
  open: Scalars['BigInt']['output'];
  periodStartUnix: Scalars['Int']['output'];
  token: Erc20Token;
};

export type TotalSupplyHourData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TotalSupplyHourData_Filter>>>;
  burnt?: InputMaybe<Scalars['BigInt']['input']>;
  burnt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  burnt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  burnt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  burnt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  burnt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  burnt_not?: InputMaybe<Scalars['BigInt']['input']>;
  burnt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  close?: InputMaybe<Scalars['BigInt']['input']>;
  close_gt?: InputMaybe<Scalars['BigInt']['input']>;
  close_gte?: InputMaybe<Scalars['BigInt']['input']>;
  close_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  close_lt?: InputMaybe<Scalars['BigInt']['input']>;
  close_lte?: InputMaybe<Scalars['BigInt']['input']>;
  close_not?: InputMaybe<Scalars['BigInt']['input']>;
  close_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  high?: InputMaybe<Scalars['BigInt']['input']>;
  high_gt?: InputMaybe<Scalars['BigInt']['input']>;
  high_gte?: InputMaybe<Scalars['BigInt']['input']>;
  high_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  high_lt?: InputMaybe<Scalars['BigInt']['input']>;
  high_lte?: InputMaybe<Scalars['BigInt']['input']>;
  high_not?: InputMaybe<Scalars['BigInt']['input']>;
  high_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  low?: InputMaybe<Scalars['BigInt']['input']>;
  low_gt?: InputMaybe<Scalars['BigInt']['input']>;
  low_gte?: InputMaybe<Scalars['BigInt']['input']>;
  low_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  low_lt?: InputMaybe<Scalars['BigInt']['input']>;
  low_lte?: InputMaybe<Scalars['BigInt']['input']>;
  low_not?: InputMaybe<Scalars['BigInt']['input']>;
  low_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minted?: InputMaybe<Scalars['BigInt']['input']>;
  minted_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minted_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minted_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minted_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minted_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minted_not?: InputMaybe<Scalars['BigInt']['input']>;
  minted_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  open?: InputMaybe<Scalars['BigInt']['input']>;
  open_gt?: InputMaybe<Scalars['BigInt']['input']>;
  open_gte?: InputMaybe<Scalars['BigInt']['input']>;
  open_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  open_lt?: InputMaybe<Scalars['BigInt']['input']>;
  open_lte?: InputMaybe<Scalars['BigInt']['input']>;
  open_not?: InputMaybe<Scalars['BigInt']['input']>;
  open_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TotalSupplyHourData_Filter>>>;
  periodStartUnix?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_gt?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_gte?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  periodStartUnix_lt?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_lte?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_not?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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

export enum TotalSupplyHourData_OrderBy {
  Burnt = 'burnt',
  Close = 'close',
  High = 'high',
  Id = 'id',
  Low = 'low',
  Minted = 'minted',
  Open = 'open',
  PeriodStartUnix = 'periodStartUnix',
  Token = 'token',
  TokenId = 'token__id',
  TokenName = 'token__name',
  TokenSymbol = 'token__symbol',
  TokenTotalSupply = 'token__totalSupply'
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

export enum TradingMiningEpochVolume_OrderBy {
  Epoch = 'epoch',
  Id = 'id',
  Trader = 'trader',
  TraderId = 'trader__id',
  TraderNumberOfLiquidatedPositions = 'trader__numberOfLiquidatedPositions',
  TraderNumberOfOpenPositions = 'trader__numberOfOpenPositions',
  TraderNumberOfUnwinds = 'trader__numberOfUnwinds',
  TraderOvlVolumeTraded = 'trader__ovlVolumeTraded',
  TraderPlanckCatBalance = 'trader__planckCatBalance',
  TraderRealizedPnl = 'trader__realizedPnl',
  Volume = 'volume'
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

export enum TradingMiningEpoch_OrderBy {
  Epoch = 'epoch',
  Id = 'id',
  Token1Percentage = 'token1Percentage',
  TotalRewards = 'totalRewards',
  TotalVolume = 'totalVolume'
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

export enum TradingMining_OrderBy {
  EpochDuration = 'epochDuration',
  Id = 'id',
  MaxRewardPerEpochPerAddress = 'maxRewardPerEpochPerAddress',
  PcdHolderBonusPercentage = 'pcdHolderBonusPercentage',
  RewardToken1 = 'rewardToken1',
  RewardToken2 = 'rewardToken2',
  StartTime = 'startTime',
  Token1Percentage = 'token1Percentage',
  TotalRewards = 'totalRewards'
}

export type Transaction = {
  __typename?: 'Transaction';
  blockNumber: Scalars['BigInt']['output'];
  builds: Array<Build>;
  gasLimit: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
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

export enum Transaction_OrderBy {
  BlockNumber = 'blockNumber',
  Builds = 'builds',
  GasLimit = 'gasLimit',
  GasPrice = 'gasPrice',
  Id = 'id',
  Liquidates = 'liquidates',
  Timestamp = 'timestamp',
  TokenTransfers = 'tokenTransfers',
  Unwinds = 'unwinds'
}

export type Unwind = {
  __typename?: 'Unwind';
  feeAmount: Scalars['BigInt']['output'];
  fraction: Scalars['BigInt']['output'];
  fractionOfPosition: Scalars['BigInt']['output'];
  fundingPayment: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  mint: Scalars['BigInt']['output'];
  oiUnwound: Scalars['BigInt']['output'];
  owner: Account;
  pnl: Scalars['BigInt']['output'];
  position: Position;
  price: Scalars['BigInt']['output'];
  routerParams?: Maybe<RouterParams>;
  size: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
  transferAmount: Scalars['BigInt']['output'];
  unwindNumber: Scalars['BigInt']['output'];
  volume: Scalars['BigInt']['output'];
};

export type Unwind_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Unwind_Filter>>>;
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
  fundingPayment?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingPayment_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_not?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  mint?: InputMaybe<Scalars['BigInt']['input']>;
  mint_gt?: InputMaybe<Scalars['BigInt']['input']>;
  mint_gte?: InputMaybe<Scalars['BigInt']['input']>;
  mint_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mint_lt?: InputMaybe<Scalars['BigInt']['input']>;
  mint_lte?: InputMaybe<Scalars['BigInt']['input']>;
  mint_not?: InputMaybe<Scalars['BigInt']['input']>;
  mint_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oiUnwound?: InputMaybe<Scalars['BigInt']['input']>;
  oiUnwound_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oiUnwound_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oiUnwound_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oiUnwound_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oiUnwound_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oiUnwound_not?: InputMaybe<Scalars['BigInt']['input']>;
  oiUnwound_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  routerParams?: InputMaybe<Scalars['String']['input']>;
  routerParams_?: InputMaybe<RouterParams_Filter>;
  routerParams_contains?: InputMaybe<Scalars['String']['input']>;
  routerParams_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  routerParams_ends_with?: InputMaybe<Scalars['String']['input']>;
  routerParams_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  routerParams_gt?: InputMaybe<Scalars['String']['input']>;
  routerParams_gte?: InputMaybe<Scalars['String']['input']>;
  routerParams_in?: InputMaybe<Array<Scalars['String']['input']>>;
  routerParams_lt?: InputMaybe<Scalars['String']['input']>;
  routerParams_lte?: InputMaybe<Scalars['String']['input']>;
  routerParams_not?: InputMaybe<Scalars['String']['input']>;
  routerParams_not_contains?: InputMaybe<Scalars['String']['input']>;
  routerParams_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  routerParams_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  routerParams_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  routerParams_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  routerParams_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  routerParams_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  routerParams_starts_with?: InputMaybe<Scalars['String']['input']>;
  routerParams_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
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
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Unwind_OrderBy {
  FeeAmount = 'feeAmount',
  Fraction = 'fraction',
  FractionOfPosition = 'fractionOfPosition',
  FundingPayment = 'fundingPayment',
  Id = 'id',
  Mint = 'mint',
  OiUnwound = 'oiUnwound',
  Owner = 'owner',
  OwnerId = 'owner__id',
  OwnerNumberOfLiquidatedPositions = 'owner__numberOfLiquidatedPositions',
  OwnerNumberOfOpenPositions = 'owner__numberOfOpenPositions',
  OwnerNumberOfUnwinds = 'owner__numberOfUnwinds',
  OwnerOvlVolumeTraded = 'owner__ovlVolumeTraded',
  OwnerPlanckCatBalance = 'owner__planckCatBalance',
  OwnerRealizedPnl = 'owner__realizedPnl',
  Pnl = 'pnl',
  Position = 'position',
  PositionCreatedAtBlockNumber = 'position__createdAtBlockNumber',
  PositionCreatedAtTimestamp = 'position__createdAtTimestamp',
  PositionCurrentDebt = 'position__currentDebt',
  PositionCurrentOi = 'position__currentOi',
  PositionEntryPrice = 'position__entryPrice',
  PositionFractionUnwound = 'position__fractionUnwound',
  PositionId = 'position__id',
  PositionInitialCollateral = 'position__initialCollateral',
  PositionInitialDebt = 'position__initialDebt',
  PositionInitialNotional = 'position__initialNotional',
  PositionInitialOi = 'position__initialOi',
  PositionIsLiquidated = 'position__isLiquidated',
  PositionIsLong = 'position__isLong',
  PositionLeverage = 'position__leverage',
  PositionMint = 'position__mint',
  PositionNumberOfUniwnds = 'position__numberOfUniwnds',
  PositionPositionId = 'position__positionId',
  Price = 'price',
  RouterParams = 'routerParams',
  RouterParamsBrokerId = 'routerParams__brokerId',
  RouterParamsId = 'routerParams__id',
  RouterParamsPerformer = 'routerParams__performer',
  Size = 'size',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionGasLimit = 'transaction__gasLimit',
  TransactionGasPrice = 'transaction__gasPrice',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp',
  TransferAmount = 'transferAmount',
  UnwindNumber = 'unwindNumber',
  Volume = 'volume'
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

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type OpenPositionsQueryVariables = Exact<{
  account: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type OpenPositionsQuery = { __typename?: 'Query', account?: { __typename?: 'Account', positions: Array<{ __typename?: 'Position', fractionUnwound: any, id: string, createdAtTimestamp: any, currentOi: any, entryPrice: any, initialCollateral: any, isLiquidated: boolean, isLong: boolean, leverage: any, numberOfUniwnds: any, positionId: string, market: { __typename?: 'Market', feedAddress: string, id: any, isShutdown: boolean } }> } | null };

export type UnwindsQueryVariables = Exact<{
  account: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UnwindsQuery = { __typename?: 'Query', account?: { __typename?: 'Account', unwinds: Array<{ __typename?: 'Unwind', fraction: any, fractionOfPosition: any, id: string, mint: any, pnl: any, price: any, size: any, timestamp: any, transferAmount: any, unwindNumber: any, position: { __typename?: 'Position', createdAtTimestamp: any, currentOi: any, entryPrice: any, id: string, initialCollateral: any, isLong: boolean, leverage: any, numberOfUniwnds: any, positionId: string, market: { __typename?: 'Market', feedAddress: string, id: any } } }> } | null };

export type ActiveMarketsQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveMarketsQuery = { __typename?: 'Query', markets: Array<{ __typename?: 'Market', id: any, feedAddress: string, k: any, lmbda: any, delta: any, capPayoff: any, capNotional: any, capLeverage: any, circuitBreakerWindow: any, circuitBreakerMintTarget: any, maintenanceMarginFraction: any, maintenanceMarginBurnRate: any, liquidationFeeRate: any, tradingFeeRate: any, minCollateral: any, priceDriftUpperLimit: any, averageBlockTime: any, isShutdown: boolean, factory: { __typename?: 'Factory', id: any } }> };

export type LiquidatedPositionsQueryVariables = Exact<{
  account: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type LiquidatedPositionsQuery = { __typename?: 'Query', account?: { __typename?: 'Account', liquidates: Array<{ __typename?: 'Liquidate', id: string, mint: any, price: any, timestamp: any, size: any, position: { __typename?: 'Position', createdAtTimestamp: any, currentOi: any, entryPrice: any, fractionUnwound: any, id: string, initialCollateral: any, isLong: boolean, leverage: any, market: { __typename?: 'Market', feedAddress: string, id: any } } }> } | null };

export type NumberOfPositionsQueryVariables = Exact<{
  account: Scalars['ID']['input'];
}>;


export type NumberOfPositionsQuery = { __typename?: 'Query', account?: { __typename?: 'Account', numberOfLiquidatedPositions: any, numberOfOpenPositions: any, numberOfUnwinds: any, realizedPnl: any } | null };

export type QueryPositionQueryVariables = Exact<{
  account: Scalars['ID']['input'];
  marketPositionId: Scalars['ID']['input'];
}>;


export type QueryPositionQuery = { __typename?: 'Query', account?: { __typename?: 'Account', positions: Array<{ __typename?: 'Position', id: string, positionId: string, initialOi: any, initialDebt: any, initialCollateral: any, initialNotional: any, leverage: any, isLong: boolean, entryPrice: any, isLiquidated: boolean, currentOi: any, currentDebt: any, mint: any, createdAtTimestamp: any, createdAtBlockNumber: any, numberOfUniwnds: any, fractionUnwound: any, market: { __typename?: 'Market', id: any, feedAddress: string, isShutdown: boolean }, builds: Array<{ __typename?: 'Build', id: string, price: any, timestamp: any }>, liquidates: Array<{ __typename?: 'Liquidate', id: string, mint: any, price: any, timestamp: any }>, unwinds: Array<{ __typename?: 'Unwind', fraction: any, id: string, mint: any, timestamp: any, price: any, unwindNumber: any, transferAmount: any, pnl: any, size: any }> }> } | null };

export type TotalSupplyHistoryQueryVariables = Exact<{
  since: Scalars['Int']['input'];
}>;


export type TotalSupplyHistoryQuery = { __typename?: 'Query', totalSupplyHourDatas: Array<{ __typename?: 'TotalSupplyHourData', periodStartUnix: number, close: any, open: any }> };

export type LastBlockQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type LastBlockQueryQuery = { __typename?: 'Query', _meta?: { __typename?: '_Meta_', block: { __typename?: '_Block_', number: number } } | null };
