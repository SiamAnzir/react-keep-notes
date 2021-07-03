import React from "react";
import {Link} from "react-router-dom";

const Sidebar = () => {
    return(
        <div className="sidebar">
            <Link to="/addNote"> + Add Note</Link>
            <Link to="/scratchPad">Scratchpad</Link>
            <Link to="/">Notes</Link>
            <Link to="/favourites">Favourites</Link>
            <Link to="/trash">Trash</Link>
        </div>

    )
}

export default Sidebar;