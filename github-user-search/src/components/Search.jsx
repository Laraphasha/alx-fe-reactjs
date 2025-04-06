import React from 'react'

function Search() {
  return (
    <form className="flex items-center gap-2 mb-4">
      <input
        type="text"
        placeholder="Search GitHub users..."
        className="px-4 py-2 border border-gray-300 rounded-lg w-full max-w-md"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  )
}

export default Search