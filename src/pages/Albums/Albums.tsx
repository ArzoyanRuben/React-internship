import AlbumsList from "../../components/AlbumsList";
import Lists from "../../components/shared/Lists/Lists";
import albumsSlice from "../../store/albumsSlice";

export default function Albums() {
  const albumsURL = `${process.env.REACT_APP_LIST_URL}/albums`;

  return (
    <Lists
      listItemsGetter={albumsURL}
      ListComponent={AlbumsList}
      action={albumsSlice.actions.add} list={""}    />
  );
}
