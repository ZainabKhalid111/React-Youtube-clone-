import React from 'react';
import { Box, Stack } from '@mui/material';
import Videocard from './Videocard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos, direction }) => {
    console.log(videos, 'videos');

    if (!videos?.length) {
        return 'Loading...'
    }
    return (
        <Stack direction={direction || "row"} flexWrap='wrap' justifyContent='start' gap={2}>
            {videos.map((item, index) => (

                <Box key={index} >
                    {item.id.videoId && <Videocard video={item} />}

                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos