import { useState } from "react";
import Navbar from "./componenets/Navbar";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState(""); // State for input text
  const [todos, setTodos] = useState([]); // State for array holding all todos

  const handleEdit = () => {
    
  };

  const handleDelete = (e, id) => {
    console.log(`the id is ${id}`)
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    console.log(index)
    let newTodos = todos.filter(item=>{
      return item.id!=id
    });
    // newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
  };

  const handleAdd = () => {
    setTodos([...todos, {id:uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    console.log(todos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value); // Update the todo state with input value
  };

 const handleCheckbox = (e) => {
  let id = e.target.name;
  console.log(`The id is ${id}`);
  let index = todos.findIndex(item=>{
    return item.id === id;
  })

  console.log(index)
  let newTodos = [...todos];
  newTodos[index].isCompleted = !newTodos[index].isCompleted;
  setTodos(newTodos)
  console.log(newTodos)
}
//46:27
 
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-slate-200 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">Add a todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="w-1/2"
          />
          <button
            onClick={handleAdd}
            className="bg-slate-800 hover:bg-slate-950 p-3 py-1 text-sm font-bold text-white rounded-md mx-3"
          >
            Add
          </button>
        </div>
        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todos">


          {todos.map((item) => {
            return (
              <div key={item.id} className="todo flex w-1/4 my-3" justify-between>
              <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted} id="" />
                <div className={item.isCompleted ? "line-through" : ""}>
                  {item.todo}
                </div>
                <div className="buttons">
                  <button
                    onClick={handleEdit}
                    className="bg-slate-800 hover:bg-slate-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e)=>{handleDelete(e,item.id)}}
                    className="bg-slate-800 hover:bg-slate-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
