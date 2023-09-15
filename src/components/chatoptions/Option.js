import React from "react";


const Option = (props) => {

  return(
      <button onClick={props.actionProvider.handleGotIt} className="option-button">
     Got it!
    </button>
  )
};

export default Option;
