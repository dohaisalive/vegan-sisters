import "../App.css";
import CategoriesList from "./categories/CategoriesList";
import AddIngredientForm from "./ingredients/AddIngredientForm";
import RecipeList from "./recipes/RecipeList";
import { observer } from "mobx-react";
function Home() {
  return <CategoriesList />;
}

export default observer(Home);
