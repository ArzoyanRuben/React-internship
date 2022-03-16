import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Users from "./Home/Users/Users";
import Albums from "./Home/Albums/Albums";
import LeftSideBar from "./Layout/LeftSideBar/LeftSideBar";
import Header from "./Layout/Header/Header";
import Table from "./Home/Table/Table";
import EditableTable from "./Home/EditabtleTable/EditableTable";


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
            <Route path="/table" element={<Table />} />
            <Route exact path="/editabletable" element={<EditableTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
