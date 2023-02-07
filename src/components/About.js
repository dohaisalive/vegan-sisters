// import AddCategoryButton from "./AddCategoryButton";
// import CategoryItem from "./CategoryItem";
import { observer } from "mobx-react";
// import categoriesStore from "../../stores/CategoriesStore";
// import recipeStore from "../../stores/recipeStore";
// import authstore from "../../stores/AuthStore";

const About = () => {
  //   const displayCategories = categoriesStore.categories.map((category) => (
  //     <CategoryItem category={category} key={category._id} />
  //   ));

  return (
    <div className="categories-list">
      <div className="categories-header">
        <h2>About us</h2>
        {/* {authstore.user ? <AddCategoryButton /> : <></>} */}
      </div>
      {/* <button onClick={recipeStore.allRecipes} className="category-item"> */}
      We are vegan sisters
      {/* </button> */}
      {/* <div>{displayCategories}</div> */}
    </div>
  );
};

export default observer(About);
