import { ComponentProps, FC } from "react";
import * as SC from "./StyledButton";

interface ByttonType {
  width?: string;
  height?: string;
  content?: string;
  textSize?: string;
  background?: string;
}

const Button: FC<ByttonType> = (props) => {
  return <SC.Container></SC.Container>;
};
export default Button;
