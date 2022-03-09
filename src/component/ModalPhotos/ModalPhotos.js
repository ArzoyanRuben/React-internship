import React from "react";

import Photo from "./Photo";
import useFetch from "../hooks/useFetch";
import { PHOTOS_URL } from "../../constants/Urls";

function ModalPhotos({ id, userId,name }) {
  const [data] = useFetch(PHOTOS_URL);

  return ModalPhotos ? (
    <>
      <div>{name}</div>
      {data.map((item) =>
        userId === item.id ? <Photo url={item.url} title={item.title} /> : null
      )}
    </>
  ) : null;
}

export default ModalPhotos;
