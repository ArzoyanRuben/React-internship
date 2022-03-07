import "./Posts.css";
import Post from "../Post/Post";
import useFetch from "../../hooks/useFetch";
import Loader from "../shared/Loader/Loader";

const { v4: uuidv4 } = require("uuid");

export default function Posts({ itemsGetter, id }) {
  const [items] = useFetch(null, itemsGetter);

  return (
    <>
      {items ? (
        <div className="posts">
          {items.map((post) => {
            if (post.userId === id) {
              return (
                <Post title={post.title} key={uuidv4()} body={post.body} />
              );
            }
          })}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
} 