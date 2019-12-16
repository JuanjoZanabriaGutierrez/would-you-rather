import React, { Component, Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Container, Navbar, Button, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';

import { removeAuthedUser } from '../../actions/authedUser';

class NavigationBar extends Component {
	state = {};

	handleLogout = () => {
		const { dispatch } = this.props;
		dispatch(removeAuthedUser());
		this.props.history.push('/login');
	};

	render() {
		const { authedUser } = this.props;
		return (
			<Navbar bg='dark' expand='lg' variant='dark'>
				<Container>
					<Navbar.Brand>
						<NavLink
							style={{ textDecoration: 'none', color: '#fff', padding: '10px' }}
							to='/'
						>
							Would you rather?
						</NavLink>
					</Navbar.Brand>
					{authedUser !== undefined && (
						<Fragment>
							<Navbar.Toggle aria-controls='basic-navbar-nav' />
							<Navbar.Collapse id='basic-navbar-nav' className='text-right'>
								<Nav.Item className='d-lg-none d-flex flex-column align-items-center'>
									<img
										style={{ borderRadius: '100%', margin: '10px' }}
										width='40px'
										height='40px'
										src={authedUser.avatarURL}
										alt='avatar'
									/>
									<Navbar.Text style={{ color: '#fff' }}>
										Hello, {authedUser.name}
									</Navbar.Text>
								</Nav.Item>
								<Nav className='mr-auto'>
									<NavLink
										style={{
											textDecoration: 'none',
											color: '#fff',
											padding: '10px'
										}}
										to='/'
									>
										Home
									</NavLink>
									<NavLink
										style={{
											textDecoration: 'none',
											color: '#fff',
											padding: '10px'
										}}
										to='/add'
									>
										New Question
									</NavLink>
									<NavLink
										style={{
											textDecoration: 'none',
											color: '#fff',
											padding: '10px'
										}}
										to='/leaderboard'
									>
										Leader Board
									</NavLink>
								</Nav>
								<Nav.Item className='d-none d-lg-flex align-items-center '>
									<Navbar.Text style={{ color: '#fff' }}>
										Hello, {authedUser.name}
									</Navbar.Text>
									<img
										style={{ borderRadius: '100%', margin: '10px' }}
										width='40px'
										height='40px'
										src={authedUser.avatarURL}
										alt='avatar'
									/>
								</Nav.Item>
								<Button variant='outline-info' onClick={this.handleLogout}>
									Logout
								</Button>
							</Navbar.Collapse>
						</Fragment>
					)}
				</Container>
			</Navbar>
		);
	}
}

function mapStateToProps({ authedUser, users }) {
	const loggedInUser = users[authedUser];
	if (loggedInUser) {
		return {
			authedUser: loggedInUser
		};
	} else {
		return {};
	}
}

export default withRouter(connect(mapStateToProps)(NavigationBar));
