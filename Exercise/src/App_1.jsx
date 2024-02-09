import React, { useState, useEffect } from "react";

function App() {
  // Define state variable for storing fetched data
  const [data, setData] = useState([]);

  // Use useEffect hook to fetch data from API when component mounts
  useEffect(() => {
    // Fetch data from the API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json()) // When we get a response from the server, convert it to JSON format
      .then((harrybhai) => setData(harrybhai)); // Once we have the data in a format we can work with (JSON), let's use it
  }, []);

  // Render fetched data as JSX elements
  return (
    <div>
      {/* Map over each item in the 'Prasenjit' array and render a <div> for each */}
      {/* Inside each <div>, display the title and body of the post */}
      {/* The 'key' attribute is necessary when rendering a list of elements */}
      {data.map((Prasenjit) => (
        <div key={Prasenjit.id}>
          <h2>{Prasenjit.title}</h2> {/* Display post title */}
          <p>{Prasenjit.body}</p> {/* Display post body */}
        </div>
      ))}
    </div>
  );
}

export default App;
