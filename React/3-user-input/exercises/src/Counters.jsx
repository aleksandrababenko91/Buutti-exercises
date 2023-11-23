import Counter from './Counter';
import PropTypes from 'prop-types';


const Counters = ({ elements, onCounterClick }) => {
 
  return (
    <div>
      {elements.map((element) => (
        <Counter
          key={element.id}
          id={element.id}
          counter={element.counter}
          onCounterClick={onCounterClick}
        />
      ))}
    </div>
  );
};

Counters.propTypes = {
  elements: PropTypes.number.isRequired,
  onCounterClick: PropTypes.func.isRequired,
};
export default Counters;

