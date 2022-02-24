import "./App.css";
import React, { useEffect, useState } from "react";
import Modal from "./component/Modal/Modal";
import Users from "./component/Users/Users";

function App() {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="info_item">
      <div className="users-info-box">
        {users.map((users) => (
          <Users className="users_info" key={users.id} name={users.name}>
            
          </Users>
        ))}
      </div>
    </div>
  );
}

export default App;
