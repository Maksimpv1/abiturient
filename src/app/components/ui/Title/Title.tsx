import { MainTitle } from "./Title.style";

export interface ITitle {
  textAlign?: string;
  fontSize?: string;
  children?: React.ReactNode;
}

const Title = ({ textAlign, fontSize, children }: ITitle) => {
  return (
    <MainTitle fontSize={fontSize} textAlign={textAlign}>
      {children}
    </MainTitle>
  );
};

export default Title;
