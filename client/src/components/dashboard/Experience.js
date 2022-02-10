import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map(exp => (
    <tr key={exp.id} className='btn-light'>
      <td>{exp.company}</td>
      <td className='hid-sm'>{exp.title}</td>
      <td className='hide-sm'>
        <Moment format='YYYY/MM/DD>'>{exp.from}</Moment> -{' '}
        {exp.to === null ? (
          'Now'
        ) : (
          <Moment format='YYYY/MM/DD>'>{exp.to}</Moment>
        )}
      </td>
      <tr>
        <button
          onClick={() => deleteExperience(exp._id)}
          className='btn btn-danger m'
        >
          Delete
        </button>
      </tr>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2 text-center'>Experience Credentials</h2>
      <div className='posts-center'>
        <div className='post-page-width'>
          <table className='table'>
            <thead>
              <tr className='title-column text-primary'>
                <th>Company</th>
                <th className=''>Title</th>
                <th className='hide-sm'>Years</th>
                <th />
              </tr>
            </thead>
            <tbody>{experiences}</tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);
