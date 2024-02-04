import React, { useEffect } from "react";

const Navbar = ({ color }) => {
  // Case 1: Run on every Render
  useEffect(() => {
    alert("Hey I'll render on every Render");
  });

  // Case 2: Run only on first Render
  useEffect(() => {
    alert("Hey welcome to my page, This is the first render");
  }, []);

  // Case 3: Run only when certain values change
  useEffect(() => {
    alert("I'm running because my value of color is changed lol");
  }, [color]);

  // Example of Cleanup Function
  useEffect(() => {
    alert("Hey this is me Prasen");
    return () => {
      alert("components are umounted");
    };
  }, []);
 
 return (
  <div>I am Navbar lmaoxd, and my color is {color}</div>
);
};

export default Navbar;
