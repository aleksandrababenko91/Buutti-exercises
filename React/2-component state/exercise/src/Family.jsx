import PropTypes from "prop-types";
import Person from "./Person";
import './Family.css'

const Family = (props) => {
  const personDOMs = props.people.map((person) => (
    <Person key={person.name}
      name={person.name} age={person.age}
    />
  ));
  return (
    <div className="FamilyClass">
      <h3>Family</h3>
      {personDOMs}</div>
  )
};

Family.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Family;