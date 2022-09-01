type IDKind = 'youtube#playlist' | 'youtube#video' | 'youtube#channel';

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

interface ID {
  kind: IDKind;
  videoId?: string;
  playlistId?: string;
  channelId?: string;
}

interface Statistics {
  viewCount: string;
  subscriberCount: string;
  hiddenSubscriberCount: boolean;
  videoCount: string;
}

interface Channel {
  title: string;
  description: string;
  keywords: string;
  unsubscribedTrailer: string;
}

interface Image {
  bannerExternalUrl: string;
}

interface BrandingSettings {
  channel: Channel;
  image: Image;
}

export interface SearchItem {
  kind: ItemKind;
  id: ID;
  snippet: Snippet;
  statistics?: Statistics;
  brandingSettings?: BrandingSettings;
}

export interface SearchList {
  kind: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: SearchItem[];
}
