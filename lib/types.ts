import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type Post = {
  _id: string;
  slug: string;
  content: MDXRemoteSerializeResult;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  readingTime: string;
  tweets: any[];
};

export type Snippet = {
  _id: string;
  slug: string;
  content: MDXRemoteSerializeResult;
  title: string;
  description: string;
  logo: string;
};

export enum Form {
  Initial,
  Loading,
  Success,
  Error
}

export type FormState = {
  state: Form;
  message?: string;
};

export type Views = {
  total: number;
};

export type Song = {
  songUrl: string;
  artist: string;
  title: string;
};

export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type TopTracks = {
  tracks: Song[];
};

export type GitHub = {
  stars: number;
};

export type DevToArticle = {
  id: number;
  type_of: string;
  title: string;
  description: string;
  published_at: string;
  slug: string;
  path: string;
  url: string;
  page_views_count: number;
  published_timestamp: string;
  positive_reactions_count: number;
  cover_image: string;
  created_at: string;
  reading_time_minutes: number;
};

export type MostViewedDevTo = {
  articles: DevToArticle[];
  stars:number
};