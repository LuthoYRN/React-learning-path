import React from "react";
import ReactDOM from "react-dom";

const Modal = () => {
  return ReactDOM.createPortal(
    <div className="ui dimmer show modals visible active">
      <div className="ui raised very padded text container segment">
        <h2>Modal</h2>
        <h1>Content</h1>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
