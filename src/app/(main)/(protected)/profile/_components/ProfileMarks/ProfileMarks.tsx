
import Title from "@/app/components/ui/Title/Title";
import * as SC from "./ProfileMarks.module"
import MarksBtns from "./Marksbtns";

interface IMarks {
  semOne: string,
  semTwo: string,
  semTree:string,
  semFour: string,
}

interface SemesterData {
  semOne: string;
  semTwo: string;
  semTree: string; 
  semFour: string;
};
interface IRowData {
  [subject : string]: SemesterData
}

const columnName:string[] = ['Предмет','Сем 1','Сем 2','Сем 3','Сем 4','Средний балл']

const rowData = {
  'Математика': { semOne :'9', semTwo: '8', semTree: '8' , semFour: ''},
  'Физкультура': { semOne :'9', semTwo: '8', semTree: '8' , semFour: ''},
  'Физика': { semOne :'7', semTwo: '7', semTree: '7' , semFour: ''},
  'Английский': { semOne :'4', semTwo: '4', semTree: '5' , semFour: ''},
}

const getCommonProperties = (obj:IRowData) => {
  return Object.keys(obj[Object.keys(obj)[0]]) as (keyof IMarks)[];
};

const ProfileMarks = () => {

  const averagePoint = (marks: IMarks) => {
    const validMarks = Object.values(marks).filter((mark) => mark !== '' && !isNaN(parseFloat(mark)));
    if(validMarks.length === 0) return '—'
    const sum = validMarks.reduce((acc, mark) => acc + parseFloat(mark), 0);
    return (sum / validMarks.length).toFixed(1);
  }
  const averageSemPoint = (sem: keyof IMarks ) => {
    const marks = Object.values(rowData).map( item => item[sem])
    const validMarks = marks.filter((mark) => mark !== '' && !isNaN(parseFloat(mark)))
    if(validMarks.length === 0) return '—'
    const sum = validMarks.reduce((acc, mark) => acc + parseFloat(mark), 0)
    return ( sum / validMarks.length).toFixed(1)
  }
  const averageAllPoint = () => {
    const marks = Object.values(rowData).flatMap((item) => Object.values(item))
    const validMarks = marks.filter((mark) => mark !== '' && !isNaN(parseFloat(mark)))
    if( validMarks.length === 0) return '—' 
    const sum = validMarks.reduce((acc, mark) => acc + parseFloat(mark), 0)
    return (sum / validMarks.length).toFixed(1)
  }


  return (
    <SC.Container>
      <SC.Wrapper>
        <Title textAlign={'center'} >Оценки за семестр:</Title>
          <MarksBtns/>
          <SC.Row>
            {columnName.map((item, index) => (
              <SC.Block key={index} $bg={'#8D5057'} color={'#FFFFFF'}>{item}</SC.Block>
            ))}
          </SC.Row>
          {Object.entries(rowData).map(([subject,marks],index)=> (
            <SC.Row key={index}>
              <SC.Block>{subject}</SC.Block>
              {Object.entries(marks).map(([sem,mark],index)=>(
                <SC.Block key={index}>{mark ? mark : '—'}</SC.Block>
              ))}
              <SC.Block>{averagePoint(marks)}</SC.Block>
            </SC.Row>
          ))} 
          <SC.Row >
            <SC.Block>Итого</SC.Block>
            {getCommonProperties(rowData).map((item,index)=>(
              <SC.Block key={index}>{averageSemPoint(item)}</SC.Block>
            ))
            }
            <SC.Block>{averageAllPoint()}</SC.Block> 
          </SC.Row>   
        </SC.Wrapper>
    </SC.Container>
  );
};
export default ProfileMarks;
