'use client'

import React from "react";
import Facebook from "@/app/components/ui/icons/Facebook";
import * as SC from "./Footer.style"
import Instagram from "@/app/components/ui/icons/Instagram";
import Vk from "@/app/components/ui/icons/Vk";
import Telegram from "@/app/components/ui/icons/Telegram";
import Youtube from "@/app/components/ui/icons/Youtube";
interface IIcons {
    name:React.ReactNode;
}
const Footer = () => {
    const icons:IIcons[] = [
       { name:<Facebook/>},
       { name:<Instagram/>},
       { name:<Vk/>},
       { name:<Telegram/>},
       { name:<Youtube/>}
]
    return(
        <SC.Container>
            {icons.map((item, index)=>(
                <SC.ImgBox key={index}>
                    {item.name}
                </SC.ImgBox>
            ))}
        </SC.Container>
    )
} 

export default Footer;