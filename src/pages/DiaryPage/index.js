import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Nav from '../../components/Nav';
import PageTitle from '../../components/PageTitle';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/Container';
import axios from '../../api/axios.js'
import DiaryItem from '../../components/Diary/DiaryItem.js';
import DeleteModal from '../../components/Modal/DeleteModal.js';
import Modal from '../../components/Modal/index.js';

const DiaryPage = () => {
    const navigate = useNavigate();

    const userId = localStorage.getItem('userId');
    const [diaryList, setDiaryList] = useState([]);

    const [deleteModal, setDeleteModal] = useState(false);
    const [waitingModal, setWaitingModal] = useState(false);
    const [deleteDate, setDeleteDate] = useState('');

    
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
            .sort((a, b) => new Date(b.date) - new Date(a.date))
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
                            setDeleteModal={setDeleteModal}
                            setDeleteDate={setDeleteDate}
                        />
                    )
                })}
            </ListWrapper>
            <PlusImg
                src='icons/plus.png'
                onClick={() => (navigate('/diary/new'))}
            />
            <Nav />

            {deleteModal && 
                <DeleteModal
                    date={deleteDate}
                    setDeleteModal={setDeleteModal}
                    setWaitingModal={setWaitingModal}
                />
            }
            {waitingModal && 
                <Modal
                    text= "일기를 삭제 중이에요."
                    subText="(최대 20초가 소요되어요)"
                />
            }
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
    background-color: #FFD1D1;
    display: flex;
    flex-direction: column-reverse;
    overflow-y: auto;
`