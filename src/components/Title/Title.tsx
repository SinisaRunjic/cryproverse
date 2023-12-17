import { FC } from "react";
import { Typography } from "antd";
import { ITitle } from "./interface";

const { Title: AntdTitle } = Typography;

const Title: FC<ITitle> = ({ children, ...props }) => {
 return <AntdTitle {...props}>{children}</AntdTitle>;
};

Title.defaultProps = {
 level: 1,
 underline: true,
};

export default Title;
