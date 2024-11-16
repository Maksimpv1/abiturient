"use client";

import {
  Container,
  Title,
} from "@/app/components/ui/StandartStyles/StandartStyles.style";
import * as SC from "./Welcom.style";

const Welcom = () => {
  return (
    <Container>
      <SC.WrapperW>
        <SC.TitleW>
          Добро пожаловать в<br /> личный кабинет
        </SC.TitleW>
      </SC.WrapperW>
    </Container>
  );
};

export default Welcom;
