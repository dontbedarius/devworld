import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

const Toggle = ({ theme, themeToggler }) => {
  return (
    <button onClick={themeToggler}>
      <i class='far fa-sun'></i>
      <i class='far fa-moon'></i>
    </button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
