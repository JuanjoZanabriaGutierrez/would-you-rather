import React, { Component } from 'react';
import { Tabs, Tab, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import ListOfQuestions from './ListOfQuestions';

class Home extends Component {
	state = {};
	render() {
		const { unansweredQuestions, answeredQuestions } = this.props;
		return (
			<Row className='justify-content-center my-5'>
				<Col lg='8'>
					<Tabs
						style={{ border: 'none', flexWrap: 'nowrap' }}
						className='justify-content-center'
						defaultActiveKey='unansweredQuestions'
						id='uncontrolled-tab-example'
					>
						<Tab
							style={{ border: '1px solid lightgrey', borderRadius: '5px' }}
							eventKey='unansweredQuestions'
							title='Unanswered Questions'
						>
							<ListOfQuestions
								questions={unansweredQuestions}
							></ListOfQuestions>
						</Tab>
						<Tab
							style={{ border: '1px solid lightgrey', borderRadius: '5px' }}
							eventKey='answeredQuestions'
							title='Answered Questions'
						>
							<ListOfQuestions questions={answeredQuestions}></ListOfQuestions>
						</Tab>
					</Tabs>
				</Col>
			</Row>
		);
	}
}

function mapStateToProps({ authedUser, questions }) {
	const questionsId = Object.keys(questions);
	const unansweredQuestions = questionsId
		.filter(
			(id) =>
				!questions[id].optionOne.votes.includes(authedUser) &&
				!questions[id].optionTwo.votes.includes(authedUser)
		)
		.map((id) => questions[id]);
	const answeredQuestions = questionsId
		.filter(
			(id) =>
				questions[id].optionOne.votes.includes(authedUser) ||
				questions[id].optionTwo.votes.includes(authedUser)
		)
		.map((id) => questions[id]);

	return {
		unansweredQuestions: unansweredQuestions.sort(
			(a, b) => b.timestamp - a.timestamp
		),
		answeredQuestions: answeredQuestions.sort(
			(a, b) => b.timestamp - a.timestamp
		)
	};
}

export default connect(mapStateToProps)(Home);
