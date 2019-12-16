import React, { Component, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';

import UserCard from './UserCard';
import { connect } from 'react-redux';

class Leaderboard extends Component {
	state = {};
	render() {
		const { users } = this.props;
		return (
			<Fragment>
				{users.map((user, index) => (
					<Row className='mt-5' key={user.id}>
						<Col>
							<UserCard trophy={index} user={user}></UserCard>
						</Col>
					</Row>
				))}
			</Fragment>
		);
	}
}

function mapStateToProps({ users }) {
	const userIds = Object.keys(users);
	const usersArray = userIds
		.map((id) => users[id])
		.sort((a, b) => {
			const answersArrayA = Object.keys(b.answers);
			const answersArrayB = Object.keys(a.answers);
			return (
				answersArrayA.length +
				b.questions.length -
				(answersArrayB.length + a.questions.length)
			);
		});
	return {
		users: usersArray
	};
}

export default connect(mapStateToProps)(Leaderboard);
