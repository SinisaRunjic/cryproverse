import { CardProps } from "antd";

export interface ICryptoCard extends CardProps {
 price: string;
 marketCap: string;
 change: string;
 iconUrl: string;
 uuid: string;
}
