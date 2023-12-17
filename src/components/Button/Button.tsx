import { FC } from "react";
import { Button as AntButton } from "antd";
import { IButton } from "./interface";

const Button: FC<IButton> = ({ children, ...props }) => {
 return <AntButton {...props}>{children}</AntButton>;
};

Button.defaultProps = {
    children: "please enter some text or node"
}

export default Button;
