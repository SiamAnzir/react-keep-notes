// noinspection RequiredAttributes

import React, {useContext, useState} from "react";
import {Row, Col, OverlayTrigger, Tooltip, Toast} from "react-bootstrap";
import {scratchPadNote} from "../store/AllNotes";
import useLocalStorage from "../hooks/useLocalStorage";
import {methods} from "../methods/Methods";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClipboard} from "@fortawesome/free-regular-svg-icons";
import {faDownload, faEye, faMoon, faPenAlt} from "@fortawesome/free-solid-svg-icons";
import EditNote from "./EditNote";
import NotesContext from "../contexts/NoteContext";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const ScratchPad = () => {

    const [scratchPad,setScratchPad] = useLocalStorage('scratchPad',scratchPadNote);

    const {theme,themeState, setThemeState} = useContext(NotesContext);
    const [show, setShow] = useState(false);

    const darkMode = () => {
        setThemeState(theme.dark);
    };
    const lightMode = () => {
        setThemeState(theme.light);
    };

    const updateNote = ( id , updatedNote) => {
        updatedNote.editing = false;
        setScratchPad(scratchPad.map(note => (note.id === id ?  updatedNote  : note)));
    }

    return(
        <section>
            <div className="mainContent" style={{
                backgroundColor: themeState.background,
                color: themeState.foreground
            }}>
                <br/>
                <Toast className="d-inline-block m-1" style={{color:"green"}} onClose={() => setShow(false)} show={show} delay={1500} autohide>
                    <Row>
                        <Col>
                            <h5>Note Copied Successfully</h5>
                        </Col>
                    </Row>
                </Toast>
                {
                    (scratchPad[0].editing === false) ? (
                        <div>
                            <h3>{scratchPad[0].title}</h3>
                            <p>{scratchPad[0].description}</p>
                        </div>

                    ) : (
                        <div>
                            <EditNote currentNote={scratchPad[0]} updateNote = {updateNote} themeState={themeState}/>
                        </div>
                    )
                }
            </div>
            <div className="scratchPadFooter" style={{
                backgroundColor: themeState.tabBackground,
                color: themeState.foreground
            }}>
                <Row className="">
                    <Col xl={6} lg={12}>
                        {
                            (scratchPad[0].editing === false) ? (
                                <OverlayTrigger overlay={<Tooltip id={'tooltip-bottom'}> Edit </Tooltip>} placement="top">
                                    <span className="spanButton" onClick={() => methods.clickUpdateButton(scratchPad[0].id,scratchPad[0],setScratchPad,scratchPad)}> <FontAwesomeIcon icon={faPenAlt}/> </span>
                                </OverlayTrigger>
                            ) : (
                                <OverlayTrigger overlay={<Tooltip id={'tooltip-bottom'}> View </Tooltip>} placement="top">
                                    <button className="iconButton" form={scratchPad[0].id} type="submit"> <FontAwesomeIcon icon={faEye} color={themeState.foreground}/> </button>
                                </OverlayTrigger>
                            )
                        }
                        <OverlayTrigger overlay={<Tooltip id={'tooltip-bottom'}> Copy Text </Tooltip>} placement="top">
                            <span className="spanButton" onClick={() =>{navigator.clipboard.writeText(scratchPad[0].title + " " + scratchPad[0].description) ; setShow(true);} }><FontAwesomeIcon icon={faClipboard}/></span>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip id={'tooltip-bottom'}> Download Note </Tooltip>} placement="top">
                            <span className="spanButton" onClick={() => methods.downloadTxtFile(scratchPad[0])}> <FontAwesomeIcon icon={faDownload}/></span>
                        </OverlayTrigger>
                    </Col>
                    <Col className="text-xl-end text-lg-start text-muted" xl={6} lg={12}>
                        Created_At: {scratchPad[0].created_at}
                        {
                            (themeState.background === theme.light.background) ? (
                                <OverlayTrigger placement="top" overlay={<Tooltip id={'tooltip-bottom'}> Turn Dark Mode On </Tooltip>}>
                                        <span role="img" aria-label="sun" className="spanButton" onClick={darkMode}>
                                            🌞
                                        </span>
                                </OverlayTrigger>
                            ) : (
                                <OverlayTrigger placement="top" overlay={<Tooltip id={'tooltip-bottom'}> Turn Dark Mode Off </Tooltip>}>
                                        <span className="spanButton" onClick={lightMode}>
                                            <FontAwesomeIcon icon={faMoon} color="white"/>
                                        </span>
                                </OverlayTrigger>
                            )
                        }
                        <a href="https://github.com/SiamAnzir/react-keep-notes" className="spanButton" style={{marginRight:".8rem"}}><FontAwesomeIcon icon={faGithub} color={themeState.foreground}/></a>
                    </Col>
                </Row>
            </div>
        </section>

    )
}

export default ScratchPad;