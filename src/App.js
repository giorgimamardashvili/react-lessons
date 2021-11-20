import "./App.css";
import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPaginate from "react-paginate";
import Form0 from "./Form";

function App() {
  const [info, setInfo] = React.useState({});
  const [getInput, setGetInput] = React.useState({});

  const getItems = async (current) => {
    setGetInput((prev) => ({ ...prev, Page: `${current}` }));
    console.log(getInput, current);
    const response = await axios(`https://api2.myauto.ge/ka/products?`, {
      params: getInput,
    });
    return response.data.data;
  };

  const handlePageClick = async (data) => {
    let current = data.selected + 1;
    // console.log(current);
    const itemsFromServer = await getItems(current);
    setInfo(itemsFromServer);
  };

  return (
    <div style={{ backgroundColor: "#f2f3f6" }}>
      <Form0 getInfo={setInfo} getInputs={setGetInput} />
      <section style={{ padding: "20px" }}>
        {info.items &&
          info.items.map((item, index) => (
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
      {Object.keys(info).length !== 0 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel="next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={Math.ceil(info.meta.total / info.meta.per_page)}
          previousLabel="previous"
          renderOnZeroPageCount={null}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          previousLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      )}
    </div>
  );
}

export default App;
