import PhotosList from "../../components/PhotosList/PhotosList";
import { getItems } from "../../config/api";
import List from "../../components/shared/List/List";
import photosSlice from "../../store/photosSlice";

export default function Photos() {
  const photosURL = `${process.env.REACT_APP_LIST_URL}/photos`;

  return (
    <List
      listItemsGetter={getItems(photosURL)}
      ListComponent={PhotosList}
      action={photosSlice.actions.add}
      list="photos"
    />
  );
}