import React, { useState } from "react";

import ModalPhotos from "../ModalPhotos/ModalPhotos";



export default function Photos({ userId, title }) {

  const [modalPhotos, setModalPhotos] = useState(false);
  const toggleModal = () => {
    setModalPhotos(!modalPhotos);
  };

  return (

    <div className="photo-s">
      <div> {title} </div>
      <button className="info-btn" onClick={toggleModal}>
        See photos
      </button>
       {modalPhotos && (
        <div onClick={toggleModal} className="overlay">
          <div className="modal">
            <button className="close-modal-btn" onClick={toggleModal}>
              X
            </button>
            <ModalPhotos
            userId={userId} 
            title={title} />
          </div>
        </div>
      )}
    </div>
  );
}
