import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(2);
  const [showbtn, setshowbtn] = useState(false);

  const Todo = () => {
    <>
      <div className="todo">I am todo</div>
    </>;
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn ? (
        <button>show btn is true</button>
      ) : (
        <button>show btn is false</button>
      )}
      {/* {showbtn && <button>show btn is true</button>} */}
      <Todo></Todo>
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          Toggle show btn {count}
        </button>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
