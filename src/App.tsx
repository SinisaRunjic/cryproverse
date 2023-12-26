import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import { Header, NavBar } from "components";
import { Content } from "antd/es/layout/layout";
const { Footer } = Layout;
import "./App.css";
import { Cryptocurrencies, Exchanges, Home, News, NotFound } from "pages";
import CryptoDetails from "pages/CryptoDetails/CryptoDetails";

const App: React.FC = () => {
 return (
  <Layout hasSider>
   <NavBar />
   <Layout style={{ marginLeft: 200 }}>
    <Header>Header</Header>
    <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cryptocurrencies">
       <Route index element={<Cryptocurrencies />} />
       <Route path=":coinId" element={<CryptoDetails />} />
      </Route>
      <Route path="/exchanges" element={<Exchanges />} />
      <Route path="/news" element={<News />} />
      <Route path="*" element={<NotFound />} />
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
