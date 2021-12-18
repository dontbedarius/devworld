import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { Redirect } from 'react-router-dom';

const Login = ({ login, isAuthenticated }) => {
  const [logData, logFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = logData;

  const handleLogin = e =>
    logFormData({ ...logData, [e.target.name]: e.target.value });

  const loginSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  //Redirect when logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <section className='container'>
        <h1 className='large text-primary'>Sign In</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Sign Into Your Account
        </p>
        <form id='login' className='login' onSubmit={e => loginSubmit(e)}>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={e => handleLogin(e)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              minLength='8'
              value={password}
              onChange={e => handleLogin(e)}
              required
            />
          </div>
          <input type='submit' className='btn btn-primary' value='Login' />
        </form>
      </section>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
