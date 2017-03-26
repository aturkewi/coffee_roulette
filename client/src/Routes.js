import React from 'react';
import Home from './components/Home';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import { Route } from 'react-router-dom';

export default (props) => {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp}/>
    </div>
  )
}