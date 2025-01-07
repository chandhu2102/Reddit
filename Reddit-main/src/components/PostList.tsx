import React from 'react';
import { ArrowUp, ArrowDown, MessageSquare, Share } from 'lucide-react';
import type { RedditPost } from '../types/reddit';

interface PostListProps {
  posts: RedditPost[];
  isLoading: boolean;
}

export default function PostList({ posts, isLoading }: PostListProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-white p-4 rounded-lg animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <article key={post.id} className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-start">
          <div className="flex justify-around w-[650px]">
            <div className="start1 pr-2">
              {post.thumbnail && post.thumbnail !== 'self' && (
                <img
                  src={post.thumbnail}
                  alt={post.title.slice(0,20)}
                  className="mb-4 rounded-lg max-h-96 object-cover size-32"
                />
              )}
            </div>
            <div className="flex flex-col justify-between items-start gap-2 text-sm text-black-500 mb-2 w-[500px]  pl-5">
              <h2 className="text-lg font-semibold mb-2 w-[500px]">{post.title.slice(0, 150)}</h2>

              {/* {post.selftext && (
                <p className="text-gray-700 mb-4">{post.selftext.slice(0, 150)}...</p>
              )} */}
              <div className='flex'> posted by  
              <img
                src={post.authorAvatar || 'https://via.placeholder.com/32'}
                alt={post.author}
                className="w-5 h-5 rounded-full mx-2"
              />
              
              <span className="font-medium"> {post.author}</span>
              <span className='opacity-0'>-----------</span>
              <span>{new Date(post.created_utc * 1000).toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between text-gray-500 w-40">
            <div className="flex flex-col items-start justify-around gap-4 mt-5">
              <button className="flex items-center gap-2  hover:bg-gray-100 rounded">
                <MessageSquare size={18} />
                <span>{post.num_comments} Comments</span>
              </button>
              <button className="flex items-center gap-2  hover:bg-gray-100 rounded">
                <Share size={18} />
                <span>{post.num_crossposts} Share</span>
              </button>
              <span className="font-medium">...more</span>
            </div>
          </div>
          <div className="flex flex-col items-center mr-4 mt-4">
            <button className=" hover:bg-gray-100  bg-orange-100 rounded w-20 h-10 px-7 my-1 text-orange-600">
              <ArrowUp size={20} />
            </button>
            <span className="text-sm font-medium">{post.score}</span>
            <button className=" hover:bg-gray-100 bg-orange-100 rounded w-20 h-10 px-7 my-1 text-orange-600">
              <ArrowDown size={20} />
            </button>
          </div>


        </article>
      ))}
    </div>
  );
}
