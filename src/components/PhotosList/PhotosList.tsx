import { FunctionComponent } from "react";
import { RootStateOrAny, useSelector } from "react-redux";

import { IPhoto } from "../../APIResponseTypes";
import Photo from "../Photo/Photo";
import Loader from "../shared/Loader/Loader";

const { v4: uuidv4 } = require("uuid");

interface IProps {
  list: IPhoto[];
  showItems: Function;
  changeType: Function;
}

const PhotosList: FunctionComponent<IProps> = ({
  list,
  showItems,
  changeType,
}) => {
  const albums = useSelector((state: RootStateOrAny) => state.albums);

  return (
    <>
      {/* {albums.map((album) => {
      let photos = list.filter((item) => item.id === album.id);
      
    } */}
      {list ? (
        <div className="photos">
          {list.map((photo) => {
            // if (photo.id === id) {
            return (
              <Photo
                photo={photo}
                key={uuidv4()}
                showItems={showItems}
                changeType={changeType}
              />
            );
            // }
          })}
        </div>
      ) : (
        Loader
      )}
    </>
  );
};

export default PhotosList;
