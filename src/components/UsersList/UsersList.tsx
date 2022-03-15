import React, { FunctionComponent } from "react";
import { List, IUser } from "../../APIResponseTypes";
import User from "../User/User";

interface Iprops {
  list: IUser[],
  showItems: Function,
  changeType: Function
}

const UsersList: FunctionComponent<Iprops> = ({ list, showItems, changeType }) => {
  return (
    <>
      {list.map((user) => (
        <User key={user.id} user={user} showItems={showItems} changeType={changeType} />
      ))}
    </>
  );
}

export default React.memo(UsersList);
