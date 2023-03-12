import React from 'react'
import channel from "../img/channel.jpg";
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`

const Avatar = styled.img`
    width: 50px;
  height: 50px;
  border-radius: 50%;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px; 
    color: ${({theme}) => theme.text};

`

const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
`

const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.textSoft};
    margin-left: 5px;

`

const Text = styled.span`
    font-size: 14px;
    font-weight: 400;
`

function Comment() {
  return (
    <Container>
        <Avatar src={channel}/>
        <Details>
            <Name>
                vasu gupta <Date>1 day ago</Date>
            </Name>
            <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
        </Details>
    </Container>
  )
}

export default Comment