import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbaritems.module.css";

function Navbaritems(props) {
  return (
    <div className={classes.NavbarItem}>
      <div className={classes.hoverDiv}></div>
      <NavLink exact activeStyle={{ fontWeight: "bold" }} to={props.path}>
        {props.children}
      </NavLink>
    </div>
  );
}

export default Navbaritems;
