import PropTypes from 'prop-types';

const ArrayOfObjectsState = ({elements, setElements}) => {
  const handleClick = (index) => {
    setElements(elements.map((c, i) => {
      if (i === index) {
        return {...c, counter: c.counter  + 1 }
      } else {
        return c;
      }
    })
    ) 
  }
  return (  
    <div>
      {elements.map((element, index) => 
       (<button key={element.id} onClick={() => handleClick(index)}>
          {element.counter}
        </button>))
      }
    </div> 
  );
}

ArrayOfObjectsState.propTypes = {
  elements: PropTypes.number.isRequired,
  setElements: PropTypes.func.isRequired,
};
export default ArrayOfObjectsState