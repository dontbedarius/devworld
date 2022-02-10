import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

// import { Link } from 'react-router-dom';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [regData, regFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = regData;

  const handleRegister = e =>
    regFormData({ ...regData, [e.target.name]: e.target.value });

  const registerSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Password do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='dashboard' />;
  }

  return (
    <Fragment>
      <section className='container'>
        <div className='text-center'>
          <svg viewBox='0 0 350 70'>
            <text x='90' y='40'>
              Sign Up
            </text>
          </svg>
        </div>
        <p className='lead text-center'>
          <i className='fas fa-user' /> Create Your Account
        </p>
        <form
          id='register'
          className='register '
          onSubmit={e => registerSubmit(e)}
        >
          <div className='form-group'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={e => handleRegister(e)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={e => handleRegister(e)}
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
              onChange={e => handleRegister(e)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
              minLength='8'
              value={password2}
              onChange={e => handleRegister(e)}
              required
            />
          </div>
          <div className='layout-btn'>
            <input type='submit' className='btn btn-primary' value='Register' />
          </div>
        </form>
      </section>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
