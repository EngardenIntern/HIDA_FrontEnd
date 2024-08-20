import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const Setting = (props) => {

    const navigation = useNavigate();

    return (

        <SettingWrapper>
            <Count>
                {props.count} days
            </Count>
            <SettingImg
                src='icons/setting.png'
                alt='setting'
                onClick={() => navigation("/setting")}
            />
        </SettingWrapper>
    );
}

export default Setting


const SettingWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  height: 70px; // 높이
  align-items: center; // 수직 중앙
  padding: 0 36px;
  letter-spacing: 2px;
  z-index: 3;
  display: flex;
`

const Count = styled.div`
    font-size: 24px;
    color: white;
    left: 0;
    margin-right: 10px;
`

const SettingImg = styled.img`
    position: absolute;
    right: 0;
    cursor: pointer;
    width: 30px;
    height: 30px;
    padding: 30px;
`