import { FunctionComponent } from "react";
import PhotosList from "../../components/PhotosList/PhotosList";
import Lists from "../../components/shared/Lists/Lists";
import photosSlice from "../../store/photosSlice";

const Photos:FunctionComponent = () => {
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

export default Photos