'use client';
import { useState, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchTerm);
    }, 200);
    return () => clearTimeout(timer);
  }, [searchTerm, onSearch]);

  return (
    <div className="w-full max-w-md">
      <div className="form-control">
        <input
          type="text"
          placeholder="Search books by title..."
          className="input input-bordered w-full text-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
