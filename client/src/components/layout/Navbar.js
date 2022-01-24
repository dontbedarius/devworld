import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

export const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul class='nav__list grid'>
      <li className='nav__item'>
        <NavLink
          style={isActive => ({ color: isActive ? '#17a2b8' : 'white' })}
          to='/profiles'
        >
          Developers
        </NavLink>
      </li>
      <li className='nav__item'>
        <NavLink
          to='/posts'
          style={isActive => ({ color: isActive ? '#17a2b8' : 'white' })}
        >
          Posts
        </NavLink>
      </li>
      <li className='nav__item'>
        <NavLink
          to='/dashboard'
          alt='Dashboard'
          style={isActive => ({ color: isActive ? '#17a2b8' : 'white' })}
        >
          <i className='fas fa-user hide-sm'></i> <span>Dashboard</span>
        </NavLink>
      </li>
      <li className='nav__item'>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt hide-sm'></i>{' '}
          <span className=''>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul class='nav__list grid'>
      <li className='nav__item'>
        <NavLink
          to='/profiles'
          style={isActive => ({ color: isActive ? '#17a2b8' : 'white' })}
        >
          Developers
        </NavLink>
      </li>
      <li className='nav__item'>
        <NavLink
          to='/register'
          style={isActive => ({ color: isActive ? '#17a2b8' : 'white' })}
        >
          Register
        </NavLink>
      </li>
      <li className='nav__item'>
        <NavLink
          to='/login'
          style={isActive => ({ color: isActive ? '#17a2b8' : 'white' })}
        >
          Login
        </NavLink>
      </li>
    </ul>
  );

  return (
    <header>
      <nav className='navbar container2 bg-dark2'>
        <div className='nav_logo'>
          <NavLink to='/'>
            <i className='fas fa-code nav__logo'></i> DevWorld
          </NavLink>
        </div>
        <div>
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </div>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
