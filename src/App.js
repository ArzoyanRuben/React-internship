import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import LeftSideBar from "./layout/LeftSideBar";
import Home from "./pages/Home";
import Albums from "./pages/Albums";
import Users from "./pages/Users";
import Table from "./pages/Table/Table";
import Posts from "./components/Posts/Posts";
import Photos from "./components/Photos/Photos";

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
            <Route exact path="/users" exact element={<Users />} />
            <Route exact path="/users/:id" element={<Posts />} />
            <Route exact path="/users/albums/photos" element={<Photos />} />
            <Route exact path="/table" element={<Table />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;