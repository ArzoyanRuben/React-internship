import React from "react";
import "./User.css";

export default function User({ user, showItems, changeType }) {
  const handleShowPosts = () => {
    showItems(user);
    changeType()
  };

  return (
    <li className="user" onClick={handleShowPosts}>
      <p>{user.name}</p>
    </li>
  );
}

