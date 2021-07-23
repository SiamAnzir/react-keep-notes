import React from "react";
import {Col, Nav, Row, Tab} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenAlt, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-regular-svg-icons";

export const navContent = (id,title,favNote) => {
    return(
        <>
            <>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                        <Nav.Link eventKey={id}>
                            {
                                (favNote === true) ? ( <FontAwesomeIcon icon={faStar}/> ) : (<span></span>)
                            }
                            {title}
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </>
        </>
    )
};
export const tabContent = (id,title,description) => {
    return(
        <>
            <Tab.Content key={id}>
                <Tab.Pane eventKey={id}>
                    <h3>{title}</h3>
                    <br/>
                    <p>{description}</p>
                </Tab.Pane>
            </Tab.Content>
        </>
    )
};
export const footerContent = (id,note,setNotes,notes,favouriteMethod,trashMethod) => {
    return(
        <>
            <Tab.Content key={id}>
                <Tab.Pane className="m-1" eventKey={id}>
                    <Row>
                        <Col className="text-start ">
                            <span style={{ marginLeft: '.8rem' }}> <FontAwesomeIcon icon={faPenAlt}/> </span>
                            <span style={{ marginLeft: '.8rem' }} onClick={() => favouriteMethod(id,note,setNotes,notes)} > <FontAwesomeIcon icon={faStar}/> </span>
                            <span style={{ marginLeft: '.8rem' }} onClick={() => trashMethod(id,note,setNotes,notes)}> <FontAwesomeIcon icon={faTrashAlt}/> </span>
                        </Col>
                        <Col className="text-end text-muted"> Created_at: {note.created_at} </Col>
                    </Row>
                </Tab.Pane>
            </Tab.Content>
        </>
    )
}