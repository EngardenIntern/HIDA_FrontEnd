import React from 'react'
import styled from 'styled-components'
import Container from '../../components/Container'
import { KAKAO_AUTH_URL } from '../../api/OAuth'

const LoginPage = () => {
    
    return (
    <Container>
        <Announce>
            <Title>로그인</Title>
            <subTitle>로그인 혹은 회원가입을 진행해주세요.</subTitle>
        </Announce>

        <KakaoLoginButton
            src="/icons/kakaoLogin.png"
            onClick={() => (window.location.href = `${KAKAO_AUTH_URL}`)}
        />
    </Container>
  )
}

export default LoginPage

const Announce = styled.div`
    position: absolute;
    width: 100%;
    top: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const Title = styled.p`
    font-size: 40px;
`;
const subTitle = styled.p`
    font-size: 30px;
`;

const KakaoLoginButton = styled.img`
    position: absolute;
    width: 70%;
    top: 70%;
`;