import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h2<{fontSize?:string}>`
  font-size: ${(fontSize) => fontSize ? `${fontSize}px` : '42px'};
  margin: 0;
  padding: 0;
  white-space: pre-wrap;
`;

export const BtnFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const Text = styled.p`
  font-size: 20px;
  margin: 0;
  padding: 0;
  white-space: pre-wrap;
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  margin: 10px;
  &:hover {
    color: #7a585c;
  }
`;
