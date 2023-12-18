import { Header as AntdHeader } from "antd/es/layout/layout";
import { FC } from "react";
import { IHeader } from "./interface";

const Header: FC<IHeader> = ({ children }) => {
  return <AntdHeader>{children}</AntdHeader>;
};

export default Header;
