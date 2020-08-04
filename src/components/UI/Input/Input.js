import React from "react";
function Input(props) {
  let InputElement = null;
  switch (props.elementType) {
    case "input":
      InputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          className={props.Class}
        />
      );
      break;
    case "textarea":
      InputElement = (
        <textarea
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          className={props.Class}
        />
      );
      break;
    default:
      InputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          className={props.Class}
        />
      );
  }
  return (
    <div>
      <label>{props.label}</label>
      {InputElement}
    </div>
  );
}

export default Input;
