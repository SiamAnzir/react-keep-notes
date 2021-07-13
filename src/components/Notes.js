import React, {useContext} from "react";
import NotesContext from "../context/NoteContext";
import {Tab ,Col, Nav, Form, FormControl,Row} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPenAlt,  faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-regular-svg-icons"

const Notes = () => {

    const {notes, setNotes} = useContext(NotesContext);

    const trashNote = (noteId,selectedNote) => {
        selectedNote.trash = true;
        setNotes(notes.map(note => (note.id === noteId ? selectedNote : note)));
    };

    const addToFavouriteNote = (noteId,selectedNote) => {
        selectedNote.favourite_note = true;
        setNotes(notes.map(note => (note.id === noteId ? selectedNote : note)));
    }

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
    const viewNotes = notes.map(note => (note.trash === false) ? (
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
                            <span style={{ marginLeft: '.8rem' }} onClick={() => addToFavouriteNote(note.id,note)} > <FontAwesomeIcon icon={faStar}/> </span>
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
        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey={notes[0].id}>
                <div className="noteTab">
                    <Col>
                        <Form inline style={{padding: 10}}>
                            <FormControl placeholder="Search Notes By Title"
                                         value=""
                                         onChange=""
                                         type="text"
                            />
                        </Form>
                        {noteTab}
                    </Col>
                </div>
                <div>
                    <div className="content">
                        <br/>
                        <Col sm={12}>
                            {viewNotes}
                        </Col>
                    </div>
                    <div className="footer">
                        {footerText}
                    </div>
                </div>
            </Tab.Container>
        </div>
    )
}

export default Notes;