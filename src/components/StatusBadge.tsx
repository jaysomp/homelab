import React from 'react';

export function StatusBadge() {
  return (
    <div className="flex items-center">
      <div className="flex items-center space-x-1.5 px-2.5 py-1 bg-blue-500/10 dark:bg-green-500/10 rounded-full transition-colors duration-300">
        <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-green-500 animate-pulse transition-colors duration-300" />
        <span className="text-xs font-medium text-blue-500 dark:text-green-400 transition-colors duration-300">
          Online
        </span>
      </div>
    </div>
  );
}