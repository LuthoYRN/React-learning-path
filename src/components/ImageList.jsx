import React from "react";

const ImageList = ({ images }) => {
  return (
    <div className="ui container three column grid">
      {images.map((image, index) => (
        <div key={index} className="column">
          <img src={image.webformatURL} alt="image" className="ui image" />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
