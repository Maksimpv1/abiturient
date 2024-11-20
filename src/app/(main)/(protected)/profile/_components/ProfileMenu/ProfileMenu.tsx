"use client";

import Button from "@/app/components/ui/Button/Button";
import * as SC from "./ProfileMenu.module";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/app/lib/storeHooks";
import { setProfilePage } from "@/app/lib/store/profileSlice/profileSlice";
import ProfileShcedule from "../ProfileShcedule/ProfileShcedule";
import ProfileMain from "../ProfileMain/ProfileMain";
import ProfileTeachers from "../ProfileTeachers/ProfileTeachers";
import ProfileMarks from "../ProfileMarks/ProfileMarks";

interface IMenuDate {
  id: number;
  name: string;
  content: React.ReactNode;
}

export const menuData: IMenuDate[] = [
  { id: 0, name: "Главная", content: <ProfileMain/>},
  { id: 1, name: "Расписания", content: <ProfileShcedule/>},
  { id: 2, name: "Преподаватели", content: <ProfileTeachers/>},
  { id: 3, name: "Оценки", content: <ProfileMarks/>},
];

const ProfileMenu = () => {

  const dispatch = useAppDispatch();

  const [activeBtnMenu, setActiveBtnMenu] = useState<number>(0);

  const handleClick = async(id: number) => {
    setActiveBtnMenu(id);
    try{
      await dispatch(setProfilePage({id}))
    }catch(error){
      console.log((error as Error).message);
    }
  };

  return (
    <SC.MenuContainer>
      {menuData.map((item, index) => (
        <SC.MenuContainerBtn key={index}>
          <Button
            text={item.name}
            onClick={() => handleClick(item.id)}
            activeshow={item.id === activeBtnMenu ? "true" : "false"}
          />
        </SC.MenuContainerBtn>
      ))}
    </SC.MenuContainer>
  );
};

export default ProfileMenu;
