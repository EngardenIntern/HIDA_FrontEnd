import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Nav from '../../components/Nav';
import PageTitle from '../../components/PageTitle';
import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/Container';
import axios from '../../api/axios.js'

const DiaryPage = () => {
    const navigate = useNavigate();

    const userId = 1;
    const [diaryList, setDiaryList] = useState([]);

    useEffect(() => {
        fetchDiaryList();
    }, [])

    const fetchDiaryList = async () => {
        const response = await axios.get(`/diary/${userId}`);
        const list = transformData(response.data);
        setDiaryList(list);
    }

    const transformData = (data) => {
        return data
            .map(entry => ({
                date: entry.date,
                title: entry.title,
            }));
    }

    return (
        <Container>
            <PageTitle>일기장</PageTitle>
            <ListWrapper>
                {diaryList.map((diary) => {
                    return (
                        <DiaryItem
                            date={diary.date}
                            title={diary.title}
                        />
                    )
                })}
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
    overflow-y: scroll;
`