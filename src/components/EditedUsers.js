import React from 'react';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

function EditedUsers({id, name, email, website, onDelete}) {

    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <div>
            <div className='editedUsers'>
                <div><span>{name}</span></div>
                <div><span>{email}</span></div>
                <div><span>{website}</span></div>
                <div className='editIcons'><span className='editIcon'>Edit <EditIcon className='icon'/></span><span
                    className='deleteIcon' onClick={handleDelete}> Delete<DeleteIcon className='icon'/></span></div>
            </div>
        </div>
    );
}

export default EditedUsers;
