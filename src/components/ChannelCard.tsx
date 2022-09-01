import { FC } from 'react';

import { Box, CardContent, CardMedia, Typography } from '@mui/material';

import { SearchItem } from 'interfaces';
import { Link } from 'react-router-dom';

interface Props {
  channel: SearchItem;
}

export const ChannelCard: FC<Props> = ({ channel }) => {
  const { channelId } = channel.id;
  const { thumbnails, channelTitle } = channel.snippet;
  return (
    <Box
      sx={{
        width: 358,
        height: '346px',
        boxShadow: 'none',
        borderRadius: '20px',
      }}
    >
      <Link to={`/channel/${channelId}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <CardMedia
            component='img'
            alt={channelTitle}
            image={thumbnails.high.url}
            sx={{ borderRadius: '100%', width: '250px', mb: 2 }}
          />
          <Typography variant='h6'>{channelTitle}</Typography>
          {channel.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channel.statistics?.subscriberCount).toLocaleString()}{' '}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};
