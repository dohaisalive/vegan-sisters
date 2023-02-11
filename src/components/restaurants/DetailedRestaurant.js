import restaurantsStore from "../../stores/RestaurantsStore";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";

function DetailedRecipe() {
  const { restaurantSlug } = useParams();
  const restaurant = restaurantsStore.restaurants.find(
    (restaurant) => restaurant.slug === restaurantSlug
  );

  return (
    <>
      <section className="recipe-details-card">
        <p className="recipe-details-title">{restaurant.name}</p>
        <div>{restaurant.veg_type}</div>
        <div>{restaurant.category}</div>
        <hr />
      </section>
    </>
  );
}

export default observer(DetailedRecipe);
