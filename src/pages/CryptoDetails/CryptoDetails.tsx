import { useAppDispatch, useAppSelector } from "app/hooks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData, reset } from "./redux/reducers";
import { Loader } from "components";

const CryptoDetails = () => {
 const params = useParams();
 const dispatch = useAppDispatch();
 const { data: coin, loadingCoin } = useAppSelector((state) => state.coin);
 useEffect(() => {
  if (typeof params.coinId === "string") {
   dispatch(getData(params.coinId));
  }

  return () => {
   dispatch(reset());
  };
 }, [dispatch, params.coinId]);
 useEffect(() => {
  console.log(params.coinId);
 }, [params.coinId]);

 return (
  <Loader spinning={loadingCoin}>
   <div>{coin.name}</div>
   <div>{coin.description}</div>
   <div>{coin.websiteUrl}</div>
   <div>{coin.symbol}</div>
  </Loader>
 );
};

export default CryptoDetails;
