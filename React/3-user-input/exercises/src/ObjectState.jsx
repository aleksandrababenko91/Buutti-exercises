import React from "react"

import { useState } from 'react'


const ObjectState = () => {
  
  const increase = () => {
    return setState({...state, count: state.count + 1, text: ""})
  }
  
  const handleChange = (event) => {
    setState({...state, text: event.target.value});
  }

  const [state, setState] = useState({
    count: 0,
    text: '',
  });
  
  return (
    <div>
      <h1>{state.count}</h1>
      <h1>{state.text}</h1>
      <button type="increase" onClick={increase} value={state.count} >Click to increase</button>
      <input value={state.text} onChange={handleChange} style={{marginTop: 20}} type="text" placeholder="Type something"></input>
    </div>

  )
}

export default ObjectState;