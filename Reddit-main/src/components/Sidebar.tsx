import React from 'react';
import { ChevronDown, Settings } from 'lucide-react';

const favorites = [
  { name: 'r/funymoro', icon: '/avatar1.png', count: 156 },
  { name: 'r/breadkingnows', icon: '/avatar2.png', count: 12 },
  { name: 'r/lovestory', icon: '/avatar3.png', count: 0 },
  { name: 'r/gamingfun', icon: '/avatar4.png', count: 8 },
];

const redditFeeds = [
  { name: 'r/moview', icon: '/avatar5.png', count: 4 },
  { name: 'r/gaming', icon: '/avatar6.png', count: 32 },
  { name: 'r/pics', icon: '/avatar7.png', count: 32 },
  { name: 'r/gifs', icon: '/avatar8.png', count: 0 },
];

const community = [
  { name: 'r/funymoro', count: 156 },
  { name: 'r/breadkingnows', count: 12 },
  { name: 'r/gaming', count: 43 },
  { name: 'r/lovestory', count: 12 },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 h-screen fixed left-0 top-20 border-r  scrollbar-none border-gray-200 px-6 overflow-scroll">

      {/* Sidebar Header */}
      <div className="flex items-center justify-between mb-8 bg-white p-3 rounded-md">
        <h1 className="text-sm font-bold text-gray-600">Filter by</h1>
        <ChevronDown size={18} className="text-gray-400" />
      </div>

      {/* Favorites Section */}
      <Section title="FAVORITES" items={favorites} />

      {/* Reddit Feeds Section */}
      <Section title="REDDIT FEEDS" items={redditFeeds} />

      {/* Community Section */}
      <Section title="COMMUNITY" items={community} isCommunity />

      {/* Footer Settings */}
      
    </aside>
  );
}

// Section Component
const Section = ({ title, items, isCommunity = false }: any) => (
  <div className="mt-6">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-sm font-semibold text-gray-600">{title}</h2>
      <span className="text-xs text-gray-400 cursor-pointer">All</span>
    </div>
    <div className="space-y-3">
      {items.map((item: any) => (
        <a
          key={item.name}
          href="#"
          className="flex items-center justify-between p-1 hover:bg-gray-100 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <img src="./snowman_13381213.png" alt="icon" className='size-4' />
            <span className="text-sm text-gray-700 font-medium">{item.name}</span>
          </div>
          {item.count > 0 && (
            <span className="text-xs font-semibold text-gray-500">
              {item.count.toString().padStart(2, '0')}
            </span>
          )}
        </a>
      ))}
      
    </div>
    {/* <div className="absolute bottom-4 left-4 right-4">
        <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg">
          <Settings size={20} />
          <span>Settings</span>
        </a>
      </div> */}
  </div>
);
