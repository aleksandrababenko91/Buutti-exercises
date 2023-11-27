import React, { useState } from 'react';
import './App.css'
import TodoNote from './TodoNote.jsx';
import { v4 as uuidv4 } from 'uuid';
import InputForm from './InputForm.jsx';




const defaultTodos = [
  {id: 1, text: 'Buy potatoes', complete: true},
  {id: 2, text: 'Make food', complete: false},
  {id: 3, text: 'Exercise', complete: false},
  {id: 4, text: 'Do the dishes', complete: false},
  {id: 5, text: 'Floss the teeth', complete: false},
  {id: 6, text: 'Play videogames', complete: false},
]
const App = () => {
  const [todos, setTodos] = useState(defaultTodos);
  const toggleCompletion = (id) => { // chahging the state(setTodos) by func handleComplete (by ID)
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      } else {
        return todo;
      }
    }))
  };
  
  const editTodo = (id, newText) => {  //todo editing function
    setTodos(todos.map((todo) => {
      if(todo.id === id) {
        return { 
          ...todo, 
          text: newText,     //adding new text instead od old one
        };
      } else {
        return todo;
      }
    }))
  };
  
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    }

  const addTodo = (text) => {
    const newObject = {
      id: uuidv4(),
      text: text, 
      complete: false,
    };
    setTodos([...todos, newObject])
  }

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchQuery = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
  };

  const filteredTodos = todos.filter((todo) => todo.text.includes(searchQuery));
  return (
    <div>
      <input value={searchQuery} placeholder="search task" type="text" onChange={handleSearchQuery}/>
      {filteredTodos.map((todo) => (
      <TodoNote 
      key={todo.id} 
      todo={todo}
      toggleCompletion={toggleCompletion}
      editTodo={editTodo}
      onRemoveClick={() => removeTodo(todo.id)}
      />
      ))}
      <InputForm 
      addTodo={addTodo}>  
      </InputForm>
    </div>
  ) 
}
export default App
