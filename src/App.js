import './App.css';
import React, {useState, useEffect} from 'react';
import {getUsers} from "./API/usersAPI";
import Navbar from "./Navbar";
import Home from "./components/Home";
import Albums from "./components/Albums";
import {Routes, Route} from "react-router-dom";
import {getAlbums} from "./API/albumsAPI";
import Table from "./components/Table";
import {getTable} from "./API/tableAPI";
import useFetch from "./hooks/useFetch";
import {albumsUrl, tableUrl, usersUrl} from "./API/Api"

function App() {
    const [users, setUsers] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [tables, setTables] = useState(false)

/*    const [item, setItem] = useState([]);
    const [users] = useFetch(null, usersUrl);
    const [albums] = useFetch(null, albumsUrl);
    const {tables} = useFetch(null, tableUrl);*/

    useEffect(() => {
        getTable().then(res => {
            console.log(res)
            setTables(res.data)
        })
            .catch(err => console.log(err))
    }, [])

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
                    <Route path="/tables" element={<Table tables={tables}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
