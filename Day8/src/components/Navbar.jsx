import React from "react";
import { NavLink } from "react-router-dom";

// Navbar component with navigation links
const Navbar = () => {
  return (
    <div>
      <ul>
        {/* NavLink components for navigation links */}
        <NavLink
          // Setting activeClassName to "red" when link is active
          activeClassName="red"
          to="/" // Link to the Home page
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          activeClassName="red"
          to="/About" // Link to the About page
        >
          <li>About</li>
        </NavLink>
        <NavLink
          activeClassName="red"
          to="/Login" // Link to the Login page
        >
          <li>Login</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar; // Exporting the Navbar component
