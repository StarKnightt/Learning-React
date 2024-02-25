import React from "react";
import { useParams } from "react-router-dom";

// Functional component to display user information
const User = () => {
  // Extracting username parameter from the URL
  const params = useParams();
  // Rendering user information
  return <div>I am user {params.username}</div>;
};

export default User; // Exporting the User component
