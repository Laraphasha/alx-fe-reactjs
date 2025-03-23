import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // Validation Function
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Recipe title is required.";
    if (!ingredients.trim()) newErrors.ingredients = "At least two ingredients are required.";
    if (!steps.trim()) newErrors.steps = "Steps are required.";

    // Validate at least 2 ingredients
    const ingredientList = ingredients.split("\n").filter((item) => item.trim() !== "");
    if (ingredientList.length < 2) newErrors.ingredients = "Please list at least two ingredients.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Recipe object to be stored or sent to backend
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split("\n").filter((item) => item.trim() !== ""),
      steps: steps.split("\n").filter((item) => item.trim() !== ""),
    };

    console.log("Recipe submitted:", newRecipe);

    // Clear form after submission
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-xl mx-auto bg-white md:p-6 sm:p-4 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Recipe Title</label>
          <input
            type="text"
            className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe name"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Ingredients (one per line)</label>
          <textarea
            className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="E.g., 1 cup flour\n2 eggs\n1/2 tsp salt"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Preparation Steps (one per line)</label>
          <textarea
            className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="E.g., Preheat oven to 180°C\nMix dry ingredients\nBake for 30 minutes"
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;