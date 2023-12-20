import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import { Header, NavBar } from "components";
import { Content } from "antd/es/layout/layout";
const { Footer } = Layout;
import "./App.css";

const App: React.FC = () => {
 return (
  <Layout hasSider>
   <NavBar />
   <Layout>
    <Header>Header</Header>
    <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
     <Routes>
      <Route path="/" element={<div>Main page</div>} />
      <Route path="/rs" element={<div>rs page</div>} />
     </Routes>
    </Content>
    <Footer style={{ textAlign: "center" }}>
     Ant Design ©2023 Created by Ant UED
    </Footer>
   </Layout>
  </Layout>
 );
};

export default App;
