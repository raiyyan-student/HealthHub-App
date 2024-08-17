import React, { useState } from "react";

const CustomRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [calories, setCalories] = useState("");

  const addRecipe = () => {
    if (recipeName && ingredients && calories) {
      setRecipes([...recipes, { recipeName, ingredients, calories }]);
      setRecipeName("");
      setIngredients("");
      setCalories("");
    }
  };

  return (
    <div className="custom-recipes-container">
      <h2>Custom Recipes</h2>
      <input
        type="text"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
        placeholder="Recipe Name"
      />
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients"
      />
      <input
        type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        placeholder="Total Calories"
      />
      <button onClick={addRecipe}>Add Recipe</button>
      <ul className="recipe-list">
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.recipeName}</h3>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Total Calories: {recipe.calories} kcal</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomRecipes;