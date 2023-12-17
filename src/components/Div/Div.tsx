import { FC } from "react";
import { IDiv } from "./interface";

const Div: FC<IDiv> = ({ children, className, ...props }) => {
 return (
  <div className={`${className}`} {...props}>
   {children}
  </div>
 );
};

export default Div;
