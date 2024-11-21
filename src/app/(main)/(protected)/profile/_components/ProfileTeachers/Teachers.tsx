"use client";

import Link from "next/link";
import * as SC from "./ProfileTeachers.module";
import TeacherFront from "./TeacherFront";

export interface ITeacherData {
  id: number;
  firstName: string;
  secondName: string;
  lastName: string;
  email: string;
  kafedra: string[];
  specialisation: string[];
  item: string[];
}
export const teacherData: ITeacherData[] = [
  {
    id: 0,
    firstName: "Иван",
    secondName: "Иван",
    lastName: "Иван",
    email: "test@test.test",
    kafedra: ["культурология"],
    item: ["пение"],
    specialisation: [""],
  },
  {
    id: 1,
    firstName: "Игорь",
    secondName: "Игорь",
    lastName: "Игорь",
    email: "test@test.test",
    kafedra: ["менеджмент"],
    item: ["физкультура", "пение"],
    specialisation: [""],
  },
  {
    id: 2,
    firstName: "Артур",
    secondName: "Артур",
    lastName: "Артур",
    email: "test@test.test",
    kafedra: ["менеджмент", "культурология"],
    item: ["физкультура", "пение"],
    specialisation: [""],
  },
  {
    id: 3,
    firstName: "Елена",
    secondName: "Елена",
    lastName: "Елена",
    email: "test@test.test",
    kafedra: ["менеджмент", "культурология"],
    item: ["физкультура"],
    specialisation: [""],
  },
];

const Teachers = () => {
  return (
    <SC.TeachersContainer>
      {teacherData.map((item, index) => (
        <Link key={index} href={`/profile/${item.id}`}>
          <TeacherFront {...item} />
        </Link>
      ))}
    </SC.TeachersContainer>
  );
};
export default Teachers;
