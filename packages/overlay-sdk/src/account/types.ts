export type IntervalType = '1D' | '1W' | '1M' | '6M' | '1Y'

export type OverviewDataByPeriod = {
  realizedPnl: number;
  date: Date;
}[]

export type OverviewData = {
  numberOfOpenPositions: number;
  realizedPnl: string | number;
  realizedPnlUsdt: string;
  realizedPnlOvl: string;
  totalValueLocked: string;
  unrealizedPnL: string;
  lockedPlusUnrealized: string;
  dataByPeriod: OverviewDataByPeriod;
} 