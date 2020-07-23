import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button onClick={props.click} className={props.classname}>
      {props.name}
    </button>
  );
};

export default Button;
