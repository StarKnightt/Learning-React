import { useState } from "react";
import Navbar from "./componenets/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className=" container mx-auto my-5 rounded-xl p-5 bg-slate-200 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">Add a todo</h2>
          <input type="text" className='w-1/2' />
          <button className= 'bg-slate-800 hover:bg-slate-950 p-3 py-1 text-sm font-bold text-white rounded-md mx-3'> Add </button>
        </div>
        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todos">
          <div className="todo flex">
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing </div>
              <div className="buttons">
                <button className="bg-slate-800 hover:bg-slate-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1">Edit</button>
                <button className="bg-slate-800 hover:bg-slate-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1">Delete</button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

// 23:12
export default App;
