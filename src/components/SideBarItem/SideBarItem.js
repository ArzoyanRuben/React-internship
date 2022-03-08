import { Link } from "react-router-dom";

import "./SideBarItem.css";

export default function SideBarItem({ description, path }) {
  return (
    <li className="sidebar-item">
      <Link to={path}>
        <p>{description}</p>
      </Link>
    </li>
  );
}
