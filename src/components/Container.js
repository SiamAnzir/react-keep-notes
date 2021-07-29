// noinspection RequiredAttributes

import React from "react";
import {Col, Nav, Row, Tab, OverlayTrigger, Tooltip} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faEye, faMoon, faPenAlt, faTrash, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {faClipboard, faStar} from "@fortawesome/free-regular-svg-icons";
import EditNote from "./EditNote";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

export const navContent = (note,deletePermanently) => {
    return(
        <>
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                    <Nav.Link eventKey={note.id}>
                        {
                            (note.favourite_note === true) ? ( <span style={{ marginRight: '.2rem' }}> <FontAwesomeIcon icon={faStar} /> </span> ) : (<span> </span>)
                        }
                        {note.title}
                        {
                            (note.trash === true) ? ( <div className="fa-pull-right" id="deleteBtn"  onClick={() => deletePermanently(note.id)}> <FontAwesomeIcon icon={faTrash} /> </div>  ) : (<span> </span>)
                        }
                        <div className="hide">Delete Permanently</div>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
};

export const tabContent = (note,updateNote,themeState) => {
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
                            <EditNote currentNote={note} updateNote = {updateNote} themeState={themeState}/>
                        </Tab.Pane>
                    </Tab.Content>
                </>
            )
    )
};
export const footerContent = (note,setNotes,notes,trashMethod,clickUpdateButton,addFavouriteNote,removeFavouriteNote,downloadFile,lightMode,darkMode,themeStateBackground,lightBackground,foreGround) => {
    return(
        <>
            <Tab.Content key={note.id}>
                <Tab.Pane className="m-1" eventKey={note.id}>
                    <Row>
                        <Col xl={6} lg={12}>
                            {
                                (note.editing === false) ? (
                                    <OverlayTrigger overlay={<Tooltip id={'tooltip-bottom'}> Edit </Tooltip>} placement="top">
                                        <span className="spanButton" onClick={() => clickUpdateButton(note.id,note,setNotes,notes)}> <FontAwesomeIcon icon={faPenAlt}/> </span>
                                    </OverlayTrigger>
                                ) : (
                                    <OverlayTrigger overlay={<Tooltip id={'tooltip-bottom'}> View </Tooltip>} placement="top">
                                        <button className="iconButton" form={note.id} type="submit"> <FontAwesomeIcon icon={faEye} color={foreGround}/> </button>
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
                            <OverlayTrigger overlay={<Tooltip id={'tooltip-bottom'}> {(note.trash === false) ? ("Add to Trash"):("Remove from Trash")}  </Tooltip>} placement="top">
                                <span className="spanButton" onClick={() => trashMethod(note.id,note,setNotes,notes)}> <FontAwesomeIcon icon={faTrashAlt}/> </span>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={<Tooltip id={'tooltip-bottom'}> Copy Text </Tooltip>} placement="top">
                                <span className="spanButton" onClick={() => navigator.clipboard.writeText(note.title + " " + note.description)}><FontAwesomeIcon icon={faClipboard}/></span>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={<Tooltip id={'tooltip-bottom'}> Download Note </Tooltip>} placement="top">
                                <span className="spanButton" onClick={() => downloadFile(note)}> <FontAwesomeIcon icon={faDownload}/></span>
                            </OverlayTrigger>
                        </Col>
                        <Col className="text-xl-end text-lg-start text-muted" xl={6} lg={12}>
                            Created_at: {note.created_at}
                            {
                                (themeStateBackground === lightBackground) ? (
                                    <OverlayTrigger placement="top" overlay={<Tooltip id={'tooltip-bottom'}> Turn Dark Mode On </Tooltip>}>
                                        <span role="img" aria-label="sun" className="spanButton" onClick={darkMode}>
                                            🌞
                                        </span>
                                    </OverlayTrigger>
                                ) : (
                                    <OverlayTrigger placement="top" overlay={<Tooltip id={'tooltip-bottom'}> Turn Dark Mode Off </Tooltip>}>
                                        <span className="spanButton" onClick={lightMode}>
                                            <FontAwesomeIcon icon={faMoon} color="white"/>
                                        </span>
                                    </OverlayTrigger>
                                )
                            }
                            <a href="https://github.com/SiamAnzir/react-keep-notes" className="spanButton" style={{marginRight:".8rem"}}><FontAwesomeIcon icon={faGithub} color={foreGround}/></a>
                        </Col>
                    </Row>
                </Tab.Pane>
            </Tab.Content>
        </>
    )
}