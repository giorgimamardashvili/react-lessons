import "./App.css";
import ImageItem from "./ImageItem";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form";

function App() {
  const images = [
    "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F2020-Chevrolet-Corvette-Stingray%2F960x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F2020-Chevrolet-Corvette-Stingray%2F960x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349",
    "https://cdn.motor1.com/images/mgl/8e8Mo/s1/most-expensive-new-cars-ever.webp",
    "https://cdn.motor1.com/images/mgl/mrz1e/s1/coolest-cars-feature.webp",
    "https://i.insider.com/550cbf03ecad04de2c7c008a?width=1200&format=jpeg",
    "https://cdn.luxe.digital/media/2020/12/15110747/fastest-cars-world-2021-luxe-digital%402x.jpg",
  ];

  return (
    <div className="App">
      <ul style={{ padding: "1rem" }}>
        {images.map((url) => (
          <ImageItem img={url} />
        ))}
      </ul>
      <Form />
    </div>
  );
}

export default App;
