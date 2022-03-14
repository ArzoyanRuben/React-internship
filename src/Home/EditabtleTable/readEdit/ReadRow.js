import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function ReadRow({ contact, handleEditClick, handleDeleteClick }) {
  return (
    <tr key={contact.id}>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.email}</td>
      <td>
        <EditIcon onClick={(event) => handleEditClick(event, contact)} />
        <DeleteForeverIcon onClick={()=>handleDeleteClick(contact.id)} />
      </td>
    </tr>
  );
}
