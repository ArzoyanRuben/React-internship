import React, {useEffect, useState} from 'react';
import {getPhotos} from "../API/photosAPI";
import Photo from "./Photo";

function PhotoModal({userId, showModal, closeModal}) {
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
            {<div className="photo-modal" onClick={closeModal}>
                <div className="photo-modal-content" onClick={e => {
                    e.stopPropagation();
                }}>
                    <span className="close" onClick={closeModal}>&times;</span>

                    { photos.map(photo => (userId === photo.id) ? <Photo  url={photo.url}/> : null

                    )}
                </div>
            </div>}

        </>
    ) : null;
}

export default PhotoModal;