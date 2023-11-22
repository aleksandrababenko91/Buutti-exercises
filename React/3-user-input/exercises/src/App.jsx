import './App.css'
import Form from './Form.jsx';
import ObjectState from './ObjectState.jsx';
import CounterButtonsArray from './CounterButtonsArray.jsx'
import { useState } from 'react'
import ArrayOfObjectsState from './ArrayOfObjectsState.jsx'

function App() {
  const [value, setValue] = useState([0, 0, 0, 0]);
  const [buttons, setButtons] = useState([
    { id: 1, counter: 0 },
    { id: 2, counter: 0 },
    { id: 3, counter: 0 },
    { id: 4, counter: 0 },
  ]);

  return (
    <div className="container" >
        <h2>Exercises 1,2,3 : </h2>
        <Form/>
        <h2>Exercise 4 : </h2>
        <ObjectState />
        <h2>Exercise 5, 6</h2>
        <CounterButtonsArray value={value} setValue={setValue}/>
        <ArrayOfObjectsState buttons={buttons} setButtons={setButtons}/>
    </div>
  );
}
export default App;
