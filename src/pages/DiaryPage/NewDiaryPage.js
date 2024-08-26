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
    try {
      console.log('date', selectedDate);
      const response = await axios.get(`/diary/${selectedDate}`);
      console.log('response', response);
      const diary = transformData(response.data);
      setTitle(diary.title);
      setDetail(diary.detail);
    } catch {
      setTitle('');
      setDetail('');
      console.log("해당 날짜에는 데이터가 없습니다.");
      return;
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
        title: title,
        detail: detail,
        diaryDate: date,
      });
      console.log('Success', createResopnse)
      navigation("/diary/detail", { state: { date: date } });
    } catch (error) {
      console.error('Request Error:', error);
    } finally {
      setIsModalOpen(false);
    }
  };



  return (
    <Container isModalOpen={isModalOpen}>
      <Header>
        <ReturnBtn
          style={{
            marginLeft: '10px',
          }}
        />
        <DateWrapper>
            <DatePicker
              selected={diaryDate}
              onChange={(date) => setDiaryDate(date)}
              locale="ko"
              dateFormat="MM월 dd일"
              className="input-datepicker"
              closeOnScroll={true}
              onMonthChange={handleMonthChange}
              customInput={<CustomInput />}
            />
        </DateWrapper>
        <CompleteBtn
          onClick={handleComplete}
          style={{
            marginRight: '10px',
          }}
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
          text="일기를 생성 중이에요."
          subText="(최대 20초가 소요되어요)"
        />
      )}
    </Container>
  )
}

export default NewDiaryPage

const DateWrapper = styled.div`
  width: 60%;
  font-family: 'BMJUA';
  z-index: 20;

  .react-datepicker__input-container {
    .input-datepicker {
      width: 100%;
      padding: 10px 20px 10px 0;
      border-radius: 5px;
      border: 1px solid #ccc;
      font-size: 30px;
      background-color: transparent;
      text-align: center;
      font-family: 'BMJUA';
    }
  }
`;

const CustomInputWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  .calendar-icon {
    position: absolute;
    top: 50%;
    right: 5px; /* 아이콘을 오른쪽 끝으로 배치 */
    transform: translateY(-50%);
    width: 24px; /* 아이콘 크기 */
    height: 24px;
    pointer-events: none;
    background-image: url('/icons/downArrow.png'); /* 아이콘 이미지 경로 */
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <CustomInputWrapper>
    <div className="calendar-icon" />
    <input
      className="input-datepicker"
      onClick={onClick}
      ref={ref}
      value={value}
      readOnly
    />
  </CustomInputWrapper>
));


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