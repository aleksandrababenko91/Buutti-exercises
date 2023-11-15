import PropTypes from "prop-types";
import React, { useState } from "react";

const DisappearingButton = (props) => {
  const [button, setButton] = useState(true);
  const visibility = () => {
    setButton(!button);
  }
  return (
    <div>
      {button &&
      <>
      <button onClick={visibility}>{props.num}</button>
      </>
      }
    </div>
  )
}
DisappearingButton.propTypes = {
  num: PropTypes.number.isRequired,
}
export default DisappearingButton;