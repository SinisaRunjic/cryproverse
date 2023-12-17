import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Div, Loader, Menu, Paragraph, Title } from "components";
import { Space } from "antd";

function App() {
 const [count, setCount] = useState(0);

 return (
  <>
   <Div>
    <a href="https://vitejs.dev" target="_blank">
     <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
    <a href="https://react.dev" target="_blank">
     <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
   </Div>
   <Title>Vite + React</Title>
   <div className="card">
    <Button
     type="primary"
     disabled
     onClick={() => setCount((count) => count + 1)}
    >
     count is {count}
    </Button>
    <Paragraph>
     Edit <code>src/App.tsx</code> and save to test HMR opetn kei tek
    </Paragraph>
   </div>
   <Paragraph className="read-the-docs">
    Click on the Vite and React logos to learn more
   </Paragraph>
   <Space>
    <Menu />
    <Loader>
     <p>idemo</p>
    </Loader>
   </Space>
  </>
 );
}

export default App;
