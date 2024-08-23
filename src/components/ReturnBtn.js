import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';


const ReturnBtn = () => {

    const navigation = useNavigate();
    
  return (
    <BtnImg
          src='/icons/return.png'
          onClick={() => navigation(-1)}
    />
  )
}

export default ReturnBtn


const BtnImg = styled.img`
  // position: absolute;
  height: 50%;
`