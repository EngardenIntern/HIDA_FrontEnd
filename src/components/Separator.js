import React from 'react'
import styled from 'styled-components'

const Separator = (props) => {
    console.log('props', props);

  return (
    <Line />
  )
}

export default Separator

const Line = styled.div`
    display: flex;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: 3px;
    background-color: ${(props) => props.backgroundColor};
    z-index: 10;
    left: 50%;
    transform: translateX(-50%);
`;

Separator.defaultProps = {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
}