import React, { useState } from "react";

const FoodDiary = () => {
  const [meals, setMeals] = useState([]);
  const [meal, setMeal] = useState("");
  const [calories, setCalories] = useState("");

  const addMeal = () => {
    if (meal && calories) {
      setMeals([...meals, { meal, calories }]);
      setMeal("");
      setCalories("");
    }
  };

  return (
    <div className="food-diary-container">
      <h2>Food Diary</h2>
      <input
        type="text"
        value={meal}
        onChange={(e) => setMeal(e.target.value)}
        placeholder="Meal or Snack"
      />
      <input
        type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        placeholder="Calories"
      />
      <button onClick={addMeal}>Add Meal</button>
      <ul className="meal-list">
        {meals.map((m, index) => (
          <li key={index}>
            {m.meal} - {m.calories} kcal
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodDiary;