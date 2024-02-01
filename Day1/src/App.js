import logo from './logo.svg';
import { useState } from "react";
import "./App.css"
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  // Make a new state named as value which we can change by applying setValue
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <Navbar logoText = "PrasenjitNayak"/>
      <div className='value'>{value}</div>
     <button onClick={()=>setValue(value+5)}>Click me</button>
     <Footer/>
    </div>
  );
}

export default App;
