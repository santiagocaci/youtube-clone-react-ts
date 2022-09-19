import { FC, useMemo } from 'react';

import { Stack, Box } from '@mui/material';

import { ID, SearchItem } from 'interfaces';
import { ChannelCard } from './ChannelCard';
import { VideoCard } from './VideoCard';

interface Props {
  videos: SearchItem[];
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

export const Videos: FC<Props> = ({ videos, direction = 'row' }) => {
  const filterVideosAndChannel = useMemo(
    () =>
      videos.filter(item => {
        const { channelId, videoId } = item.id as ID;
        if (channelId || videoId) return item;
        return undefined;
      }),
    [videos]
  );

  return (
    <Stack
      direction={direction}
      flexWrap='wrap'
      justifyContent='center'
      alignItems='center'
      gap={2}
    >
      {filterVideosAndChannel.map((item, idx) => {
        const { channelId, videoId } = item.id as ID;
        return (
          <Box key={idx}>
            {videoId && <VideoCard video={item} />}
            {channelId && <ChannelCard channel={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};
