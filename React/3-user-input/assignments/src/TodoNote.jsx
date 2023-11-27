import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './TodoNote.css'

const TodoNote = ({todo, toggleCompletion, editTodo, onRemoveClick }) => {
  const handleCheckboxChange = () => {  ///func handleCheckBox call when checkbox is triggered and its call handleComplete to change the state in array
    toggleCompletion(todo.id); // func handlecomplete  update state(complete) due to ID.
  };
  
  const [editMode, setEditMode] = useState(false);  //current mode , false means that text just read, not edit.
  const handleEditClick = () => {
    setEditMode(true);  //editing state
  };
  
  const [editText, setEditText] = useState(todo.text); // state of text mode when its in editing mode
  const handleSaveClick = () => {
    editTodo(todo.id, editText);
    setEditMode(false); 
  };

  return(
    <div className='TodoNote' style={{backgroundColor: todo.complete ? 'lightgreen': 'pink' }}>
      <button onClick={() => onRemoveClick(todo.id)} className="remove">  X</button>
      <div>
      {!editMode ? (
        <div>
          <p>{editText}</p>
          <button style={{backgroundColor: "blanchedalmond", borderColor: 'black'}} onClick={handleEditClick}>Edit</button> 
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="type a new task"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      )}
    </div>
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
  editTodo: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};  
export default TodoNote