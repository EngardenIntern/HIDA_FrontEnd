
import React, { useEffect, useState } from 'react'
import Container from '../../components/Container'
import Header from '../../components/Header'
import ReturnBtn from '../../components/ReturnBtn'
import CompleteBtn from '../../components/CompleteBtn'
import styled from 'styled-components'
import Body from '../../components/Body'
import Separator from '../../components/Separator'
import Nav from '../../components/Nav'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from '../../api/axios.js'


const DiaryDetailPage = () => {

    const location = useLocation();
    const navigation = useNavigate();
    const date = `${location.state.date}`
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");
    const [EmotionComment, setEmotionComment] = useState([]);
    const [MotherComment, setMotherComment] = useState("");

    const [diary, setDiary] = useState("");

    useEffect(() => {
      fetchDiary();
    }, [])

    useEffect(() => {
        setTitle(diary.title);
        setDetail(diary.detail);
    }, [diary])
    
    const fetchDiary = async () => {
        const response = await axios.get(`/diary/${date}`);
        console.log('response', response);
        const diary = transformData(response.data);
        setDiary(diary);

        const emotionsJson = JSON.parse(response.data.emotions);
        const emotions = transformEmotions(emotionsJson);
        console.log('emotions', emotions);
        setEmotionComment(emotions);
        setMotherComment(response.data.mom);
    }

    const transformData = (data) => {
        return {
            date: data.date,
            aiStatus: data.aiStatus,
            userName: data.userName,
            title: data.title,
            detail: data.detail,
        };
    }

    const transformEmotions = (data) => {
        return data.map(entry => ({
            emotion: entry.emotion,
            comment: entry.comment,
        }))
    }

    const handleUpdate = () => {
        navigation('/diary/new', {state: {date:date, title:title, detail:detail, method:'update'}});
    };
    return (
        <Container>
            <Header>
                <ReturnBtn />
                <DateWrapper>
                    {date}
                </DateWrapper>
                <CompleteBtn
                    onClick={handleUpdate}
                >
                    수정
                </CompleteBtn>
            </Header>
            <Body>
                <Separator
                    width='100%'
                    height='5px'
                    backgroundColor='#FFD1D1'
                />
                <DiaryWrapper>
                    <Title>
                        {title}
                    </Title>
                    <Detail>
                        {(detail || '').split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </Detail>
                </DiaryWrapper><Separator
                    width='100%'
                    height='5px'
                    backgroundColor='#FFD1D1'
                />
                <ReplyWrapper>
                    
                    {EmotionComment.map((comment) => {
                        let imgSrc = '';
                        switch (comment.emotion) {
                            case 'JOY':
                                imgSrc = '/images/joy.png';
                                break;
                            case 'SADNESS':
                                imgSrc = '/images/sadness.png';
                                break;
                            case 'ANGER':
                                imgSrc = '/images/anger.png';
                                break;
                            case 'FEAR':
                                imgSrc = '/images/fear.png';
                                break;
                            default:
                                break;
                        }

                        return (
                            <EmotionWrapper key={comment.emotion}>
                                {imgSrc && (
                                    <>
                                        <EmotionImg src={imgSrc} />
                                        <Emotion>{comment.comment}</Emotion>
                                    </>
                                )}
                            </EmotionWrapper>
                        );
                    })}

                    <MotherWrapper>
                        <Mother>

                            {MotherComment}
                        </Mother>
                        <MotherImg
                            src='/images/mother.png'
                        />
                    </MotherWrapper>

                </ReplyWrapper>
            </Body>
            <Nav />
        </Container>
    )
}

export default DiaryDetailPage

const DateWrapper = styled.p`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.6rem;
    font-family: 'BMJUA';
    color: black;
`

const Title = styled.p`
    font-size: 30px;
    margin-top: 10px;
    background-color: powderblue;
    text-align: center;
    width: 80%;
`

const Detail = styled.p`
    font-size: 16px;
    margin: 10px 10px;
    padding: 10px 15px;
    overflow-y: auto;
    border-radius: 5px;
    width: 80%;
    background-color: white;
`

const DiaryWrapper = styled.div`
    width: 100%;
    height: 65%;
    background-color: #FFD1D1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;

`

const ReplyWrapper = styled.div`
    width: 100%;
    height: 35%;
    background-color: #FFD1D1;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    gap: 10px;
    padding: 10px 0px;
`
const MotherWrapper = styled.div`
    width: 80%;
    display: flex;
    background-color: white;
    position: relative;
    align-items: center;
    border-radius: 20px;
    padding: 10px 10px;
    margin 5px;
`;

const Mother = styled.p`
    font-size: 14px;
`;
const MotherImg = styled.img`
    height: 70px;
`;

const EmotionWrapper = styled.div`
    width: 80%;
    display: flex;
    position: relative;
    align-items: center;
    border-radius: 20px;
    background-color: white;
    padding: 0 10px;
`;

const EmotionImg = styled.img`
    height: 70px;
    width: 70px;
    margin: 10px 10px 10px 0px;
`;

const Emotion = styled.p`
    font-size: 14px;
`;