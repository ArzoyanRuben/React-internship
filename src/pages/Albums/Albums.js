import { getItems } from "../../config/api";
import AlbumsList from "../../components/AlbumsList";
import List from "../../components/shared/List/List";
import Photos from "../../components/Photos/Photos";
import albumsSlice from "../../store/albumsSlice";

export default function Albums() {
  const albumsURL = `${process.env.REACT_APP_LIST_URL}/albums`

  console.log(albumsSlice.actions)
  return (
    <List
      listItemsGetter={getItems(albumsURL)}
      ListComponent={AlbumsList}
      action={albumsSlice.actions.add}
    />
  );
}
