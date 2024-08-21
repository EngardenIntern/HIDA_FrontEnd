import React from 'react'
import styled from 'styled-components'

const Body = (props) => {
  return (
    <Section>
        {props.children}
    </Section>
  )
}

export default Body

const Section = styled.section`
  position: absolute;
  width: 100%;
  height: calc(100vh - 210px); ;
  top: 100px;
  background-color: #FFD1D1;
  display: flex;
  flex-direction: column;
`;