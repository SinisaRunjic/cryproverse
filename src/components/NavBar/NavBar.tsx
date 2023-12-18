import { Avatar } from "antd";
import { Title } from "components";
import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "images/cryptocurrency.png";
import Sider from "antd/es/layout/Sider";

const NavBar: FC = () => {
  return (
    <Sider>
      <div>
        <Avatar src={logo} size="large" style={{ backgroundColor: "red" }} />
        <Title>
          <Link to="/">Cryptoverse</Link>
        </Title>
      </div>
    </Sider>
  );
};

export default NavBar;
