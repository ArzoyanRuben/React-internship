import React, { useState } from "react";
import Modal from "../Modal/Modal";

import "./User.css";

export default function User({ name, username, website, id1 }) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="info-list">
      <div className="info_item">
        <p>{name}</p>
        <p> {username}</p>
        <p>{website}</p>
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
            <Modal name={name}  id1={id1}/>
          </div>
        </div>
      )}
    </div>
  );
}
