import React from 'react'
import Container from '../../components/Container'
import PageTitle from '../../components/PageTitle'
import Body from '../../components/Body'
import Message from '../../components/Message'
import Nav from '../../components/Nav'
import styled from 'styled-components'
import { logout } from '../../api/axios'
const SettingPage = () => {

    const handleLogout = async () => {
        await logout();
        window.location.href = '/';
    }

    return (
        <Container>
            <PageTitle>설정</PageTitle>
            <Body>
                <MessageWarpper>
                    <LogoutBtn

                        onClick={handleLogout}
                    >
                        로그아웃
                    </LogoutBtn>
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
    flex-direction: column;
    gap: 80px;
    
`;

const LogoutBtn = styled.button`
    border-radius: 20px;
    font-size: 20px;
    background-color=#FDF6F0;
    padding: 20px;
    border-radius: 20px;
    text-align: center;
    font-family: BMJUA;
    border: none;
`