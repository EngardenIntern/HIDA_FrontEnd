import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Nav from '../../components/Nav'
import Setting from '../../components/Setting'
import Message from '../../components/Message'
import Container from '../../components/Container'
import axios from '../../api/axios.js'

const HomePage = () => {

    const userId = localStorage.getItem('userId');

    const [count, setCount] = useState(0);

    useEffect(()=> {
        fetchCount();
    }, []);

    const fetchCount = async () => {
        const response = await axios.get(`/user/${userId}`);
        setCount(response.data.diaryCount);
    }

    return (
        <Container>
            <Setting
                count={count}
            />
            <PetWrapper>
                <PetImg
                    src='icons/pet_heart.png'
                    alt='pet'
                />
                <MessageWrapper>
                    <Message
                        width='70%'
                        height='80px'
                        backgroundColor='#FDF6F0'
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

const PetWrapper = styled.div`
    border-radius: 50px;

    position: absolute;
    width: 80%;
    height: 50vh;
    top: 25vh;
    background-color: #FDF6F0;
    margin: 0 auto;
`;

const PetImg = styled.img`
    width: 20vh;
    height: 20vh;
    display: block;
    position: absolute;
    
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 10px;
`;

const MessageWrapper = styled.div`
    border-radius: 50px;

    position: absolute;
    width: 100%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #FDF6F0;
`;