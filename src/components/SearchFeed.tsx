import { Box, Typography, Stack, CircularProgress } from '@mui/material';

import { fetchSearchList } from 'utils';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { Videos } from './Videos';

export const SearchFeed = () => {
  const { searchTerm } = useParams();

  const { data, isLoading } = useQuery(['searchVideos', searchTerm], () =>
    fetchSearchList(searchTerm!)
  );

  return (
    <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
      <Box
        m={2}
        sx={{
          height: {
            xs: 'calc(100vh - 78px)',
            md: 'calc(100vh - 110px)',
          },
          width: { xs: 'calc(100% - 30px)', md: '100%' },
          mb: 4,
          overflowY: 'auto',
        }}
      >
        <Typography variant='h4' pb='20px' fontWeight='bold' color='white'>
          {searchTerm} <span style={{ color: 'red' }}>Videos</span>
        </Typography>
        {isLoading ? (
          <Box
            sx={{
              height: 'calc(100% - 42px)',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Videos videos={data!} />
        )}
      </Box>
    </Stack>
  );
};
