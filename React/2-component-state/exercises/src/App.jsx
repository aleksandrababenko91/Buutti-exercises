import './App.css'
import CounterButtons from './CounterButtons';
import Family from './Family';
import React, { useState } from 'react';

const App = () => {
  const [visibility, setVisibility] = useState(true);
  const toggleVisibility = () => {
    setVisibility(!visibility);
  }
  const[sum, setSum] = useState(0);
  
  const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 40 },
    { name: "Donna", age: 45 },
  ];
  return ( 
    <div >
      <h3>Exercise 1 and 2</h3>
      <div className='AppClass'>
        <Family people={people} />
      </div>
      <div>
        {visibility && 
        <>
        <h3>Exercise 3 and 4. Multipule Buttons</h3>
        <CounterButtons setSum={setSum}/>
        <CounterButtons setSum={setSum}/>
        <CounterButtons setSum={setSum}/>
        <h3>Exercise 5. Count Sum of Buttons</h3>
        <div><p>Count Sum:</p>{sum}</div>
        </>
        }
        <h3>Exercise6. Hide Buttons </h3>
        <button className="toggle-button" onClick={toggleVisibility}>Toggle</button>
       
        
      </div>
    </div>
  )
};

export default App
