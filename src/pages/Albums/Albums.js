import { getAlbums } from "../../API/albumsAPI";
import { getPhotos } from "../../API/photosAPI";
import AlbumsList from "../../components/AlbumsList";
import List from "../../components/shared/List/List";
import Photos from "../../components/Photos/Photos";

export default function Albums() {
  return (
    <List
      listItemsGetter={getAlbums}
      modalItemsGetter={getPhotos}
      ListComponent={AlbumsList}
      ModalComponent={Photos}
    />
  );
}
