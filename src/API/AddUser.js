import React, {useRef, useState} from 'react';
import "./AddUser.css";

function AddUser({onAdd}) {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        onAdd(e.target.name.value, e.target.email.value, e.target.phone.value);
        e.target.name.value = '';
        e.target.email.value = '';
        e.target.phone.value = '';
        inputForm.current.style.display = 'none'
    }

    const inputForm = useRef(null);
    const showForm = () => {
        inputForm.current.style.display = 'block'
    }
    return (
        <div>
            <h3 onClick={showForm}>Add user</h3>
            <form ref={inputForm}  onSubmit={handleOnSubmit}>
                <input placeholder='Name' name='name'/>
                <input placeholder='Email' name='email'/>
                <input placeholder='Phone' name='phone'/>
                <button onSubmit={handleOnSubmit}>Add</button>
            </form>
        </div>
    );
}

export default AddUser;