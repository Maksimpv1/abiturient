import { FC } from "react";
import { IItemDesctop } from "../ScheduleItems";
import * as SC from '../ScheduleStyle.style'
import Link from "next/link";

const ItemTable: FC<IItemDesctop> = ({item, type}) => {

    return(
        <SC.TableContainer>  
            <SC.ScheduleItemBox>     
                <SC.TableBox>
                    <SC.ScheduleText>{item.timeStart}</SC.ScheduleText>
                    <SC.ScheduleText>{item.timeEnd}</SC.ScheduleText>
                </SC.TableBox>      
                <SC.ItemTypeColor bg={type.color} />      
            </SC.ScheduleItemBox>     
                <SC.TableBox>
                    <SC.ScheduleText>{item.name}</SC.ScheduleText>                        
                    <SC.ScheduleText>{type.name}</SC.ScheduleText>
                </SC.TableBox>
            <SC.ScheduleItemBox>      
                <SC.TableBox>
                    <SC.ScheduleText>{item.room}</SC.ScheduleText>
                </SC.TableBox>
            </SC.ScheduleItemBox>
            {item.group ? (
                <SC.ScheduleItemBox>Группа:{item.group}</SC.ScheduleItemBox>
            ) : (
                <SC.ScheduleItemBox>
                <Link href={"profile/1"}>
                    <SC.Icon />
                </Link>
                </SC.ScheduleItemBox>
            )}
        </SC.TableContainer>
    )
}
export default ItemTable;