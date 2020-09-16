import React, { Component } from "react";
import classes from "./LoginForm.module.css";
import loginImg from "../../images/loginform2.jpg";

export default class LoginForm extends Component {
  render() {
    return (
      <div className={classes.LoginForm}>
        <div className={classes.leftCnt}>
          <img src={loginImg} />
        </div>
        <div className={classes.rightCnt}>
          <div>
            <input type="email" placeholder="Enter your email addresss" />
          </div>
          <div>
            <input type="password" placeholder="Enter your Password" required />
          </div>
          <button type="submit">Login</button>
        </div>
      </div>
    );
  }
}
