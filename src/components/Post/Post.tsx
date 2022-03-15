import { FunctionComponent } from "react";
import { IPost } from "../../APIResponseTypes";

interface IProps {
  post: IPost;
  showItems: Function;
  changeType: Function;
}

const Post: FunctionComponent<IProps> = ({ post, showItems, changeType }) => {

  const handleShowPosts = (): void => {
    showItems(post);
    changeType();
  };

  return (
    <div onClick={handleShowPosts}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;