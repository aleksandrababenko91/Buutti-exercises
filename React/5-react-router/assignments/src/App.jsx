import { useState , useEffect} from 'react';
import './App.css'
import TodoNote from './TodoNote.jsx';
import InputForm from './InputForm.jsx';
import TodoService from './TodoService.jsx';
import Header from './Header.jsx';


const App = () => {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    TodoService
      .getAll()
       .then(initialTodos => {
        setTodos(initialTodos)
      })
  }, []);
  
  const toggleCompletion = (id) => { // chahging the state(setTodos) by func handleComplete (by ID)
    const todo = todos.find(n => n.id === id)
    const changedTodo = { ...todo, complete: !todo.complete }
    TodoService
      .update(id, changedTodo)
       .then(returnedTodo => {
       setTodos(
    todos.map(todo => todo.id !== id ? todo : returnedTodo))
     })
  };
  
  const editTodo = (id, value) => {  
    const updatedTodo = todos.find(todo => todo.id === id)
    TodoService
    .update(id, {...updatedTodo, text: value})
  };
  
  const removeTodo = id => {
    TodoService
    .remove(id)
    .then(() => {
      setTodos(todos.filter(todo => todo.id !== id));
    });
  };

  const addTodo = (value) => {
    const todoObject = {
      text: value,
      complete: false
    }
    TodoService
      .create(todoObject)
       .then(returnedTodo => {
       setTodos([...todos, returnedTodo])
      })
  }

  const handleSearchQuery = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
  };
  const filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(searchQuery.toLowerCase()));


  return (
    <div className='container'>
      <Header />
      <input className="search" value={searchQuery} placeholder="search task" type="text" onChange={handleSearchQuery}/>
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
