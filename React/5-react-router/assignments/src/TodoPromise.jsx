import { useState, useEffect } from 'react';
import TodoServise from './TodoServise.jsx';


const TodoPromise = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState([]);

  useEffect(() => {
    TodoServise
      .getAll()
       .then(initialTodos => {
        setTodos(initialTodos)
      })
  }, []);
  
  const addTodo = (event) => {
    event.preventDefault()
    const todoObject = {
      text: newTodo,
      copmlete: Math.random() > 0.5
    }
    TodoServise
      .create(todoObject)
       .then(returnedTodo => {
       setTodos(todos.concat(returnedTodo))
       setNewTodo('')
      })
  }
    
  const toggleComplete = id => {
    const todo = todos.find(n => n.id === id)
    const changedTodo = { ...todo, complete: !todo.complete }
    TodoServise
      .update(id, changedTodo)
       .then(returnedTodo => {
       setTodos(
    todos.map(todo => todo.id !== id ? todo : returnedTodo))
     })
  }

  const deleteNote = id => {
    TodoServise
    .remove(id)
    .then(() => {
      setTodos(todos.filter(todo => todo.id !== id));
    });
  };
   
  
  return (
    <div>
      <ul>{todos.map(todoObj => (
        <li key={todoObj.id}>{todoObj.text}</li>
        ))}
        <button onClick={addTodo}>
          Send a todo!
        </button>
      </ul>
      <ul>{todos.map(todoObj => (
        <li key={todoObj.id}>{todoObj.text}
        <button onClick={() => toggleComplete(todoObj.id)}>
          Toggle!
        </button>
        <button onClick={() => deleteNote(todoObj.id)}>Delete Note</button>
        </li>
        ))}
      </ul>
     

    </div>
  )
}
export default TodoPromise