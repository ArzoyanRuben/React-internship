import React, {useEffect, useState} from 'react';
import {getPosts} from "../API/postsAPI";

function Posts({id1}) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(res => {
            console.log(res)
            setPosts(res.data)
        })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {posts.map(
                post =>
                    (id1 === post.userId) ?
                        <div key={post.id} >
                            {post.title}
                        </div> : null
            )}
        </div>
    );
}

export default Posts;