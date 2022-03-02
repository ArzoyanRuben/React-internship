import React from "react";
import { Link } from "react-router-dom";

export const LeftPanel = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Users</Link>
        </li>
        <li>
          <Link to="/gallery"> Gallery</Link>
        </li>
      </ul>
    </div>
  );
};
