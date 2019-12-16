import React, { Component } from 'react';
import { Card, Row, Col, ListGroup } from 'react-bootstrap';
import trofeoGold from '../../../../assets/trofeoOro.svg';
import trofeoSilver from '../../../../assets/trofeoPlata.svg';
import trofeoBronze from '../../../../assets/trofeoBronce.svg';

class UserCard extends Component {
	state = {};

	render() {
		const { trophy, user } = this.props;
		const { avatarURL, name } = user;
		const answersArray = Object.keys(user.answers);
		const totalScore = answersArray.length + user.questions.length;
		return (
			<Card>
				<Card.Body style={{ position: 'relative' }}>
					{showTrophy(trophy)}
					<Row className='align-items-center'>
						<Col lg='3' className='text-center'>
							{avatar(avatarURL)}
						</Col>
						<Col
							lg='7'
							style={{
								borderRight: '1px solid lightgrey',
								borderLeft: '1px solid lightgrey'
							}}
						>
							<Card.Title style={{ fontWeight: 'bold' }}>{name}</Card.Title>
							<ListGroup variant='flush'>
								<ListGroup.Item
									style={{
										fontWeight: 'bold',
										justifyContent: 'space-between',
										display: 'flex'
									}}
								>
									Answered questions
									{totalAnswers(answersArray)}
								</ListGroup.Item>
								<ListGroup.Item
									style={{
										fontWeight: 'bold',
										justifyContent: 'space-between',
										display: 'flex'
									}}
								>
									Created questions
									{totalQuestions(user.questions)}
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col lg='2'>
							<Card>
								<Card.Header style={{ fontWeight: 'bold' }}>Score</Card.Header>
								<Card.Body style={{ margin: 'auto' }}>
									{score(totalScore)}
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		);
	}
}

function showTrophy(trophy) {
	const trophies = [trofeoGold, trofeoSilver, trofeoBronze];
	const styleDiv = {
		position: 'absolute',
		top: '0',
		left: '0',
		padding: '45px',
		background:
			'linear-gradient(135deg, lightgrey 0%, lightgrey 45%, transparent 45%)',
		lineHeight: '1'
	};
	const styleSpan = {
		position: 'absolute',
		top: '5px',
		left: '5px',
		width: '40%'
	};
	return (
		<div style={styleDiv}>
			<span style={styleSpan}>
				<img src={trophies[trophy]} alt='trophy' />
			</span>
		</div>
	);
}

function avatar(avatarURL) {
	const styleDiv = {
		padding: '0 20px',
		marginTop: '20px',
		marginBottom: '20px'
	};
	const styleImg = { borderRadius: '100%', boxShadow: '2px 3px 5px 1px' };
	return (
		<div style={styleDiv}>
			<img
				style={styleImg}
				width='150px'
				height='150px'
				src={avatarURL}
				alt='avatar'
			/>
		</div>
	);
}

function score(value) {
	const style = {
		borderRadius: '100%',
		background: '#17a2b8',
		width: '50px',
		height: '50px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontWeight: 'bold',
		color: '#fff'
	};
	return <div style={style}>{value}</div>;
}

function totalAnswers(answers) {
	return <span>{answers.length}</span>;
}

function totalQuestions(questions) {
	return <span>{questions.length}</span>;
}

export default UserCard;
