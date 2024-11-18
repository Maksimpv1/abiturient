import { ComponentProps, FC } from "react";
import * as SC from "./StyledButton";

export interface ByttonType {
  width?: string;
  height?: string;
  textsize?: string;
  background?: string;
  text?:string;
  onClick?: () => void;
}

const Button: FC<ByttonType> = (props) => {

  return (
    <SC.Button onClick={props.onClick}
    width={props.width}
    height={props.height}
    textsize={props.textsize}
    background={props.background}
    >{props.text}
    </SC.Button>
  );
};
export default Button;
