import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const [first, setFirst] = useState(0);
  const [color, setColor] = useState(0);

  useEffect(() => {
    alert("Count was changed");
    setColor(color + 1);
  }, [count]);

  return (
    <>
      {/* <Navbar color={" black " + " white " + color}/> */}
      {/* so now the above code is executed as javascript expression. */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
