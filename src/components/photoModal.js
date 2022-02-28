import React, {useEffect, useState} from 'react';
import {getPhotos} from "../API/photosAPI";

function PhotoModal({id, userId, title, showModal, openModal, closeModal}) {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        getPhotos().then(res => {
            console.log(res)
            setPhotos(res.data)
        })
            .catch(err => console.log(err))
    }, [])
    return showModal ? (
        <>
            {<div className="modal" onClick={closeModal}>
                <div className="modal-content" onClick={e => {
                    e.stopPropagation();
                }}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <div className="modal-title"></div>

                    { photos.map(photo => (userId === photo.albumId) ? <div key={photo.id} className='modal-post'>
                    <p> {} </p>
                </div> : null

                    )}
                </div>
            </div>}

        </>
    ) : null;
}

export default PhotoModal;


