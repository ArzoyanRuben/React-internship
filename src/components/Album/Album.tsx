import { FunctionComponent } from "react";
import { IAlbum } from "../../APIResponseTypes";
import "./Album.css"

interface IProps {
  item: IAlbum
  showItems: Function,
  changeType: Function
}

const Album:FunctionComponent<IProps> = ({ item, showItems, changeType }) => {
    const handleShowPhotos = () => {
      showItems(item);
    };
     
    return (
      <li className="album" onClick={handleShowPhotos}>
        <p>{item.title}</p>
      </li>
    );
  }

  export default Album
  
