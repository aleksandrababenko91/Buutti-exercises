import React, {useState} from "react";
import './BingoButton.css'

const BingoButton = (props) => {
  const[changeColor, setChangeColor] = useState(false);
  const handleClick = () => {
    setChangeColor(prev => !prev)
  }
  return (
    <button onClick={handleClick} 
    className={"grid-item " + (changeColor ? 'green' : 'red')} 
    key={props.index}>{props.name}</button>
  ) 
}
export default BingoButton;