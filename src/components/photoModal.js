import React, {useEffect, useState} from 'react';
import {getPhotos} from "../API/photosAPI";
import Photo from "./Photo";

function PhotoModal({id, userId, title, showPhotoModal, closePhotoModal }) {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        getPhotos().then(res => {
            console.log(res)
            setPhotos(res.data)
        })
            .catch(err => console.log(err))
    }, [])
    return showPhotoModal ? (
        <>
            {<div className="photo-modal" onClick={closePhotoModal}>
                <div key={id} className="photo-modal-content" onClick={e => {
                    e.stopPropagation();
                }}>
                    <span className="close" onClick={closePhotoModal}>&times;</span>
                    { photos.map(photo => (userId === photo.id) ?  <Photo  url={photo.url} title={photo.title}/> : null
                    )}
                </div>
            </div>}

        </>
    ) : null;
}

export default PhotoModal;