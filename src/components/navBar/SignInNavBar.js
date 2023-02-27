import { NavLink } from "react-router-dom";

const SignInNavBar = () => {
  return (
    <div className="main-nav">
      <NavLink to="/">
        <button className="all-or-mine">Home</button>
      </NavLink>
      <NavLink to="/all-posts">
        <button className="all-or-mine">All Blog Posts</button>
      </NavLink>

      <NavLink to="/my-posts">
        <button className="all-or-mine">My Blog Posts</button>
      </NavLink>
      <NavLink to="/create-post">
        <button className="all-or-mine">Create Post</button>
      </NavLink>
      <NavLink to="/add-restaurant">
        <button className="all-or-mine">Add restaurant</button>
      </NavLink>
      <NavLink to="/all-restaurants">
        <button className="all-or-mine">All restaurants</button>
      </NavLink>
    </div>
  );
};
export default SignInNavBar;
