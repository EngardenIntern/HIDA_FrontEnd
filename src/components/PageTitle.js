import React from 'react'
import styled from 'styled-components'

const PageTitle = (props) => {

  return (
    <TitleWrapper>
        <Title>{props.children}</Title>
    </TitleWrapper>
  )
}

export default PageTitle

const TitleWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  height: 70px; // 높이
  background-color: skyblue;
  align-items: center; // 수직 중앙
  justify-content: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  display: flex;
`

const Title = styled.h1`
    font-size: 40px;
    color: black;
    margin: 0;
    text-align: center;
`