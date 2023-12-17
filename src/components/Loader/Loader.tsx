import { FC } from "react";
import { Spin } from "antd";
import { ILoader } from "./interface";

const Loader: FC<ILoader> = ({ children, tip, ...props }) => {
 return (
  <Spin tip={tip} {...props}>
   {children}
  </Spin>
 );
};

Spin.defaultProps = {
 tip: "LOADING...",
};

export default Loader;
