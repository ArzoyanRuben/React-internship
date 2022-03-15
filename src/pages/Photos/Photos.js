import PhotosList from "../../components/PhotosList/PhotosList";
import Lists from "../../components/shared/Lists/Lists";
import photosSlice from "../../store/photosSlice";

export default function Photos() {
  const photosURL = `${process.env.REACT_APP_LIST_URL}/photos`;

  return (
    <Lists
      listItemsGetter={photosURL}
      ListComponent={PhotosList}
      action={photosSlice.actions.add}
      list="photos"
    />
  );
}