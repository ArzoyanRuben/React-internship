import React from "react";

import ModalPhotos from "../ModalPhotos/ModalPhotos";

export default function Photos({ userId, title }) {
  return (
    <div className="photo-container">
      <div> {title} </div>
      <button className="info-btn" onClick={toggleModal}>
        See post
      </button>
      {ModalPhotos && (
        <div onClick={toggleModal} className="overlay">
          <div className="modal">
            <button className="close-modal-btn" onClick={toggleModal}>
              X
            </button>
            <ModalPhotos userId={userId} title={title} />
          </div>
        </div>
      )}
    </div>
  );
}
