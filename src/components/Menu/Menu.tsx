import { FC } from "react";
import { Menu as AntdMenu } from "antd";
import { IMenu } from "./interface";

const Menu: FC<IMenu> = ({ ...props }) => {
  return <AntdMenu {...props} />;
};

Menu.defaultProps = {
  mode: "inline",
};

export default Menu;
