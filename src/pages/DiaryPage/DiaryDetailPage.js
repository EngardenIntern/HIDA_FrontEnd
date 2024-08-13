
import React, { useEffect, useState } from 'react'
import Container from '../../components/Container'
import Header from '../../components/Header'
import ReturnBtn from '../../components/ReturnBtn'
import CompleteBtn from '../../components/CompleteBtn'
import styled from 'styled-components'
import Body from '../../components/Body'
import Separator from '../../components/Separator'
import Nav from '../../components/Nav'


const DiaryDetailPage = () => {


    const date = "2024-08-08"
    const title = "요즘 같은 날"
    const detail = "아껴둔 말을 되짚어 보고 있어 대뜸 그 말에 너가 지을 표정 궁금해져 난 당장 너에게 가고 싶은 마음이야 요즘 같은 날에 그게 숨겨진다면 거짓말이야 속는 게 아닐까 했어 pretty face에 맞는 걸까 되뇌었지 수십 회 애써 외면해버리고 motivation에 다시 몰입해 보려고 해도 어느새, yeah 확인하고 있는 폰의 채팅창엔 네 이름이 If you don't mean it, baby, sto-stop playin' with me Shawty, tell me you wanna walk the same way, too 왜냐면 맘에 들어 너의 스타일과 작은 tattoos Yeah, 너랑 있을 때면 느껴 좋은 에너지 재미 없어졌어 이제 club에서의 fling 친구들에게 네 얘길 하면 좋아 보인대"


    const [EmotionReply, setEmotionReply] = useState([]);
    const [MotherReply, setMotherReply] = useState("");


    useEffect(() => {
        setEmotionReply([
            { emotion: "JOY", comment: "아!! 폰에서 네 이름을 확인한 순간! 심장이 터질 것 같았어! 정말 같이 걷고 싶어!" },
            { emotion: "SADNESS", comment: "네 마음이 진짜인지 물어봤어... 장난치지 말라고 부탁했는데도 불안해😭 자꾸 확인하고만 있어... 너무 힘들어😔" }
        ]);

        setMotherReply("지금 느끼시는 혼란스러운 감정은 정말 자연스러운 것 같아요. 누군가에게 끌리고, 그 감정을 직면하면서도 다른 일에 집중하기 어려운 것이 나타나네요. 그런 감정은 우리의 진정한 바람을 알려주는 신호일 수 있어요. 조금 더 솔직하게 자신의 감정을 받아들이고, 그 사람과의 관계에서 진정한 마음을 나누어 보세요. 항상 당신의 감정을 존중하는 마음 잊지 마세요!")

    }, []);


    
    return (
        <Container>
            <Header>
                <ReturnBtn />
                <DateWrapper>
                    {date}
                </DateWrapper>
                <CompleteBtn
                    path='/diary/new'
                >
                    수정
                </CompleteBtn>
            </Header>
            <Body>
                <DiaryWrapper>
                    <Title>
                        {title}
                    </Title>
                    <Detail>
                        {detail}
                    </Detail>
                </DiaryWrapper>
                <ReplyWrapper>
                    {EmotionReply.map((reply) => {
                        let imgSrc = '';
                        switch (reply.emotion) {
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

                        console.log("reply", reply.comment);
                        return (
                            <EmotionWrapper key={reply.emotion}>
                                {imgSrc && (
                                    <>
                                        <EmotionImg src={imgSrc} />
                                        <EmotionComment>{reply.comment}</EmotionComment>
                                    </>
                                )}
                            </EmotionWrapper>
                        );
                    })}

                    <MotherWrapper>
                        <MotherComment>

                            {MotherReply}
                        </MotherComment>
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
    font-size: 30px;
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
    font-size: 20px;
    margin: 10px 0;
    overflow-y: scroll;
    width: 80%;
    background-color: wheat;
`

const DiaryWrapper = styled.div`
    width: 100%;
    height: 65%;
    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;

`

const ReplyWrapper = styled.div`
    width: 100%;
    height: 35%;
    background-color: blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    gap: 20px
`
const MotherWrapper = styled.div`
    width: 80%;
    display: flex;
    background-color: lavender;
    position: relative;
    align-items: center;
    border-radius: 20px;
    padding: 0 10px;
`;

const MotherComment = styled.p`
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
    background-color: violet;
    padding: 0 10px;
    gap: 10px;
`

const EmotionImg = styled.img`
    height: 70px;
    width: 70px;
    margin-left: 10px;
`;

const EmotionComment = styled.p`
    font-size: 14px;
`;