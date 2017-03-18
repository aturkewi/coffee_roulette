import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import { BrowserRouter as Router } from 'react-router-dom';

// import Games from './components/games/Games';
// import Game from './components/games/Game'

export default (props) => {
  return (
    <Router>
      <App>
        <Route exact path='/' component={Home} />
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={Login}/>
      </App>
    </Router>
  )
}