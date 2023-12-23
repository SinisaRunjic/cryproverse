import { Card } from "antd";
import { FC } from "react";
import { ICryptoCard } from "./interface";
import "./CryptoCard.css";

const CryptoCard: FC<ICryptoCard> = ({
 title,
 price,
 marketCap,
 change,
 iconUrl,
}) => {
 return (
  <Card
   title={title}
   hoverable
   extra={<img className="crypto-image" src={iconUrl} />}
  >
   <p>Price: {price}</p>
   <p>Market cap: {marketCap}</p>
   <p>Daily change: {change}</p>
  </Card>
 );
};

export default CryptoCard;
