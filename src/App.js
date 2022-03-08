import './App.css';
import React from 'react';
import Navbar from "./Navbar";
import Home from "./components/Home";
import Albums from "./components/Albums";
import {Routes, Route} from "react-router-dom";
import Table from "./components/Table";


function App() {

    return (
        <div className="App">
            <div className='navbar'>
                <Navbar/></div>
            <div className='content'>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/albums" element={<Albums/>}/>
                    <Route path="/tables" element={<Table/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
