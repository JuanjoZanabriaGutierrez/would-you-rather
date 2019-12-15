import React, { Component } from 'react';
import {Card, Row, Col, Button, Form} from 'react-bootstrap';

class UnansweredQuestion extends Component {
    state = {  }
    render() { 
        return (<Card style={{margin:"15px 0"}}>
                    <Row>
                        <Col>
                            <Card.Header>User asks:</Card.Header>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col lg="4" className="text-center">
                            <div style={{padding:"0 20px",
                                    borderRight: "1px solid lightgrey",
                                    marginTop:"20px",
                                    marginBottom:"20px"}}>
                                <img style={{borderRadius: "100%",boxShadow: "2px 3px 5px 1px"}} width="200px" height="200px" src='https://picsum.photos/id/237/200/300' alt="avatar" />
                            </div>
                        </Col>
                        <Col lg="8">
                            <Card.Body>
                                <Card.Title>Would You Rather...</Card.Title>
                                <Form>
                                    <Form.Group>
                                        <Form.Check type="radio"
                                            required
                                            label="be a back-end developer"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1">
                                        </Form.Check>
                                        <Form.Check type="radio"
                                            required
                                            label="be a front-end developer"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2">
                                        </Form.Check>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button type = "submit" variant="info" block>
                                                Submit
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>);
    }
}
 
export default UnansweredQuestion;