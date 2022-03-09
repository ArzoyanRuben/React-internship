import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Users from "./Home/Users/Users";
import Albums from "./Home/Albums/Albums";
import LeftSideBar from "./Layout/LeftSideBar/LeftSideVar";

import Header from "./Layout/Header/Header";
import Table from "./Home/Table/Table";

function App() {
  return (
    <div className="app">
      <div className="main">
        <Header />
        <div className="main-content">
          <LeftSideBar />
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/Table" element={<Table />} />
          </Routes>
          
        </div>
      </div>
    </div>
  );
}

export default App;
