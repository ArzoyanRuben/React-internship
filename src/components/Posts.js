import React, {useEffect, useState} from 'react';
import {getPosts} from "../API/postsAPI";

function Posts({id}) {
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
                    <div key={post.id} >
                        {id === post.userId && post.title}
                    </div>
            )}
        </div>
    );
}

export default Posts;