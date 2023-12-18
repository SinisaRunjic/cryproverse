export const getAllCoins = {
  status: "success",
  data: {
    stats: {},
    coins: [
      {
        uuid: "Qwsogvtv82FCd",
        symbol: "BTC",
        name: "Bitcoin",
        color: "#f7931A",
        iconUrl: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
        marketCap: "820939172745",
        price: "41943.59526187647",
        listedAt: 1330214400,
        tier: 1,
        change: "-0.51",
        rank: 1,
        sparkline: [],
        lowVolume: false,
        coinrankingUrl: "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
        "24hVolume": "14684127829",
        btcPrice: "1",
      },
      {
        uuid: "razxDUgYGNAdQ",
        symbol: "ETH",
        name: "Ethereum",
        color: "#3C3C3D",
        iconUrl: "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
        marketCap: "270397473200",
        price: "2215.2910424830766",
        listedAt: 1438905600,
        tier: 1,
        change: "-1.28",
        rank: 2,
        sparkline: [],
        lowVolume: false,
        coinrankingUrl: "https://coinranking.com/coin/razxDUgYGNAdQ+ethereum-eth",
        "24hVolume": "7847212705",
        btcPrice: "0.052815955061835326",
      },
    ],
  },
};
//
export const optionsAllCoins = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': '383866dd88msh86f91edde5292a6p155e41jsn3a89e4276eb6',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};


// for geting one coin
export const optionsOneCoin = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "50",
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Key": "383866dd88msh86f91edde5292a6p155e41jsn3a89e4276eb6",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};
