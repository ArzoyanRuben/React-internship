import "./LeftSideBar.css";
import { navItems } from "../../constants/navItems.constant";
import SideBarItem from "../../components/SideBarItem/SideBarItem";

const { v4: uuidv4 } = require('uuid');

export default function LeftSideBar() {
  return (
    <nav className="nav">
      <ul>
        {navItems.map(({ description, path }) => (
          <SideBarItem description={description} key={uuidv4()} path={path}/>
        ))}
      </ul>
    </nav>
  );
}
