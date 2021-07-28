import React from "react";
import {Col, Form, FormControl, Tab} from "react-bootstrap";

export const ViewNotes = (props) => {
    return(
        <section>
            <Tab.Container id="left-tabs-example" defaultActiveKey={props.default}>
                <div className="noteTab" style={{
                    backgroundColor: props.themeState.tabBackground,
                    color: props.themeState.foreground
                }}>
                    <Col>
                        <Form inline style={{padding: 10}}>
                            <FormControl placeholder="Search Notes By Title"
                                         value={props.searchTerm}
                                         onChange={props.handleChange}
                                         type="text"
                                         style={{
                                             backgroundColor: props.themeState.background,
                                             color: props.themeState.foreground
                                         }}
                            />
                        </Form>
                        {props.noteTab}
                    </Col>
                </div>
                <div>
                    <div className="content" style={{
                        backgroundColor: props.themeState.background,
                        color: props.themeState.foreground
                    }}>
                        <br/>
                        <Col sm={12}>
                            {props.showNotes}
                        </Col>
                    </div>
                    <div className="footer" style={{
                        backgroundColor: props.themeState.tabBackground,
                        color: props.themeState.foreground
                    }}>
                        {props.footerTab}
                    </div>
                </div>
            </Tab.Container>
        </section>
    )
}