export interface ContentRating {}

export interface RegionRestriction {
  blocked: string[];
}

export interface ContentDetails {
  duration: string;
  dimension: string;
  definition: string;
  caption: string;
  licensedContent: boolean;
  regionRestriction: RegionRestriction;
  contentRating: ContentRating;
  projection: string;
}

export interface Localized {
  title: string;
  description: string;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}
export interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
  standard: Default;
  maxres: Default;
}
export interface Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface Item {
  kind: string;
  id: string;
  snippet: Snippet;
  contentDetails: ContentDetails;
  statistics: Statistics;
}

export interface VideoListResponse {
  kind: string;
  items: Item[];
  pageInfo: PageInfo;
}
