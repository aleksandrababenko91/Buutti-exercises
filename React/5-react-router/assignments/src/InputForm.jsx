import { useState } from 'react';
import PropTypes from 'prop-types';
import './InputForm.css'

const InputForm = ({addTodo}) => {
  const [newTodo, setNewTodo] = useState("")
  const handleInputForm = (event) => {
    console.log(event);
    event.preventDefault();
    addTodo(newTodo)
    setNewTodo("");
  }
return(
  <div>
    <form onSubmit={handleInputForm}>
      <input type="text" placeholder="Add a new note" 
      value={newTodo}
      onChange={(event) => setNewTodo(event.target.value)}
      />
      <input className="button" type="submit" value="Submit" />
    </form>
  </div>
)
}

InputForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};  

export default InputForm