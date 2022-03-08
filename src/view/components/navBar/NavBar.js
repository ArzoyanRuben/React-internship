import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar-links">
        <Link to="/">
          <p>HomePage</p>
        </Link>
        <Link to="/users">
          <p>Users</p>
        </Link>
        <Link to="/albums">
          <p>Alboms</p>
        </Link>
        <Link to="/table">
          <p>Table</p>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
