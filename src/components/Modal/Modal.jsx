import React from 'react'
import '../../App.css';
import { Box } from '@mui/system';
import { Button, Input, TextField } from '@mui/material';

export const Modal = ({
    toggle,
    tableModal,
    listModal
}) => {
    const closeModal = () => {
        toggle();
    }
    // console.log(isOpen, 'isopen')
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
                                onClick={closeModal}
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
                                    label="Name"
                                    // value={item?.name}
                                    // onChange={(e) => setItem(e)}
                                    value='value'
                                />
                                <Button variant='outlined'>Submit Changes</Button>
                            </Box>
                        </Box>
                    </Box>
                </>
            }
            {listModal &&
                <>
                    <Box className="modal-overlay" />
                    <Box className="modal-wrapper" role="dialog">
                        <Box className="modal">
                            <Button
                                className="modal-close-button"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={closeModal}
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
                                    label="Name"
                                    // value={item?.name}
                                    // onChange={(e) => setItem(e)}
                                    value='aaaaaaaaaaaaaaaa'
                                />
                                <Button variant='outlined'>Saaaaubmit Changes</Button>
                            </Box>
                        </Box>
                    </Box>
                </>
            }
        </>
    )
}
