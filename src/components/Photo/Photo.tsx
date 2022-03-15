import { FunctionComponent } from "react";
import { IPhoto } from "../../APIResponseTypes";

interface IProps {
  photo: IPhoto,
  showItems: Function,
  changeType: Function
}

const Photo:FunctionComponent<IProps> = ({ photo, showItems, changeType }) => {

  const handleShowPosts = ():void => {
    showItems(photo);
    changeType()
  };
    return (
      <div onClick={handleShowPosts}>
        <h3>{photo.title}</h3>
        <img src={`${photo.url}`}/>
      </div>
    );
  }

  export default Photo