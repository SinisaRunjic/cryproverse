import { Avatar } from "antd";
import { Title } from "components";
import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "images/cryptocurrency.png";
import Sider from "antd/es/layout/Sider";
import "./NavBar.css";

const NavBar: FC = () => {
 return (
  <Sider className="navigation-bar">
   <Avatar src={logo} size="large" style={{ backgroundColor: "red" }} />
   <Title>
    <Link to="/">main</Link>
    <Link to="/rs">rs</Link>
   </Title>
  </Sider>
 );
};

export default NavBar;
