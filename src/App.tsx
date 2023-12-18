import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Button,
  Div,
  Header,
  Loader,
  Menu,
  NavBar,
  Paragraph,
  Title,
} from "components";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Header> idemo </Header>
      <Router>
        <Layout>
          <NavBar />
          <Content>
            <Routes>
              <Route path="/" element={<div>content</div>} />
            </Routes>
          </Content>
        </Layout>

        <Footer>ovo je napravio sinisa</Footer>
      </Router>
    </Layout>
  );
}

export default App;
