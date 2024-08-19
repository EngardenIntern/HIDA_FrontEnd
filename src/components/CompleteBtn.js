import React from 'react'
import styled from 'styled-components'


const CompleteBtn = (props) => {
  return (
    <BtnText
        onClick={props.onClick}
    >
        {props.children}
    </BtnText>
  )
}

export default CompleteBtn

const BtnText = styled.div`
  position: absolute;
  right: 10px;
  height: 80%;
  padding: 0;
  margin: 0;
  font-size: 30px;
`;
