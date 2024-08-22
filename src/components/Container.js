import React from 'react'
import styled from 'styled-components'


const Container = (props) => {
  return (
    <Wrapper>{props.children}</Wrapper>
  )
}

export default Container

const Wrapper = styled.main`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 768px;
  height: 100vh;
  background-color: #FFD1D1;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  pointer-events: ${(props) => (props.isModalOpen ? 'none' : 'auto')};
`;