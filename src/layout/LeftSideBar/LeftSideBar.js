import "./LeftSideBar.css"
import { navItems } from "../../constant/navItems.constant"
import SideBarItem from "./SideBarItem/SideBarItem"

export default function LeftSideBar() {
    return (
        <nav>
            <ul>
          {navItems.map(({description})=><SideBarItem description={description}/>)}
          </ul>
        </nav>
    )
}