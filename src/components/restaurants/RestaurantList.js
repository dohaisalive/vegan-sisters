import RestaurantItem from "./RestaurantItem";
import restaurantsStore from "../../stores/RestaurantsStore";
import { observer } from "mobx-react";

function RestuarantList() {
  let resutaurantList;

  resutaurantList = restaurantsStore.restaurants.map((restaurant) => (
    <RestaurantItem restaurant={restaurant} />
  ));

  // console.log(recipeList);

  return <div>{resutaurantList}</div>;
}
export default observer(RestuarantList);
