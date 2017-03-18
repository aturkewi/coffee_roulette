import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signUp, updateErrors, login } from './actions/authActions';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = (props) => {

  return (
    <div className="App">
      <div className="container">
        <div>My app component is on the dom</div>
        <div>
          {props.children}
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
