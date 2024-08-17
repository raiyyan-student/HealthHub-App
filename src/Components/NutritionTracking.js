import React from "react";
import FoodDiary from "./FoodDiary";
import CalorieCounter from "./CalorieCounter";
import CustomRecipes from "./CustomRecipes";

const NutritionTracking = () => {
  return (
    <div className="nutrition-tracking-container">
      <h1>Nutrition Tracking</h1>
      <FoodDiary/>
      <CalorieCounter/>
      <CustomRecipes/>
    </div>
  );
};

export default NutritionTracking;