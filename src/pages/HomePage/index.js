import React from 'react'
import styled from 'styled-components'
import Nav from '../../components/Nav'
import Setting from '../../components/Setting'
import Message from '../../components/Message'

const HomePage = () => {

    console.log(new Date());


    return (
        <Container>
            <Setting />
            <PetWrapper>
                <PetImg
                    src='icons/pet_heart.png'
                    alt='pet'
                />
                <MessageWrapper>
                    <Message
                        width='70%'
                        height='80px'
                        backgroundColor='white'
                        color='black'
                        fontSize='20px'
                        fontFamily='BMJUA'
                    >나는 일기를 먹고 자라는 하트야!
                    </Message>
                </MessageWrapper>
            </PetWrapper>
            <Nav />
        </Container>
    )
}

export default HomePage

const Container = styled.main`
  position: relative;
  width: 100%;
  max-width: 768px;
  height: 100vh;
  background-color: orange;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const PetWrapper = styled.div`
    position: absolute;
    width: 80%;
    height: 50vh;
    top: 25vh;
    background-color: purple;
    margin: 0 auto;
`;

const PetImg = styled.img`
    width: 20vh;
    height: 20vh;
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
`;

const MessageWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
`;