import { Link } from "react-router-dom";

function RestaurantItem({ restaurant }) {
  return (
    <Link to={`/restaurants/${restaurant.slug}`}>
      <div>
        <div>{restaurant.name}</div>
        <hr />
      </div>
    </Link>
  );
}

export default RestaurantItem;
