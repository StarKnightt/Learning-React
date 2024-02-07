import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; // Assuming that 'vite.svg' is in the same directory as 'App.js'
import "./App.css";

function App() {
  const [count, setCount] = useState(2);
  const [showBtn, setShowBtn] = useState(false);
  const [todos, setTodos] = useState([
    {
      title: "Hey everyone, I'm Prasen",
      desc: "I am a good boy",
    },
    {
      title: "Excited to learn",
      desc: "I am an excellent boy",
    },
    {
      title: "We can do it",
      desc: "I am a genius boy",
    },
  ]);

  // const Todo = ({ todo }) => {
  //   return (
  //     <>
  //       <div className="m-4 border border-1 border-red-400">

  //         <div className="todo">{todo.title}</div>
  //         <div className="todo">{todo.desc}</div>
  //       </div>
  //     </>
  //   );
  // };

  return (
    <>
      {showBtn ? (
        <button>Show btn is true</button>
      ) : (
        <button>Show btn is false</button>
      )}
      {/* {showBtn && <button>Show btn is true</button>} */}

      {todos.map((todo) => {
        // return <Todo key={todo.title} todo={todo} />;
        return (
          <div key={todo.title} className="m-4 border border-1 border-red-400">
            <div className="todo">{todo.title}</div>
            <div className="todo">{todo.desc}</div>
          </div>
        );
      })}

      <div className="card">
        <button onClick={() => setShowBtn(!showBtn)}>
          Toggle show btn {count}
        </button>
      </div>
    </>
  );
}

export default App;
