import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const Form = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "" });

  function handleChange(e) {
    setUser((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
    console.log(e.target.name);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setUser({ firstName: "", lastName: "" });
    e.target.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        full name: <span>{user.firstName + " " + user.lastName}</span>
      </p>
      <label>
        <input
          onChange={handleChange}
          name="firstName"
          type="text"
          placeholder="first name"
        />
      </label>
      <label>
        <input
          onChange={handleChange}
          name="lastName"
          type="text"
          placeholder="last name"
        />
      </label>
      <Button as="input" type="submit" value="Reset" />
    </form>
  );
};

export default Form;
