import React, { useState } from 'react';
import './App.css'
import TodoNote from './TodoNote.jsx';



const defaultTodos = [
  {id: 1, text: 'Buy potatoes', complete: true},
  {id: 2, text: 'Make food', complete: false},
  {id: 3, text: 'Exercise', complete: false},
  {id: 4, text: 'Do the dishes', complete: false},
  {id: 5, text: 'Floss the teeth', complete: false},
  {id: 6, text: 'Play videogames', complete: true},
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
  
  const editTodo = (id, newText) => {
    setTodos(todos.map((todo) => {
      if(todo.id === id) {
        return { 
          ...todo, 
          text: newText,
        };
      } else {
        return todo;
      }
    }))
  };
 
  return (
    <div>
      {todos.map((todo) => (
      <TodoNote // pass props to TodoNote
      key={todo.id} 
      todo={todo}
      toggleCompletion={toggleCompletion}
      editTodo={editTodo}
      />
      ))}
    </div>
  ) 
}
export default App
