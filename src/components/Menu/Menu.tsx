import { FC, useState } from "react";
import { Menu as AntdMenu } from "antd";
import { IMenu } from "./interface";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "components";

const Menu: FC<IMenu> = ({ ...props }) => {
 const [collapsed, setCollapsed] = useState(false);

 const toggleCollapsed = () => {
  setCollapsed(!collapsed);
 };
 return (
  <>
   <Button
    type="primary"
    onClick={toggleCollapsed}
    style={{ marginBottom: 16 }}
   >
    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
   </Button>
   <AntdMenu {...props} />
  </>
 );
};

Menu.defaultProps = {
 mode: "inline",
};

export default Menu;
