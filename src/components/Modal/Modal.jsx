import React, { useMemo, useState } from 'react'
import '../../App.css';
import { Box } from '@mui/system';
import { Button, TextField } from '@mui/material';

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
    curKey
}) => {
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
    const handleChangeItem = (e) => {
        e.preventDefault();
        setData([
            ...data,
            { test: newItem }
        ])
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
