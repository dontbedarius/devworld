import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons-container'>
      <div class='dash-buttons text-center'>
        <Link to='/edit-profile' class='btn btn-light text-center'>
          <i class='fas fa-user-circle text-primary'></i> Edit Profile
        </Link>
        &nbsp;
        <Link to='/add-experience' class='btn btn-light text-center'>
          <i class='fab fa-black-tie text-primary'></i> Add Experience
        </Link>
        &nbsp;
        <Link to='/add-education' class='btn btn-light text-center'>
          <i class='fas fa-graduation-cap text-primary'></i> Add Education
        </Link>
      </div>
    </div>
  );
};

export default DashboardActions;
