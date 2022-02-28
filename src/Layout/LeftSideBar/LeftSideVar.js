import "./LeftSideBar.css"
import { Link } from "react-router-dom";


function LeftSideBar(){
    return(
        <div>
            <ul className="left-list">
                <li><Link to='/'>Users</Link></li>
                <li><Link to='/albums'>Albums</Link></li>
            </ul>
        </div>
    )
}
export default LeftSideBar