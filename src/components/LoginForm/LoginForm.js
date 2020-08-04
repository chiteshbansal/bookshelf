import React from "react";
import classes from "./LoginForm.module.css";
import Input from "../UI/Input/Input";

class LoginForm extends React.Component {
  state = {
    LoginForm: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Enter your email address",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        value: "",
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Enter your password address",
        },
        validation: {
          required: true,
          minLength: 10,
        },
        valid: false,
        touched: false,
        value: "",
      },
    },
    IsFormValid:false,
  };
  checkvalidity = (rules, value) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    return isValid;
  };
  onInputChangeHandler = (event, InputIdentifier) => {
    let OldForm = JSON.parse(JSON.stringify(this.state.LoginForm));
    console.log(OldForm);
    OldForm[InputIdentifier].value = event.target.value;
    OldForm[InputIdentifier].touched = true;
    OldForm[InputIdentifier].valid = this.checkvalidity(
      OldForm[InputIdentifier].validation,
      event.target.value
    );
    let FormValidity = true;
    for(let key in OldForm){
      FormValidity = OldForm[key].valid && FormValidity;
    }
    this.setState({
      LoginForm: OldForm,
      IsFormValid:FormValidity
    });
  };
  render() {
    const LoginFormElementsArray = [];
    for (let key in this.state.LoginForm) {
      LoginFormElementsArray.push({
        id: key,
        config: this.state.LoginForm[key],
      });
    }
    return (
      <div>
        <div className={classes.LoginForm_cnt}>
          <div className={classes.LoginForm}>
            {LoginFormElementsArray.map((InputElement) => {
              return (
                <div key={InputElement.id}>
                  <Input
                    elementType={InputElement.config.elementType}
                    elementConfig={InputElement.config.elementConfig}
                    value={InputElement.value}
                    changed={(event) =>
                      this.onInputChangeHandler(event, InputElement.id)
                    }
                    Class={
                      !InputElement.config.valid && InputElement.config.touched
                        ? classes.InvalidInputElement
                        : classes.ValidInputElement
                    }
                  />
                </div>
              );
            })}
            <div className={classes.LoginBtnCnt}>
              <button type="submit" disabled={!this.state.IsFormValid}>Log in</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
