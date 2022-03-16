import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import "./SideBarItem.css";

interface IProps {
  description: string;
  path: string;
}

const SideBarItem: FunctionComponent<IProps> = ({ description, path }) => {
  return (
    <li className="sidebar-item">
      <Link to={path}>
        <span>{description}</span>
      </Link>
    </li>
  );
};

export default SideBarItem;
