import { useEffect, useState } from "react";
import { IDataItem } from "../ScheduleData";
import * as SC from './ScheduleStyle.module';

interface IType {
    name?: string,
    color?: string,
}

const ScheduleItems = ({ item }: { item: IDataItem }) => {
    const [type, setType] = useState<IType>({});

    useEffect(() => {
        switch (item.type) {
            case '1':
                setType({ name: 'Лекция', color: 'green' });
                break;
            case '2':
                setType({ name: 'Пз', color: 'yellow' });
                break;
            case '3':
                setType({ name: 'Экзамен', color: 'red' });
                break;
            default:
                setType({ name: 'Неизвестный тип', color: 'gray' });
                break;
        }
    }, []);

    return (
        <SC.ScheduleItemContainer>
            <SC.ScheduleItemLeft>
                <p>{item.name}</p>
            </SC.ScheduleItemLeft>
            <SC.ScheduleItemBox bg={type.color}>
                {type.name}
            </SC.ScheduleItemBox>
            <SC.ScheduleItemBox>
                {item.time}
            </SC.ScheduleItemBox>
            <SC.ScheduleItemBox>
                {item.room}
            </SC.ScheduleItemBox>
        </SC.ScheduleItemContainer>
    );
}

export default ScheduleItems;