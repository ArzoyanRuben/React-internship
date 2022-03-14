import "./LeftSideBar.css"
import { Link } from "react-router-dom";


function LeftSideBar(){
    return(
        <div>
            <ul className="left-list">
                <li><Link to='/'>Users</Link></li>
                <li><Link to='/albums'>Albums</Link></li>
                <li><Link to='/table'>Table</Link></li>
                <li><Link to='/editabletable'>EditableTable</Link></li> 
            </ul>
        </div>
    )
}
export default LeftSideBar