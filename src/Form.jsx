import React from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const Form0 = (props) => {
  const [inputs, setInputs] = React.useState({ Page: "1" });

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
    props.getInfo(response.data.data);
    props.getInputs(data);
    event.target.reset();
  };

  return (
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
      <Form.Select
        aria-label="Default select example"
        onChange={handleChange}
        name="Mans"
        style={{ flex: "1 1 20%" }}
      >
        <option>მწარმოებელი</option>
        <option value="2">AUDI</option>
        <option value="3">BMW</option>
        <option value="74">FERRARI</option>
      </Form.Select>
      <Form.Select
        aria-label="Default select example"
        onChange={handleChange}
        name="Cats"
        style={{ flex: "1 1 20%" }}
      >
        <option>კატეგორია</option>
        <option value="1">სედანი</option>
        <option value="5">ჯიპი</option>
        <option value="4">კუპე</option>
        <option value="2">ჰეჩბექი</option>
        <option value="3">უნივერსალი</option>
        <option value="6">კაბრიოლეტი</option>
      </Form.Select>
      <Form.Select
        aria-label="Default select example"
        onChange={handleChange}
        name="Customs"
        style={{ flex: "1 1 20%" }}
      >
        <option>განბაჟება</option>
        <option value="1">დიახ</option>
        <option value="0">არა</option>
      </Form.Select>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Form.Control
        type="text"
        placeholder="ჩაწერეთ VIN კოდი, ID, ტელეფონი ან ნებისმიერი საძიებო ფრაზა..."
        style={{ marginTop: "20px" }}
        name="Keyword"
        onChange={handleChange}
      />
    </Form>
  );
};

export default React.memo(Form0);
