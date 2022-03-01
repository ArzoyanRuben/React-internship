import './App.css';
import React, {useState, useEffect} from 'react';
import {getUsers} from "./API/usersAPI";
import Navbar from "./Navbar";
import Home from "./components/Home";
import Albums from "./components/Albums";
import {Routes, Route} from "react-router-dom";
import {getAlbums} from "./API/albumsAPI";

function App() {
    const [users, setUsers] = useState([]);
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        getAlbums().then(res => {
            console.log(res)
            setAlbums(res.data)
        })
            .catch(err => console.log(err))
    }, [])


    useEffect(() => {
        getUsers().then(res => {
            console.log(res)
            setUsers(res.data)
        })
            .catch(err => console.log(err))
    }, [])


    return (
        <div className="App">
            <div className='navbar'>
                <Navbar/></div>
            <div className='content'>
                <Routes>
                    <Route path="/" element={<Home users={users}/>}/>
                    <Route path="/albums" element={<Albums albums={albums}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
