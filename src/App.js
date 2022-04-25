import React from "react";
import { useRef } from "react";
import { useState } from "react";
import useRandomJoke from "./useRandomJoke";
import "./App.css";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [first, setFirst] = useState("Chris");
  const [last, setLast] = useState("Risner");

  const joke = useRandomJoke(first, last);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirst(firstNameRef.current.value);
    setLast(lastNameRef.current.value);
  };

  return (
    <div className="app">
      <div className="app__box">
        <h3 className="app__title">Random Joke Generator</h3>
      <h1 className="app__joke">{joke}</h1>

      <form className="app__form">
        <div>
          <input placeholder="first name" ref={firstNameRef} />
          <input placeholder="last name" ref={lastNameRef} />
        </div>
        <button onClick={generateJoke}>Generate A Joke</button>
      </form>
      </div>
      
    </div>
  );
}

export default App;
