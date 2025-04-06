import React from 'react'

function Search() {
  return (
    <form>
      <input
        type="text"
        placeholder="Search GitHub users..."
      />
      <button
        type="submit"
      >
        Search
      </button>
    </form>
  )
}

export default Search