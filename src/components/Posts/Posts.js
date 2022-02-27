import "./Posts.css"
import Post from "../Post/Post";

export default function Posts({ items, id }) {
  return (
    <div className="posts">
      {items.map((post) => {
        if (post.userId === id)
          return <Post title={post.title} body={post.body} />;
      })}
    </div>
  );
}
