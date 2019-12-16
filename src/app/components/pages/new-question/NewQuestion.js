import React, { Component } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';

import { handleAddQuestion } from '../../../actions/shared';

class NewQuestion extends Component {
	state = { optionOneText: '', optionTwoText: '' };

	handleOptionOneChange = (e) => {
		const optionOneText = e.target.value;

		this.setState(() => ({
			optionOneText
		}));
	};

	handleOptionTwoChange = (e) => {
		const optionTwoText = e.target.value;

		this.setState(() => ({
			optionTwoText
		}));
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const { optionOneText, optionTwoText } = this.state;
		const { dispatch } = this.props;

		dispatch(handleAddQuestion({ optionOneText, optionTwoText }));

		this.setState(() => ({
			optionOneText: '',
			optionTwoText: ''
		}));
		this.props.history.push('/');
	};

	render() {
		const { optionOneText, optionTwoText } = this.state;
		return (
			<Card className='mt-5'>
				<Card.Header as='h5' className='text-center'>
					Create New Question
				</Card.Header>
				<Card.Body>
					<Card.Subtitle>Complete the question:</Card.Subtitle>
					<Card.Title className='my-4'>Would you rather ...</Card.Title>
					<Form className='my-4' onSubmit={this.handleSubmit}>
						<Form.Group>
							<Form.Control
								onChange={this.handleOptionOneChange}
								required
								name='option1'
								type='text'
								placeholder='Enter Option One Text Here'
								value={optionOneText}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label
								className='d-flex justify-content-center'
								style={{ fontWeight: 'bold' }}
							>
								OR
							</Form.Label>
						</Form.Group>
						<Form.Group>
							<Form.Control
								onChange={this.handleOptionTwoChange}
								required
								name='option2'
								type='text'
								placeholder='Enter Option Two Text Here'
								value={optionTwoText}
							/>
						</Form.Group>
						<Form.Group>
							<Button
								type='submit'
								variant='info'
								block
								disabled={optionOneText === '' || optionTwoText === ''}
							>
								Submit
							</Button>
						</Form.Group>
					</Form>
				</Card.Body>
			</Card>
		);
	}
}

export default connect()(NewQuestion);
