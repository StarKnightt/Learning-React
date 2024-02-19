import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-blue-500 text-white py-2">
      <div className="logo">
        <span className="font-bold text-xl mx-8 my-2">myTask</span>
      </div>

      <ul className="flex gap-8 mx-9">
        <li className="cursor-pointer hover:font-bold transition-all duration-150">
          Home
        </li>
        <li className="cursor-pointer hover:font-bold transition-all duration-150">
          Your Tasks
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
