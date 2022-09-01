import { FC, useMemo } from 'react';

import { Stack, Box } from '@mui/material';

import { SearchItem } from 'interfaces';
import { ChannelCard } from './ChannelCard';
import { VideoCard } from './VideoCard';

interface Props {
  videos: SearchItem[];
}

export const Videos: FC<Props> = ({ videos }) => {
  const filterVideosAndChannel = useMemo(
    () => videos.filter(item => item.id.channelId || item.id.videoId),
    [videos]
  );

  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='center' gap={2}>
      {filterVideosAndChannel.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
          {item.id.playlistId && <>popo</>}
        </Box>
      ))}
    </Stack>
  );
};
