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
  height: 80%;
  font-size: 30px;
`;
