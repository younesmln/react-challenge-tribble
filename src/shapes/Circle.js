import React, { PropTypes } from 'react';

function Circle({color}) {
  return (
    <svg className="circle" height="60" width="60">
      <circle cx="30" cy="30" r="30" fill={color} />
    </svg>
  );
}

Circle.propTypes = {
  color: PropTypes.string.isRequired
};

export default Circle;