import React, { useState } from 'react'
import { Button } from '@mui/material';
import { Modal } from './../Modal/Modal';

export const AddButton = ({
    item,
    setItem,
    setNewItem,
    newItem,
    setData,
    data,
    listUrl,
    isUsers
}) => {
    const [isOpenButton, setIsOpenButton] = useState(false);
    const toggleAddButton = () => setIsOpenButton(!isOpenButton);

    return (
        <>
            <Button variant='contained' onClick={toggleAddButton}>Add</Button>
            {isOpenButton &&
                <Modal
                    listModal={true}
                    item={item}
                    setItem={setItem}
                    toggle={toggleAddButton}
                    isOpenButton={isOpenButton}
                    setNewItem={setNewItem}
                    newItem={newItem}
                    data={data}
                    setData={setData}
                    listUrl={listUrl}
                    isUsers={isUsers}
                />}
        </>
    )
}