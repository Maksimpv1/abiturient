import { IDataWeek } from "../ScheduleData";
import ScheduleItems from "./ScheduleItems";
import * as SC from "./ScheduleStyle.module"

const ScheduleDay = ({weekData} : {weekData:IDataWeek}) => {

    return(
        <>
            {weekData.days.map((item,index)=>(
                <SC.DayContainer key={index}>
                    <SC.DayText>{item.day}</SC.DayText>
                    {item.items.map((item,itemIndex)=>(
                        <div key={itemIndex}>                        
                            <ScheduleItems item={item}/>
                        </div>
                    ))}
                </SC.DayContainer>
            ))}
        </>
    )
}

export default ScheduleDay;