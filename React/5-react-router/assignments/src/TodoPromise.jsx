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
  
  const deleteTodo = (id) => {
    TodoServise
    .delete(id)
    .then(() => {
      setTodos();   
    });
  };

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
        <button onClick={() => deleteTodo(todoObj.id)}>
          Delete!
        </button>
        </li>
        ))}
      </ul>
     

    </div>
  )
}
export default TodoPromise