import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'

const Nav = () => {

    const {pathname} = useLocation();

    const [clicked1, setClicked1] = useState(false);
    const [clicked2, setClicked2] = useState(false);
    const [clicked3, setClicked3] = useState(false);
    const [clicked4, setClicked4] = useState(false);


    useEffect(() => {
      if(pathname === '/home'){
        setClicked1(true);
        setClicked2(false);
        setClicked3(false);
        setClicked4(false);
      } else if(pathname === '/diary'){
        setClicked1(false);
        setClicked2(true);
        setClicked3(false);
        setClicked4(false);
      }
    
      
    }, [pathname])
    

    return (
        <NavWrapper>
            <NavButton>
                <NavImg
                    src='/icons/heart.png'
                    alt='heart'
                    onClick={() => (window.location.href = "/home")}
                    clicked={clicked1}
                />
            </NavButton>
            <NavButton>
                <NavImg
                    src='/icons/diary.png'
                    alt='diary'
                    onClick={() => (window.location.href = "/diary")}
                    clicked={clicked2}
                />
            </NavButton>
            <NavButton>
                <NavImg
                    src='/icons/calendar.png'
                    alt='calendar'
                    onClick={() => (window.location.href = "/home")}
                />
            </NavButton>
            <NavButton>
                <NavImg
                    src='/icons/chat.png'
                    alt='chat'
                    onClick={() => (window.location.href = "/home")}
                />
            </NavButton>
            
        </NavWrapper>
    )
}

export default Nav

const NavWrapper = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px; // 높이
  background-color: #FCF2CE;
  display: flex;
  justify-content: space-between; // 아이템이 3개가 있으면, 2개는 가장자리, 1개는 중간
  align-items: center; // 수직 중앙
  padding: 20px;
  letter-spacing: 16px;
  z-index: 3;
`;

const NavButton = styled.div`
    width: 50px;
    height: 50px;
`;

const NavImg = styled.img`
    width: 100%;
    height: 100%;
    opacity: ${props => props.clicked ? 1 : 0.5};
    font-family: 'sans-serif';
    letter-spacing: 2px;
`;

