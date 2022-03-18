import React, { FunctionComponent } from "react";

import { IPost } from "../../APIResponseTypes";
import Post from "../Post/Post";
import Loader from "../shared/Loader/Loader";

const { v4: uuidv4 } = require("uuid");

interface IProps {
  list: IPost[];
  showItems: Function;
  changeType: Function;
}

const PostsList: FunctionComponent<IProps> = ({
  list,
  showItems,
  changeType,
}) => {
  return (
    <>
      {list ? (
        <ul className="posts">
          {list.map((post) => {
            return (
              <Post
                showItems={showItems}
                key={uuidv4()}
                post={post}
                changeType={changeType}
              />
            );
          })}
        </ul>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default React.memo(PostsList);
