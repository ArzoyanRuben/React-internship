import React, { useMemo } from 'react'
import '../../App.css';
import { Box } from '@mui/system';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addVal } from '../../store/users/usersSlice';
import { useSelector } from 'react-redux';
import { usersSliceOp } from '../../store/users';

export const Modal = ({
    tableModal,
    listModal,
    isOpenButton,

    toggle,
    setNewItem,
    newItem,
    data,
    setData,
    url,
    isUsers,
    curKey,
    curIndex,
    curIndexRow
}) => {
    // console.log(data, 'dataModal');
    const dispatch = useDispatch();
    const handleUsersAddItem = (e) => {
        e.preventDefault();
        fetch(url
            // , {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // }
        ).then((res) => {
            if (res.status === 200) {
                setData([
                    ...data,
                    isUsers ? { id: data.length + 1, name: newItem, }
                        : { userId: data.length + 1, id: data.length + 1, title: newItem }
                ])
            }
        })
        toggle();
        setNewItem('')
    }
    const dataTable = useSelector(addVal);



    // const changeData = () => {
    //     let arrCopy = { ...dataTable.payload.users.usersData };
    //     dispatch(usersSliceOp.handleData()
    //     [...arrCopy, arrCopy[curIndexRow].disclosure_year])

    //     let obj = arrCopy[curIndexRow];
    //     let objCopy = Object.keys(obj);

    //     console.log(arrCopy[curIndexRow], objCopy[curIndex]);
    // }
    // changeData();


    const handleChangeItem = (e) => {
        e.preventDefault();

        // console.log(newItem, curKey, curIndex, 'dataaNew');
        // debugger;
        // setData(newItem)
        // console.log(dataTable.payload.users.usersData, 'dataTable updated!')
    }
    return (
        <>
            {tableModal &&
                <>
                    <Box className="modal-overlay" />
                    <Box className="modal-wrapper" role="dialog">
                        <Box className="modal">
                            <Button
                                className="modal-close-button"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={toggle}
                            >
                                <Box
                                    sx={{ fontSize: 30 }}
                                    component="div"
                                    display="inline"
                                    aria-hidden="true"
                                >
                                    &times;
                                </Box>
                            </Button>
                            <Box className="modal-header">
                                <TextField
                                    id="outlined-name"
                                    label="Enter new value"
                                    onChange={(e) => setNewItem(e.target.value)}
                                    value={newItem}
                                />
                                <Button onClick={handleChangeItem} variant='outlined'>Submit Changes</Button>
                            </Box>
                        </Box>
                    </Box>
                </>
            }
            {isOpenButton && listModal &&
                <>
                    <Box className="modal-overlay" />
                    <Box className="modal-wrapper" role="dialog">
                        <Box className="modal">
                            <Button
                                className="modal-close-button"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={toggle}
                            >
                                <Box
                                    sx={{ fontSize: 30 }}
                                    component="div"
                                    display="inline"
                                    aria-hidden="true"
                                >
                                    &times;
                                </Box>
                            </Button>
                            <Box className="modal-header">
                                <TextField
                                    id="outlined-name"
                                    label="enter new name"
                                    onChange={(e) => setNewItem(e.target.value)}
                                    value={newItem}
                                />
                                {!newItem && <Button onClick={handleUsersAddItem} variant='outlined' disabled>Submit Changes</Button>}
                                {newItem && <Button onClick={handleUsersAddItem} variant='outlined'>Submit Changes</Button>}
                            </Box>
                        </Box>
                    </Box>
                </>
            }
        </>
    )
}
