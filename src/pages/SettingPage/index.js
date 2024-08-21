import React from 'react'
import Container from '../../components/Container'
import PageTitle from '../../components/PageTitle'
import Body from '../../components/Body'
import Message from '../../components/Message'
import Nav from '../../components/Nav'
import styled from 'styled-components'

const SettingPage = () => {
  return (
    <Container>
            <PageTitle>설정</PageTitle>
            <Body>
                <MessageWarpper>

                    <Message
                        backgroundColor='#FDF6F0'
                    >개발 중 입니다.
                    </Message>
                </MessageWarpper>
            </Body>
            <Nav />
        </Container>

  )
}

export default SettingPage

const MessageWarpper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFD1D1;
`;