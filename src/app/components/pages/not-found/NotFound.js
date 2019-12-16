import React, { Component } from 'react';
import { Card, Row, Col, ProgressBar } from 'react-bootstrap';

class NotFound extends Component {
	state = {};

	render() {
		return (
			<Card style={{ margin: '15px 0' }}>
				<Card.Body>Page Not Found!!!</Card.Body>
			</Card>
		);
	}
}

export default NotFound;
