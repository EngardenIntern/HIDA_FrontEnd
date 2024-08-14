import React, { useEffect, useState } from 'react'
import Container from '../../components/Container'
import Nav from '../../components/Nav'
import PageTitle from '../../components/PageTitle'
import Body from '../../components/Body'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from 'styled-components'
import { formatDate } from 'date-fns'
import { useNavigate } from 'react-router-dom'

const CalendarPage = () => {

    const [checked, setChecked] = useState([]);
    const navigation = useNavigate();


    useEffect(() => {
        
        setChecked(["2024-08-08", "2024-08-11"]);
    
    }, [])
    

    const tileContent = ({date, view}) => {
        if(view === 'month'){
            const dateString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
            if(checked.includes(dateString)){
                return <StyledDot />;
            }
        }
    };

    const onDateClick = (date) => {
        const dateString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        navigation('/diary/detail', {state: {date: dateString}});
    }
    // 특정 날짜만 활성화
    const tileDisabled = ({ date, view }) => {
        if (view === 'month') {
            const dateString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
            return !checked.includes(dateString); // checked 배열에 포함되지 않은 날짜는 비활성화
        }
        return false;
    };

  return (
    <Container>
        <PageTitle>달력</PageTitle>
        <Body>
            <CalendarWrapper>

            <Calendar
                calendarType="gregory"
                formatDay={(locale, date) => formatDate(date, 'd')}
                formatYear={(locale, date) => formatDate(date, 'yyyy')}
                formatMonthYear={(locale, date) => formatDate(date, 'yyyy-MM')}
                tileContent={tileContent}
                tileDisabled={tileDisabled}  // 특정 날짜만 활성화
                onClickDay={onDateClick}

            />
            </CalendarWrapper>
        </Body>
        <Nav />
    </Container>
  )
}

export default CalendarPage

const CalendarWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .react-calendar {
        width: 100%;
        border: none;
        border-radius: 0.5rem;
        box-shadow: 4px 2px 10px 0px rgba(0, 0, 0, 0.13);
        padding: 3% 5%;
        background-color: white;
    }
    .react-calendar__navigation__label__labelText {
        font-family: "BMJUA";
        font-size: 20px;
    }

    /* 네비게이션 가운데 정렬 */
    .react-calendar__navigation {
        justify-content: center;
    }

    /* 네비게이션 폰트 설정 */
    .react-calendar__navigation button {
        font-weight: 800;
        font-size: 1rem;
    }

    /* 네비게이션 버튼 컬러 */
    .react-calendar__navigation button:focus {
        background-color: white;
    }


    /* 년/월 상단 네비게이션 칸 크기 줄이기 */
    .react-calendar__navigation__label {
        flex-grow: 0 !important;
    }

    /* 요일 밑줄 제거 */
    .react-calendar__month-view__weekdays abbr {
        text-decoration: none;
        font-weight: 800;
    }

    /* 일요일에만 빨간 폰트 */
    .react-calendar__month-view__weekdays__weekday--weekend abbr[title="일요일"] {
        color: red;
    }

    /* 오늘 날짜 폰트 컬러 */
    .react-calendar__tile--now {
        background: none;
        abbr {
        color: orange;
        font-weight: 800;
        }
    }

    /* 네비게이션 월 스타일 적용 */
    .react-calendar__year-view__months__month {
        border-radius: 0.8rem;
        background-color: gold;
        padding: 0;
    }

    /* 네비게이션 현재 월 스타일 적용 */
    .react-calendar__tile--hasActive {
        background-color: red;
        abbr {
        color: white;
        }
    }

    /* 일 날짜 간격 */
    .react-calendar__tile {
        padding: 5px 0px 18px;
        position: relative;
    }

    /* 네비게이션 월 스타일 적용 */
    .react-calendar__year-view__months__month {
        flex: 0 0 calc(33.3333% - 10px) !important;
        margin-inline-start: 5px !important;
        margin-inline-end: 5px !important;
        margin-block-end: 10px;
        padding: 20px 6.6667px;
        font-size: 0.9rem;
        font-weight: 600;
        color: gray;
    }

    /* 선택한 날짜 스타일 적용 */
    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus,
    .react-calendar__tile--active {
        background-color: lightgray;
        border-radius: 0.3rem;
    }
`;

const StyledDot = styled.div`
  background-color: red;
  border-radius: 50%;
  width: 0.8rem;
  height: 0.8rem;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
`;
