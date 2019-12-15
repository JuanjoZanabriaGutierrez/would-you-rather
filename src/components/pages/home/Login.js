import React, { Component } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import logo from '../../../logo.svg';

class Login extends Component {
    state = {  }

    handleSignIn = () => {
        this.props.history.push("/");
    }
    render() { 
        return ( <Card className="mt-5">
                    <Card.Header className="text-center">
                        <h5>
                        Welcome to the Would You Rather App!
                        </h5> 
                        <p>
                            Please sign in to continue
                        </p>
                    </Card.Header>
                    <Card.Body>
                        <Card.Img variant="top" src={logo} height="200px"/>
                        <Form className="my-4">
                            <Form.Group>
                                <Form.Control as="select">
                                    <option style={{backgroundImage: `url(${logo})`}}>User 1</option>
                                    <option>User 2</option>
                                    <option>User 3</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Button type = "submit" variant="info" block onClick={this.handleSignIn}>
                                    Sign in
                                </Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card> );
    }
}
 
export default Login;