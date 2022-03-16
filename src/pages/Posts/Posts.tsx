import { FunctionComponent } from "react";
import PostsList from "../../components/PostsList/PostsList";
import Lists from "../../components/shared/Lists/Lists";
import postsSlice from "../../store/postsSlice";

const Posts: FunctionComponent = () => {
  const postsURL = `${process.env.REACT_APP_LIST_URL}/posts`;

  return (
    <Lists
      listItemsGetter={postsURL}
      ListComponent={PostsList}
      action={postsSlice.actions.add}
      list="posts"
    />
  );
};

export default Posts;
