import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import LeftSideBar from "./layout/LeftSideBar";
import Home from "./pages/Home";
import Albums from "./pages/Albums";
import Users from "./pages/Users";
import Table from "./pages/Table/Table";

function App() {
  return (
    <div className="app">
      <Router>
        <aside className="left-sidebar">
          <LeftSideBar />
        </aside>
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/albums" element={<Albums />} />
            <Route exact path="/table" element={<Table />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;