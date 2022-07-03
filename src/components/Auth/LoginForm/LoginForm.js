import React, { Component } from "react";
import Input from "../../UI/Input/Input";
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from "../../../Store/actions/index";
class LoginForm extends Component {
  constructor(props) {
    super();
    this.state = {
      controls: {
        email: {
          elementType: "input",
          elementConfig: {
            type: "email",
            placeholder: "Enter your Email address",
          },
          value: "",
        },
        password: {
          elementType: "input",
          elementConfig: {
            type: "password",
            placeholder: "Enter your password",
          },
          value: "",
        },
      },
    };
  }
  componentDidMount() {
    console.log("is logged in",this.props.isLoggedIn)
    if(this.props.isLoggedIn ==true){
      this.props.history.push("/")
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.isLoggedIn!==this.props.isLoggedIn && this.props.isLoggedIn==true){
      console.log('inside the cdu');
      this.props.history.push('/');
    }
  }
  onInputChangeHandler = (field, value) => {
    let updatedControls = JSON.stringify(this.state.controls);
    updatedControls = JSON.parse(updatedControls);
    console.log(field, value);
    updatedControls[field].value = value;
    this.setState({ controls: updatedControls });
  };
  loginHandler = () => {
    const { email, password } = this.state.controls;
    this.props.login(email.value,password.value);
    // fetch("http://localhost:5000/Auth/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email: email.value, password: password.value }),
    // })
    //   .then((result) => {
    //     return result.json();
    //   })
    //   .then((response) => {
    //     console.log(response, this.props);
    //     localStorage.setItem("isLoggedIn", true);
    //     localStorage.setItem("token", response.token);
    //     this.props.history.push("/");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  render() {
    let formElements = [];
    for (let key in this.state.controls) {
      let element = { id: key, config: this.state.controls[key] };

      formElements.push(element);
    }
    let form = formElements.map((element) => {
      return (
        <Input
          key={element.id}
          elementConfig={element.config}
          value={element.config.value}
          label={element.id}
          elementType={element.config.elementType}
          changed={(event) => {
            this.onInputChangeHandler(element.id, event.target.value);
          }}
        />
      );
    });
    return (
      <div className={this.props.LoginFormclasses.join(" ")}>
        {form}

        <div>
          <button onClick={this.loginHandler}>Login</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
  return{
    isLoggedIn:state.Auth.isLoggedIn,
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    login :(email,password)=>{
      dispatch(actions.login(email,password));
    }
  }
}
export default (withRouter(connect(mapStateToProps,mapDispatchToProps)(LoginForm)));
