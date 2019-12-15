import React, { Component, Fragment } from 'react';
import {Row, Col} from 'react-bootstrap'

import AnsweredQuestion from './AnsweredQuestion';
import UnansweredQuestion from './UnansweredQuestion';

class Question extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <Row>
                    <Col>
                        <AnsweredQuestion></AnsweredQuestion> 
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg="10">
                        <UnansweredQuestion></UnansweredQuestion>
                    </Col>
                </Row>
            </Fragment>
        );
    }
} 
 
export default Question;