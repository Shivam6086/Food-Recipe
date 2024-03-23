import React from "react";
import FoodRecipeItem from "./FoodRecipeItem";
import "./Recipe.css";
const RecipeitemList = (props) => {
  return (
    <>
      <div className="show-dtls">
        {props.datavalue.map((map) => (
          <div key={map.recipe.label}>
            <FoodRecipeItem data={map.recipe} />
          </div>
        ))}
      </div>
    </>
  );
};

export default RecipeitemList;
