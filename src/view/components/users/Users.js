import React from "react";

import "./Users.scss";
import { UsersList} from '../userList/UsersList'
import useFetch from "../../hooks/useFetch";
import { URL_LIST } from "../../constants";


export const Users = () => {
  const [data] = useFetch(URL_LIST)

  return (
    <div className="list">
      <div className="list-text">
        <p className="header">User list</p>
        <div >
          {data && data.map(item => {
            return (
              <div>
                <UsersList
                  key={item.id}
                  name={item.name}
                  username={item.username}
                  website={item.website}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;
