import { useSelector } from "react-redux";
import Photo from "../Photo/Photo";
import Loader from "../shared/Loader/Loader";

const { v4: uuidv4 } = require("uuid");

export default function PhotosList({ list, showItems, changeType}) {
  const albums = useSelector((state) => state.albums)

  return (
    <>
    {albums.map((album) => {
      let photos = list.filter((item) => item.id === album.id);
      
    }
      {list ? (
        <div className="photos">
          {list.map((photo) => {
           // if (photo.id === id) {
             //console.log(photo.id, id);
              return (
                <Photo photo={photo} key={uuidv4()} showItems={showItems} changeType={changeType}/>
              );
           // }
          })}
        </div>
      ) : (
        Loader
      )}
    </>
  );
}
