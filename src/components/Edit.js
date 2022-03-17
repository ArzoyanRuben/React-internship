import React, {useEffect, useState} from 'react';
import EditedUsers from "./EditedUsers";

import "./Edit.css";
import AddUser from "../API/AddUser";

function Edit() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.log(error));
    };
    const onAdd = async (name, email, phone) => {
        await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => {
                if (response.status !== 201) {
                    return;
                } else {
                    return response.json();
                }
            })
            .then((data) => {
                setUsers((users) => [...users, data]);
            })
            .catch((error) => console.log(error));
    };
    return (
        <div>
            <div className='user'>
                <AddUser onAdd={onAdd}/>
                <div className='editedHeader'>
                    <div>Name</div>
                    <div>Email</div>
                    <div>Phone</div>
                    <div>Actions</div>
                </div>
                {users?.map(item => (
                    <EditedUsers key={item.id} id1={item.id} name={item.name} email={item.email} phone={item.phone}/>
                ))}

            </div>

        </div>
    );
}

export default Edit;