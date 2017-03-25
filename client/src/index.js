import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes'
// import App from './App';
import './index.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>    
    <Routes/>
  </Provider>,
  document.getElementById('root')
);
