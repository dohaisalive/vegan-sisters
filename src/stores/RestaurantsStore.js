import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

class RestaurantsStore {
  constructor() {
    makeAutoObservable(this);
    this.fetchRestuarants();
  }

  restaurants = [];

  fetchRestuarants = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/restaurants/restaurants"
      );
      runInAction(() => {
        this.restaurants = response.data;
      });
    } catch (error) {
      console.error(error);
    }
  };

  addRestaurant = async (newRestuarant) => {
    try {
      newRestuarant.name =
        newRestuarant.name.charAt(0).toUpperCase() +
        newRestuarant.name.slice(1);
      const response = await axios.post(
        "http://localhost:8000/restaurants/restaurants",
        newRestuarant
      );
      runInAction(() => {
        this.restaurants = [...this.restaurants, response.data];
        alert(`${newRestuarant.name} was added!`);
      });
    } catch (error) {
      console.error(error);
    }
  };
}

const restaurantsStore = new RestaurantsStore();
export default restaurantsStore;
