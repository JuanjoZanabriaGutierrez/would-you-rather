import React, { Component } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class QuestionView extends Component {
	state = {};
	render() {
		const { questionURL, author, avatar, questionPreviewText } = this.props;
		return (
			<Card style={{ margin: '15px' }}>
				<Row>
					<Col>
						<Card.Header>{author} asks:</Card.Header>
					</Col>
				</Row>
				<Row className='align-items-center'>
					<Col lg='5' className='text-center'>
						<div
							style={{
								borderRight: '1px solid lightgrey',
								marginTop: '20px',
								marginBottom: '20px'
							}}
						>
							<img
								style={{ borderRadius: '100%', boxShadow: '2px 3px 5px 1px' }}
								width='150px'
								height='150px'
								src={avatar}
								alt='avatar'
							/>
						</div>
					</Col>
					<Col lg='7'>
						<Card.Body>
							<Card.Title>Would you rather?</Card.Title>
							<Card.Text>{questionPreviewText}</Card.Text>
							<Link style={{ textDecoration: 'none' }} to={questionURL}>
								<Button variant='outline-info' block>
									View Poll
								</Button>
							</Link>
						</Card.Body>
					</Col>
				</Row>
			</Card>
		);
	}
}

function mapStateToProps({ users }, { question }) {
	const questionCreator = users[question.author];
	const questionPreviewText = `...${question.optionOne.text.substring(
		0,
		15
	)}...`;
	const questionURL = `/questions/${question.id}`;
	return {
		questionURL: questionURL,
		author: questionCreator.name,
		avatar: questionCreator.avatarURL,
		questionPreviewText: questionPreviewText
	};
}

export default connect(mapStateToProps)(QuestionView);
