import React, { Component } from 'react';
import {Card, Row, Col, ProgressBar} from 'react-bootstrap';



class AnsweredQuestion extends Component {
    state = {  }
    render() { 
        return (
            <Card style={{margin:"15px 0"}}>
                <Row>
                    <Col>
                        <Card.Header>
                            Asked by User
                        </Card.Header>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col lg="3" className="text-center">
                        <div style={{padding:"0 20px",
                                    marginTop:"20px",
                                    marginBottom:"20px"}}>
                            <img style={{borderRadius: "100%",boxShadow: "2px 3px 5px 1px"}} width="150px" height="150px" src='https://picsum.photos/id/237/200/300' alt="avatar" />
                        </div>
                    </Col>
                    <Col lg="9" >
                        <Card.Body style = {{
                            borderLeft: "1px solid lightgrey",
                            marginTop:"20px",
                            marginBottom:"20px",
                            paddingTop:"0",
                            paddingBottom:"0"
                        }}>
                            <Row>
                                <Col>
                                    <Card.Title>
                                        Results:
                                    </Card.Title>
                                </Col>
                            </Row>
                            <Card style={{marginTop:"15px",
                                        position:"relative"
                                        }}>
                                <Card.Header>
                                            <Card.Title style={{marginTop:"10px", color:"#17a2b8"}}>
                                                Would you rather A?
                                            </Card.Title>
                                            <ProgressBar style={{height:"30px", marginTop:"30px"}} variant="info" now="66.7" label="66.7%" />
                                            <Card.Text className="text-center" style={{fontWeight:"bold"}}>
                                                2 out of 3 votes
                                            </Card.Text>
                                </Card.Header>
                            </Card>
                            <Card style={{marginTop:"15px",
                                            position:"relative",
                                            backgroundColor: "#17a2b81f",
                                            borderColor: "#17a2b8"}}>
                                <span style={{position: "absolute",
                                            top: "-35px",
                                            right: "-20px",
                                            backgroundColor: "orange",
                                            color: "#fff",
                                            fontWeight: "bold",
                                            width: "60px",
                                            height: "60px",
                                            margin: "0",
                                            padding: "0",
                                            textAlign: "center",
                                            lineHeight: "1",
                                            display: "flex",
                                            alignItems: "center",
                                            borderRadius: "100%"}}>
                                                Your vote
                                </span>
                                <Card.Header>
                                    <Card.Title style={{marginTop:"10px"}}>
                                        Would you rather A?
                                    </Card.Title>
                                    <ProgressBar style={{height:"30px", marginTop:"30px"}} variant="info" now="33.3" label="33.3%" />
                                    <Card.Text className="text-center" style={{fontWeight:"bold"}}>
                                        1 out of 3 votes
                                    </Card.Text>
                                </Card.Header>
                            </Card>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        );
    }
}
 
export default AnsweredQuestion;