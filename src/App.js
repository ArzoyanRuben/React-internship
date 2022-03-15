import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import LeftSideBar from "./layout/LeftSideBar";
import Home from "./routes/Home";
import Albums from "./pages/Albums";
import Users from "./pages/Users";
import Table from "./pages/Table/Table";
import Posts from "./pages/Posts";
import Photos from "./pages/Photos";

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
            <Route exact path="/users/posts" element={<Posts />} />
            <Route exact path="/users/albums" element={<Albums />} />
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