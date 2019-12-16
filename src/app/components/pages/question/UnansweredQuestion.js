import React, { Component } from 'react';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleQuestionAnswer } from '../../../actions/shared';
import { withRouter } from 'react-router-dom';

class UnansweredQuestion extends Component {
	state = {
		answer: ''
	};

	handleChange = (event) => {
		const answer = event.target.id === 'option1' ? 'optionOne' : 'optionTwo';

		this.setState(() => ({
			answer
		}));
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { answer } = this.state;
		const { question, dispatch } = this.props;

		dispatch(handleQuestionAnswer(question.id, answer));

		this.setState(() => ({
			answer: ''
		}));
	};

	render() {
		const { answer } = this.state;
		const { question, avatarURL } = this.props;
		const { author, optionOne, optionTwo } = question;

		return (
			<Card style={{ margin: '15px 0' }}>
				<Row>
					<Col>
						<Card.Header>{author} asks:</Card.Header>
					</Col>
				</Row>
				<Row className='align-items-center'>
					<Col lg='4' className='text-center'>
						{avatar(avatarURL)}
					</Col>
					<Col lg='8'>
						<Card.Body>
							<Card.Title>Would You Rather...</Card.Title>
							<Form onSubmit={this.handleSubmit}>
								<Form.Group>
									<Form.Check
										type='radio'
										label={optionOne.text}
										name='option1'
										id='option1'
										onChange={this.handleChange}
										checked={answer === 'optionOne'}
									></Form.Check>
									<Form.Check
										type='radio'
										label={optionTwo.text}
										name='option2'
										id='option2'
										onChange={this.handleChange}
										checked={answer === 'optionTwo'}
									></Form.Check>
								</Form.Group>
								<Form.Group>
									<Button
										type='submit'
										variant='info'
										block
										disabled={answer === ''}
									>
										Submit
									</Button>
								</Form.Group>
							</Form>
						</Card.Body>
					</Col>
				</Row>
			</Card>
		);
	}
}

function avatar(avatar) {
	return (
		<div
			style={{
				padding: '0 20px',
				borderRight: '1px solid lightgrey',
				marginTop: '20px',
				marginBottom: '20px'
			}}
		>
			<img
				style={{ borderRadius: '100%', boxShadow: '2px 3px 5px 1px' }}
				width='200px'
				height='200px'
				src={avatar}
				alt='avatar'
			/>
		</div>
	);
}

export default withRouter(connect()(UnansweredQuestion));
