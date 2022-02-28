import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className='nav' >
            <div className='column left'>
                <Link to='/'>Users</Link><br/>
                <Link to='/albums'>Albums</Link><br />
            </div>
        </nav>
    )
}

export default Navbar;