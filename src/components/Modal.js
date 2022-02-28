import React, {useEffect, useState} from 'react';
import Users from "./Users";
import {getPosts} from "../API/postsAPI";

function Modal({id1, name, showModal, closeModal}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(res => {
            console.log(res)
            setPosts(res.data)
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
                    <div className="modal-title">Title: {name}</div>

                    {posts.map(
                        post =>
                            (id1 === post.userId) ?
                                <div key={post.id} className='modal-post'>
                                    <p> . {post.title} </p>
                                </div> : null
                    )}

                </div>
            </div>}

        </>
    ) : null;
}

export default Modal;


