import { useEffect, useState } from "react";
import Navbar from "./componenets/Navbar";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [todo, setTodo] = useState(""); // State for input text
  const [todos, setTodos] = useState([]); // State for array holding all todos
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  const handleEdit = (id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLS();
  };

  const handleDelete = (id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLS();
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveToLS();
  };

  const handleChange = (e) => {
    setTodo(e.target.value); // Update the todo state with input value
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS();
  };

  return (
    <>
      <Navbar className="bg-blue-500" /> {/* Navbar with blue background */}
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-gray-100 min-h-[80vh] md:w-1/2 drop-shadow-2xl">
        <h1 className="font-bold text-center text-blue-600 text-xl mb-5">
          My Task Manager
        </h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className="text-lg font-bold">Add a Task</h2>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="w-full rounded-xl px-5 py-3 bg-white shadow-md"
          />
          <button
            onClick={handleAdd}
            disabled={todo.length <= 3}
            className="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 p-3 py-1 text-sm font-bold text-white rounded-md"
          >
            Save
          </button>
        </div>
        <input
          id="show"
          className="my-4"
          onChange={toggleFinished}
          type="checkbox"
          checked={showFinished}
        />{" "}
        <label className="mx-2" htmlFor="show">
          Show finished
        </label>
        <div className="h-[1px] bg-black opacity-25 w-[90%] my-2 mx-auto"></div>
        <h2 className="text-lg font-bold mt-5">Your Tasks</h2>
        <div className="todos">
          {todos.length === 0 && (
            <div className="m-5 text-gray-700">No tasks to display</div>
          )}

          {todos.map((item) => {
            return (
              (showFinished || !item.isCompleted) && (
                <div
                  key={item.id}
                  className="todo flex w-full my-3 justify-between items-center"
                >
                  <div className="flex gap-5 items-center">
                    <input
                      name={item.id}
                      onChange={handleCheckbox}
                      type="checkbox"
                      checked={item.isCompleted}
                    />
                    <div
                      className={`font-semibold ${
                        item.isCompleted ? "line-through text-gray-500" : ""
                      }`}
                    >
                      {item.todo}
                    </div>
                  </div>
                  <div className="buttons flex h-full">
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="bg-green-500 hover:bg-green-700 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-500 hover:bg-red-700 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                    >
                      <MdDeleteForever />
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
