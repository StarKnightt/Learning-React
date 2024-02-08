import React, { useState, useEffect } from "react";

function App() {
  // Define state variable 'data' to store fetched data
  const [data, setData] = useState([]);

  // Use useEffect hook to fetch data from API when component mounts
  useEffect(() => {
    // Fetch data from the API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json()) // Parse response as JSON
      .then((data) => setData(data)); // Update state with fetched data
  }, []);

  // Render fetched data as cards
  return (
    <div className="container mx-auto p-4">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-4">API Data on Card</h1>
      {/* Grid layout for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Map over each item in the 'data' array and render a card for each */}
        {data.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
            {/* Title of the post */}
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            {/* Body of the post */}
            <p className="text-gray-700">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
