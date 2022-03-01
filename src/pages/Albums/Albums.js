import { getAlbums } from "../../API/albumsAPI";
import { getPhotos } from "../../API/photosAPI";
import Album from "../../components/Album";
import List from "../../components/shared/List/List";
import Photos from "../../components/Photos/Photos";

export default function Albums() {
  return (
    <List
      listItemsGetter={getAlbums}
      modalItemsGetter={getPhotos}
      ListComponent={Album}
      ModalComponent={Photos}
    />
  );
}
