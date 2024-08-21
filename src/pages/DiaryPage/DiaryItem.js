import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'


const DiaryItem = (props) => {

    const naviagtion = useNavigate();

    const [day, setDay] = useState("");
    const [dateNum, setDateNum] = useState("");
    const [date, setDate] = useState("");
    

    useEffect(() => {
        let dayNum = new Date(props.date).getDay();
        let dateNum = new Date(props.date).getDate();
        setDateNum(dateNum >= 10 ? dateNum : "0" + dateNum);

        switch (dayNum) {
            case 0:
                return setDay('일');
            case 1:
                return setDay('월');
            case 2:
                return setDay('화');
            case 3:
                return setDay('수');
            case 4:
                return setDay('목');
            case 5:
                return setDay('금');
            case 6:
                return setDay('토');
            default:
                return setDay('일');

        }
    }, [props])

    useEffect(() => {
        let year = new Date(props.date).getFullYear();
        let month = new Date(props.date).getMonth() + 1;
        month = month >= 10 ? month : "0" + month;
        setDate(year + "-" + month + "-" + dateNum);
    }, [dateNum])

    return (
        <div>
            <ItemWrapper
                onClick={() => naviagtion("/diary/detail", {state: {date: date, title: props.title}})}
            >
                <DateWrapper>
                    <DiaryDay>{day}</DiaryDay>
                    <DiaryDate>{dateNum}</DiaryDate>
                </DateWrapper>
                <Title>{props.title}</Title>

            </ItemWrapper>
        </div>
    )
};

export default DiaryItem;

const ItemWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 60px;
    margin: 15px auto;
    border-radius: 10px;
    background-color: white;
`;

const DateWrapper = styled.div`
    width: 20%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;
const DiaryDay = styled.p`
    top: 0;
    background-color: #D1E9F6;
    margin: 0;
    border-top-left-radius: 10px;

`;
const DiaryDate = styled.p`
    background-color: #D1E9F6;
    font-size: 22px;
    margin: 0;
    border-bottom-left-radius: 10px;

`;

const Title = styled.p`
    position: absolute;
    height: 100%;
    width: 70%;
    left: 20%;
    margin: 0;
    padding: 0;
    margin-left: 20px;
    bottom: 0;
    font-size: 30px;
    
    display: flex;
    align-items: center;
    
    white-space: nowrap;
    overflow: hidden;
`;
