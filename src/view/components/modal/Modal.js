import React from "react";
import "./Modal.scss";

export const Modal = ({ name, showModal, onClose}) => {
    if(!showModal)return null
  return (
    <div className="modal">
      <p>My name is {name}</p>
          <button onClick={onClose}className="button">X</button>
    </div>
  );
};
