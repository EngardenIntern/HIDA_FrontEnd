import React, { useEffect, useState } from 'react'
import Container from '../../components/Container'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/axios.js'
import styled from 'styled-components'
import Modal from '../../components/Modal/index.js'



const AuthPage = (props) => {

    const [showModal, setShowModal] = useState(false);

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

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true);
            setTimeout(() => {
                navigate("/");
            }, 3000);
        }, 15000)
        return () => clearTimeout(timer);
    }, [navigate])

    return (
        <Container>
            <TextWrapper>
                로그인 중입니다.
            </TextWrapper>

            {showModal && (
                <Modal
                    text= "로그인 실패"
                    subText="(잠시 후 화면이 이동합니다)"
                />
            )

            }
        </Container>
    )
}

export default AuthPage

const TextWrapper = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
`