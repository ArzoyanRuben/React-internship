import React, { FunctionComponent } from "react";
import { IUser } from "../../APIResponseTypes";
import "./User.css";

interface Iprops {
  user: IUser;
  showItems: Function;
  changeType: Function;
}

const User: FunctionComponent<Iprops> = ({ user, showItems, changeType }) => {
  const handleShowPosts = (): void => {
    showItems(user);
    changeType();
  };

  return (
    <li className="user" onClick={handleShowPosts}>
      <p>{user.name}</p>
    </li>
  );
};

export default User
