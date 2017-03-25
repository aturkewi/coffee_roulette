import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signUp, updateErrors, login } from './actions/authActions';
import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import { Route } from 'react-router-dom';


const App = (props) => {
  
  // const childrenWithProps = React.Children.map(props.children,
  //  (child) => React.cloneElement(child, {
  //    actions: props.actions
  //  })
  // );
  
  return (
    <div className="App">
      <div className="container">
        <div>My app component is on the dom</div>
        <div>
          <Route exact path='/' component={Home} actions={props.actions}/>
          <Route path="/signup" component={SignUp} actions={props.actions}/>
          <Route path="/login" component={Login} actions={props.actions}/>
        </div>
      </div>
    </div>
  );
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
