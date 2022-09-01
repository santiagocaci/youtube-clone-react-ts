import { useState, useEffect } from 'react';

import { Box, Typography, Stack, CircularProgress } from '@mui/material';

import { Sidebar } from './Sidebar';
import { Videos } from './Videos';

import { fetchSearchList } from 'utils';
import { useQuery } from '@tanstack/react-query';

export const Feed = () => {
  const [category, setCategory] = useState('New');

  const { data, isLoading } = useQuery(['searchVideos', category], () =>
    fetchSearchList(category)
  );

  return (
    <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { xs: 'auto', md: 'calc(100vh - 78px)' },
          borderRight: '1px solid #3d3d3d',
          px: { xs: 0, md: 2 },
        }}
      >
        <Sidebar category={category} setCategory={setCategory} />
      </Box>
      <Box
        m={2}
        sx={{
          height: {
            xs: 'calc(100vh - 179px)',
            md: 'calc(100vh - 110px)',
          },
          width: { xs: 'calc(100% - 30px)', md: '100%' },
          overflowY: 'auto',
        }}
      >
        <Typography variant='h4' pb='20px' fontWeight='bold' color='white'>
          {category} <span style={{ color: 'red' }}>Videos</span>
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
