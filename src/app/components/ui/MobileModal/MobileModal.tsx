import { FC, useEffect, useState } from "react";
import * as SC from "./MobileModal.style"
import Button from "../Button/Button";

interface IMobileModal {
    openModal: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const MobileModal:FC<IMobileModal> = ({openModal,onClose,children}) => {
    useEffect(() => {
        console.log(openModal)
        if (openModal) {
          console.log('Модальное окно открыто');
        } else {
          console.log('Модальное окно закрыто');
        }
      }, [openModal]);

    return (
        <SC.ModalContainer open={openModal}>
            <SC.ModalShadow open={openModal} onClick={onClose}>
                <SC.ModalWrapper open={openModal}>
                    <Button text={'Закрыть'} onClick={onClose}/>
                </SC.ModalWrapper>
            </SC.ModalShadow>
        </SC.ModalContainer>
    )
}
export default MobileModal;