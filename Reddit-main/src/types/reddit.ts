export interface RedditPost {
  id: string;
  title: string;
  author: string;
  subreddit: string;
  score: number;
  num_comments: number;
  num_crossposts:number;
  created_utc: number;
  url: string;
  thumbnail: string;
  selftext: string;
  authorAvatar?: string;
}

export type SortOption = 'hot' | 'new' | 'top' | 'controversial';