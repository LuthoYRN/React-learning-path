import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Modal = () => {
  const [style, setStyle] = useState("ui dimmer show modals visible active");
  const handleCloseModal = () => {
    setStyle("ui dimmer show modals visible");
  };

  return ReactDOM.createPortal(
    <div className={style}>
      <div className="ui raised very padded text container segment">
        {/* Close Button (X) Positioned on Top-Right */}
        <button
          onClick={handleCloseModal} // Replace with actual close function
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "transparent",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            color: "gray",
          }}
        >
          ✖
        </button>
        <h2>Modal</h2>
        <h1>Content</h1>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
