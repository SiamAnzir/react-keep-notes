// noinspection RequiredAttributes

import React from "react";
import {Col, Nav, Row, Tab,OverlayTrigger,Tooltip} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faEye, faPenAlt, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {faClipboard, faStar} from "@fortawesome/free-regular-svg-icons";
import EditNote from "./EditNote";

export const navContent = (note) => {
    return(
        <>
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                    <Nav.Link eventKey={note.id}>
                        {
                            (note.favourite_note === true) ? ( <span style={{ marginRight: '.2rem' }}> <FontAwesomeIcon icon={faStar} /> </span> ) : (<span></span>)
                        }
                        {note.title}
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
};

export const tabContent = (note,updateNote) => {
    return(
        (note.editing === false) ? (
            <>
                <Tab.Content key={note.id}>
                    <Tab.Pane eventKey={note.id}>
                        <h3>{note.title}</h3>
                        <br/>
                        <p>{note.description}</p>
                    </Tab.Pane>
                </Tab.Content>
            </>
        ) : (
                <>
                    <Tab.Content key={note.id}>
                        <Tab.Pane eventKey={note.id}>
                            <EditNote currentNote={note} updateNote = {updateNote}/>
                        </Tab.Pane>
                    </Tab.Content>
                </>
            )
    )
};
export const footerContent = (note,setNotes,notes,trashMethod,clickUpdateButton,addFavouriteNote,removeFavouriteNote,downloadFile) => {
    return(
        <>
            <Tab.Content key={note.id}>
                <Tab.Pane className="m-1" eventKey={note.id}>
                    <Row>
                        <Col className="text-start ">
                            {
                                (note.editing === false) ? (
                                    <OverlayTrigger overlay={<Tooltip id={'tooltip-bottom'}> Edit </Tooltip>} placement="top">
                                        <span className="spanButton" onClick={() => clickUpdateButton(note.id,note,setNotes,notes)}> <FontAwesomeIcon icon={faPenAlt}/> </span>
                                    </OverlayTrigger>
                                ) : (
                                    <OverlayTrigger overlay={<Tooltip id={'tooltip-bottom'}> View </Tooltip>} placement="top">
                                        <button className="iconButton" form={note.id} type="submit"> <FontAwesomeIcon icon={faEye}/> </button>
                                    </OverlayTrigger>
                                )
                            }
                            {
                                (note.favourite_note === false) ? (
                                    <OverlayTrigger overlay={<Tooltip id={'tooltip-bottom'}> Add To Favourites </Tooltip>} placement="top">
                                        <span className="spanButton" onClick={() => addFavouriteNote(note.id,note,setNotes,notes)} > <FontAwesomeIcon icon={faStar}/> </span>
                                    </OverlayTrigger>
                                ) : (
                                    <OverlayTrigger overlay={<Tooltip id={'tooltip-bottom'}> Remove from Favourites </Tooltip>} placement="top">
                                        <span className="spanButton" onClick={() => removeFavouriteNote(note.id,note,setNotes,notes)} > <FontAwesomeIcon icon={faStar}/> </span>
                                    </OverlayTrigger>

                                )
                            }
                            <OverlayTrigger overlay={<Tooltip id={'tooltip-bottom'}> Add to Trash </Tooltip>} placement="top">
                                <span className="spanButton" onClick={() => trashMethod(note.id,note,setNotes,notes)}> <FontAwesomeIcon icon={faTrashAlt}/> </span>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={<Tooltip id={'tooltip-bottom'}> Copy Text </Tooltip>} placement="top">
                                <button className="iconButton" onClick={() => navigator.clipboard.writeText(note.title + " " + note.description)}><FontAwesomeIcon icon={faClipboard}/></button>
                            </OverlayTrigger>
                            <button className="iconButton" onClick={() => downloadFile(note)}> <FontAwesomeIcon icon={faDownload}/></button>
                        </Col>
                        <Col className="text-end text-muted"> Created_at: {note.created_at} </Col>
                    </Row>
                </Tab.Pane>
            </Tab.Content>
        </>
    )
}