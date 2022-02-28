import "./User.css";
import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";

function User({ name }) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="info-list">
      <div className="info_item">
        {name}
        <button className="info-btn" onClick={toggleModal}>
          See post
        </button>
      </div>
      {modal && (
        <div onClick={toggleModal} className="overlay">
          <div className="modal">
            <button className="close-modal-btn" onClick={toggleModal}>
              X
            </button>
            <Modal name={name} />
          </div>
        </div>
      )}
    </div>
  );
}

export default User;
