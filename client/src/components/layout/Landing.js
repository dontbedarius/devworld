import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Developer Connector</h1>
          <p className='lead'>
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);

// const loginText = document.querySelector('.title-text .login');
// const loginForm = document.querySelector('form.login');
// const loginBtn = document.querySelector('label.login');
// const registerBtn = document.querySelector('label.register');
// const registerLink = document.querySelector('form .register-link a');

// registerBtn.onclick = () => {
//   loginForm.style.marginLeft = '-50%';
//   loginText.style.marginLeft = '-50%';
// };
// loginBtn.onclick = () => {
//   loginForm.style.marginLeft = '0%';
//   loginText.style.marginLeft = '0%';
// };
// registerLink.onclick = () => {
//   registerBtn.click();
//   return false;
// };
