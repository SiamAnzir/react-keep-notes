import React, {useState,useEffect} from "react";
import {Container, Form} from "react-bootstrap";

const EditNote = (props) => {

    const [ updatedNote, setNote ] = useState(props.currentNote);

    useEffect(
        () => {
            setNote(props.currentNote)
        },
        [props]
    )

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setNote({ ...updatedNote , [name]:value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateNote(updatedNote.id, updatedNote);
    }

    return(
        <Container className="text-center">
            <br/>
            <Form id={props.currentNote.id} onSubmit={handleSubmit}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control style={{
                        backgroundColor: props.themeState.background,
                        color: props.themeState.foreground
                    }} name="title" autoComplete="off" required type="text" value={updatedNote.title} onChange={handleInputChange}/>
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Control as="textarea" rows={18} style={{
                        backgroundColor: props.themeState.background,
                        color: props.themeState.foreground
                    }} name="description" autoComplete="off" required type="text" value={updatedNote.description} onChange={handleInputChange}/>
                </Form.Group>
                <br/>
            </Form>
            <br/>
        </Container>
    )
}

export default EditNote;