import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CryptoCard from "./CryptoCard";

const mockCoin = {
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
};

describe("Crypto Card test", () => {
 it("dispalay img", () => {
  render(
   <CryptoCard
    price={mockCoin.price}
    marketCap={mockCoin.marketCap}
    change={mockCoin.change}
    iconUrl={mockCoin.iconUrl}
   />
  );
  screen.debug();
  const imageElement = screen.getByRole("img");
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toBeVisible();
  expect(imageElement).toHaveAttribute("src", mockCoin.iconUrl);
 });
 it("dispaly price", () => {
  render(
   <CryptoCard
    price={mockCoin.price}
    marketCap={mockCoin.marketCap}
    change={mockCoin.change}
    iconUrl={mockCoin.iconUrl}
   />
  );
  screen.debug();
  const priceElement = screen.getByText(/Price/i);
  expect(priceElement).toBeInTheDocument();
  expect(priceElement).toBeVisible();
  expect(priceElement).toHaveTextContent(mockCoin.price);
 });
 it("dispaly market cap", () => {
  render(
   <CryptoCard
    price={mockCoin.price}
    marketCap={mockCoin.marketCap}
    change={mockCoin.change}
    iconUrl={mockCoin.iconUrl}
   />
  );
  screen.debug();
  const marketCapElement = screen.getByText(/Market cap/i);
  expect(marketCapElement).toBeInTheDocument();
  expect(marketCapElement).toBeVisible();
  expect(marketCapElement).toHaveTextContent(mockCoin.marketCap);
 });
 it("dispaly change", () => {
  render(
   <CryptoCard
    price={mockCoin.price}
    marketCap={mockCoin.marketCap}
    change={mockCoin.change}
    iconUrl={mockCoin.iconUrl}
   />
  );
  screen.debug();
  const marketCapElement = screen.getByText(/Change/i);
  expect(marketCapElement).toBeInTheDocument();
  expect(marketCapElement).toBeVisible();
  expect(marketCapElement).toHaveTextContent(mockCoin.change);
 });
});
