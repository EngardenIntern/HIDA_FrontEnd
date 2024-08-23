import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Container from '../../components/Container'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from "date-fns/locale/ko";
import Separator from '../../components/Separator';
import Header from '../../components/Header';
import ReturnBtn from '../../components/ReturnBtn';
import CompleteBtn from '../../components/CompleteBtn';
import Body from '../../components/Body';
import Nav from '../../components/Nav';
import axios from '../../api/axios.js'
import Modal from '../../components/Modal/index.js';


const NewDiaryPage = (props) => {

  const navigation = new useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const userId = localStorage.getItem('userId');

  const location = useLocation();
  const locationTitle = location.state ? location.state.title : '';
  const locationDetail = location.state ? location.state.detail : '';
  const locationDate = location.state ? location.state.date : new Date();

  const [title, setTitle] = useState(locationTitle);
  const [detail, setDetail] = useState(locationDetail);
  const [diaryDate, setDiaryDate] = useState(locationDate); // DATE형
  const [date, setDate] = useState(''); // String형
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());


  const handleMonthChange = (date) => {
    setSelectedMonth(date.getMonth());
  };


  // diaryDate가 변경될 때마다 date 상태를 업데이트
  useEffect(() => {
    if (diaryDate instanceof Date && !isNaN(diaryDate)) {
      const formattedDate = diaryDate.toISOString().split('T')[0];
      setDate(formattedDate);
    } else {
      setDate(diaryDate);
    }
  }, [diaryDate]);

  // date가 변경될 때마다 데이터를 가져옴
  useEffect(() => {
    if (date) {
      fetchDayDiary(date);
    }
  }, [date]);

  const fetchDayDiary = async (selectedDate) => {
    try{
      console.log('date', selectedDate);
      const response = await axios.get(`/diary/${userId}/${selectedDate}`);
      console.log('response', response);
      const diary = transformData(response.data);
      setTitle(diary.title);
      setDetail(diary.detail);
    } catch {
      setTitle('');
      setDetail('');
      console.log("해당 날짜에는 데이터가 없습니다.");
      return ;
    }
  }
  const transformData = (data) => {
    return {
      title: data.title || '',
      detail: data.detail || '',
    };
  }


  const handleComplete = async () => {
    setIsModalOpen(true);

    try {
        const createResopnse = await axios.post(`/diary`, {
          userId: userId,
          title: title,
          detail: detail,
          diaryDate: date,
        });
        console.log('Success', createResopnse)
        navigation("/diary/detail", {state: {date: date}});
    } catch (error) {
        console.error('Request Error:', error);
    } finally {
        setIsModalOpen(false);
    }
  };



  return (
    <Container isModalOpen={isModalOpen}>
      <Header>
        <ReturnBtn />
        <DateWrapper>
          <DatePicker
            selected={diaryDate}
            onChange={(date) => setDiaryDate(date)}
            locale={ko}
            dateFormat="MM월 dd일"
            className='input-datepicker'
            closeOnScroll={true}
            onMonthChange={handleMonthChange}
            font-family="BMJUA"
          >
            일기를 작성할 날짜를 선택해주세요.
          </DatePicker>
        </DateWrapper>
        <CompleteBtn
          onClick={handleComplete}
        >
          완료
        </CompleteBtn>
      </Header>

      <Body>
        <Form>
          <TitleInput
            type='text'
            value={title ?? ''}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='제목을 입력해주세요.(최대 30자)'
            required={true}
            maxLength={30}
            style={{ fontFamily: 'BMJUA' }}
          />
          <Separator
            width='100%'
            height='5px'
            backgroundColor='#FFD1D1'
          />
          <DetailInput
            value={detail ?? ''}
            onChange={(e) => setDetail(e.target.value)}
            placeholder='내용을 입력해주세요.(최대 500자)'
            required={true}
            maxLength={500}
            style={{ fontFamily: 'BMJUA' }}
          />
        </Form>
      </Body>
      <Nav />

      {isModalOpen && (
        <Modal
          text= "일기를 생성 중이에요."
          subText= "(최대 20초가 소요되어요)"
        />
      )}
    </Container>
  )
}

export default NewDiaryPage

const DateWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'BMJUA';
  z-index: 20;
  
  .react-datepicker__input-container {
    .input-datepicker {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
      font-size: 30px;
      font-family: 'BMJUA';
      background-color: transparent;
      border-block: none;
    }
  }
`;

const TitleInput = styled.input`
  width: 100%;
  height: 15%;
  box-sizing: border-box;
  font-size: 24px
`;

const DetailInput = styled.textarea`
  bottom: 0px;
  width: 100%;
  box-sizing: border-box;
  height: calc(85% - 5px);
  font-size: 24px;
`;

const Form = styled.form`
  height: 100%;
`;