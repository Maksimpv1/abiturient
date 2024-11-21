'use client'

import { Container, Text, Title } from "@/app/components/ui/StandartStyles/StandartStyles.style";
import { teacherData } from "./Teachers";
import { useParams } from "next/navigation";
import * as SC from "./ProfileTeachers.module"

const TeacherOne = () => {
    const params = useParams();
    const id = Number(params.teacherPage)

    const teacher = teacherData[(id)];
    const { secondName, firstName, lastName, kafedra, item, email } = teacher;

    if (!teacher) {
        return <Container><Title>Преродаватель не найден</Title></Container>;
    }
    return(
        <SC.TeachersContainer>
            <SC.OneContainer margin={'0 0 30px 0'}>
                <SC.LeftIcon/>
            </SC.OneContainer>
            <SC.OneContainer margin={'20px'}>
                <Title fontSize={'24'}>{`${secondName} ${firstName} ${lastName}`}</Title>
            </SC.OneContainer>
            <Text>Кафедра: {kafedra.map((item,index)=><span key={index}>{item + ' '}</span>)}</Text>
            <Text>Предменты: {item.map((item,index)=><span key={index}>{item}</span>)}</Text>
            <Text>Email: {email}</Text>
        </SC.TeachersContainer>
    )
}

export default TeacherOne;