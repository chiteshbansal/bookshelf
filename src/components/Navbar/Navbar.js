import React from "react";

import classes from "./Navbar.module.css";
import NavbarItem from './NavbarItems/Navbaritems';
function Navbar(props) {
  return (<div className={classes.Navbar}>
        <div>
          <NavbarItem >Home</NavbarItem>
          <NavbarItem >My book Shelf</NavbarItem>
          <NavbarItem >User profile </NavbarItem>
        </div>
    </div>);
}

export default Navbar;
