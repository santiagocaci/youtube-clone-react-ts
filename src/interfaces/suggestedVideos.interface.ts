type IDKind = 'youtube#video';

interface ID {
  kind: IDKind;
  videoId: string;
}

type ItemKind = 'youtube#searchResult';

type LiveBroadcastContent = 'none';

interface Default {
  url: string;
  width: number;
  height: number;
}
interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
  standard?: Default;
  maxres?: Default;
}

interface Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: LiveBroadcastContent;
  publishTime: Date;
}
interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface Item {
  kind: ItemKind;
  id: ID;
  snippet?: Snippet;
}

export interface SuggestedVideosResponse {
  kind: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: Item[];
}
