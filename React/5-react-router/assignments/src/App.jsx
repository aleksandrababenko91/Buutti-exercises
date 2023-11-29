import { useState , useEffect} from 'react';
import './App.css'
import TodoNote from './TodoNote.jsx';
import InputForm from './InputForm.jsx';
import TodoPromise from './TodoPromise.jsx';
import TodoServise from './TodoServise.jsx';


const App = () => {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [newTodo, setNewTodo] = useState([]);

  useEffect(() => {
    TodoServise
      .getAll()
       .then(initialTodos => {
        setTodos(initialTodos)
      })
  }, []);
  
  const toggleCompletion = (id) => { // chahging the state(setTodos) by func handleComplete (by ID)
    const todo = todos.find(n => n.id === id)
    const changedTodo = { ...todo, complete: !todo.complete }
    TodoServise
      .update(id, changedTodo)
       .then(returnedTodo => {
       setTodos(
    todos.map(todo => todo.id !== id ? todo : returnedTodo))
     })
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
  
  const removeTodo = id => {
    TodoServise
    .remove(id)
    .then(() => {
      setTodos(todos.filter(todo => todo.id !== id));
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

  const handleSearchQuery = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
  };
  const filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(searchQuery.toLowerCase()));

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
      <TodoPromise></TodoPromise>
      
    </div>
  ) 
}
export default App
