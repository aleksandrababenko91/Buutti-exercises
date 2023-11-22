const ArrayOfObjectsState = ({buttons, setButtons}) => {
  const handleClick = (index) => {
    setButtons(buttons.map((c, i) => {
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
      {buttons.map((button, index) => 
       (<button key={button.id} onClick={() => handleClick(index)}>
          {button.counter}
        </button>))
      }
    </div> 
  );
}

export default ArrayOfObjectsState