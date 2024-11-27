import { styled } from "styled-components";

export const GroupsContainer = styled.div`
    display: flex;
    width: 100%;
    margin:20px auto 0 auto;
`;

export const GroupContainer = styled.div`
    display: flex;
    border-radius: 20px;
    width: 100px;
    justify-content: space-between;
    background-color: #8D5057;
    align-items: center;
    height: 35px;
    padding: 0 10px;
    margin-right: 10px;
    transition: 0.3s ease-in-out;
    &:hover{        
        transition: 0.3s ease-in-out;
        background-color: #8D5057;
        background-color: #8d212d;
    }
`;

export const Text = styled.p`
    color: #FFFFFF;
`;