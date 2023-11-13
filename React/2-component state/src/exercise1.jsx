import PropTypes from 'prop-types';
  
const Family = (props) => {
    const personDOMs = props.people.map(person => 
        <p key={person.name}>{person.name}, {person.age}</p>
    );
    return <div>{personDOMs}</div>;
    }

Family.propTypes = {
    people: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
    })).isRequired,
};

const App = () => {
    const people = [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 35 },
        { name: 'Charlie', age: 40 },
        { name: 'Donna', age: 45 }
    ];
    return (
    <Family 
        people={people}/>
    )
}

export default App;