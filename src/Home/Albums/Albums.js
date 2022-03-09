import React from "react";
import Photos from "../../component/Photos/Photos";
import useFetch from "../../component/Hook/useFetch/useFetch";
import { ALBUM_URL } from "../../constants/Urls";
import ModalPhotos from "../../component/ModalPhotos/ModalPhotos";
import "./Albums.css"

export default function Albums() {
  const [data] = useFetch(ALBUM_URL);

  return (
    <div className="album-list">
      <div >
        
        {data &&
          data.map((item) => (
            <div className="album-items">
              <Photos key={item.id} userId={item.userId} title={item.title} />
              <ModalPhotos />
            </div>
          ))}
      </div>
    </div>
  );
}
