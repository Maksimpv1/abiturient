import Search from '@/app/components/ui/Search/Search'
import * as SC from './ProfileTeachers.module'
import { useEffect, useState } from 'react';
import { ITeacherData, teacherData } from './TeacherData';

const TeacherSearch = () => {

    const [value, setValue] = useState<string>('');
    const [filteredData, setFilteredData] = useState<ITeacherData[]>([])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
      };
    useEffect(() => {
        if (teacherData) {
            const filtered = teacherData.filter(teacher =>
              teacher.firstName.toLowerCase().includes(value.toLowerCase()) ||
              teacher.secondName.toLowerCase().includes(value.toLowerCase()) ||
              teacher.lastName.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredData(filtered);
          } else {
            setFilteredData([]);
          }
        console.log(filteredData)
      }, [value, teacherData]);
    
    return(        
    <SC.SeachContainer>
        <Search value={value} onChange={handleChange}/>
    </SC.SeachContainer>
    )
}

export default TeacherSearch