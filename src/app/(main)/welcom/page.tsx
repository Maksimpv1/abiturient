"use client";

import { Container } from "@/app/components/ui/StandartStyles/StandartStyles.style";
import * as SC from "./Welcom.style";
import { Button } from "@/app/components/ui/Button/StyledButton";
import { useRouter } from "next/navigation";

const Welcom = () => {
  const router = useRouter();

  const handleClickLogin = () => {
    router.push("/login");
  };
  const handleClickRegistration = () => {
    router.push("/registration");
  };
  return (
    <Container>
      <SC.WrapperW>
        <SC.TitleW>
          Добро пожаловать в<br /> личный кабинет
        </SC.TitleW>
        <SC.BtnContainer>
          <Button onClick={handleClickLogin} fontSize={"24"}>
            Войти
          </Button>
          <Button onClick={handleClickRegistration} fontSize={"24"}>
            Регистрация
          </Button>
        </SC.BtnContainer>
      </SC.WrapperW>
    </Container>
  );
};

export default Welcom;
