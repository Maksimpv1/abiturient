import { FC } from "react";
import Link from "next/link";
import { IItemDesctop } from "../ScheduleItems";
import * as SC from "../ScheduleStyle.style";

const ItemDesctop: FC<IItemDesctop> = ({ item, type }) => {
  const time = `${item.timeStart} - ${item.timeEnd} `;
  const textData = [type.name, time, item.room];

  return (
    <>
      <SC.ScheduleItemBox>
        <SC.ScheduleText>{item.name}</SC.ScheduleText>
      </SC.ScheduleItemBox>
      <SC.ItemTypeColor bg={type.color} />
      {textData.map((item, index) => (
        <SC.ScheduleItemBox key={index}>{item}</SC.ScheduleItemBox>
      ))}
      {item.group ? (
        <SC.ScheduleItemBox>Группа:{item.group}</SC.ScheduleItemBox>
      ) : (
        <SC.ScheduleItemBox>
          <Link href={"profile/1"}>
            <SC.Icon />
          </Link>
        </SC.ScheduleItemBox>
      )}
    </>
  );
};
export default ItemDesctop;
