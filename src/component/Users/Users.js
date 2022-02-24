import "./Users.css";
import React, { useState } from "react";
import Modal from "../Modal/Modal";

function Users({ name }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="users_info-box">
      <div className="info_item">
        {name}
        <button onClick={toggleModal}>Open Modal</button>
      </div>
      {modal && (
        <div onClick={toggleModal} className="overlay">
          <div className="modal">
            <Modal name={name} />
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
