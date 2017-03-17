import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes'
import { BrowserRouter as Router } from 'react-router-dom';
// import App from './App';
import './index.css';

ReactDOM.render(
  <Router>
    <Routes/>
  </Router>,
  document.getElementById('root')
);
