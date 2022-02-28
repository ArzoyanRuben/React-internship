import React, { useEffect, useState } from "react";
import Album from "../../component/Album/Album";
import "./Albums.css";

function Users() {
  const [albums, setAlbums] = useState([]);

  const getAlbums = () => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAlbums(data);
      });
  };
  useEffect(() => {
    getAlbums();
  }, []);

  console.log(albums);

  return (
    <div className="users-albums-box">
      <h4>Albums Title</h4>
      <div className="list-of-albums">
        {albums.map((albums) => (
          <Album key={albums.id} title={albums.title} userId={albums.userId} />
        ))}
      </div>
    </div>
  );
}

export default Users;
