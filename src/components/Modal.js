
import React from 'react';

function Modal({name, showModal, closeModal}) {

    return (
        <>
        {showModal && <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <p>Hi, I'm {name}</p>
            </div>
        </div>}

        </>
    );
}

export default Modal;





