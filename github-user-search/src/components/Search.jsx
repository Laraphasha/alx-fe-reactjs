import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const SearchBar = ({ setUser}) => {
  const [username, setUsername] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username) return;

    const results = await fetchUserData(username);
    setUser(results);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2 mb-4">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
