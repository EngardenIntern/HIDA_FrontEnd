import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Container from '../../components/Container'
import { useLocation, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from "date-fns/locale/ko";
import Separator from '../../components/Separator';
import Header from '../../components/Header';
import ReturnBtn from '../../components/ReturnBtn';
import CompleteBtn from '../../components/CompleteBtn';
import Body from '../../components/Body';
import Nav from '../../components/Nav';

const NewDiaryPage = (props) => {
  
  const navigation = new useNavigate();
  
  
  const location = useLocation();
  console.log('location: ', location);
  const locationTitle = location.state ? location.state.title : '';
  const locationDetail = location.state ? location.state.detail : '';
  const locationDate = location.state ? location.state.date : new Date();

  const [title, setTitle] = useState(locationTitle);
  const [detail, setDetail] = useState(locationDetail);

  const [diaryDate, setDiaryDate] = useState(locationDate);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());


  const handleMonthChange = (date) => {
    setSelectedMonth(date.getMonth());
  };


  return (
    <Container>
      <Header>
        <ReturnBtn/>
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
          path= '/diary'
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
            width = '100%'
            height = '5px'
            backgroundColor='orange'
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
    </Container>
  )
}

export default NewDiaryPage

const DateWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'BMJUA';
  z-index: 9999;
  
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