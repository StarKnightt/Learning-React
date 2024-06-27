import React from 'react'
import './App.css'

const Person = () => {
  const FirstName = "John";
  const SecondName = "Doe"
  // const firstname = "3";
  // const lastname = "4";
  // const fullname = parseInt(firstname) + parseInt(lastname);
  return (
    <>
      <h1 className='hey'>Name: John </h1>
      <h2>Last name: Doe</h2>
      <h2>Age: 30</h2>
      <h1 className='hey'>Name:{(FirstName)} {(SecondName)}</h1>
      {/* <h2 className='output'>Name:{fullname}</h2> */}
    </>
  )
}
const App = () => {
  return (
    <div className="App">
      <Person />
      <Person />
      <Person />

      <h1>Hello {2 + 2}</h1>
    </div>
  );
}

// const App = () => {
// const name = 'prasen'; // null = those two line of code, '' = name as per you use.
// const isNameShowing = true;
// return (
//   <>
{/* <div> */ }
{/* <h1>hello world</h1> */ }
{/* <h1>Hello {isNameShowing ? name: 'Someone'}</h1> */ }
{/* <h2>The answer is {math} </h2> */ }
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

