import React, { useState } from 'react';
import './CounterButtons.css';
import PropTypes from "prop-types";

CounterButtons.propTypes = {
      setSum: PropTypes.func.isRequired,
}

function CounterButtons(props) {
  const [count, setCount] = useState(0);
  const increaseButton = () => {
    setCount((prev) => prev + 1);
    props.setSum((prev) => prev + 1
    );
  }
  const decreaseButton = () => {
    setCount((prev) => prev - 1);
    props.setSum((prev) => prev - 1
    );
  }
  return (
    <div >
      <button className="button-count" onClick={increaseButton}>
        +
      </button>
      {count}
      <button className="button-count" onClick={decreaseButton}>
        -
      </button>
    </div>
  );
}
export default CounterButtons;

