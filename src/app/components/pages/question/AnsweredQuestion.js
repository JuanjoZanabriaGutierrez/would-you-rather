import React, { Component } from 'react';
import { Card, Row, Col, ProgressBar } from 'react-bootstrap';

class AnsweredQuestion extends Component {
	state = {};

	render() {
		const { question, avatarURL, loggedUser } = this.props;
		const { author, optionOne, optionTwo } = question;
		const totalVotes = optionOne.votes.length + optionTwo.votes.length;

		return (
			<Card style={{ margin: '15px 0' }}>
				<Row>
					<Col>
						<Card.Header>Asked by {author}</Card.Header>
					</Col>
				</Row>
				<Row className='align-items-center'>
					<Col lg='3' className='text-center'>
						<div
							style={{
								padding: '0 20px',
								marginTop: '20px',
								marginBottom: '20px'
							}}
						>
							<img
								style={{ borderRadius: '100%', boxShadow: '2px 3px 5px 1px' }}
								width='150px'
								height='150px'
								src={avatarURL}
								alt='avatar'
							/>
						</div>
					</Col>
					<Col lg='9'>
						<Card.Body
							style={{
								borderLeft: '1px solid lightgrey',
								marginTop: '20px',
								marginBottom: '20px',
								paddingTop: '0',
								paddingBottom: '0'
							}}
						>
							<Row>
								<Col>
									<Card.Title>Results:</Card.Title>
								</Col>
							</Row>
							{optionsCard(optionOne, totalVotes, loggedUser)}
							{optionsCard(optionTwo, totalVotes, loggedUser)}
						</Card.Body>
					</Col>
				</Row>
			</Card>
		);
	}
}

function optionsCard({ text, votes }, totalVotes, loggedUser) {
	const optionVoted = votes.includes(loggedUser);
	const optionPercent = ((votes.length / totalVotes) * 100).toFixed(2);
	let cardStyle;
	if (optionVoted) {
		cardStyle = {
			marginTop: '15px',
			position: 'relative',
			backgroundColor: '#17a2b81f',
			borderColor: '#17a2b8'
		};
	} else {
		cardStyle = {
			marginTop: '15px'
		};
	}
	return (
		<Card style={cardStyle}>
			{optionVoted ? badgeInVotedCard() : null}
			<Card.Header>
				<Card.Title style={{ marginTop: '10px', color: '#17a2b8' }}>
					Would you rather {text}?
				</Card.Title>
				<ProgressBar
					style={{ height: '30px', marginTop: '30px' }}
					variant='info'
					now={optionPercent}
					label={`${optionPercent}%`}
				/>
				<Card.Text className='text-center' style={{ fontWeight: 'bold' }}>
					{votes.length} out of {totalVotes} votes
				</Card.Text>
			</Card.Header>
		</Card>
	);
}

function badgeInVotedCard() {
	const badgeStyle = {
		position: 'absolute',
		top: '-35px',
		right: '-20px',
		backgroundColor: 'orange',
		color: '#fff',
		fontWeight: 'bold',
		width: '60px',
		height: '60px',
		margin: '0',
		padding: '0',
		textAlign: 'center',
		lineHeight: '1',
		display: 'flex',
		alignItems: 'center',
		borderRadius: '100%'
	};
	return <span style={badgeStyle}>Your vote</span>;
}

export default AnsweredQuestion;
