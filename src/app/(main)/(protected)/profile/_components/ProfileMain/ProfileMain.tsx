'use client'

import { Container, Text } from "@/app/components/ui/StandartStyles/StandartStyles.style";
import * as SC from './ProfileMain.module'

interface IMainData {
  title: string,
  info: string,
}

const ProfileMain = () => {
  const mainData:IMainData[] = [
    {title: 'Имя Фамилия', info: ''},
    {title: 'Студенческий', info: ''},
    {title: 'Email :', info: ''},
    {title: 'Группа :', info: ''},
    {title: 'Средний балл:', info: ''},
  ]
  return (
    <Container>
      <SC.Wrapper>
        {mainData.map((item,index)=>(
          <Text key={index}>{`${item.title} ${item.info}`}</Text>
        ))}
      </SC.Wrapper>
    </Container>
  );
};
export default ProfileMain;
