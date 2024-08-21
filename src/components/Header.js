import React from 'react'
import styled from 'styled-components'

const Header = (props) => {
  return (
    <Section>{props.children}</Section>
  )
};

export default Header;


const Section = styled.section`
  
  position: relative;
  background-color: #FDF6F0;
  width: 100%;
  height: 70px;
  top: 30px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between; 
`;
