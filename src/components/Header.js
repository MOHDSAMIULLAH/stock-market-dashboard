// src/components/Header.js
import React from 'react';
import { HomeIcon, SearchIcon, UserIcon } from '@heroicons/react/solid';

const Header = ({ userName }) => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>
        <h1>Hello, {userName}</h1>
        <p>{currentDate}</p>
      </div>
      <nav className="flex space-x-4">
        <HomeIcon className="h-6 w-6" />
        <SearchIcon className="h-6 w-6" />
        <UserIcon className="h-6 w-6" />
      </nav>
    </header>
  );
};

export default Header;
