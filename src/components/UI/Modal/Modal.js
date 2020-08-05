import React from "react";
import BackDrop from "../BackDrop/BackDrop";
import classes from "./Modal.module.css";
import Aux from "../../hoc/Wrapper";
function Modal(props) {
  return (
    <Aux>
      <BackDrop show={props.show} click={props.click} />
      <div
        className={classes.Modal}
        style={{ transform: props.show ? "translate(0)" : "translate(-100vw)" }}
      >
        {props.show?props.children:null}
      </div>
    </Aux>
  );
}

export default Modal;
