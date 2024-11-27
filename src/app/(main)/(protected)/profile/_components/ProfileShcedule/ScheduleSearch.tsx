import Search from "@/app/components/ui/Search/Search";
import React, { useState } from "react";
import * as SC from './ProfileSchedule.module'

const ScheduleSearch = () => {
    const [value, setValue] = useState<string>('')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)        
    }


    return(
        <SC.SearchContainer>
            <Search onChange={handleChange} value={value}/>
        </SC.SearchContainer>
    )
}

export default ScheduleSearch;