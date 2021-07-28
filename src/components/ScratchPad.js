// noinspection RequiredAttributes

import React, {useContext} from "react";
import {Row, Col, OverlayTrigger, Tooltip} from "react-bootstrap";
import {scratchPadNote} from "../store/AllNotes";
import useLocalStorage from "../hooks/useLocalStorage";
import {methods} from "../methods/Methods";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClipboard} from "@fortawesome/free-regular-svg-icons";
import {faDownload, faEye, faMoon, faPenAlt} from "@fortawesome/free-solid-svg-icons";
import EditNote from "./EditNote";
import NotesContext from "../contexts/NoteContext";

const ScratchPad = () => {

    const [scratchPad,setScratchPad] = useLocalStorage('scratchPad',scratchPadNote);

    const {theme,themeState, setThemeState} = useContext(NotesContext);

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
    console.log(scratchPad[0].title);

    return(
        <section>
            <div className="mainContent" style={{
                backgroundColor: themeState.background,
                color: themeState.foreground
            }}>
                <br/>
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
                    <Col className="text-start">
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
                        <span className="spanButton" onClick={() => navigator.clipboard.writeText(scratchPad[0].title + " " + scratchPad[0].description)}><FontAwesomeIcon icon={faClipboard}/></span>
                        <span className="spanButton" onClick={() => methods.downloadTxtFile(scratchPad[0])}> <FontAwesomeIcon icon={faDownload}/></span>
                    </Col>
                    <Col className="text-end text-muted">
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
                    </Col>
                </Row>
            </div>
        </section>

    )
}

export default ScratchPad;