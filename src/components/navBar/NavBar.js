import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="main-nav">
      <NavLink to="/">
        <button className="all-or-mine">Home</button>
      </NavLink>
      <NavLink to="/blog">
        <button className="all-or-mine">Blog</button>
      </NavLink>
      <NavLink to="/recipes">
        <button className="all-or-mine">Vegan In Kuwait</button>
      </NavLink>
      <NavLink to="/about">
        <button className="all-or-mine">About</button>
      </NavLink>
    </div>
  );
};
export default NavBar;
