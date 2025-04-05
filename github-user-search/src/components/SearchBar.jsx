import { useState } from "react";
import { searchGitHubUsers } from "../services/github";

const SearchBar = ({ setUsers, setError }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const results = await searchGitHubUsers(query);
      setUsers(results);
      setError(null);
    } catch (err) {
      setError("Failed to fetch users. Please try again.");
      setUsers([]);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2 mb-4">
      <input
        type="text"
        placeholder="Search GitHub users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg w-full max-w-md"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
