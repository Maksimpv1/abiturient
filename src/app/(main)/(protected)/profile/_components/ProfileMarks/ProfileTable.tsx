"use client";

import { useAppSelector } from "@/app/lib/storeHooks";
import { columnName, ICursesData, IMarks } from "./MarksData";
import * as SC from "./ProfileMarks.module";
import { calculateAverage } from "@/app/components/hooks/CalculateAverage";

const ProfileTable = () => {
  const cursesData = useAppSelector((item) => item.profile.cursesData);

  const averagePoint = (marks: IMarks) => {
    const allMarks = Object.values(marks);
    return calculateAverage(allMarks);
  };
  const averageSemPoint = (sem: keyof IMarks) => {
    const marks = Object.values(cursesData).map((item) => item[sem]);
    return calculateAverage(marks);
  };
  const averageAllPoint = () => {
    const marks = Object.values(cursesData).flatMap((item) =>
      Object.values(item),
    );
    return calculateAverage(marks);
  };
  const getCommonProperties = (obj: ICursesData) => {
    return Object.keys(obj[Object.keys(obj)[0]]) as (keyof IMarks)[];
  };

  return (
    <>
      <SC.Row>
        {columnName.map((item, index) => (
          <SC.Block key={index} $bg={"#8D5057"} color={"#FFFFFF"}>
            {item}
          </SC.Block>
        ))}
      </SC.Row>
      {Object.entries(cursesData).map(([subject, marks], index) => (
        <SC.Row key={index}>
          <SC.Block>{subject}</SC.Block>
          {Object.entries(marks).map(([sem, mark], index) => (
            <SC.Block key={index}>{mark ? mark : "—"}</SC.Block>
          ))}
          <SC.Block>{averagePoint(marks)}</SC.Block>
        </SC.Row>
      ))}
      <SC.Row>
        <SC.Block>Средний балл</SC.Block>
        {getCommonProperties(cursesData).map((item, index) => (
          <SC.Block key={index}>{averageSemPoint(item)}</SC.Block>
        ))}
        <SC.Block>{averageAllPoint()}</SC.Block>
      </SC.Row>
    </>
  );
};

export default ProfileTable;
