import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React from "react";

function App() {
  let data;
  const [num, setNum] = React.useState(0);
  const [title, setTitle] = React.useState("");
  const URL = `https://jsonplaceholder.typicode.com/posts/${num}`;
  const sendGetRequest = async () => {
    try {
      const resp = await axios.get(URL);
      console.log(resp.data);
      setTitle(() => {
        return resp.data.title;
      });
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  React.useEffect(() => {
    sendGetRequest();
  }, [num]);

  function handleChange(e) {
    console.log(e.target.value);
    setNum(() => {
      return e.target.value;
    });
  }

  return (
    <div className="App">
      <p>Enter number form 1 to 100</p>
      <input type="number" onChange={handleChange} />
      <p>{num <= 100 && num > 0 ? title : ""}</p>
    </div>
  );
}

export default App;
