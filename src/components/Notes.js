import React, {useContext} from "react";
import NotesContext from "../context/NoteContext";
import {Container, Tab , Row,Col, Nav, Form, FormControl,Button} from "react-bootstrap";

const Notes = () => {

    const {notes, setNotes} = useContext(NotesContext);
    const noteTab = notes.length > 0 ? (
        notes.map(note => (
            <>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                        <Nav.Link eventKey={note.id}>{note.title}</Nav.Link>
                    </Nav.Item>
                </Nav>
            </>
        ))
    ) : (
        <div></div>
    );
    const allNotes = notes.length > 0 ? (
        notes.map(note => (
            <>
                <Tab.Content>
                    <Tab.Pane eventKey={note.id}>
                        <h3>{note.title}</h3>
                        <br/>
                        <p>{note.description}</p>
                    </Tab.Pane>
                </Tab.Content>
            </>
        ))
    ) : (
        <div><h2>There is no notes to show</h2></div>
    );
    return(
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
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
                <div className="content">
                    <Col sm={9}>
                        {allNotes}
                    </Col>
                </div>
            </Tab.Container>
        </Container>
    )
}

export default Notes;