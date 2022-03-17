import React from 'react';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

function EditedUsers({id1, name, email, phone}) {
    return (
        <div>
            <div className='editedUsers'>
                <div><span>{name}</span></div>
                <div><span>{email}</span></div>
                <div><span>{phone}</span></div>
                <div className='editIcons'><span className='editIcon'>Edit <EditIcon className='icon'/></span><span
                    className='deleteIcon'> Delete<DeleteIcon className='icon'/></span></div>
            </div>
        </div>
    );
}

export default EditedUsers;