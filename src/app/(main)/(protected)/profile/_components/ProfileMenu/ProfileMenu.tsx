'use client'

import Button from "@/app/components/ui/Button/Button";
import * as SC from "./ProfileMenu.module"
import { useEffect, useState } from "react";

interface IMenuDate {
    id: number,
    name: string,
}

const ProfileMenu = () => {
    const [activeBtnMenu, setActiveBtnMenu] = useState<number>(0);;

    const menuData: IMenuDate[] = [
        { id: 0 ,name: "Главная"},
        { id: 1 ,name: "Расписания"},
        { id: 2 ,name: "Преподаватели"},
        { id: 3 ,name: "Оценки"},
    ]

    const handleClick = (id: number) => {
        setActiveBtnMenu(id)
    }

    return(
        <SC.MenuContainer>
            {menuData.map((item,index)=>(
                <SC.MenuContainerBtn key={index}>
                    <Button text={item.name} onClick={() => handleClick(item.id)} activeshow={item.id === activeBtnMenu ? "true" : "false"} />
                </SC.MenuContainerBtn>
                
            ))}            
        </SC.MenuContainer>
    )
}

export default ProfileMenu;