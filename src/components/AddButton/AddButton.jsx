import React from 'react'
import { Button } from '@mui/material';
import { Modal } from './../Modal/Modal';

export const AddButton = ({ isOpen, toggle, item, setItem }) => {
    const modalToggle = () => {
        toggle();
    };
    return (
        <>
            <Button variant='contained' onClick={modalToggle}>Add</Button>
            {isOpen ? <Modal item={item} setItem={setItem} toggle={toggle} listModal={true} isOpen={isOpen} /> : ''}
        </>
    )
}
