import { Col, Row } from "antd";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { FC, useEffect } from "react";
import { getAllCoins, reset } from "./redux/reducers";
import { Loader, CryptoCard } from "components";
import millify from "millify";

const Cryptocurrencies: FC = () => {
 const dispatch = useAppDispatch();
 const { data: coins, loadingAllCoins } = useAppSelector(
  (state) => state.coins
 );
 useEffect(() => {
  dispatch(getAllCoins());

  return () => {
   dispatch(reset());
  };
 }, [dispatch]);
 return (
  <Loader spinning={loadingAllCoins}>
   <Row gutter={[32, 32]}>
    {coins.map((coin) => (
     <Col xs={24} sm={12} lg={6} key={coin.uuid}>
      <CryptoCard
       title={`${coin.rank}. ${coin.name}`}
       iconUrl={coin.iconUrl}
       price={millify(Number(coin.price))}
       marketCap={millify(Number(coin.marketCap))}
       change={millify(Number(coin.change))}
      />
     </Col>
    ))}
   </Row>
  </Loader>
 );
};

export default Cryptocurrencies;
