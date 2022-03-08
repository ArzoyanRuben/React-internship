import React, { useState } from "react";
// import { List } from "../../view/components/list/List";
import { Modal } from "../modal/Modal";

import "./UsersList.scss";

export const UsersList = ({ name, username, website }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="users">
      <div className="users-list" onClick={() => setShowModal(true)}>
        <p>{name}</p>
        <p>{username}</p>
        <p>{website}</p>
        <Modal
          name={name}
          showModal={showModal}
          onClose={() => setShowModal(false)}
        />
    </div>
    </div>
  );
};
