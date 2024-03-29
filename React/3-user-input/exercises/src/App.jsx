import './App.css'
import Form from './Form.jsx';
import ObjectState from './ObjectState.jsx';
import CounterButtonsArray from './CounterButtonsArray.jsx'
import { useState } from 'react'
import ArrayOfObjectsState from './ArrayOfObjectsState.jsx'
import Counters from './Counters.jsx'
import { v4 as uuidv4 } from 'uuid';
import Counter from './Counter.jsx'


function App() {
  const [value, setValue] = useState([0, 0, 0, 0]);

  const [elements, setElements] = useState([
    { id: 1, counter: 10 },
    { id: 2, counter: 5 },
    { id: 3, counter: 6 },
    { id: 4, counter: 5 },
  ]);

  const addNewElement = () => {
    const newElement = {
      id: uuidv4(),
      counter: 0
    }
    setElements([...elements, newElement])  
  } 

  const deleteCounter = (id) => {
    setElements(elements.filter(element => element.id !== id));
};

  const incrementCounter = (id) => {
    setElements(elements.map((element) => {
      if (element.id === id) {
        return { ...element, counter: element.counter + 1 };
      } else {
        return element;
      }
    }));
  };

  const [minimumCounter, setMinimumCounter] = useState(elements);

  const handleFilter = (event) => {
    const value = parseInt(event.target.value);
    const filtered = elements.filter((element) => element.counter === value);
    setMinimumCounter(filtered);
  };

  return (
    <div className="container" >
        <h2>Exercises 1,2,3 : </h2>
        <Form/>
        <h2>Exercise 4 : </h2>
        <ObjectState />
        <h2>Exercise 5, 6</h2>
        <CounterButtonsArray value={value} setValue={setValue}/>
        <h2>Exercise 7: </h2>
        <ArrayOfObjectsState elements={elements} setElements={setElements}/>
        <h2>Exercise 10</h2>
        <button style={{marginTop: 20}} onClick={addNewElement}>Add a new counter!</button>
        <h2>Exercise 8,9</h2>
        <Counters elements={elements} onCounterClick={incrementCounter} onDeleteClick={deleteCounter}/>
        <div>
          <h2>Exercise 11: </h2>
          {elements.map((element) => (
          <Counter
          key={element.id}
          counter={element.counter}
          onDeleteClick={() => deleteCounter(element.id)}
          elements={elements} 
          onCounterClick={() => incrementCounter(element.id)}/>
          ))}
        </div>
        <div style={{marginTop: 20}}>
          <input placeholder="type id" onChange={handleFilter}/>
          {minimumCounter.map((element) => (
          <div key={element.id}>
            <p>Id: {element.id}</p>
            <p>Counter: {element.counter}</p>
          </div>
          ))}
        </div>
        
    </div>
  );
}
export default App;
