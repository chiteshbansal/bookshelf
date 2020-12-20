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
    case "select":
      InputElement = (
        <select onChange={props.changed}>
          {props.elementConfig.options.map((option) => {
            return <option>{option.name}</option>;
          })}
        </select>
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
      <label style={{ margin: "0rem 1rem", color: "white" }}>
        {props.label}
      </label>
      {InputElement}
    </div>
  );
}

export default Input;
