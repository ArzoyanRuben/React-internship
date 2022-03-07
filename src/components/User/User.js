import React from "react";
import "./User.css";

export default function User({ user, showItems }) {
  const handleShowPosts = () => {
    showItems(user.id);
  };

  return (
    <li className="user" onClick={handleShowPosts}>
      <p>{user.name}</p>
    </li>
  );
}

