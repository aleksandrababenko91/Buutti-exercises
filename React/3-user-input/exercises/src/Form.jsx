import './Form.css'
import { useState } from 'react'

const Form = () => {
  //input field
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  }
  //button
  const [text, setText] = useState("");
  const handleClick = (event) => {
    event.preventDefault();
    setName(text);
    setText("");
  }
  //checkbox
  const[admin, setAdmin] = useState(false);
  const isAdmin = () => {
    setAdmin(!admin)}

  return (
    <div>
      <h1>Hello {name}</h1>
      <form onSubmit={handleClick}>
      <input
        type="text"
        onChange={handleChange}
        value={text}
        placeholder="Whats your name">
      </input>
        <label 
          style={{paddingLeft: 10}}>admin?
        </label>
      <input 
        value={admin}
        type="checkbox"
        onChange= {isAdmin}>
      </input>
        <div>
          <button type="submit">Submit</button>
        </div>  
      </form>
    </div>
            )
}
export default Form;