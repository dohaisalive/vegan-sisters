import { NavLink } from "react-router-dom";

const SignInNavBar = () => {
  return (
    <div className="main-nav">
      <NavLink to="/">
        <button className="all-or-mine">Home</button>
      </NavLink>
      <NavLink to="/all-recipes">
        <button className="all-or-mine">All Blog Posts</button>
      </NavLink>

      <NavLink to="/my-recipes">
        <button className="all-or-mine">My Blog Posts</button>
      </NavLink>
      <NavLink to="/create-recipe">
        <button className="all-or-mine">Create Post</button>
      </NavLink>
    </div>
  );
};
export default SignInNavBar;
