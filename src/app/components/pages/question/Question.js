import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import AnsweredQuestion from './AnsweredQuestion';
import UnansweredQuestion from './UnansweredQuestion';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

class Question extends Component {
	state = {};
	render() {
		const { redirect } = this.props;
		if (redirect) {
			return <Redirect to='/404'></Redirect>;
		}

		const { question, unansweredQuestion, avatar, loggedUser } = this.props;
		return (
			<Row className='justify-content-center'>
				{unansweredQuestion ? (
					<Col>
						<AnsweredQuestion
							question={question}
							avatarURL={avatar}
							loggedUser={loggedUser}
						></AnsweredQuestion>
					</Col>
				) : (
					<Col lg='10'>
						<UnansweredQuestion
							question={question}
							avatarURL={avatar}
							loggedUser={loggedUser}
						></UnansweredQuestion>
					</Col>
				)}
			</Row>
		);
	}
}

function mapStateToProps({ authedUser, users, questions }, { match }) {
	const questionId = match.params['questionId'];
	const question = questions[questionId];
	if (question === undefined) {
		return {
			redirect: true
		};
	}
	const unansweredQuestion =
		question.optionOne.votes.includes(authedUser) ||
		question.optionTwo.votes.includes(authedUser);
	const questionCreator = users[question.author];
	const avatar = questionCreator.avatarURL;
	return {
		question: question,
		unansweredQuestion: unansweredQuestion,
		avatar: avatar,
		loggedUser: authedUser
	};
}

export default withRouter(connect(mapStateToProps)(Question));
