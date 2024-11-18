import { styled } from "styled-components";
import { ByttonType } from "./Button";

export const Button = styled.button<ByttonType>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.background ? props.background : '#FFFFF' };
    border-radius: 15px;
    border: 1px solid #8D212D;
    color: #8D212D;
    padding: 10px;
    width: ${(props) => props.width ? `${props.width}px` : 'px'};
    height: ${(props) => props.height ? `${props.height}px` : 'px'};
    font-size: ${(props) => props.fontSize ? `${props.fontSize}px` : '14px' };
    transition:0.3s ease-in-out;
    &:hover{
        transition:0.3s ease-in-out;
        background-color:#8D212D;
        color:white;
    }
`;
