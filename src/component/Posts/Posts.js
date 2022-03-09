
import "./Posts.css";
import Post from "../Post/Post";
import React, { useEffect, useState } from "react";
import useFetch from "../Hook/useFetch/useFetch";


export default function Posts({ itemsGetter, id }) {
  const [items] = useFetch(null, itemsGetter);

  return (
    <>
      {items ? (
        <div className="posts">
          {items.map((post) => {
            if (post.userId === id) {
              return (
                <Post title={post.title} key={id} body={post.body} />
              );
            }
          })}
        </div>
      ) : (
    null
      )}
    </>
  );
}