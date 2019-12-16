import React, { Component, Fragment } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import NavigationBar from './shared/NavigationBar';
import NewQuestion from './pages/new-question/NewQuestion';
import Leaderboard from './pages/leader-board/Leaderboard';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Question from './pages/question/Question';
import NotFound from './pages/not-found/NotFound';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	state = {};
	render() {
		return (
			<Router>
				<Fragment>
					<NavigationBar />
					<LoadingBar style={{ backgroundColor: '#17a2b8' }} />
					<Container>
						{this.props.userLogged !== true ? (
							<Login />
						) : (
							<Switch>
								<Route path='/' exact component={Home} />
								<Route path='/questions/:questionId' component={Question} />
								<Route path='/leaderboard' component={Leaderboard} />
								<Route path='/add' component={NewQuestion} />
								<Route path='/login' component={Login} />
								<Route path='/404' component={NotFound} />
								<Route render={() => <Redirect to='/404' />} />
							</Switch>
						)}
					</Container>
				</Fragment>
			</Router>
		);
	}
}

function mapStateToProps({ authedUser }) {
	return {
		userLogged: authedUser !== null
	};
}

export default connect(mapStateToProps)(App);
