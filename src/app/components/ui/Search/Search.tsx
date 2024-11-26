import { useState } from 'react';
import InputField from '../InputField/InputField';
import * as SC from './Search.module'
import { ITeacherData } from '@/app/(main)/(protected)/profile/_components/ProfileTeachers/TeacherData';
import { IDataWeek } from '@/app/(main)/(protected)/profile/_components/ProfileShcedule/ScheduleData';

const Search = ({dataTeach, dataSchedule} : {dataTeach?: ITeacherData[], dataSchedule?: IDataWeek[]}) => {
    const [value, setValue] = useState<string>('')

    return(
        <>
            <InputField type={'text'} value={value} />
        </>
    )
}

export default Search;