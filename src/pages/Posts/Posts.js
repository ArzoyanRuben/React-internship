import PostsList from "../../components/PostsList/PostsList"
import Lists from "../../components/shared/Lists/Lists";
import postsSlice from "../../store/postsSlice";

export default function Posts() {
  const postsURL = `${process.env.REACT_APP_LIST_URL}/posts`;

  return (
    <Lists
      listItemsGetter={postsURL}
      ListComponent={PostsList}
      action={postsSlice.actions.add}
    />
  );
}