// src/components/Button/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, primary }) => {
  const baseClasses = 'px-4 py-2 font-semibold rounded-lg shadow-md focus:outline-none';
  const primaryClasses = 'bg-blue-500 text-white hover:bg-blue-700';
  const secondaryClasses = 'bg-gray-500 text-white hover:bg-gray-700';

  const buttonClasses = primary ? primaryClasses : secondaryClasses;

  return (
    <button className={`${baseClasses} ${buttonClasses}`} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
};

Button.defaultProps = {
  onClick: undefined,
  primary: false,
};

export default Button;
