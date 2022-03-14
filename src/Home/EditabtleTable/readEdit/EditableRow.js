import React from "react";

export default function EditalbleRow({editFormData, handleEditFormChange, handleCancelClick}) {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          value={editFormData.fullName}
          onChange={handleEditFormChange}
          
        />
      </td>
      <td>
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter a address..."
          value={editFormData.address}
          onChange={handleEditFormChange}
          
        />
      </td>
      <td>
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter a email..."
          value={editFormData.email}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
          <button type="submit">Save</button>
          <button type="submit" onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
}
