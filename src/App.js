import React, { useEffect, useState } from "react";
import axios from "axios";

import "./styles/fonts.scss";
import "./styles/reset.scss";
import "./App.scss";
import { Users } from "./users/Users";

export const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => console.log("error"));
  }, []);

  return (
    <div className="app">
      <div className="app-text">
        <p className="header">User list</p>
        <div >
          {users.map((user) => {
            return (
              <Users
                key={user.id}
                name={user.name}
                username={user.username}
                website={user.website}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
