import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from "../components/Card";
import axios from "axios";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Home = () => {

  const [videos,setVideos] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get("http://localhost:8800/api/videos/random");
      setVideos(res.data)
      
    }
    fetchVideos()
  }, [])

  return (
    <Container>
    {videos.map((video) => (
      console.log("print")
    ))}
    </Container>
  )
}

export default Home