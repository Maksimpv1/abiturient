'use client'

import { useAppSelector } from "@/app/lib/storeHooks";
import { menuData } from "../ProfileMenu/ProfileMenu";
import { useEffect, useState } from "react";

const ProfileContent = () => {    
    const idPage = useAppSelector((state) => state.profile.profilePage)
    const [currentPage, setCurrentPage] = useState<any>()

    useEffect(()=>{
        setCurrentPage(menuData.find((item) => item.id === idPage ))
    },[idPage])

    return(
        <div>
            {currentPage && currentPage.content}
        </div>
    )
}
export default ProfileContent;