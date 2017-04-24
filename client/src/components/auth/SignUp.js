import React, { Component } from 'react';
// import { isAuthenticated } from '../../services/authService';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as authActions from '../../actions/authActions';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.input = {};
  }

  componentWillMount() {
    // if (isAuthenticated()) {
    //   this.props.router.push('/games');
    // }
  }

  componentDidUpdate() {
    // if (isAuthenticated()) {
    //   this.props.router.push('/games');
    // }
  }

  handleSubmit(event) {
    event.preventDefault();
        
    const { input } = this;
    const { signUp } = this.props.actions;
    
    let user = {};
    let newErrors = [];

    for (let key of Object.keys(input)) {
      let value = input[key].value.trim();
      if (!!value) {
        user[key] = value;
        continue;
      }
      // newErrors.push(`The ${key} must not be blank`);
    }

    // if (!user.password || user.password.length < 8 || user.password.length > 24) {
    //   newErrors.push("Password must be between 8 and 24 characters");
    //   return updateErrors(newErrors);
    // }
    // 
    // if (user.password !== user.passwordConfirmation) {
    //   newErrors.push(`Your passwords do not match`);
    // }
    // 
    // if (newErrors.length > 0) {
    //   return updateErrors(newErrors);
    // }

    this.input = {};
    console.log(signUp)
    return signUp(user);
  }

  render() {

    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              ref={node => this.input.name = node}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              ref={node => this.input.username = node}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              ref={node => this.input.email = node}
              type="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              ref={node => this.input.password = node}
              type="password"
            />
          </div>
          <div>
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
            <input
              ref={node => this.input.password_confirmation = node}
              type="password"
            />
          </div>
          <input
            type="submit"
            value="Sign Up" 
            />
        </form>
      </div>
    );
  }
  
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(SignUp);