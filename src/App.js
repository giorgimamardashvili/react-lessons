import "./App.css";
import React from "react";
import Button1 from "./Button1";
import Button2 from "./Button2";

function App() {
  return (
    <div className="App" style={{ display: "flex", paddingTop: "50px" }}>
      <Button1 />
      <Button2 />
    </div>
  );
}

export default App;
