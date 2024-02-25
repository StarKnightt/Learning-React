// Importing CSS files and components
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import User from "./components/User";
import "./index.css";

function App() {
  // Creating the router configuration using createBrowserRouter
  const router = createBrowserRouter([
    // Define routes and their corresponding components
    {
      path: "/", // Route path
      // Component rendered for this route
      element: (
        <>
          {" "}
          <Navbar /> <Home />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          {" "}
          <Navbar />
          <Login />{" "}
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          {" "}
          <Navbar />
          <About />{" "}
        </>
      ),
    },
    {
      path: "/profile",
      element: (
        <>
          {" "}
          <Navbar />
          <About />{" "}
        </>
      ),
    },
    {
      path: "/user/:username",
      element: (
        <>
          {" "}
          <Navbar />
          <User />{" "}
        </>
      ),
    },
  ]);

  // Return the RouterProvider with the created router
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

// Exporting the App component
export default App;
