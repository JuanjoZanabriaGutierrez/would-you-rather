import React, { Component } from 'react';
import {Tabs, Tab,  Row,  Col} from 'react-bootstrap';

import ListOfQuestions from './ListOfQuestions';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
                <Row className="justify-content-center my-5">
                    <Col lg="8">
                        <Tabs style={{border:"none", flexWrap: "nowrap"}} className="justify-content-center" defaultActiveKey="unansweredQuestions" id="uncontrolled-tab-example">
                            <Tab style={{border:"1px solid lightgrey", borderRadius:"5px"}} eventKey="unansweredQuestions" title="Unanswered Questions">
                                <ListOfQuestions></ListOfQuestions>
                            </Tab>
                            <Tab style={{border:"1px solid lightgrey", borderRadius:"5px"}} eventKey="answeredQuestions" title="Answered Questions">
                                <ListOfQuestions></ListOfQuestions>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
                );
    }
}
 
export default Home;