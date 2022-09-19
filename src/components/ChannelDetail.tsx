import { useParams } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';

import { Videos } from './Videos';
import { ChannelCard } from './ChannelCard';
import { useQuery } from '@tanstack/react-query';
import { fetchChannelDetails, fetchChannelVideos } from 'utils';

export const ChannelDetail = () => {
  const { id } = useParams();
  const { data: channelDetail, isLoading: isLoadingDetail } = useQuery(
    ['channelDetail', id],
    () => fetchChannelDetails(id!)
  );

  const { data: channelVideos, isLoading: isLoadingVideos } = useQuery(
    ['channelVideos', id],
    () => fetchChannelVideos(id!)
  );

  return (
    <Box sx={{ minHeight: 'calc(100vh - 78px)' }}>
      {isLoadingDetail || isLoadingVideos ? (
        <Box
          sx={{
            width: '100%',
            height: 'calc(100vh - 78px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress size={100} />
        </Box>
      ) : (
        <Box>
          <Box
            sx={{
              background:
                'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,78,1) 16%, rgba(0,212,255,1) 100%)',
              width: '100%',
              height: { xs: '150px', md: '200px' },
              // position: 'absolute',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: { xs: '100px', md: '150px' },
                left: 'calc(50% - 103.5px)',
              }}
            >
              <ChannelCard channel={channelDetail!} imageSize={150} />
            </Box>
          </Box>
          <Box sx={{ mx: { sm: '10px', md: '100px' }, pb: '40px' }}>
            <Box
              sx={{
                width: '100%',
                mt: '150px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mr: { sm: '100px' },
              }}
            >
              <Videos videos={channelVideos!} />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
