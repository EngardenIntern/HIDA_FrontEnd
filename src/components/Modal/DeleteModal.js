import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import axios from '../../api/axios.js'



const DeleteModal = (props) => {

  // const ref = useRef();
  
//   const sleep = (ms) => {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

  const handleDeleteDiary = async () => {
    props.setDeleteModal(false);
    props.setWaitingModal(true);
    try {
      const response = await axios.delete(`/diary/${props.date}`);
      console.log('Success',response);
      
      window.location.href = "/diary";
    } catch (err) {
      console.error(err);
    } finally {
      props.setWaitingModal(false);
    }

  }

  return (
    <ModalOverlay>
        <ModalWrapper>
            < Warning
                src='icons/warning.png'
            />
            <Text>{props.date} <br/>일기를 삭제할까요?</Text>
            <SubText>(답글은 복구되지 않아요)</SubText>
            <ReplyWrapper>
              
              <NoBtn
                src='icons/no.png'
                onClick={() => props.setDeleteModal(false)}
              >아니요</NoBtn>
              <YesBtn
                onClick={
                  handleDeleteDiary
                }
              >예</YesBtn>
            </ReplyWrapper>
            
        </ModalWrapper>
    </ModalOverlay>
)
}

export default DeleteModal

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`

const ModalWrapper = styled.div`
  position: relative;
  width: 60%;
  margin: 20px auto;
  padding: 10px;
  background-color: #f3f3f3;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  font-family: 'BMJUA', sans-serif;
  overflow: hidden;
  animation: fadein 1s ease-in-out; fowards;
`

const Text = styled.p`
  line-height: 1;
  font-size: 24px;
  text-align: center;
`

const SubText = styled.p`
  line-height: 2;
  font-size: 16px;
  text-align: center;
` 

const Warning = styled.img`
  width: 40px;
`

const ReplyWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 0 0 0;
  border-top: 1px solid #ddd;
  box-sizing: border-box;
  text-align: center;
`


const YesBtn = styled.button`
  background-color: lightcoral;
  width: 40%;
  height: 100%;
  font-size: 24px;
  font-family: BMJUA;
  color: beige;
  line-height: 3rem;
`

const NoBtn = styled.button`
  font-size: 24px;
  font-family: BMJUA;
  width: 40%;
  height: 100%;
  line-height: 3rem;

`
