import React from "react";
import "./User.css";

export default function User({ user, showItems }) {
  const handleShowPosts = () => {
    showItems(user);
  };

  return (
    <li className="user" onClick={handleShowPosts}>
      <p>{user.name}</p>
    </li>
  );
}

