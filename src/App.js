import React from "react";
import "./App.css";
import Increment from "./Increment";

function App() {
  const [firstCounter, setFirstCounter] = React.useState(0);
  const [secondCounter, setSecondCounter] = React.useState(0);
  const firstCounterIncrement = () => setFirstCounter(firstCounter + 1);
  const secondCounterIncrement = () => setSecondCounter(secondCounter + 1);
  return (
    <div className="App">
      <Increment onClickFunc={firstCounterIncrement} initial={firstCounter} />
      <Increment onClickFunc={secondCounterIncrement} initial={secondCounter} />
      <p style={{ margin: "0 auto", width: "fit-content" }}>
        {firstCounter > secondCounter
          ? `პირველი ცვალი ${firstCounter}`
          : `მეორე ცვლადი ${secondCounter}`}
      </p>
    </div>
  );
}

export default App;
