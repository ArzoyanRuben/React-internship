import "./App.css";
import { useEffect, useState } from "react";
import Users from "./components/Users/Users";
import Modal from "./components/Modal/Modal";

async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

function App() {
  const [users, setUsers] = useState(null);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchData();
  }, []);

  const closeModal = () => {
    setCurrent(null)
  }

  const showName = (name) => {
    setCurrent(name);
  };

  return (
    <div className="main">
      {users ? (
        <>
          <Users users={users} showName={showName} />
        </>
      ) : (
        <h1>...Loading</h1>
      )}
      {current && (
        <Modal id="modal" open={current}>
          <div className="modal-content">
          <span className="modal-content__close" onClick={closeModal}>X</span>
            <p> Hello {current}</p>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
