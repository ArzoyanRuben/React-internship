import React from "react";
import Album from "../Album";

function AlbumsList({ list, showItems }) {
  return (
    <>
      {list.map((item) => (
        <Album key={item.id} item={item} showItems={showItems} />
      ))}
    </>
  );
}

export default React.memo(AlbumsList);