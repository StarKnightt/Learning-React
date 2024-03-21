import { useEffect, useState } from "react"; // Importing necessary hooks from React
import Navbar from "./componenets/Navbar"; // Importing the Navbar component
import { FaEdit } from "react-icons/fa"; // Importing the edit icon from react-icons
import { MdDeleteForever } from "react-icons/md"; // Importing the delete icon from react-icons
import { v4 as uuidv4 } from "uuid"; // Importing uuid for generating unique IDs

function App() {
  // State variables for managing tasks
  const [todo, setTodo] = useState(""); // State for input text
  const [todos, setTodos] = useState([]); // State for array holding all todos
  const [showFinished, setShowFinished] = useState(true); // State for toggling completed tasks visibility

  // Effect hook to load tasks from local storage on component mount
  useEffect(() => {
    let todoString = localStorage.getItem("todos"); // Retrieve tasks from local storage
    if (todoString) {
      let todos = JSON.parse(todoString); // Parse JSON string to convert it into array
      setTodos(todos); // Set the tasks in state
    }
  }, []);
  // Function to save tasks to local storage
  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos)); // Convert tasks array to JSON string and store in local storage
  };

  // Function to toggle visibility of completed tasks
  const toggleFinished = () => {
    setShowFinished(!showFinished); // Toggle the showFinished state
  };

  // Function to handle editing a task
  const handleEdit = (id) => {
    let t = todos.filter((i) => i.id === id); // Find the task with the given ID
    setTodo(t[0].todo); // Set the task title in the input field
    let newTodos = todos.filter((item) => {
      return item.id !== id; // Filter out the task with the given ID from the tasks array
    });
    setTodos(newTodos); // Update the tasks array
    saveToLS(); // Save the updated tasks to local storage
  };

  // Function to handle deleting a task
  const handleDelete = (id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id; // Filter out the task with the given ID from the tasks array
    });
    setTodos(newTodos); // Update the tasks array
    saveToLS(); // Save the updated tasks to local storage
  };

  // Function to handle adding a new task
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]); // Add the new task to the tasks array
    setTodo(""); // Clear the input field
    saveToLS(); // Save the updated tasks to local storage
  };

  // Function to handle input field change
  const handleChange = (e) => {
    setTodo(e.target.value); // Update the todo state with input value
  };

  // Function to handle checkbox change (marking task as completed or incomplete)
  const handleCheckbox = (e) => {
    let id = e.target.name; // Get the ID of the task
    let index = todos.findIndex((item) => item.id === id); // Find the index of the task in the tasks array
    let newTodos = [...todos]; // Create a copy of the tasks array
    newTodos[index].isCompleted = !newTodos[index].isCompleted; // Toggle the isCompleted property of the task
    setTodos(newTodos); // Update the tasks array
    saveToLS(); // Save the updated tasks to local storage
  };

  return (
    <>
      {/* Navbar component with blue background */}
      <Navbar className="bg-blue-500" />

      {/* Main content */}
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-gray-100 min-h-[80vh] md:w-1/2 drop-shadow-2xl">
        {/* Title */}
        <h1 className="font-bold text-center text-blue-600 text-xl mb-5">
          My Works 🕚
        </h1>
        {/* Add Task section */}
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className="text-lg font-bold">Add a Task 👩🏻‍💻</h2>
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
        {/* Toggle Show Finished Checkbox */}
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
        {/* Divider */}
        <div className="h-[1px] bg-black opacity-25 w-[90%] my-2 mx-auto"></div>
        {/* Tasks List */}
        <h2 className="text-lg font-bold mt-5">Your Tasks</h2>
        <div className="todos">
          {/* Display message if no tasks */}
          {todos.length === 0 && (
            <div className="m-5 text-gray-700">No tasks to display</div>
          )}

          {/* Map through tasks and display */}
          {todos.map((item) => {
            return (
              (showFinished || !item.isCompleted) && (
                <div
                  key={item.id}
                  className="todo flex w-full my-3 justify-between items-center"
                >
                  <div className="flex gap-5 items-center">
                    {/* Checkbox for marking task as completed/incomplete */}
                    <input
                      name={item.id}
                      onChange={handleCheckbox}
                      type="checkbox"
                      checked={item.isCompleted}
                    />
                    {/* Task title with conditional styling */}
                    <div
                      className={`font-semibold ${
                        item.isCompleted ? "line-through text-gray-500" : ""
                      }`}
                    >
                      {item.todo}
                    </div>
                  </div>

                  {/* Buttons for editing and deleting tasks */}
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
