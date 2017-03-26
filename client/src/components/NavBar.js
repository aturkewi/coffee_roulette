import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default (props) => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
      </ul>
    </div>
  )
}