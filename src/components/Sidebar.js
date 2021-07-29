import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faPlusSquare, faStar, faTabletAlt, faTrash} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    return(
        <div className="sidebar">
            <br/>
            <Link to="/addNote"> <FontAwesomeIcon icon={faPlusSquare} style={{ marginRight:".5rem"}}/> Add Note</Link>
            <Link to="/scratchPad"><FontAwesomeIcon icon={faEdit} style={{ marginRight:".5rem"}}/> Scratchpad</Link>
            <Link to="/"><FontAwesomeIcon icon={faTabletAlt} style={{ marginRight:".5rem"}}/> Notes</Link>
            <Link to="/favourites"><FontAwesomeIcon icon={faStar} style={{ marginRight:".5rem"}}/> Favourites</Link>
            <Link to="/trash"><FontAwesomeIcon icon={faTrash} style={{ marginRight:".5rem"}}/> Trash</Link>
        </div>

    )
}

export default Sidebar;