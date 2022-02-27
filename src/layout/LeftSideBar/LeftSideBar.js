import "./LeftSideBar.css"
import { navItems } from "../../constants/navItems.constant"
import SideBarItem from "./SideBarItem/SideBarItem"

export default function LeftSideBar() {
    return (
        <nav className="nav">
            <ul>
          {navItems.map(({description})=><SideBarItem description={description}/>)}
          </ul>
        </nav>
    )
}