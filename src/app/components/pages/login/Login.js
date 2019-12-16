import React, { Component } from 'react';
import { Card, Form, Button, Spinner } from 'react-bootstrap';
import logo from '../../../../assets/logo.svg';
import { connect } from 'react-redux';
import { handleAuthUser } from '../../../actions/shared';
import { withRouter, Redirect } from 'react-router-dom';

class Login extends Component {
	state = { user: null, redirect: false };

	handleSignIn = (e) => {
		e.preventDefault();
		const { dispatch } = this.props;
		const { user } = this.state;

		dispatch(handleAuthUser(user));
		// this.props.history.push(location);
		this.setState({
			user: null,
			redirect: true
		});
	};

	handleSelectUser = (e) => {
		const user = e.target.value;
		this.setState({
			user
		});
	};

	render() {
		const { users, location } = this.props;
		const { user, redirect } = this.state;

		if (redirect) {
			return (
				<Redirect
					to={location.pathname === '/login' ? '/' : location.pathname}
				></Redirect>
			);
		}
		return (
			<Card className='mt-5'>
				<Card.Header className='text-center'>
					<h5>Welcome to the Would You Rather App!</h5>
					<p>Please sign in to continue</p>
				</Card.Header>
				<Card.Body>
					<Card.Img variant='top' src={logo} height='200px' />
					<Form className='my-4' onSubmit={this.handleSignIn}>
						<Form.Group className='d-flex justify-content-center'>
							{users.length === 0 ? (
								<Spinner animation='border' variant='info' />
							) : (
								<Form.Control
									as='select'
									defaultValue={user}
									onChange={this.handleSelectUser}
									placeholder='Select a user'
								>
									<option value={null} hidden>
										Select user
									</option>
									{users.map((user) => (
										<option key={user.id} value={user.id}>
											{user.name}
										</option>
									))}
								</Form.Control>
							)}
						</Form.Group>
						<Form.Group>
							<Button
								type='submit'
								variant='info'
								block
								disabled={user === null}
							>
								Sign in
							</Button>
						</Form.Group>
					</Form>
				</Card.Body>
			</Card>
		);
	}
}

function mapStateToProps({ users }) {
	const usersIds = Object.keys(users);
	const usersArray = usersIds.map((id) => users[id]);
	return {
		users: usersArray
	};
}

export default withRouter(connect(mapStateToProps)(Login));
