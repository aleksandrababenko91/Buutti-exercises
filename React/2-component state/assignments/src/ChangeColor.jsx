import { useState } from "react";
import ButtonsName from "./ButtonsName";

const ChangeColor = () => {
  const [color, setColor] = useState("red");
  return (
    <button onClick={() => setColor("green")}></button>
  )
}

export default ChangeColor;