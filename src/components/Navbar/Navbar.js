import React from "react";
import {useSelector} from 'react-redux';

import classes from "./Navbar.module.css";
import NavbarItem from "./NavbarItems/Navbaritems";
function Navbar(props) {
  let isLoggedIn = useSelector((state)=>{return state.Auth.isLoggedIn});
  console.log('islogged in in nvabar',isLoggedIn);
  return (
    <div className={classes.Navbar}>
      <div>
        <NavbarItem path='/'>Home</NavbarItem>
        <NavbarItem path='/MyFavList'>My Favorite Books</NavbarItem>
        {/* <NavbarItem path='/User'>User profile </NavbarItem> */}
        {/* {!isLoggedIn?<NavbarItem path='/auth'>Login/SignUp</NavbarItem>:<NavbarItem path="/logout">LogOut</NavbarItem>} */}
      </div>
    </div>
  );
}
const mapStateToProps = (state)=>{
  return{
    auth:state.Auth,
  }
}
export default Navbar;
