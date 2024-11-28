import { useEffect, useState } from "react"
import { IDataWeek, scheduleData } from "../ScheduleData"
import ScheduleDay from "./ScheduleDay"
import * as SC from './ScheduleStyle.module'
import Title from "@/app/components/ui/Title/Title"

const Schedule = () => {
    const [weekData, setWeekData] = useState<IDataWeek[]>([]);

    useEffect(()=>{
        scheduleData.map((item) => setWeekData(item.week))
    },[])

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