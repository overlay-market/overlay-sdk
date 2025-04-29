export interface IChainInfo {
  chainId: number;
  chainName: string;
  deploymentAddress: string;
  explorerUrl: string;
  disabled: boolean;
}

export interface IMarketDetails {
  _id: string;
  marketId: string;
  marketName: string;
  logo: string;
  currency: string;
  descriptionText?: string;
  indexesConstruction?: string[];
  fullLogo?: string;
  oracleLogo?: string;
  proposedBy?: {
    name?: string;
    url?: string;
  };
  approved?: {
    name?: string;
    url?: string;
  };
  sources?: Array<{
    name?: string;
    url?: string;
  }>;
  additionalInfo?: {
    name?: string;
    url?: string;
  };
  buttons?: {
    long: string;
    short: string;
  };
  chains: IChainInfo[];
}

export interface MarketDetails {
  id: string;
  marketName: string;
  disabled: boolean;
  logo: string;
  currency: string;
  descriptionText?: string;
  fullLogo?: string;
  oracleLogo?: string;
  buttons?: {
    long: string;
    short: string;
  };
}