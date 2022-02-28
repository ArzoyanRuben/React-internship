import React, {useEffect, useState} from 'react';
import {getAlbums} from "../API/albumsAPI";
import Photos from "./Photos";


function Albums() {
    const [albums, setAlbums] = useState([]);
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        getAlbums().then(res => {
            console.log(res)
            setAlbums(res.data)
        })
            .catch(err => console.log(err))
    }, [])


    function openModal() {
        setShowModal(true)
    }

    function closeModal() {
        setShowModal(false)
    }

    return (
        <div>
            <h2>TITLES OF ALBUMS</h2>
            {albums.map(
                album =>
                    <Photos key={album.id} userId={album.userId} title={album.title} showModal={showModal}
                            openModal={openModal} closeModal={closeModal}/>
            )}

        </div>
    );
}

export default Albums;
