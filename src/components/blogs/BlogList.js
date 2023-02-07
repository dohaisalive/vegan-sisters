import AddCategoryButton from "./AddCategoryButton";
import BlogItem from "./BlogItem";
import { observer } from "mobx-react";
import categoriesStore from "../../stores/CategoriesStore";
import recipeStore from "../../stores/recipeStore";
import authstore from "../../stores/AuthStore";

const BlogsList = () => {
  const displayBlogPosts = categoriesStore.categories.map((category) => (
    <BlogItem category={category} key={category._id} />
  ));

  return (
    <div className="categories-list">
      <div className="categories-header">
        <h2>Blog Posts</h2>
        {authstore.user ? <AddCategoryButton /> : <></>}
      </div>
      <button onClick={recipeStore.allRecipes} className="category-item">
        All
      </button>
      <div>{displayBlogPosts}</div>
    </div>
  );
};

export default observer(BlogsList);
