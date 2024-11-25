import { styled } from "styled-components";
import { ITitle } from "./Title";

const shouldForwardProp = (prop:string) => !['textAlign', 'fontSize'].includes(prop);

export const MainTitle = styled.h2.withConfig({
  shouldForwardProp: shouldForwardProp,
})<ITitle>`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "42px")};
  margin: 0;
  padding: 0;
  white-space: pre-wrap;
  text-align: ${({textAlign}) => textAlign || 'start'};
`;