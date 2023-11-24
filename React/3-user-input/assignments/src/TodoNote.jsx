import PropTypes from 'prop-types';
import './App.css'

const TodoNote = ({todo, toggleCompletion }) => {
  const handleCheckboxChange = () => {  ///func handleCheckBox call when checkbox is triggered and its call handleComplete to change the state in array
    toggleCompletion(todo.id); // func handlecomplete  update state(complete) due to ID.
  };
 
  return(
    <div className='TodoNote'>
      <button className="remove">X</button>
      <p>ID: {todo.id}</p>id=
      <p>TEXT: {todo.text}</p>
      <p>
        Complete:
        <input
          type="checkbox"
          onChange={handleCheckboxChange}  /// onChange works when user click the checkBox
          value={todo.complete} // this is for visual Checkbox
          
        />
      </p>
    </div>
  )
}

TodoNote.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
  }).isRequired,
  toggleCompletion: PropTypes.func.isRequired,
};  
export default TodoNote