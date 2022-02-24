import React, {useState} from 'react';

import Modal from "./Modal";

function Users({name}) {
    const [showModal, setShowModal] = useState(false)

    function openModal() {
        setShowModal(true)
    }

    function closeModal() {
        setShowModal(false)
    }

    return (
        <div className="app-wrapper">
            <li>
                {name}
                <button className="btn"
                        onClick={openModal}
                >Open modal
                </button>
            </li>
            <Modal
                name={name}
                showModal={showModal}
                openModal={openModal}
                closeModal={closeModal}/>
        </div>
    );
}

export default Users;