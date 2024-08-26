import React from 'react'
import styled from 'styled-components'

const Message = (props) => {
    const contentStyle = {
        color: props.color,               // 텍스트 색상
        fontSize: props.fontSize,          // 글자 크기
        backgroundColor: props.backgroundColor,
        // fontFamily: props.fontFamily,
    };

    return (
        <MessageText style={contentStyle}>
            {props.children}
        </MessageText>
    );
}

Message.defaultProps = {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    color: 'black',
    fontSize: '20px',
    fontFamily: 'Arial',
    textAlign: 'center',
}

export default Message

const MessageText = styled.p`
  padding: 20px;
  border-radius: 20px;
  text-align: center;
`
