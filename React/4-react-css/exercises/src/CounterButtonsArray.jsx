import React from "react"
import PropTypes from "prop-types";
import './CounterButtonsArray.css'

const CounterButtonsArray = ({value, setValue}) => {
  const handleClick = (index) => {
    setValue(value.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    })
    )
  }
  const sumOfCounters = value.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  );
  return (
    <div>
      {value.map((counter, index) => 
       (<button style={{borderColor: "red" }} key={index} onClick={() => handleClick(index)}>
          {counter}
        </button>))
      }
    <div> 
      Sum of Counters:
      {sumOfCounters}
    </div>
    </div>
    
  );
};

CounterButtonsArray.propTypes = {
  value: PropTypes.array.isRequired,
  setValue: PropTypes.func.isRequired,
};
export default CounterButtonsArray 