import { FC, useState } from "react";
import { IItemDesctop } from "../ScheduleItems";
import * as SC from "../ScheduleStyle.style";
import Link from "next/link";
import SmallScreenTime from "./SmallScreenTime";
import TeachersAndGroups from "./TeachersAndGroups";
import MobileModal from "@/app/components/ui/MobileModal/MobileModal";

const ItemMobile: FC<IItemDesctop> = ({ item, type }) => {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleModalOpen = () => {
    setOpenModal(true)
  }
  const handleModalClose = () => {
    setOpenModal(false)
    console.log('закрыл')
  }
   return ( 
    <SC.TableContainer onClick={handleModalOpen}>
      <MobileModal openModal={openModal} onClose={handleModalClose}/>
      <SmallScreenTime
        timeEnd={item.timeEnd}
        timeStart={item.timeStart}
        color={type.color}
      />
      <SC.TableBox>
        <SC.ScheduleText>{item.name}</SC.ScheduleText>
        <SC.ScheduleText>{item.room}</SC.ScheduleText>
      </SC.TableBox>
      <TeachersAndGroups group={item.group} />
    </SC.TableContainer>
  );
};
export default ItemMobile;
