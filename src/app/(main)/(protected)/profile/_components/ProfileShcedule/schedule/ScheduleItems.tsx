import { IDataItem } from "../ScheduleData";
import * as SC from './ScheduleStyle.module'

const ScheduleItems = ({item} : {item:IDataItem}) => {
    return(
        <SC.ScheduleItemContainer>
            <SC.ScheduleItemLeft>
                <p>{item.name}</p>
            </SC.ScheduleItemLeft>
            <p>Лекция/пз</p>
            <p>Время {item.time}</p>
            <p>Аудитория {item.room}</p>
        </SC.ScheduleItemContainer>
    )
}

export default ScheduleItems;