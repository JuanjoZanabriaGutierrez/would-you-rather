import React, { Component,Fragment } from 'react';
import {Row, Col} from 'react-bootstrap';

import UserCard from './UserCard';


class Leaderboard extends Component {
    state = {  }
    render() {
        return ( 
            <Fragment>
                {
                    [1,2,3].map( (_,index) => (
                        <Row className="mt-5" key={Math.random() + Math.random()}>
                            <Col>
                                <UserCard trofeo={index}></UserCard>
                            </Col>
                        </Row>
                    ))
                }
            </Fragment>
         );
    }
}
 
export default Leaderboard;