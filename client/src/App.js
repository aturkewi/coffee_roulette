import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signUp, updateErrors, login } from './actions/authActions';
import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import NavBar from './components/NavBar'
import Routes from './Routes';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div>
            <Switch>
              <Routes />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state){
  return {
    game: state.game,
    auth: state.auth
  };
};

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({ 
      signUp, 
      updateErrors,
      login,
    }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
