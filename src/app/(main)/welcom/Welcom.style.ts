import {
  Title,
  Wrapper,
} from "@/app/components/ui/StandartStyles/StandartStyles.style";
import { styled } from "styled-components";

export const WrapperW = styled(Wrapper)`
  margin-top: 100px;
`;

export const TitleW = styled(Title)`
  white-space: pre-wrap;
  text-align: center;
  line-height: 44px;
  font-weight: 150;
  color: #8D212D;
`;

export const BtnContainer = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
  align-items: center;
  margin-top: 150px;
`;
