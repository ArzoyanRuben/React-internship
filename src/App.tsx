import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import LeftSideBar from "./layout/LeftSideBar/index";
import Home from "./routes/Home";
import Albums from "./pages/Albums";
import Users from "./pages/Users";
// import Table from "./pages/Table/Table";
import Posts from "./pages/Posts";
import Photos from "./pages/Photos/index";
import Error from "./routes/Error/Error"

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
            <Route path="/users" element={<Users />} />
            <Route path="/users/posts" element={<Posts />} />
            <Route path="/users/albums" element={<Albums />} />
            <Route path="/users/albums/photos" element={<Photos />} />
            {/* <Route path="/table" element={<Table />} /> */}
            <Route path="*" element={<Home />} />
            <Route path="/error" element={<Error/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;