import { ConfigProvider } from "antd";
import { FC, ReactNode } from "react";
import theme from "./theme";

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
 return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};

export default ThemeProvider;
