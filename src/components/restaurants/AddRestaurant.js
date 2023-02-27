import { useState } from "react";
import RestaurantsStore from "../../stores/RestaurantsStore";
import { observer } from "mobx-react";
import authstore from "../../stores/AuthStore";

const AddRestaurant = () => {
  const [input, setInput] = useState({
    user: authstore.user._id,
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    RestaurantsStore.addRestaurant(input);
    alert("restaurant was added successfully :)");
  };

  return (
    <form onSubmit={handleSubmit} className="create-recipe-form">
      <label className="create-recipe-label">
        <p className="form-sub-title">Name:</p>
        <input
          placeholder="Your title..."
          className="text-ingredient"
          type="text"
          name="name"
          onChange={handleChange}
          required
        />
      </label>

      <label className="create-recipe-label">
        <p className="form-sub-title">logo URL:</p>
        <input
          placeholder="Your image URL..."
          className="text-ingredient"
          type="text"
          name="logo"
          onChange={handleChange}
        />
      </label>

      <label className="create-recipe-label">
        <p className="form-sub-title">veg type:</p>
        <input
          placeholder="idk what"
          name="veg_type"
          className="text-ingredient"
          onChange={handleChange}
        />
      </label>

      <label className="create-recipe-label">
        <p className="form-sub-title">category:</p>
        <input
          placeholder="idk what"
          name="category"
          className="text-ingredient"
          onChange={handleChange}
        />
      </label>

      <label className="create-recipe-label">
        <p className="form-sub-title">cuisine:</p>
        <input
          placeholder="idk what"
          name="cuisine"
          className="text-ingredient"
          onChange={handleChange}
        />
      </label>

      <label className="create-recipe-label">
        <p className="form-sub-title">delivery service:</p>
        <input
          placeholder="idk what"
          name="delivery_service"
          className="text-ingredient"
          onChange={handleChange}
        />
      </label>

      <label className="create-recipe-label">
        <p className="form-sub-title">instagram:</p>
        <input
          placeholder="idk what"
          name="instagram_link"
          className="text-ingredient"
          onChange={handleChange}
        />
      </label>

      <label className="create-recipe-label">
        <p className="form-sub-title">dine in:</p>
        <input
          placeholder="idk what"
          name="dine_in"
          className="text-ingredient"
          onChange={handleChange}
        />
      </label>

      <label className="create-recipe-label">
        <p className="form-sub-title">open hours:</p>
        <input
          placeholder="idk what"
          name="hours"
          className="text-ingredient"
          onChange={handleChange}
        />
      </label>

      <label className="create-recipe-label">
        <p className="form-sub-title">number:</p>
        <input
          placeholder="idk what"
          name="phone_number"
          className="text-ingredient"
          onChange={handleChange}
        />
      </label>

      <label className="create-recipe-label">
        <p className="form-sub-title">location:</p>
        <input
          placeholder="idk what"
          name="location"
          className="text-ingredient"
          onChange={handleChange}
        />
      </label>

      <label className="create-recipe-label">
        <p className="form-sub-title">number of vegan dishes:</p>
        <input
          placeholder="idk what"
          name="vegan_dishes"
          className="text-ingredient"
          onChange={handleChange}
        />
      </label>

      <label className="create-recipe-label">
        <p className="form-sub-title">deliveroo link:</p>
        <input
          placeholder="idk what"
          name="to_order_link"
          className="text-ingredient"
          onChange={handleChange}
        />
      </label>

      <label className="create-recipe-label">
        <p className="form-sub-title">whatsapp link:</p>
        <input
          placeholder="idk what"
          name="whatsapp_link"
          className="text-ingredient"
          onChange={handleChange}
        />
      </label>

      <label className="create-recipe-label">
        <p className="form-sub-title">talabat link:</p>
        <input
          placeholder="idk what"
          name="talabat_link"
          className="text-ingredient"
          onChange={handleChange}
        />
      </label>

      <label className="create-recipe-label">
        <p className="form-sub-title">website:</p>
        <input
          placeholder="idk what"
          name="website"
          className="text-ingredient"
          onChange={handleChange}
        />
      </label>

      <label className="create-recipe-label">
        <p className="form-sub-title">comments:</p>
        <input
          placeholder="idk what"
          name="comment"
          className="text-ingredient"
          onChange={handleChange}
        />
      </label>

      <input className="submit-form" type="submit" onClick={handleSubmit} />
    </form>
  );
};

export default observer(AddRestaurant);
