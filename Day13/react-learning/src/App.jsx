import { useState } from 'react'
import React from 'react'
import './App.css'

const Person = () =>{
  return(
    <>
    <h1 className='hey'>Name: John </h1>
    <h2>Last name: Doe</h2>
    <h2>Age: 30</h2>
    </>
  )
}

const App = () =>{
  return (
    <div className="App">
     <Person />
      <h1>Hello {2+2}</h1>
    </div>
  );
}

// const App = () => {
  // const name = 'prasen'; // null = those two line of code, '' = name as per you use.
  // const isNameShowing = true;
  // return (
  //   <>
      {/* <div> */}
      {/* <h1>hello world</h1> */}
        {/* <h1>Hello {isNameShowing ? name: 'Someone'}</h1> */}
        {/* <h2>The answer is {math} </h2> */}
        {/* {name ? ( 
          <>
          <h1>{name}</h1>
        </>
        ):(
          <>
          <h1>test</h1>
          <h2>There is no name</h2>
          </>
        )
        } 
      </div> */}

//     </>   
//   )
// }
export default App

