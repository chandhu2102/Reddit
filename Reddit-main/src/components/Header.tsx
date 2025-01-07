import React, { useState } from 'react';
import { Search, Bell, MessageSquare, User } from 'lucide-react';
import { Home, Star, Compass, Settings, ChevronDown } from 'lucide-react';


export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="h-14 bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-10">
      <div className="h-full px-4 flex items-center justify-between">
      <div className="flex items-center gap-2 mb-0">
        <img src="/reddit-icon-svgrepo-com.svg" alt="Reddit" className="w-8 h-8" />
        <h1 className="text-xl font-bold">Reddit Clone</h1>
      </div>
        <div className="flex-1 max-w-2xl">
          <div className="flex relative">
            <nav className="flex">
              <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg">
                <Home size={20} />
                <span>Home</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg">
                <Compass size={20} />
                <span>Popular</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg">
                <Bell size={20} />
                <span>All</span>
              </a>
            </nav>
            <input
              type="text"
              placeholder="Search Reddit"
              className="w-52 h-8 px-20 py-0 ml-10 mt-1 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <Search className="absolute left-80 top-3 text-gray-400" size={20} />
            <button className='w-40 h-8 bg-orange-600 text-white rounded-md ml-5 mt-1'>Create Post</button>
          </div>
          
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <MessageSquare size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}