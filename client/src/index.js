import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes'
import { BrowserRouter as Router } from 'react-router-dom';
// import App from './App';
import './index.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
