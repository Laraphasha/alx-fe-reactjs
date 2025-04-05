import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null); // Reset error before new search
    try {
      const userData = await fetchUserData(username);
      setUser(userData); // Store the fetched user data
    } catch (error) {
      setError("Looks like we can't find the user"); // Error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      
      {loading && <p className="text-center">Loading...</p>} {/* Loading state */}
      {error && <p className="text-center text-red-500">{error}</p>} {/* Error message */}
      
      {user && !loading && !error && (
        <div className="text-center mt-4">
          <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full mx-auto" />
          <h2 className="text-xl font-semibold mt-2">{user.name || user.login}</h2>
          <a href={user.html_url} className="text-blue-500" target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
