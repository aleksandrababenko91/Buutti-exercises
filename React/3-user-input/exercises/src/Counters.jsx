import React, { useState } from 'react';
import Counter from './Counter';

const Counters = () => {
  const [elements, setElements] = useState([
    { id: 1, counter: 0 },
    { id: 2, counter: 0 },
    { id: 3, counter: 0 },
    { id: 4, counter: 0 },
  ]);

  const incrementCounter = (id) => {
    setElements(elements.map((element) => {
      if (element.id === id) {
        return {...element, counter: element.counter  + 1 }
      } else {
        return element;
      }
    })
    ) 
  }
  
  return (
    <div>
      {elements.map((element) => (
        <Counter
          key={element.id}
          id={element.id}
          counter={element.counter}
          onCounterClick={incrementCounter}
        />
      ))}
    </div>
  );
};

export default Counters;
