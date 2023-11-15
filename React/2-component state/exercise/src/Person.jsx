import PropTypes from "prop-types";
import './Person.css';

const Person = (props) => {
  return (
    <div className="PersonClass">
       {props.name} is {props.age} years old!
    </div>
  );
};

Person.propTypes = {
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    }

export default Person;
