import './App.css'
import CounterButtonsArray from './CounterButtonsArray.jsx'
import { useState } from 'react'
import './CounterButtonsArray.css'
import ReactBootstrap from './ReactBootstrap.jsx';


function App() {
  const [value, setValue] = useState([0, 0, 0, 0]);

  return (
    <div>

    <div className="container" >
      <h1>Exercise 1:</h1>
      <CounterButtonsArray value={value} setValue={setValue}/>
    </div>
    <div >
      <h1>Exercise 2: React Bootstrap Form </h1>
      <ReactBootstrap></ReactBootstrap>
    </div>
  </div>
  );
}
export default App;
