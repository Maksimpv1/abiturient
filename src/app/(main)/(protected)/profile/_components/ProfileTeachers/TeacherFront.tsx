"use client";

import { FC } from "react";
import * as SC from "./ProfileTeachers.module";
import { ITeacherData } from "../../../../../components/moc/TeacherData";

const TeacherFront: FC<ITeacherData> = (props) => {
  return (
    <SC.TeacherContainer>
      <SC.TeacherLeft>
        <SC.LeftIcon />
      </SC.TeacherLeft>
      <SC.TeacherRight>
        <SC.RightTitel>
          {`${props.secondName} ${props.firstName} ${props.lastName}`}
        </SC.RightTitel>
        <SC.RightText>
          Ведёт:{" "}
          {props.item.map((item, index) => (
            <span key={index}>{`${item} `}</span>
          ))}
        </SC.RightText>
      </SC.TeacherRight>
    </SC.TeacherContainer>
  );
};

export default TeacherFront;
