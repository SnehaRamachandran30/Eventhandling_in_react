import React, { useState } from "react";

function App() {
  let [isMouseOver, setMouseover] = useState(false);
  function clicked() {
    console.log("clicked");
  }
  function sethandover() {
    setMouseover(true);
  }
  function mouseOut() {
    setMouseover(false);
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={clicked}
        onMouseOver={sethandover}
        onMouseOut={mouseOut}
      >
        Submit
      </button>
    </div>
  );
}


export default App;
