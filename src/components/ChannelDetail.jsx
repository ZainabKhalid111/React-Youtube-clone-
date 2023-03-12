import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utilis/FetchApiData';

const ChannelDetail = () => {

  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setvideos] = useState([])

  // obtainning id from the url in the code
  const { id } = useParams();
  // console.log(id);

  console.log(channelDetail, videos, 'detail', ' videos');

  // components render only when id changes
  useEffect(() => {
    // access the specific channel
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setchannelDetail(data?.items[0]));

    // fetch the videos/data of that specific channel

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setvideos(data?.items));
  }, [id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(15deg, rgba(150, 41, 104, 1) 41%, rgba(0, 212, 255, 1) 100%)',
          zIndex: 10,
          height: '300px'
        }}>
        </div>

        <ChannelCard channelDetail={channelDetail} marginTop='-130px' />
      </Box>

      <Box display='flex' justifyContent='center' p='2' style={{ backgroundColor: 'red' }} >
        <Box sx={{mr: {sm: '100px'}}} />
          <Videos videos={videos} />
        
      </Box>

    </Box>
  )
}

export default ChannelDetail