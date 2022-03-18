import React from 'react'
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react';
import { usersSliceOp } from '../../../store/users';
import { useDispatch } from 'react-redux';

export const TableActions = () => {
    // const dispatch = useDispatch();
    // const deleteItem = () => {
    //     setCurIndexRow(col)
    //     fetch('https://jsonplaceholder.typicode.com/users', { method: 'DELETE' })
    //         .then((res) => {
    //             if (res.status === 200) {
    //                 const delItem = dataTable.filter((data) => {
    //                     // console.log(data[curIndexRow], 'delete Item');
    //                     return data[curIndexRow] !== curIndexRow;
    //                 })
    //                 dispatch(usersSliceOp.handleData(delItem));
    //             }
    //         })
    // }
    return (
        <>
            <Button >
                <EditIcon />
            </Button>
            <Button
            // onClick={deleteItem}
            >
                <DeleteIcon />
            </Button>
        </>
    )
}
