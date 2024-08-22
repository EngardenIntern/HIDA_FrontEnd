import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import { RingLoader } from 'react-spinners'


const Modal = () => {
    return (
        <ModalOverlay>
            <ModalWrapper>
                < RingLoader
                    size={30}
                />
                <Text>일기를 읽고<br />답글을 생성 중이에요!</Text>
                <SubText>(최대 20초가 소요되어요)</SubText>
            </ModalWrapper>
        </ModalOverlay>
    )
}

export default Modal

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