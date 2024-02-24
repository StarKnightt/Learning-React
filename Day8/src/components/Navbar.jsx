import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/">
          <li>About</li>
        </a>
        <a href="/">
          <li>Contact Us</li>
        </a>
      </ul>
    </div>
  );
};
export default Navbar;