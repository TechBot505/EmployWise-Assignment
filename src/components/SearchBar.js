import React from 'react';
import {SearchIcon} from 'lucide-react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="mb-6">
      <SearchIcon size={24} className="inline-block mr-2" />
      <input
        type="text"
        placeholder="Search users by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border p-2 w-full md:w-1/2 rounded"
      />
    </div>
  );
};

export default SearchBar;
