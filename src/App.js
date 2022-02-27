import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import LeftSideBar from "./layout/LeftSideBar";
import Home from "./pages/Home";
import Albums from "./pages/Albums";
import Users from "./pages/Users";

function App() {
  return (
    <div className="app">
      <Router>
        <aside>
          <LeftSideBar />
        </aside>
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/albums" element={<Albums />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
