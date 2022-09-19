import axios from 'axios';
import {
  SearchList,
  SuggestedVideosResponse,
  VideoListResponse,
} from 'interfaces';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_YOUTUBEV3_APIKEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchSearchList = async (category: string) => {
  const { data } = await axios.get<SearchList>(
    `${BASE_URL}/search?part=snippet&q=${category}`,
    options
  );

  return data.items;
};

export const fetchChannelDetails = async (id: string) => {
  const { data } = await axios.get<SearchList>(
    `${BASE_URL}/channels?part=snippet&id=${id}`,
    options
  );
  return data.items[0];
};

export const fetchChannelVideos = async (id: string) => {
  const { data } = await axios.get<SearchList>(
    `${BASE_URL}/search?part=snippet&channelId=${id}&order=date`,
    options
  );
  return data.items;
};

export const fetchVideoDetails = async (id: string) => {
  const { data } = await axios.get<VideoListResponse>(
    `${BASE_URL}/videos?part=snippet,statistics&id=${id}`,
    options
  );
  return data.items[0];
};

export const fetchSuggestedVideos = async (id: string) => {
  const { data } = await axios.get<SearchList>(
    `${BASE_URL}/search?part=snippet&relatedToVideoId=${id}&type=video`,
    options
  );
  return data.items;
};
