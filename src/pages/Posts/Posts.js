import { getItems } from "../../config/api";
import PostsList from "../../components/PostsList/PostsList"
import List from "../../components/shared/List/List";
import postsSlice from "../../store/postsSlice";

export default function Posts() {
  const postsURL = `${process.env.REACT_APP_LIST_URL}/posts`;

  return (
    <List
      listItemsGetter={getItems(postsURL)}
      ListComponent={PostsList}
      action={postsSlice.actions.add}
    />
  );
}