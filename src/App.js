import { useState } from "react";
import SearchInput from "./components/SearchInput";
import axios from "axios";
import ImageList from "./components/ImageList";

const App = () => {
  const [images, setImages] = useState([]);
  const onSearchSubmit = async (entry) => {
    console.log(entry);
    const response = await axios.get(
      `https://pixabay.com/api/?key=48775536-c556928ec27e6da820e016815&q=${entry}&image_type=photo`
    );
    setImages(response.data.hits);
  };
  return (
    <div className="ui container" style={{ marginTop: "30px" }}>
      <SearchInput onSearchSubmit={onSearchSubmit}></SearchInput>
      {images.length > 0 ? (
        <ImageList images={images} />
      ) : (
        <div style={{ textAlign: "center" }}>
          <h1>No images</h1>
        </div>
      )}
    </div>
  );
};

export default App;
