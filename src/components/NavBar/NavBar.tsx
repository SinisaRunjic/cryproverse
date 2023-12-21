import { Avatar, MenuProps } from "antd";
import { Menu } from "components";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import logo from "images/cryptocurrency.png";
import Sider from "antd/es/layout/Sider";
import "./NavBar.css";
import {
  BulbOutlined,
  FundOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import { useLocation } from "react-router-dom";

const menuItems: MenuProps["items"] = [
  {
    label: <Link to={"/"}>Home</Link>,
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: <Link to={"/cryptocurrencies"}>Cryptocurrencies</Link>,
    key: "/cryptocurrencies",
    icon: <FundOutlined />,
  },
  {
    label: <Link to={"/exchanges"}>Exchanges</Link>,
    key: "/exchanges",
    icon: <MoneyCollectOutlined />,
  },
  {
    label: <Link to={"/news"}>News</Link>,
    key: "/news",
    icon: <BulbOutlined />,
  },
];

const NavBar: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();

  return (
    <Sider
      className="navigation-bar"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Avatar
        className="demo-logo-vertical"
        src={logo}
        size="large"
        style={{ backgroundColor: "red" }}
      />
      <Menu items={menuItems} theme="dark" defaultSelectedKeys={[pathname]} />
    </Sider>
  );
};

export default NavBar;
