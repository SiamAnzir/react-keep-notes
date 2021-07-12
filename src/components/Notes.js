import React, {useContext} from "react";
import NotesContext from "../context/NoteContext";
import {Container, Tab ,Col, Nav, Form, FormControl} from "react-bootstrap";

const Notes = () => {

    const {notes, setNotes} = useContext(NotesContext);
    const noteTab = notes.length > 0 ? (
        notes.map(note => (
            <>
                <Nav variant="pills" className="flex-column" key={note.id}>
                    <Nav.Item>
                        <Nav.Link eventKey={note.id}>{note.title}</Nav.Link>
                    </Nav.Item>
                </Nav>
            </>
        ))
    ) : (
        <div></div>
    );
    const viewNotes = notes.length > 0 ? (
        notes.map(note => (
            <>
                <Tab.Content key={note.id}>
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

    const footerText = notes.map(note => (
       <>
           <Tab.Content>
               <Tab.Pane className="m-1" eventKey={note.id}> Created at:  {note.created_at} </Tab.Pane>
           </Tab.Content>
       </>
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