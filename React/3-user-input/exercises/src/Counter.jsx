import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ id, counter,  onCounterClick }) => {
  return (
    <button key={id} onClick={() =>  onCounterClick(id)}>
      {counter}
    </button>
  );
};

Counter.propTypes = {
  id: PropTypes.number.isRequired,
  counter: PropTypes.number.isRequired,
  onCounterClick: PropTypes.func.isRequired,
};
export default Counter;
