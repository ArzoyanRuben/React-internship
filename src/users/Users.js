import React, { useState } from "react";
import { Modal } from "../modal/Modal";

import "./Users.scss";

export const Users = ({ name, username, website }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="users">
      <div className="users-list">
        <p>{name}</p>
        <p>{username}</p>
        <p>{website}</p>
        <button onClick={() => setShowModal(true)}>Click</button>
      </div>
      <Modal
        name={name}
        showModal={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};
