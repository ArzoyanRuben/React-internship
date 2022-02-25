import { useState, useEffect } from "react";

import User from "./User";
import Modal from "../../components/Modal";
import { getUsers } from "../../API/useAPI";

export default function Users() {
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
    setCurrent(null);
  };

  const showName = (name) => {
    setCurrent(name);
  };
  return (
    <div className="users">
      {users ? (
        <>
          {users.map((user) => (
            <User key={user.id} user={user} showName={showName} />
          ))}
        </>
      ) : (
        <h1>...Loading</h1>
      )}
      {current && (
        <Modal id="modal" open={current}>
          <div className="modal-content">
            <span className="modal-content__close" onClick={closeModal}>
              X
            </span>
            <p> Hello {current}</p>
          </div>
        </Modal>
      )}
    </div>
  );
}
