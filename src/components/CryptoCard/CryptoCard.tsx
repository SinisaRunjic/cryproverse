import { Card } from "antd";
import { FC } from "react";
import { ICryptoCard } from "./interface";
import "./CryptoCard.css";
import { Link } from "react-router-dom";

const CryptoCard: FC<ICryptoCard> = ({
 title,
 price,
 marketCap,
 change,
 iconUrl,
 uuid,
}) => {
 return (
  <Card
   title={title}
   hoverable
   extra={<img className="crypto-image" src={iconUrl} />}
  >
   <Link to={`/cryptocurrencies/${uuid}`}>
    <p>Price: {price}</p>
    <p>Market cap: {marketCap}</p>
    <p>Daily change: {change}</p>
   </Link>
  </Card>
 );
};

export default CryptoCard;
