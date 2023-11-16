import { useState } from 'react'
import './App.css'
import Buttons from './Buttons'
import Bingo from './Bingo'
import React from 'react';


function App() {
  const [text, setText] = useState(true)
  const visibility = () => {
    setText(!text);
  }
  return (
    <div>
      <h1>Assignment 1</h1>
    <div>
      <button onClick={visibility}>Toggle text</button>
      {text &&
      <h3>Fear is the path to the dark side</h3>
      }
    </div>
    <h1>Assignment 2</h1>
    <Buttons/>
    <h1>Assignment</h1>
    <div className="grid-container">
      <Bingo/>
    </div>
    </div>
  )
}
export default App
