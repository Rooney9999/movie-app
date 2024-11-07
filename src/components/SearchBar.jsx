import { useState } from "react";

const SearchBar = ({ setSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    setSearch(query);
  };

  return (
    <div className="flex items-center justify-center my-8 space-x-4">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border-2 border-green-700 rounded-full p-4 w-1/2 sm:w-2/3 lg:w-1/3 text-lg text-white bg-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
      />
      <button
        onClick={handleSearch}
        className="bg-gradient-to-r from-red-600 to-red-400 text-white rounded-full px-6 py-3 text-xl font-semibold w-32 hover:scale-105 transform transition duration-300 ease-in-out shadow-xl hover:shadow-2xl"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
