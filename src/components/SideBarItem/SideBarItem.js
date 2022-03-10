import { Link } from "react-router-dom";

import "./SideBarItem.css";

export default function SideBarItem({ description, path }) {
  return (
    <li className="sidebar-item">
      <Link to={path}>
        <span>{description}</span>
      </Link>
    </li>
  );
}
