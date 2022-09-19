import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack, CircularProgress } from '@mui/material';

import { Videos } from './Videos';
import { fetchSuggestedVideos, fetchVideoDetails } from 'utils';

export const VideoDetail = () => {
  const { id = 'hQAHSlTtcmY' } = useParams();
  const { data: videoDetail, isLoading } = useQuery(['videoDetail', id], () =>
    fetchVideoDetails(id)
  );
  const { data: videos, isLoading: isLoadingVideos } = useQuery(
    ['suggestedVideos', id],
    () => fetchSuggestedVideos(id)
  );

  const title = videoDetail?.snippet?.title;
  const channelId = videoDetail?.snippet?.channelId;
  const channelTitle = videoDetail?.snippet?.channelTitle;
  const viewCount = videoDetail?.statistics?.viewCount;
  const likeCount = videoDetail?.statistics?.likeCount;

  return (
    <Box minHeight='calc(100vh - 78px)'>
      {' '}
      {isLoading || isLoadingVideos ? (
        <Box
          width='100%'
          height='calc(100vh - 78px)'
          display='flex'
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress size={80} />
        </Box>
      ) : (
        <Stack direction={{ xs: 'column', md: 'row' }}>
          <Box flex={1}>
            <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className='react-player'
                controls
              />
              <Typography color='white' variant='h5' fontWeight='bold' p={2}>
                {title}
              </Typography>
              <Stack
                direction='row'
                justifyContent='space-between'
                py={1}
                px={2}
                sx={{ color: '#fff' }}
              >
                <Link to={`/channel/${channelId}`}>
                  <Typography variant='subtitle1' color='#fff'>
                    {channelTitle}
                  </Typography>
                </Link>
                <Stack direction='row' gap={2} alignItems='center'>
                  <Typography variant='body1' sx={{ opacity: 0.8 }}>
                    {parseInt(viewCount!).toLocaleString()} views
                  </Typography>
                  <Typography variant='body1' sx={{ opacity: 0.8 }}>
                    {parseInt(likeCount!).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box
            px={{ xs: 0, md: 2 }}
            py={{ xs: 5, md: 1 }}
            // justifyContent='center'
            // alignItems='center'
          >
            <Videos videos={videos!} direction='column' />
          </Box>
        </Stack>
      )}
    </Box>
  );
};
