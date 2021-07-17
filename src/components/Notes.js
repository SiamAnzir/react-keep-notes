import React, {useContext} from "react";
import NotesContext from "../contexts/NoteContext";
import {ViewNotes} from "./ViewNotes";
import {tabContent,navContent,footerContent} from "./Container";
import {methods} from "../methods/Methods";
import {Tab ,Col, Nav, Row} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPenAlt,  faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-regular-svg-icons"

const Notes = () => {

    const {notes, setNotes} = useContext(NotesContext);

    const noteTab = notes.map(note => (note.trash === false) ? (
        <>
            <Nav variant="pills" className="flex-column" key={note.id}>
                <Nav.Item>
                    <Nav.Link eventKey={note.id}>{note.title}</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    ) : (
        <div></div>
    ));
    const showNotes = notes.map(note => (note.trash === false) ? (
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
        <div></div>
    ));

    const footerText =  notes.map(note => (note.trash === false) ? (
        <>
            <Tab.Content key={note.id}>
                <Tab.Pane className="m-1" eventKey={note.id}>
                    <Row>
                        <Col className="text-start ">
                            <span style={{ marginLeft: '.8rem' }}> <FontAwesomeIcon icon={faPenAlt}/> </span>
                            <span style={{ marginLeft: '.8rem' }} onClick={() => methods.addToFavouriteNote(note.id,note,setNotes,notes)} > <FontAwesomeIcon icon={faStar}/> </span>
                            <span style={{ marginLeft: '.8rem' }} onClick={() => methods.addToTrash(note.id,note,setNotes,notes)}> <FontAwesomeIcon icon={faTrashAlt}/> </span>
                        </Col>
                        <Col className="text-end text-muted"> Created_at: {note.created_at} </Col>
                    </Row>
                </Tab.Pane>
            </Tab.Content>
        </>
    ) : (
        <div></div>
    ));

    return(
        <ViewNotes default={notes[0].id} noteTab={noteTab} showNotes={showNotes} footerText={footerText}/>
    )
}

export default Notes;