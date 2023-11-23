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
  const [buttons, setButtons] = useState([
    { id: 1, counter: 0 },
    { id: 2, counter: 0 },
    { id: 3, counter: 0 },
    { id: 4, counter: 0 },
  ]);

  const addNewElement = () => {
    const newElement = {
      id: uuidv4(),
      counter: 0
    }
    setButtons([...buttons, newElement])  
  } 

  const deleteCounter = (id) => {
    setButtons(buttons.filter(button => button.id !== id));
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
        <ArrayOfObjectsState buttons={buttons} setButtons={setButtons}/>
        <h2>Exercise 10</h2>
        <button style={{marginTop: 20}} onClick={addNewElement}>Add a new counter!</button>
        <h2>Exercise 8,9</h2>
        <Counters />
        <div>
          {buttons.map((button) => (
        <Counter
          key={button.id}
          value={button.value}
          onDeleteClick={() => deleteCounter(button.id)}
        />
      ))}
    </div>
        
    </div>
  );
}
export default App;
