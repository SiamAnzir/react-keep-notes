import React, {useContext , useState} from "react";
import NotesContext from "../contexts/NoteContext";
import { v4 as uuidv4 } from 'uuid';
import {Container, Form, Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenAlt} from "@fortawesome/free-solid-svg-icons";

const AddNote = () => {

    const {notes, setNotes,themeState} = useContext(NotesContext);

    const initialNoteState = {id:uuidv4(),title:"",description:"",created_at:new Date().toDateString(),favourite_note:false, trash:false,editing:false};
    const [newNote, setCreatedNote] = useState(initialNoteState);

    const handleSubmit = (event) => {
        event.preventDefault();
        setNotes([...notes,newNote]);
        event.target.reset();
        window.location.reload();
    }

    const handleInputChange = (event) => {
        const {name,value} = event.target;
        setCreatedNote({...newNote , [name]:value});
    }
    return(
        <section className="mainContent" style={{
            backgroundColor: themeState.background,
            color: themeState.foreground
        }}>
            <Container className="text-center">
                <br/>
                <Form onSubmit={handleSubmit} >
                    <Form.Group>
                        <Form.Control style={{
                            backgroundColor: themeState.background,
                            color: themeState.foreground
                        }} name="title" autoComplete="off" required type="text" placeholder="Title of your Note" onChange={handleInputChange}/>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Control as="textarea" rows={18} style={{
                            backgroundColor: themeState.background,
                            color: themeState.foreground
                        }} name="description" autoComplete="off" required type="text" placeholder="Description of your note" onChange={handleInputChange}/>
                    </Form.Group>
                    <br/>
                    <footer>
                        <Row>
                            <Col className="text-start ">
                                <button style={{ marginLeft: '.8rem' }} type="submit"> <FontAwesomeIcon icon={faPenAlt}/> Save </button>
                            </Col>
                            <Col className="text-end text-muted"> Created_at : {newNote.created_at} </Col>
                        </Row>
                    </footer>
                </Form>
                <br/>
            </Container>
        </section>
    )
}

export default AddNote;