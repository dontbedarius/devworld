import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='text-center'>
        <svg viewBox='0 0 550 80'>
          <text x='150' y='70'>
            Dashboard
          </text>
        </svg>
      </div>
      {/* <h1 className='large text-primary text-center header-space'>Dashboard</h1> */}
      <p className='lead text-center'>
        <i className='fas fa-user'></i> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <section className='header'>
            <DashboardActions />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />

            <div className='my-2 text-center'>
              <button
                className='btn btn-danger'
                onClick={() => deleteAccount()}
              >
                <i className='fas fa-user-minus'> Delete My Account</i>
              </button>
            </div>
          </section>
        </Fragment>
      ) : (
        <Fragment>
          <div className='text-center'>
            <h3 className='text-center'>
              You have not setup your profile yet, please complete profile using
              link below.
            </h3>
            <Link to='/create-profile' className='btn btn-primary my-1'>
              Create Profile
            </Link>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
