import PropTypes from 'prop-types';

const Counter = ({ id, counter,  onCounterClick, onDeleteClick }) => {
  return (
    <div>
      <button key={id} onClick={() =>  onCounterClick(id)}>
        {counter}
      </button>
      <button key={id} onClick={() => onDeleteClick(id)}>Delete</button>
      
    </div>
  );
};

Counter.propTypes = {
  id: PropTypes.number.isRequired,
  counter: PropTypes.number.isRequired,
  onCounterClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default Counter;
