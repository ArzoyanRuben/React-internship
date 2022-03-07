import React from "react";
import User from "../User";

function UsersList({ list, showItems }) {
  return (
    <>
      {list.map((user) => (
        <User key={user.id} user={user} showItems={showItems} />
      ))}
    </>
  );
}

export default React.memo(UsersList);
