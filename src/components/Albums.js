import React, {useEffect, useState} from 'react';
import {getUsers} from "../API/usersAPI";
import {getAlbums} from "../API/albumsAPI";
import Modal from "./Modal";
import Photos from "./Photos";
import Users from "./Users";

function Albums(props) {
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
            {albums.map(
                album =>
                    <Photos key={album.id} userId={album.userId} title={album.title} showModal={showModal} openModal={openModal} closeModal={closeModal}/>
            )}
        </div>
    );
}

export default Albums;