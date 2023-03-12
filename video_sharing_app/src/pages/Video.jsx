import React from 'react';
import styled from 'styled-components';
import img from "../img/temp.jpg";
import channel from "../img/channel.jpg";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ReplySharpIcon from '@mui/icons-material/ReplySharp';
import Comments from '../components/Comments';
import Card from "../components/Card";



const Container = styled.div`
  display: flex;
  gap: 24px;
`
const Content = styled.div`
  flex: 5;
`
const VideoWrapper = styled.div`
  
`

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({theme}) => theme.text}
`

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Info = styled.span`
color: ${({theme}) => theme.textSoft};
`

const Buttons = styled.div`
  display: flex;
  gap: 20px;
color: ${({theme}) => theme.text};

`

const Button = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`

const Hr = styled.hr`
  border: 0.5px solid ${({theme}) => theme.soft};
`

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const ChannelDetail = styled.div`
  color: ${({theme}) => theme.text};
  
`

const ChannelName = styled.span`
  font-weight: 500;
`

const Description = styled.p`
  font-size: 14px;
`

const Recommandation = styled.div`
  flex: 2px;
`


const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720"
            src={img}
            title="youtube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-writer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>Test video</Title>
        <Details>
          <Info>7,948,154 views . jun 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpAltIcon/> 123
            </Button>
            <Button>
              <ReplySharpIcon/> Share
            </Button>
          </Buttons>
        </Details>
        <Hr/>
        <Channel>
          <ChannelInfo>
            <Image src={channel}/>
            <ChannelDetail>
              <ChannelName>Vasu Dev</ChannelName>
              <Description>
                my name is vasu gupta im very oogdoggd 
                my name is vasu gupta im very oogdoggd 
                my name is vasu gupta im very oogdoggd 
                my name is vasu gupta im very oogdoggd 
              </Description>
            </ChannelDetail>
          </ChannelInfo>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Recommandation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommandation>
    </Container>
  )
}

export default Video