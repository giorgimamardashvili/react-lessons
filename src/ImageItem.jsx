import React from "react";
import Image from "react-bootstrap/Image";

const ImageItem = (props) => {
  return (
    <li
      style={{
        display: "inline-block",
        width: "20%",
        height: 100,
        padding: "10px",
      }}
    >
      <Image
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
        src={props.img}
        alt=""
        rounded
      />
    </li>
  );
};

export default ImageItem;
