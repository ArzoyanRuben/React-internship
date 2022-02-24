import React from 'react';

function Modal({name, showModal, closeModal}) {

    return showModal ? (
        <>
            {<div className="modal" onClick={closeModal}>
                <div className="modal-content" onClick={e => {
                    e.stopPropagation();
                }}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <p>Hi, I'm {name}</p>
                </div>
            </div>}

        </>
    ) : null;
}

export default Modal;





