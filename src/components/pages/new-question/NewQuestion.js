import React, { Component } from 'react';
import {Card, Button, Form} from 'react-bootstrap';


class NewQuestion extends Component {
    state = {  }
    render() { 
        return ( <Card className="mt-5">
                    <Card.Header as="h5" className="text-center">Create New Question</Card.Header>
                    <Card.Body>
                    <Card.Subtitle>Complete the question:</Card.Subtitle>
                    <Card.Title className="my-4">Would you rather ...</Card.Title>
                    <Form className="my-4">
                        <Form.Group>
                            <Form.Control required name="option1" type="text" placeholder="Enter Option One Text Here" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="d-flex justify-content-center" style={{fontWeight:"bold"}}>
                                OR
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control required name="option2" type="text" placeholder="Enter Option Two Text Here" />
                        </Form.Group>
                        <Form.Group>
                            <Button type = "submit" variant="info" block>
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                    </Card.Body>
                </Card>);
    }
}
 
export default NewQuestion;