import Title from "@/app/components/ui/Title/Title";
import { rowData } from "./MarksData";
import { calculateAverage } from "@/app/components/hooks/CalculateAverage";

const GlobalAverage = () => {
    const globlaAverage = () => {
        const subjects = Object.values(rowData).flatMap((item)=>  Object.values(item) )
        const marks = Object.values(subjects).flatMap(item => Object.values(item))
        return calculateAverage(marks)
    }   

    return(        
            <Title fontSize={'20'}>Общий средний балл: {globlaAverage()}</Title>
    )
}

export default GlobalAverage;