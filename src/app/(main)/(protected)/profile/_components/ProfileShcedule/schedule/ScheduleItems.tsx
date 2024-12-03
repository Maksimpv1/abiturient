import { useEffect, useState } from "react";
import { IDataItem } from "../../../../../../components/moc/ScheduleData";
import * as SC from "./ScheduleStyle.module";
import Link from "next/link";

interface IType {
  name?: string;
  color?: string;
}

const ScheduleItems = ({ item }: { item: IDataItem }) => {
  const [type, setType] = useState<IType>({});

  useEffect(() => {
    switch (item.type) {
      case "1":
        setType({ name: "Лекция", color: "green" });
        break;
      case "2":
        setType({ name: "Пз", color: "yellow" });
        break;
      case "3":
        setType({ name: "Экзамен", color: "red" });
        break;
      default:
        setType({ name: "Неизвестный тип", color: "gray" });
        break;
    }
  }, []);

  const textData = [type.name, item.time, item.room];

  return (
    <SC.ScheduleItemContainer>
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
    </SC.ScheduleItemContainer>
  );
};

export default ScheduleItems;
