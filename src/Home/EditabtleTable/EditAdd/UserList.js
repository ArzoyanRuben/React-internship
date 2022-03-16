import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useState } from "react";
import './UserList.css';

export default function UserList({ name, email,username, id, onEdit, onDelete })  {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.name.value, evt.target.username.value, evt.target.email.value);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit} className="edit-form">
          <input placeholder="Name" name="name" defaultValue={name} />
          <input placeholder="Username" name="username" defaultValue={username} />
          <input placeholder="Email" name="email" defaultValue={email} />
          <button onSubmit={handleOnEditSubmit}>Save</button>
        </form>
      ) : (
        <div className="user">
          <div className="user-list">
          <span>{name}</span>
          <span>{username}</span>
          <span >{email}</span>
          <div>
            <EditIcon onClick={handleEdit}/>
            <DeleteForeverIcon onClick={handleDelete}/>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

