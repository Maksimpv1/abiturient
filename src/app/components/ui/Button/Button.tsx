import { FC } from "react";
import * as SC from "./Button.module";

export interface ButtonType {
  width?: string;
  height?: string;
  fontSize?: string;
  background?: string;
  text?: string;
  onClick?: () => void;
  type?: string;
  $activeshow?: boolean;
  borderRadius?:string;
}

const Button: FC<ButtonType> = (props) => {
  return (
    <SC.Button
      onClick={props.onClick}
      width={props.width}
      height={props.height}
      fontSize={props.fontSize}
      background={props.background}
      type={props.type}
      borderRadius={props.borderRadius}
      $activeshow={props.$activeshow}
    >
      {props.text}
    </SC.Button>
  );
};
export default Button;
