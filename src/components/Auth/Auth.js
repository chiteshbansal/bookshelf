import classes from "./Auth.module.css";
import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";

function Auth(props) {
  const [isLoggingIn, setLoginState] = useState(true);
  let LoginFormclasses = [classes.LoginForm];
  let SignUpFormclasses = [classes.SignUpForm];
  if (isLoggingIn) {
    LoginFormclasses.push(classes.Show);
    SignUpFormclasses.push(classes.Hide);
  } else {
    LoginFormclasses.push(classes.Hide);
    SignUpFormclasses.push(classes.Show);
  }
  return (
    <div className={classes.Auth}>
      <div className={classes.AuthNavigator}>
        <div onClick={() => setLoginState(true)}>Login</div>
        <div onClick={() => setLoginState(false)}>SignUp</div>
        <div
          className={
            isLoggingIn ? classes.LoginIndicator : classes.SignUpIndicator
          }
        ></div>
      </div>
      <div className={classes.formContainer}>
        <div className={LoginFormclasses.join(" ")}>
          <div>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png" />
            <input type="email" placeholder="Enter your email address here" />
          </div>
          <div>
            <img src="https://img.icons8.com/metro/26/000000/password.png" />
            <input type="password" placeholder="Enter your password here" />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </div>
        <div className={SignUpFormclasses.join(" ")}>
          <div>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png" />
            <input type="email" placeholder="Enter your email address here" />
          </div>
          <div>
            <img src="https://img.icons8.com/metro/26/000000/password.png" />
            <input type="password" placeholder="Enter your password here" />
          </div>
          <div>
            <img src="https://img.icons8.com/metro/26/000000/password.png" />
            <input type="password" placeholder="ReEnter your password" />
          </div>
          <div>
            <button type="submit">SignUp</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
