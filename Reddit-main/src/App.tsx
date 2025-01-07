import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PostList from './components/PostList';
import SortBar from './components/SortBar';
import type { RedditPost, SortOption } from './types/reddit';
import Footer from './components/Footer';

function App() {
  const [posts, setPosts] = useState<RedditPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState<SortOption>('hot');

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://www.reddit.com/r/popular/${sort}/.json?limit=10`
        );
        const data = await response.json();
        console.log(data);
        setPosts(
          data.data.children.map((child: any) => ({
            id: child.data.id,
            title: child.data.title,
            author: child.data.author,
            subreddit: child.data.subreddit,
            score: child.data.score,
            num_comments: child.data.num_comments,
            num_crossposts:child.data.num_crossposts,
            created_utc: child.data.created_utc,
            url: child.data.url,
            thumbnail: child.data.thumbnail,
            selftext: child.data.selftext,
          }))
        );
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [sort]);

  

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <Header />
      <main className="ml-64 pt-20 p-4 max-w-5xl mx-auto">
        <SortBar currentSort={sort} onSortChange={setSort} />
        <PostList posts={posts} isLoading={isLoading} />
      </main>
      <Footer/>
    </div>
  );
}

export default App;