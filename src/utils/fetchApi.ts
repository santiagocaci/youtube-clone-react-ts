import axios from 'axios';
import { SearchList } from 'interfaces';

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
