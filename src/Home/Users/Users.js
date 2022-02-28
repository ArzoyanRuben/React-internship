import React, { useEffect, useState } from "react";
import User from "../../component/User/User";
import "./Users.css";


function Users() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
       
      });
  };
  useEffect(() => {
    getUsers();
  }, []);

  console.log(users)

  return (
        <div className="users_info-box">
          <div>
            {users.map((users) => (
              <User className="users_info" key={users.id} name={users.name}/>
            ))
            }
            
          </div>
        </div>
  );
}

export default Users;
