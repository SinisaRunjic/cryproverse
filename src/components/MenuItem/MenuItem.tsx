import { FC } from "react";
import { Menu } from "antd";
import { IMenuItem } from "./interface";

const { Item: AntdItem } = Menu;

const MenuItem: FC<IMenuItem> = ({ ...props }) => {
  return <AntdItem {...props} />;
};

MenuItem.defaultProps = {
  children: "Input some item ",
};

export default MenuItem;
