import Post from "../Post/Post";
import React, { useEffect, useState } from "react";

function Posts() {
    const [posts, setPosts] = useState([]);
  
    const getPosts = () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setPosts(data);
        });
    };
    useEffect(() => {
      getPosts();
    }, []);
  
    console.log(posts);
  
    return (
      <div className="users-albums-box">
        <h4>Albums Title</h4>
        <div className="list-of-albums">
          {posts.map((posts) => (
            <Post key={posts.id} title={posts.title} userId={posts.userId} />
          ))}
        </div>
      </div>
    );
  }
  
  export default Posts;
  