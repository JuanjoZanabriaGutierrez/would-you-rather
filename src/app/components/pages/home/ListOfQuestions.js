import React, { Component, Fragment } from 'react';
import QuestionView from './QuestionView';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

class ListOfQuestions extends Component {
	state = {};
	render() {
		const { questions } = this.props;
		return (
			<Fragment>
				{questions.length === 0 ? (
					<Card style={{ margin: '15px' }}>
						<Card.Body>There are no questions here!</Card.Body>
					</Card>
				) : (
					questions.map((question) => (
						<QuestionView key={question.id} question={question}></QuestionView>
					))
				)}
			</Fragment>
		);
	}
}

export default connect()(ListOfQuestions);
