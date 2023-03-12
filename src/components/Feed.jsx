import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Videos from './Videos';
import SideBar from './SideBar';
import { fetchFromAPI } from '../utilis/FetchApiData';


const Feed = () => {


  const [selectedCategory, setselectedCategory] = useState('New');
  const [videos, setvideos] = useState([])

  useEffect(() => {
   fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
   
    .then ((data) => setvideos(data.items));

  }, [selectedCategory]) 

  return (
    <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }}>

      <Box sx={{ height: { xs: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { xs: 0, md: 2 } }}>

        <SideBar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />

        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }} textAlign='center' >
          copyright@2023
        </Typography>
      </Box>

      <Box p={2} sx={{
        overflowY: 'auto',
        height: '90vh',
        flex: 2
      }}>
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{ color: 'white' }}
        >
          {selectedCategory} <span style={{ color: '#F31503' }}>
            Videos
          </span>
        </Typography>

        <Videos videos={videos} />
      </Box>



    </Stack>
  )
}

export default Feed