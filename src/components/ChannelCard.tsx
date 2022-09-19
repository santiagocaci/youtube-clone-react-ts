import { FC } from 'react';

import { Box, CardContent, CardMedia, Typography } from '@mui/material';

import { ID, SearchItem } from 'interfaces';
import { Link } from 'react-router-dom';

interface Props {
  channel: SearchItem;
  imageSize?: number;
}

export const ChannelCard: FC<Props> = ({ channel, imageSize = '250' }) => {
  const { channelId } = channel.id as ID;
  const { thumbnails, channelTitle, title } = channel.snippet;
  console.log(thumbnails.medium.url);

  return (
    <Box
      sx={{
        width: imageSize !== '250' ? 'auto' : 358,
        height: '346px',
        boxShadow: 'none',
        borderRadius: '20px',
      }}
    >
      <Link to={`/channel/${channelId || channel.id}`}>
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
            image={thumbnails.medium.url || thumbnails.high.url}
            sx={{ borderRadius: '100%', width: `${imageSize}px`, mb: 2 }}
          />
          <Typography variant='h6'>{title}</Typography>
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
