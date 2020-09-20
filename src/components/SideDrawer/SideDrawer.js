import React from "react";
import NavbarItem from "../Navbar/NavbarItems/Navbaritems";
import classes from "./SideDrawer.module.css";
import Aux from "../hoc/Wrapper";

function SideDrawer(props) {
  return (
    <Aux>
      <div
        className={classes.SideDrawer}
        style={{
          transform: props.show ? "translateX(0)" : "translate(-100vh)",
        }}
        onClick={props.toggle}
      >
        <NavbarItem path="/">Home</NavbarItem>
        <NavbarItem path="/MyFavList">My Favorite Books</NavbarItem>
        <NavbarItem path="/User">User profile </NavbarItem>
        <NavbarItem path="/">Login</NavbarItem>
      </div>
    </Aux>
  );
}

export default SideDrawer;
