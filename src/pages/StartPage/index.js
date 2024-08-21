import React from 'react'
import Container from '../../components/Container'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const StartPage = () => {

    const navigation = useNavigate();
    return (
        <Container>

            <LogoWrapper>
                <Logo
                    src="/icons/logo.png"
                />
            </LogoWrapper>
            <StartButton
                onClick={() => navigation('/login')}
            ><p
            style={
                {color:"white"}
                }>시작하기</p>
                </StartButton>
            <BottomSubtract
                src="/icons/Subtract.png"
            />
        </Container>
    )
}

export default StartPage

const LogoWrapper = styled.div`
    position: absolute;
    width: 50%;
    top: 20%;
`;

const Logo = styled.img`
    position: absolute;
    width: 100%;
`;

const StartButton = styled.div`
    position: absolute;
    width: 60%;
    height: 8%;
    background-color: #FF9494;
    border-radius: 20px;
    font-size: 24px;
    top: 60%;
    border-color: white;
    font-family: "BMJUA";
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BottomSubtract = styled.img`
    position: absolute;
    width: 100%;
    height: 30%;
    bottom: 0;
`;