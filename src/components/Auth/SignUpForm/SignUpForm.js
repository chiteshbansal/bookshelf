import React, { Component } from "react";
import Input from "../../UI/Input/Input";

class SignUpForm extends Component {
  constructor(props) {
    super();
    this.state = {
      controls: {
        name: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Enter your Name",
          },
          value: "",
        },
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
        confirm_password: {
          elementType: "input",
          elementConfig: {
            type: "password",
            placeholder: "Confirm your password ",
          },
          value: "",
        },
        tel: {
          elementType: "input",
          elementConfig: {
            type: "tel",
            placeholder: "Contact Number ",
          },
          value: "",
        },
        profession: {
          elementType: "select",
          options: [
            { name: "Student" },
            { name: "Teacher" },
            { name: "Engineer" },
            { name: "Entrepreneur" },
          ],
          value: "Student",
        },
      },
    };
  }
  onInputChangeHandler = (field, value) => {
    let updatedControls = JSON.stringify(this.state.controls);
    updatedControls = JSON.parse(updatedControls);
    console.log(field, value);
    updatedControls[field].value = value;
    this.setState({ controls: updatedControls });
  };
  onSignUpHandler = () => {
    console.log("signing in ");
    const { controls } = this.state;
    let user = {
      name: controls.name.value,
      email: controls.email.value,
      password: controls.password.value,
      contactNo: controls.tel.value,
      profession: controls.profession.value,
    };
    console.log("user", JSON.stringify(user));
    fetch("http://localhost:3000/Auth/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((result) => {
        return result.json();
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    let formElements = [];
    for (let key in this.state.controls) {
      let element = { id: key, config: this.state.controls[key] };

      formElements.push(element);
    }
    const { SignUpFormclasses } = this.props;
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
      <div className={SignUpFormclasses.join(" ")}>
        {form}

        <div>
          <button onClick={this.onSignUpHandler}>SignUp</button>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
