import React from "react";
import {Col, Nav, Row, Tab} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faPenAlt, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-regular-svg-icons";
import EditNote from "./EditNote";

export const navContent = (note) => {
    return(
        <>
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
export const footerContent = (note,setNotes,notes,favouriteMethod,trashMethod,clickUpdateButton) => {
    return(
        <>
            <Tab.Content key={note.id}>
                <Tab.Pane className="m-1" eventKey={note.id}>
                    <Row>
                        <Col className="text-start ">
                            {
                                (note.editing === false) ? (
                                    <span style={{ marginLeft: '.8rem' }} onClick={() => clickUpdateButton(note.id,note,setNotes,notes)}> <FontAwesomeIcon icon={faPenAlt}/> </span>
                                ) : (
                                    <button style={{ marginLeft: '.8rem', border: 'none',background: 'none',padding:'0' }} form={note.id} type="submit"> <FontAwesomeIcon icon={faEye}/> </button>
                                )
                            }
                            {
                                (note.favourite_note === false) ? (
                                    <span style={{ marginLeft: '.8rem' }} onClick={() => favouriteMethod(note.id,note,setNotes,notes)} > <FontAwesomeIcon icon={faStar}/> </span>
                                ) : (
                                    <span style={{ marginLeft: '.8rem' }} onClick={() => favouriteMethod(note.id,note,setNotes,notes)} > <FontAwesomeIcon icon={faStar}/> </span>
                                )
                            }
                            <span style={{ marginLeft: '.8rem' }} onClick={() => trashMethod(note.id,note,setNotes,notes)}> <FontAwesomeIcon icon={faTrashAlt}/> </span>
                        </Col>
                        <Col className="text-end text-muted"> Created_at: {note.created_at} </Col>
                    </Row>
                </Tab.Pane>
            </Tab.Content>
        </>
    )
}