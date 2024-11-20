import { ComponentProps, FC } from "react";
import * as SC from "./StyledButton";

export interface ByttonType {
  width?: string;
  height?: string;
  fontSize?: string;
  background?: string;
  text?: string;
  onClick?: () => void;
  type?: string;
  activeshow?: "true" | "false";
}

const Button: FC<ByttonType> = (props) => {
  return (
    <SC.Button
      onClick={props.onClick}
      width={props.width}
      height={props.height}
      fontSize={props.fontSize}
      background={props.background}
      type={props.type}
      activeshow={props.activeshow}
    >
      {props.text}
    </SC.Button>
  );
};
export default Button;
