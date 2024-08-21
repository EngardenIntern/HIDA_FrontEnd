import React from 'react'
import styled from 'styled-components'
import Container from '../../components/Container'
import Body from '../../components/Body'
import Nav from '../../components/Nav'
import PageTitle from '../../components/PageTitle'
import Message from '../../components/Message'


const ChatPage = () => {
    return (
        <Container>
            <PageTitle>채팅</PageTitle>
            <Body>
                <MessageWarpper>

                    <Message>개발 중 입니다.</Message>
                </MessageWarpper>
            </Body>
            <Nav />
        </Container>
    )
}

export default ChatPage

const MessageWarpper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFD1D1;
`;