'use client'

import Image from 'next/image';
import * as SC from './Header.style'

const Header = () => {
    return (
        <SC.ImgContainer>
            <Image 
                src="/img/logo_univers.png"
                alt="logo"
                width={400}
                height={120}
            />
        </SC.ImgContainer>
    );
};

export default Header;