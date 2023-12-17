import { FC } from "react";
import { Menu } from "antd";
import { IMenuItem } from "./interface";

const { Item: AntdItem } = Menu;

const MenuItem: FC<IMenuItem> = ({ children, ...props }) => {
 return <AntdItem {...props}>{children}</AntdItem>;
};

MenuItem.defaultProps = {
 children: "Input some item ",
};

export default MenuItem;
