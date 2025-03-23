import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json") // Make sure this file is in the public folder
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-6">Recipe Sharing Platform</h1>
      
      {/* Grid Layout for Recipes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{recipe.summary}</p>
              <Link to={`/recipe/${recipe.id}`} className="block mt-4 text-blue-500 hover:underline">
                View Recipe →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;