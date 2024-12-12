import { FC } from "react";
import { IItemDesctop } from "../ScheduleItems";
import * as SC from "../ScheduleStyle.style";
import Link from "next/link";
import SmallScreenTime from "./SmallScreenTime";
import TeachersAndGroups from "./TeachersAndGroups";

const ItemMobile: FC<IItemDesctop> = ({ item, type }) => {
  return (
    <SC.TableContainer>
      <SmallScreenTime
        timeEnd={item.timeEnd}
        timeStart={item.timeStart}
        color={type.color}
      />
      <SC.TableBox>
        <SC.ScheduleText>{item.name}</SC.ScheduleText>
        <SC.ScheduleText>{item.room}</SC.ScheduleText>
      </SC.TableBox>
      <TeachersAndGroups group={item.group} />
    </SC.TableContainer>
  );
};
export default ItemMobile;
