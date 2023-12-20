import { Header as AntdHeader } from "antd/es/layout/layout";
import { FC } from "react";
import { IHeader } from "./interface";
import "./Header.css";

const Header: FC<IHeader> = ({ children, className }) => {
 return <AntdHeader className={`header ${className}`}>{children}</AntdHeader>;
};

export default Header;
