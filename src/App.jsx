import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import "./App.css";
function App() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  
  return (
    <div className="app">
      <nav>
        <h1 className="center">
          <FaRobot /> RoboGram
        </h1>
      </nav>
      <section>
        <div className="container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="search center">
              <input
                type="text"
                placeholder="Enter Something....."
                onChange={handleChange}
              />
              <p>Just TYPE and see the MAGIC !!</p>
            </div>
          </form>
          <div className="robot center">
            <img src={`https://robohash.org/${name}.png`} />
            <p>{name}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
