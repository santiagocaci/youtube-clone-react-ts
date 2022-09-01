import { FC } from 'react';

import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { SearchItem } from 'interfaces';

interface Props {
  video: SearchItem;
}

export const VideoCard: FC<Props> = ({ video }) => {
  const { videoId } = video.id;
  const { thumbnails, title, channelId, channelTitle } = video.snippet;

  return (
    <Card sx={{ width: 358, borderRadius: 0 }}>
      <Link to={`/video/${videoId}`}>
        <CardMedia
          component='img'
          alt={title}
          sx={{ width: 358, height: 200 }}
          image={thumbnails.high.url}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link to={`/video/${videoId}`}>
          <Typography fontWeight='bold' variant='subtitle1' color='white'>
            {title}
          </Typography>
        </Link>
        <Link to={`/channel/${channelId}`}>
          <Typography
            variant='subtitle2'
            color='gray'
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            {channelTitle}
            <CheckCircleIcon sx={{ fontSize: 16, marginLeft: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};
