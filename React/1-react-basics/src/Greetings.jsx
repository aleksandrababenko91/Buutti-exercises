import PropTypes from 'prop-types';

const Greetings = (props) => {
    return (
      <div>
        <p>My name is {props.fullName} and my age is {props.age}</p>
      </div>
    );
  }
    
  Greetings.propTypes = {
      fullName: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    };

export default Greetings;