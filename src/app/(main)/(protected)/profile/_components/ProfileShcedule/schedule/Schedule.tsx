import { FC, useEffect, useState } from "react"
import { IDataWeek, scheduleData } from "../ScheduleData"
import ScheduleDay from "./ScheduleDay"
import * as SC from './ScheduleStyle.module'
import Title from "@/app/components/ui/Title/Title"

interface ISchedule {
    view: boolean,
    group?:string,
}

const Schedule: FC<ISchedule> = ({view}) => {
    const [weekData, setWeekData] = useState<IDataWeek[]>([]);

    useEffect(()=>{
        scheduleData.map((item) => setWeekData(item.week))
    },[])
    if(!view){
        return <></>
    } else
    return(
        <SC.ScheduleContainer>
           { weekData.map((week,index)=> (
            <SC.ScheduleContainerWeek key={index}>
                <Title textAlign={"center"} fontSize={"24"}>Неделя {week.number}</Title>
                <ScheduleDay weekData={week}/>
            </SC.ScheduleContainerWeek>
           ))}
        </SC.ScheduleContainer>
    )
}

export default Schedule;