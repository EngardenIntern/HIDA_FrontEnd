import React from 'react'
import styled from 'styled-components'

const Setting = () => {

    return (

        <SettingWrapper>
            <Count>
                2 days
            </Count>
            <SettingImg
                src='icons/setting.png'
                alt='setting'
                onClick={() => (window.location.href = "/setting")}
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
  background-color: skyblue;
  align-items: center; // 수직 중앙
  padding: 0 36px;
  letter-spacing: 16px;
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