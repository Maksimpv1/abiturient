"use client";

import {
  Container,
  Title,
} from "@/app/components/ui/StandartStyles/StandartStyles.style";
import * as SC from "./Welcom.style";
import { Button } from "@/app/components/ui/Button/StyledButton";

const Welcom = () => {

  const handleClick = () => {
    console.log('привет')
  }
  return (
    <Container>
      <SC.WrapperW>
        <SC.TitleW>
          Добро пожаловать в<br /> личный кабинет
        </SC.TitleW>
        <SC.BtnContainer>
          <Button onClick={handleClick} textsize={'24'}>Войти</Button>
          <Button textsize={'24'}>Регистрация</Button>
        </SC.BtnContainer>
      </SC.WrapperW>
    </Container>
  );
};

export default Welcom;
