import React, { Component } from 'react';
import {Card, Row, Col, ListGroup } from 'react-bootstrap';
import trofeoGold from '../../../trofeoOro.svg';
import trofeoSilver from '../../../trofeoPlata.svg';
import trofeoBronze from '../../../trofeoBronce.svg';

class UserCard extends Component {
    state = {  }
    render() {
        const { trofeo } = this.props;
        const trofeos = [trofeoGold, trofeoSilver, trofeoBronze];
        
        return (<Card>
                    <Card.Body style={{position:"relative"}}>
                        <div style={{position: "absolute",
                                    top: "0",
                                    left: "0",
                                    padding: "45px",
                                    background: "linear-gradient(135deg, lightgrey 0%, lightgrey 45%, transparent 45%)",
                                    lineHeight:"1"}}>
                            <span style={{position: "absolute",
                                    top: "5px",
                                    left: "5px",
                                    width:"40%"}}>
                                <img src={trofeos[trofeo]} alt="trophy"/>
                            </span>
                        </div>
                        <Row className="align-items-center">
                            <Col lg="3" className="text-center">
                                <div style={{padding:"0 20px",
                                        
                                        marginTop:"20px",
                                        marginBottom:"20px"}}>
                                    <img style={{borderRadius: "100%",boxShadow: "2px 3px 5px 1px"}} width="150px" height="150px" src='https://picsum.photos/id/237/200/300' alt="avatar" />
                                </div>
                            </Col>
                            <Col lg="7" style={{borderRight: "1px solid lightgrey",borderLeft:"1px solid lightgrey"}}>
                                <Card.Title style={{fontWeight:"bold"}}>User</Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item style={{fontWeight:"bold",
                                                            justifyContent: "space-between",
                                                            display: "flex"}}>
                                        Answered questions
                                        <span>7</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{fontWeight:"bold",
                                                            justifyContent: "space-between",
                                                            display: "flex"}}>
                                        Created questions
                                        <span>3</span>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col lg="2">
                                <Card>
                                    <Card.Header style={{fontWeight:"bold"}}>
                                        Score
                                    </Card.Header>
                                    <Card.Body style={{margin:"auto"}}>
                                            <div style={{borderRadius: "100%",
                                                background: "#17a2b8",
                                                width: "50px",
                                                height: "50px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontWeight: "bold",
                                                color: "#fff"}}>
                                                10
                                            </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>);
    }
}
 
export default UserCard;