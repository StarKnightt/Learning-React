import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // const [name, setname] = useState("Prasen");

  const [form, setform] = useState({});

  const handleClick = () => {
    alert("Hey I'm clicked");
  };

  // const handleMouseOver = () => {
  //   alert("Hey I'm a mouse over click");
  // };

  const handleChange = (e) => {
    //  setname(e.target.value)
    setform({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      {/* <div className="red" onMouseOver={handleMouseOver}>
        I'm a red div.
      </div> */}

      <input
        type="text"
        name="email"
        value={form.email ? form.email : ""}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        value={form.phone ? form.phone : ""}
        onChange={handleChange}
      />
    </>
  );
  
  // This code will render two input fields, one for email and one for phone number. The value of each input field is controlled by the corresponding value in the form state. If form.email or form.phone is null or undefined, it will display an empty string to prevent the input field from being uncontrolled. The onChange event is connected to the handleChange function, which updates the form state whenever the user types into the input fields.


}
export default App;
