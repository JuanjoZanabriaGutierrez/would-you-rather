import React, { Component } from 'react';
import{Card, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class QuestionView extends Component {
    state = {  }
    render() { 
        return (<Card style={{margin:"15px"}}>
                    <Row>
                        <Col>
                            <Card.Header>User asks:</Card.Header>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col lg="5" className="text-center">
                            <div style = {{
                                borderRight: "1px solid lightgrey",
                                marginTop:"20px",
                                marginBottom:"20px"
                            }}>
                                <img style={{borderRadius: "100%",boxShadow: "2px 3px 5px 1px"}} width="150px" height="150px" src='https://picsum.photos/id/237/200/300' alt="avatar" />
                            </div>
                        </Col>
                        <Col lg="7" >
                            <Card.Body>
                                <Card.Title>Would you rather?</Card.Title>
                                <Card.Text>
                                ...
                                </Card.Text>
                                <Link style={{textDecoration:"none"}} to="/questions/1">
                                    <Button variant="outline-info" block>
                                            View Poll
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card> );
    }
}
 
export default QuestionView;