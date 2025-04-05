import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        GitHub User Search
      </h1>
      <div className="flex justify-center">
        <SearchBar setUsers={setUsers} setError={setError} />
      </div>
      {error && (
        <p className="text-red-600 text-center mt-2">{error}</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 max-w-6xl mx-auto">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
