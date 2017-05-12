import React, { PropTypes } from 'react';
import Circle from './Circle';

function Circles({ circlesCount, color }) {
  return (
    <div id="shapes-container">
      {
        new Array(circlesCount).fill(undefined).map((item, index) =>
          <Circle key={index} color={color}/>
        )
      }
    </div>
  );
}
Circles.propTypes = {
  circlesCount: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

export default Circles;
