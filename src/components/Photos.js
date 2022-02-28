import React from 'react';
import PhotoModal from "./photoModal";

function Photos({id, userId, title, showModal, openModal, closeModal}) {
    return (
        <div className="flex-container">
            <div key={id}   onClick={openModal}>
                <div style={{fontFamily: "Georgia"}}> {title} </div>
            </div>
            <PhotoModal
                id={id}
                userId={userId}
                tytle={title}
                showModal={showModal}
                openModal={openModal}
                closeModal={closeModal}/>
        </div>
    );
}

export default Photos;