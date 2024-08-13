import React from 'react'
import styled from 'styled-components'


const Container = (props) => {
  return (
    <Wrapper>{props.children}</Wrapper>
  )
}

export default Container

const Wrapper = styled.main`
  position: relative;
  width: 100%;
  max-width: 768px;
  height: 100vh;
  background-color: pink;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;