import { FC } from "react";
import { Typography } from "antd";
import { IParagraph } from "./interface";

const { Paragraph: AntdParagraph } = Typography;

const Paragraph: FC<IParagraph> = ({ children, ...props }) => {
 return <AntdParagraph {...props}>{children}</AntdParagraph>;
};

Paragraph.defaultProps = {
 underline: false,
};

export default Paragraph;
