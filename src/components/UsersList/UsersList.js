import React from "react";
import User from "../User";

function UsersList({ list, showItems, changeType }) {
  return (
    <>
      {list.map((user) => (
        <User key={user.id} user={user} showItems={showItems} changeType={changeType} />
      ))}
    </>
  );
}

export default React.memo(UsersList);
