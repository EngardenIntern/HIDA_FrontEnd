import React from 'react'
import styled from 'styled-components'
import Nav from '../../components/Nav';
import PageTitle from '../../components/PageTitle';
import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/Container';

const DiaryPage = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <PageTitle>일기장</PageTitle>
            <ListWrapper>
                <DiaryItem
                    date='2024-08-9'
                    title='비가 와 오랜만에'
                ></DiaryItem>
                <DiaryItem
                    date='2024-08-10'
                    title='오늘은 내 생일이야 즐거워 완전'
                ></DiaryItem>
                <DiaryItem
                    date='2024-08-11'
                    title='맘마미아'
                ></DiaryItem>
                <DiaryItem
                    date='2024-08-12'
                    title='효니최고!!!!'
                ></DiaryItem>
            </ListWrapper>
            <PlusImg
                src='icons/plus.png'
                onClick={() => (navigate('/diary/new'))}
            />
            <Nav />
        </Container>
    )
}

export default DiaryPage


const PlusImg = styled.img`
    position: absolute;
    width: 7vh;
    height: 7vh;
    bottom: 120px;
`

const ListWrapper = styled.div`
    position: absolute;
    width: 90%;
    height: calc((100vh - (100px + 120px + 7vh)));
    top: 100px;
    background-color: green;
    display: flex;
    flex-direction: column-reverse;
`