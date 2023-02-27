import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import RecipeList from "./components/recipes/RecipeList";
import AddIngredientForm from "./components/ingredients/AddIngredientForm";
import DetailedRecipe from "./components/recipes/DetailedRecipe";
import DetailedRestaurant from "./components/restaurants/DetailedRestaurant";
import IngredientList from "./components/ingredients/IngredientList";
import Homepage from "./components/Homepage";
import Nav from "./components/navBar/Nav";
import MyRecipes from "./components/recipes/MyRecipes";
import About from "./components/About";
import RestaurantList from "./components/restaurants/RestaurantList";
import AddRestaurant from "./components/restaurants/AddRestaurant";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/vegan-in-kuwait" element={<RestaurantList />} />
        <Route path="/blog" element={<RecipeList />} />
        <Route path="/add-ingredient" element={<AddIngredientForm />} />
        <Route path="/my-posts" element={<MyRecipes />} />
        <Route path="/all-posts" element={<RecipeList />} />
        <Route path="/all-restaurants" element={<RestaurantList />} />
        <Route path="/add-restaurant" element={<AddRestaurant />} />
        <Route
          path="/recipe-details/:recipeSlug"
          element={<DetailedRecipe />}
        />
        <Route
          path="/restaurants/:restaurantSlug"
          element={<DetailedRestaurant />}
        />
        <Route path="/create-post" element={<IngredientList />} />
        <Route path="/blog" elemnt={<RecipeList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
