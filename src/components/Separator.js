import React from 'react'
import styled from 'styled-components'

const Separator = (props) => {

  return (
    <Line {...props}/>
  )
}

export default Separator

const Line = styled.div`
    display: flex;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: 3px;
    background-color: ${(props) => props.backgroundColor};
`;

Separator.defaultProps = {
    width: '100%',
    height: '5px',
    backgroundColor: 'black',
}