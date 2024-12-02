import styled from "styled-components";

export const ScheduleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ScheduleContainerWeek = styled.div`
    display: flex;
    margin-top: 20px;
    flex-direction: column;
`;

export const DayContainer = styled.div`
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    background-color:#F0EFED ;
    border-radius: 15px;
`;

export const DayText = styled.p`
    font-size: 18px;
    text-align: center;
`;
export const ScheduleItemContainer = styled.div`
    display: flex;
    margin: 5px 0;
    justify-content: center;
    align-items: center;
    height: 30px;
`;

export const ScheduleItemBox = styled.div`
    display: flex;
    margin: 0 15px;
    justify-content: center;
    width: 120px;
`;
export const ItemTypeColor = styled.span<{bg?:string}>`
    display: block;
    border-radius: 5px;
    height: 100%;
    border: 2px solid ${({bg})=> bg};
`;
export const ScheduleItemInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ScheduleText = styled.p`
    text-align: start;
`;

