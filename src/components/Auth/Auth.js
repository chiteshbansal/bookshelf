import classes from "./Auth.module.css";
import React, { useState, useEffect } from "react";
import { NavLink, Route, withRouter } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import SignUpForm from "./SignUpForm/SignUpForm";

function Auth(props) {
  const [isLoggingIn, setLoginState] = useState(true);
  let LoginFormclasses = [classes.LoginForm];
  let SignUpFormclasses = [classes.SignUpForm];
  if (isLoggingIn || props.userCreatedSuccess) {
    LoginFormclasses.push(classes.Show);
    SignUpFormclasses.push(classes.Hide);
  } else {
    LoginFormclasses.push(classes.Hide);
    SignUpFormclasses.push(classes.Show);
  }

  console.log("in the auth com");
  return (
    <div className={classes.Auth}>
      <div className={classes.AuthNavigator}>
        <div onClick={() => setLoginState(true)}>Login</div>
        <div onClick={() => setLoginState(false)}>SignUp</div>
        <div
          className={
            isLoggingIn || props.userCreatedSuccess
              ? classes.LoginIndicator
              : classes.SignUpIndicator
          }
        ></div>
      </div>
      <div className={classes.formContainer}>
        <LoginForm LoginFormclasses={LoginFormclasses} />
        <SignUpForm SignUpFormclasses={SignUpFormclasses} />
      </div>
    </div>
  );
}

export default withRouter(Auth);
