import { FC, useEffect } from "react";
import millify from "millify";
import { Row, Col, Statistic } from "antd";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getStats, reset } from "./redux/reducers";
import { Loader } from "components";

const Home: FC = () => {
 const dispatch = useAppDispatch();
 const { data: stats, loadingStats } = useAppSelector(
  (state) => state.stats
 );
 useEffect(() => {
  dispatch(getStats());

  return () => {
   dispatch(reset());
  };
 }, [dispatch]);
 const { total, total24hVolume, totalMarkets, totalMarketCap, totalExchanges } =
  stats;
 return (
  <Loader spinning={loadingStats}>
   <Row gutter={[32, 32]}>
    <Col span={12}>
     <Statistic title="Total Cryptocurrencies" value={total} />
    </Col>
    <Col span={12}>
     <Statistic title="Total Exchanges" value={millify(totalExchanges)} />
    </Col>
    <Col span={12}>
     <Statistic
      title="Total Market Cap"
      value={`$${millify(Number(totalMarketCap))}`}
     />
    </Col>
    <Col span={12}>
     <Statistic
      title="total 24h volume"
      value={`$${millify(Number(total24hVolume))}`}
     />
    </Col>
    <Col span={12}>
     <Statistic title="total Markets" value={millify(totalMarkets)} />
    </Col>
   </Row>
  </Loader>
 );
};

export default Home;
