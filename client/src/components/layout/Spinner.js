/* eslint-disable import/no-anonymous-default-export */
import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => {
  return (
    <Fragment>
      <div class='fa-3x spinner'>
        <i class='fas fa-sync fa-spin'></i>
      </div>
    </Fragment>
  );
};
