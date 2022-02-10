import React, { Fragment } from 'react';

const NotFound = props => {
  return (
    <Fragment>
      <h1 className='x-large text-primary text-center'>
        <i className='fas fa-exclamation-triangle'></i>Page Not Found
      </h1>
      <p className='large text-center'>
        Sorry, the page the were looking for does not exist
      </p>
    </Fragment>
  );
};

export default NotFound;
