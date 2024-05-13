import React from 'react';
import PropTypes from 'prop-types';

const AnimatedText = ({ text }) => {
  return (
    <h1 className="text-4xl font-bold animate-pulse text-center text-blue-600">
      {text}
    </h1>
  );
};

AnimatedText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AnimatedText;
