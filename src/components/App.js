import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import NavigationBar from './shared/NavigationBar';
import NewQuestion from './pages/new-question/NewQuestion';
import Leaderboard from './pages/leader-board/Leaderboard';
import Home from './pages/home/Home';
import Login from './pages/home/Login';
import Question from './pages/question/Question';

class App extends Component {
  state = {  }
    render() { 
      return (<Router>
          <NavigationBar />
          <Container>
              <Route path='/' exact component={Home} />
              <Route path='/questions/:questionId' exact component={Question} />
              <Route path='/leaderboard' component={Leaderboard} />
              <Route path='/add' component={NewQuestion} />
              <Route path='/login' component={Login} />
          </Container>
      </Router>);
    }
}

export default App;
