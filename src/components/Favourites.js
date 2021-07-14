import React, {useContext} from "react";
import {Col, Container, Form, FormControl, Nav, Row, Tab} from "react-bootstrap";
import NotesContext from "../context/NoteContext";
import {ShowNotes} from "./showNotes";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenAlt, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-regular-svg-icons";

const Favourites = () => {

    const {notes, setNotes} = useContext(NotesContext);

    const trashNote = (noteId,selectedNote) => {
        selectedNote.trash = true;
        setNotes(notes.map(note => (note.id === noteId ? selectedNote : note)));
    };

    const removeFromFavouriteNote = (noteId,selectedNote) => {
        selectedNote.favourite_note = false;
        setNotes(notes.map(note => (note.id === noteId ? selectedNote : note)));
    }

    const noteTab = notes.map(note => (note.favourite_note === true) ? (
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
    const viewNotes = notes.map(note => (note.favourite_note === true) ? (
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

    const footerText =  notes.map(note => (note.favourite_note === true) ? (
        <>
            <Tab.Content key={note.id}>
                <Tab.Pane className="m-1" eventKey={note.id}>
                    <Row>
                        <Col className="text-start ">
                            <span style={{ marginLeft: '.8rem' }}> <FontAwesomeIcon icon={faPenAlt}/> </span>
                            <span style={{ marginLeft: '.8rem' }} onClick={() => removeFromFavouriteNote(note.id,note)} > <FontAwesomeIcon icon={faStar}/> </span>
                            <span style={{ marginLeft: '.8rem' }} onClick={() => trashNote(note.id,note)}> <FontAwesomeIcon icon={faTrashAlt}/> </span>
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
        <ShowNotes default={notes[0].id} noteTab={noteTab} viewNotes={viewNotes} footerText={footerText}/>
    )
}

export default Favourites;