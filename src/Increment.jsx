import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const Increment = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "30px auto",
        alignItems: "center",
      }}
    >
      <p style={{ marginRight: "20px" }}>{props.initial}</p>
      <Button variant="primary" onClick={props.onClickFunc}>
        Increment
      </Button>
    </div>
  );
};

export default Increment;
