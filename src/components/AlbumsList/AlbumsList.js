import React from "react";
import { useSelector } from "react-redux";
import Album from "../Album";

function AlbumsList({ list, showItems }) {
  let users = useSelector((state) => state.users);

  return (
    <>
      {users.map((user) => {
        let album = list.find((album) => user.id === album.userId);
        return <Album key={album.id} item={album} showItems={showItems} />;})}
    </>
  );
}

export default React.memo(AlbumsList);