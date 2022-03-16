import React from "react";
import './AddUser.css'

export default function AddUser({onAdd }) {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value,e.target.username.value, e.target.email.value);
    e.target.name.value = "";
    e.target.username.value = "";
    e.target.email.value = "";
  };

  return (
    <form className="add-user" onSubmit={handleOnSubmit} >
      <h3>Add User</h3>
      <input placeholder="Name" name="name" />
      <input placeholder="Username" name="username" />
      <input placeholder="Email" name="email" />
      <button onSubmit={handleOnSubmit}>Add</button>
    </form>
  );
};
