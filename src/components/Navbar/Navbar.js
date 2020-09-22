import React from "react";

import classes from "./Navbar.module.css";
import NavbarItem from "./NavbarItems/Navbaritems";
function Navbar(props) {
  return (
    <div className={classes.Navbar}>
      <div>
        <NavbarItem path='/'>Home</NavbarItem>
        <NavbarItem path='/MyFavList'>My Favorite Books</NavbarItem>
        <NavbarItem path='/User'>User profile </NavbarItem>
        <NavbarItem path='/auth'>Login/SignUp</NavbarItem>
      </div>
    </div>
  );
}

export default Navbar;
