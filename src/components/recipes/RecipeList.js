import RecipeItem from "./RecipeItem";
import RecipesStore from "../../stores/recipeStore";
import { observer } from "mobx-react";
import AuthStore from "../../stores/AuthStore";
import Home from "../Home";

// get the recipe ids from user and compare them with recipe ids from all the recipes (recipeList)
function RecipeList() {
  let recipeList;

  recipeList = RecipesStore.Recipes.map((recipe) => (
    <RecipeItem recipe={recipe} />
  ));

  // console.log(recipeList);

  // return <div className="row justify-content-center">{recipeList}</div>;
  return (
    <div style={{ display: "flex", }}>
      <Home />
      <div className="row justify-content-center">{recipeList}</div>
    </div>
  );
}
export default observer(RecipeList);
