import "./App.css";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

function App() {
  const [inputs, setInputs] = React.useState({});
  const navigator = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value || "";
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = inputs;
    const response = await axios(`https://api2.myauto.ge/ka/products?`, {
      params: data,
    });
    event.target.reset();
    navigator(`/${data.Keyword}`, { state: response.data.data, data });
  };
  return (
    <div style={{ backgroundColor: "#f2f3f6" }}>
      <Form
        onSubmit={handleSubmit}
        style={{
          padding: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Form.Control
          type="text"
          placeholder="ჩაწერეთ საძიებო ფრაზა..."
          style={{ margin: "20px 0" }}
          name="Keyword"
          onChange={handleChange}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
