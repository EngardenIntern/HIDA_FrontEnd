import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'


const CompleteBtn = (props) => {
  console.log(props);
  const navigation = useNavigate();

  return (
    <BtnText
        onClick={() =>navigation(`${props.path}`, {state: {date:props.date, title: props.title, detail: props.detail}})}
        date = {props.date}
        title = {props.title}
        detail = {props.detail}
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
