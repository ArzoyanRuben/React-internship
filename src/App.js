import './App.css';
import React, {useState, useEffect} from 'react';
import Users from "./components/Users";
import axios from "axios";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res)
                setUsers(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="App">
            <ul>
                {users.map(user => (
                    <Users key={user.id} name={user.name}/>
                ))}
            </ul>
        </div>
    );
}

export default App;
