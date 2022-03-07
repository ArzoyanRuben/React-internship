import { List } from "../../components/List/List";
import { albumUrl, photoUrl } from "../../helpers/API";
import { AlbumsBody } from "./../../components/AlbumsBody/AlbumsBody";
import { ModalAlbums } from "./../../components/ModalAlbums/ModalAlbums";

export const Albums = () => {
  return (
    <List
      ListComponent={AlbumsBody}
      listUrl={albumUrl}
      ModalComponent={ModalAlbums}
      modalUrl={photoUrl}
    />
  );
};
