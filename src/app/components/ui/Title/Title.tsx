import { MainTitle } from "./Title.module";

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
