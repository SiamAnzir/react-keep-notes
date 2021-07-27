import React from "react";
import {Col, Form, FormControl, Tab} from "react-bootstrap";

export const ViewNotes = (props) => {
    return(
        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey={props.default}>
                <div className="noteTab">
                    <Col>
                        <Form inline style={{padding: 10}}>
                            <FormControl placeholder="Search Notes By Title"
                                         value={props.searchTerm}
                                         onChange={props.handleChange}
                                         type="text"
                            />
                        </Form>
                        {props.noteTab}
                    </Col>
                </div>
                <div>
                    <div className="content">
                        <br/>
                        <Col sm={12}>
                            {props.showNotes}
                        </Col>
                    </div>
                    <div className="footer">
                        {props.footerTab}
                    </div>
                </div>
            </Tab.Container>
        </div>
    )
}