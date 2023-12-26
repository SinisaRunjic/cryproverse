import axios from "axios";

const options = {
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

export const getData = () => {
 return axios.request(options);
};

export const getCoin = (coinId: string) => {
 const options = {
  method: "GET",
  url: `https://coinranking1.p.rapidapi.com/coin/${coinId}`,
  params: {
   referenceCurrencyUuid: "yhjMzLPhuIDl",
   timePeriod: "24h",
  },
  headers: {
   "X-RapidAPI-Key": "383866dd88msh86f91edde5292a6p155e41jsn3a89e4276eb6",
   "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
 };
 return axios.request(options);
};
