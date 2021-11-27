import React from "react";
import { useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  console.log(location.state);
  const items = location.state.items;
  return (
    <section style={{ padding: "20px" }}>
      {items &&
        items.map((item, index) => (
          <div
            key={item.car_id}
            style={{
              display: "flex",
              backgroundColor: "#fff",
              marginBottom: "20px",
            }}
          >
            <img
              src={`https://static.my.ge/myauto/photos/${item.photo}/thumbs/${item.car_id}_1.jpg?v=${item.photo_ver}`}
              style={{
                width: "300px",
                height: "200px",
                objectFit: "cover",
                flexShrink: "0",
                display: "block",
                padding: "15px",
              }}
            />
            <div style={{ padding: "15px" }}>
              <h3></h3>
              <span style={{ color: "#8996ae" }}>{item.prod_year} წ</span>
              <p
                style={{
                  height: "100px",
                  overflow: "hidden",
                }}
              >
                {item.car_desc}
              </p>
              <span>ფასი{item.price}$</span>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Products;
