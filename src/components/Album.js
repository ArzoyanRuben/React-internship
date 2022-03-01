import React, {useEffect, useState} from 'react';
import {getAlbums} from "../API/albumsAPI";
import Photos from "./Photos";
import Album from "./Album";
function Album() {
    const [albums, setAlbums] = useState([]);
    const [showPhotoModal, setShowPhotoModal] = useState(false)
    useEffect(() => {
        getAlbums().then(res => {
            console.log(res)
            setAlbums(res.data)
        })
            .catch(err => console.log(err))
    }, [])


    function openPhotoModal() {
        setShowPhotoModal(true)
    }

    function closePhotoModal() {
        setShowPhotoModal(false)
    }

    return (
        <div>
            <h2>TITLES OF ALBUMS</h2>
            {albums.map(
                album =>
                    <Photos key={album.id} userId={album.userId} title={album.title} showPhotoModal={showPhotoModal}
                            openPhotoModal={openPhotoModal} closePhotoModal={closePhotoModal}/>
            )}

        </div>
    );
}

export default Album;
