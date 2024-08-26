import React, { useEffect } from 'react'
import Container from '../../components/Container'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/axios.js'


const AuthPage = (props) => {

    const navigate = useNavigate();
    const code = new URL(window.location.href).searchParams.get("code"); // 인가코드 뽑아내기

    //인가코드 백으로 보내는 코드
    useEffect(() => {
        const kakaoLogin = async () => {
            await axios.get(`/kakao/login`, {
                params: {
                    code: code,
                },
            }).then((result) => { //백에서 완료후 우리사이트 전용 토큰 넘겨주는게 성공했다면
                localStorage.removeItem('accessToken');
                localStorage.setItem("accessToken", result.data.accessToken);
                navigate("/home");
            });
        };
        kakaoLogin();
    }, [props.history]);


    return (
        <Container>
            <div>로그인 중입니다.</div>
        </Container>
    )
}

export default AuthPage