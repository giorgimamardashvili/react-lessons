import React from "react";
import { useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <h2>products sum:{location.state.items.length}</h2>
    </div>
  );
};

export default Products;
