export interface IInitialState {
  data: {
    total: number;
    total24hVolume: string;
    totalCoins: number;
    totalExchanges: number;
    totalMarketCap: string;
    totalMarkets: number;
  };
  loadingStats: boolean;
}
