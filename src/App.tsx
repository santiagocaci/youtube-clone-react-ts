import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Box } from '@mui/material';

import {
  ChannelDetail,
  Feed,
  Navbar,
  SearchFeed,
  VideoDetail,
} from 'components';
import { PROJECT_NAME } from 'utils';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route path={`/${PROJECT_NAME}`} element={<Feed />} />
          <Route
            path={`/${PROJECT_NAME}/video/:id`}
            element={<VideoDetail />}
          />
          <Route
            path={`/${PROJECT_NAME}/channel/:id`}
            element={<ChannelDetail />}
          />
          <Route
            path={`/${PROJECT_NAME}/search/:searchTerm`}
            element={<SearchFeed />}
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
