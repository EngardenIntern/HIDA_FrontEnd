import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import axios from '../../api/axios.js'



const DeleteModal = (props) => {

  const ref = useRef();
  const userId = localStorage.getItem('userId');
  
//   const sleep = (ms) => {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

  const handleDeleteDiary = async () => {
    props.setDeleteModal(false);
    props.setWaitingModal(true);
    try {
      const response = await axios.delete(`/diary/${userId}/${props.date}`);
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
              <YesBtn
                src='icons/yes.png'
                onClick={
                  handleDeleteDiary
                }
              />
              <NoBtn
                src='icons/no.png'
                onClick={() => props.setDeleteModal(false)}
              />
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
  font-size: 24px;
  margin-top: 15px;
  text-align: center;
`

const SubText = styled.p`
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
  padding: 10px 0;
  border-top: 1px solid #ddd;
  box-sizing: border-box;
  text-align: center;
`


const YesBtn = styled.img`
  width: 40px;
`

const NoBtn = styled.img`
  width: 40px;
`
