import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json") // Ensure the file is accessible
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-xl mt-10">Loading recipe...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <Link to="/" className="text-blue-500 hover:underline">&larr; Back to Home</Link>

      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-6">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover" />
        
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700">{recipe.summary}</p>

          <h2 className="text-2xl font-semibold mt-6">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-600 mt-2">
            {recipe.instructions?.map((step, index) => (
              <li key={index} className="mb-2">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;