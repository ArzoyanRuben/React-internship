import { List } from "../../components/List/List";
import { AlbumsBody } from "./../../components/AlbumsBody/AlbumsBody";
import { ModalAlbums } from "./../../components/ModalAlbums/ModalAlbums";

export const Albums = () => {
  const albumUrl = process.env.REACT_APP_JSON_PLACEHOLDER_API + '/albums';
  const photoUrl = process.env.REACT_APP_JSON_PLACEHOLDER_API + '/photos';
  return (
    <List
      ListComponent={AlbumsBody}
      listUrl={albumUrl}
      ModalComponent={ModalAlbums}
      modalUrl={photoUrl}
    />
  );
};
