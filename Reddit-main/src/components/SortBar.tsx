import React from 'react';
import { Flame, Sparkles, TrendingUp, Zap } from 'lucide-react';
import type { SortOption } from '../types/reddit';

interface SortBarProps {
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export default function SortBar({ currentSort, onSortChange }: SortBarProps) {
  const sortOptions = [
    { value: 'hot', label: 'Hot', icon: Flame },
    { value: 'new', label: 'New', icon: Sparkles },
    { value: 'top', label: 'Top', icon: TrendingUp },
    { value: 'controversial', label: 'Controversial', icon: Zap },
  ] as const;

  return (
    <div className="bg-white p-3 rounded-lg shadow-sm mb-4 flex justify-between">
      <h3 className='flex items-center gap-2 px-4 py-2 rounded-full'><Sparkles size={18} />Popular</h3>
      <div className="flex gap-2">
        {sortOptions.map(({ value, label, icon: Icon }) => (
          <button
            key={value}
            onClick={() => onSortChange(value)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              currentSort === value
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-500 hover:bg-gray-50'
            }`}
          >
            <Icon size={18} />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}