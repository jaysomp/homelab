import React from 'react';
import { HeaderLogo } from './HeaderLogo';
import { HeaderTitle } from './HeaderTitle';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="mb-8 bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-2xl backdrop-blur-lg border border-gray-700/30 shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <HeaderLogo />
          <HeaderTitle />
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}