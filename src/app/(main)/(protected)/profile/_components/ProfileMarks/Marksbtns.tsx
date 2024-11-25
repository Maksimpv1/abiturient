import Button from '@/app/components/ui/Button/Button';
import * as SC from './ProfileMarks.module'
import { useState } from 'react';
interface IBtnData {
    id: number,
    text: string,
  }
  
  const btnData:IBtnData[] = [
    { id: 0, text: '1 курс'},
    { id: 1, text: '2 курс'},
    { id: 2, text: '3 курс'},
    { id: 3, text: '4 курс'},
  ]

const MarksBtns = () => {
    const [active, setActive] = useState<number>(0);

    const handleClick = (id: number) => {
        setActive(id)
    }

    return(
        <SC.BtnContainer >
        {btnData.map((item)=>(
            <SC.BtnWrapper key={item.id}>
              <Button borderRadius={'0'} text={item.text} onClick={() => handleClick(item.id)} $activeshow={item.id === active } />
            </SC.BtnWrapper>
        ))}
      </SC.BtnContainer>
    )
}
export default MarksBtns;