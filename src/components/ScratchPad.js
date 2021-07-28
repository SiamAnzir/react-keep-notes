// noinspection RequiredAttributes

import React from "react";
import {Row, Col, OverlayTrigger, Tooltip} from "react-bootstrap";
import {scratchPadNote} from "../store/AllNotes";
import useLocalStorage from "../hooks/useLocalStorage";
import {methods} from "../methods/Methods";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClipboard} from "@fortawesome/free-regular-svg-icons";
import {faDownload, faEye, faPenAlt} from "@fortawesome/free-solid-svg-icons";
import EditNote from "./EditNote";

const ScratchPad = () => {

    const [scratchPad,setScratchPad] = useLocalStorage('scratchPad',scratchPadNote);

    const updateNote = ( id , updatedNote) => {
        updatedNote.editing = false;
        setScratchPad(scratchPad.map(note => (note.id === id ?  updatedNote  : note)));
    }
    console.log(scratchPad[0].title);

    return(
        <section>
            <div className="mainContent">
                <br/>
                {
                    (scratchPad[0].editing === false) ? (
                        <div>
                            <h3>{scratchPad[0].title}</h3>
                            <p>{scratchPad[0].description}</p>
                        </div>

                    ) : (
                        <div>
                            <EditNote currentNote={scratchPad[0]} updateNote = {updateNote}/>
                        </div>
                    )
                }
            </div>
            <div className="scratchPadFooter">
                <Row>
                    <Col className="text-start">
                        {
                            (scratchPad[0].editing === false) ? (
                                <OverlayTrigger overlay={<Tooltip id={'tooltip-bottom'}> Edit </Tooltip>} placement="top">
                                    <span className="spanButton" onClick={() => methods.clickUpdateButton(scratchPad[0].id,scratchPad[0],setScratchPad,scratchPad)}> <FontAwesomeIcon icon={faPenAlt}/> </span>
                                </OverlayTrigger>
                            ) : (
                                <OverlayTrigger overlay={<Tooltip id={'tooltip-bottom'}> View </Tooltip>} placement="top">
                                    <button className="iconButton" form={scratchPad[0].id} type="submit"> <FontAwesomeIcon icon={faEye}/> </button>
                                </OverlayTrigger>
                            )
                        }
                        <button className="iconButton" onClick={() => navigator.clipboard.writeText(scratchPad[0].title + " " + scratchPad[0].description)}><FontAwesomeIcon icon={faClipboard}/></button>
                        <button className="iconButton" onClick={() => methods.downloadTxtFile(scratchPad[0])}> <FontAwesomeIcon icon={faDownload}/></button>
                    </Col>
                    <Col className="text-end text-muted"> Created_At: {scratchPad[0].created_at} </Col>
                </Row>
            </div>
        </section>

    )
}

export default ScratchPad;