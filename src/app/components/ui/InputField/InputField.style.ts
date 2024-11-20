import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;    
    width: 350px;
`;
export const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TextField = styled.input`
    width: 100%;
    height: 50px;
    font-size: 18px;
    color: #8D212D;
    border: 1px solid #B8B8B8;
    transition: 0.2 ease-in-out;
    border-radius: 5px;
    &:hover{
        border: 1px solid #8D212D;
        transition: 0.2 ease-in-out;
    }
    &:focus{
        border: 2px solid #8D212D;
        outline: none;
        transition: 0.2 ease-in-out;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
        -webkit-text-fill-color: #8D212D !important;
    }
`;