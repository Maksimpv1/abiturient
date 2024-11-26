"use client";

import {
  Container,
  Text,
} from "@/app/components/ui/StandartStyles/StandartStyles.style";
import * as SC from "./ProfileMain.module";
import GlobalAverage from "../ProfileMarks/GlobalAverage";

interface IMainData {
  title: string;
  info: string | React.ReactNode;
}

const ProfileMain = () => {
  const mainData: IMainData[] = [
    { title: "Имя Фамилия", info: "" },
    { title: "Студенческий", info: "" },
    { title: "Email :", info: "" },
    { title: "Группа :", info: "" },
  ];
  return (
    <Container>
      <SC.Wrapper>
        {mainData.map((item, index) => (
          <Text key={index}>{`${item.title} ${item.info}`}</Text>
        ))}
        <GlobalAverage />
      </SC.Wrapper>
    </Container>
  );
};
export default ProfileMain;
