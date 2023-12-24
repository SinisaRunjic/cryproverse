export interface IInitialState {
 data: coin[];
 loadingAllCoins: boolean;
}

interface coin {
 uuid: string;
 price: string;
 marketCap: string;
 rank: number;
 symbol: string;
 name: string;
 iconUrl: string;
 change: string;
}
