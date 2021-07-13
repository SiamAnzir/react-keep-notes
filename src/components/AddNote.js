import React, {useContext , useState} from "react";
import NotesContext from "../context/NoteContext";
import { v4 as uuidv4 } from 'uuid';
import {Container,Form,Button} from "react-bootstrap";

const AddNote = () => {

    const {notes, setNotes} = useContext(NotesContext);

    const initialNoteState = {id:uuidv4(),title:"",description:"",created_at:new Date().toDateString(),favourite_blog:false, trash:false};
    const [newNote, setCreatedNote] = useState(initialNoteState);

    const handleSubmit = (event) => {
        event.preventDefault();
        setNotes([...notes,newNote]);
        event.target.reset();
    }

    const handleInputChange = (event) => {
        const {name,value} = event.target;
        setCreatedNote({...newNote , [name]:value});
    }

    return(
        <section className="mainContent">
            <Container className="text-center">
                <br/>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control name="title" autoComplete="off" required type="text" placeholder="Title of your Note" onChange={handleInputChange} ></Form.Control>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Control as="textarea" rows={18} name="description" autoComplete="off" required type="text" placeholder="Description of your note" onChange={handleInputChange}/>
                    </Form.Group>
                    <br/>
                    <Button variant="success" type="submit" > Create New Note </Button>
                </Form>
                <br/>
            </Container>
        </section>
    )
}

export default AddNote;