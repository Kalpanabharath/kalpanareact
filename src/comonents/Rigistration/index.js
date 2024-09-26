import React, { Component } from "react";
import "./index.css";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      formErrors: {
        username: "",
        password: "",
      },
      isSubmitted: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(this.formRef.current);
    const username = formData.get("username");
    const password = formData.get("password");

    const errors = this.validate(username, password);

    // If no validation errors, log the form data
    if (!errors.username && !errors.password) {
      console.log("Form Data:", Object.fromEntries(formData.entries()));
      this.setState({ isSubmitted: true });

      window.Swal.fire({
        title: "Success!",
        text: "Your Form Has Been Submitted",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      this.setState({ formErrors: errors, isSubmitted: false });
    }
  };

  validate = (username, password) => {
    let errors = { username: "", password: "" };

    // Username validation: check if it's empty or too short
    if (!username) {
      errors.username = "Username is required";
    } else if (username.length < 3) {
      errors.username = "Username must be at least 3 characters";
    }

    // Password validation: check if it's empty or too short
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  RegistrationForm = () => {
    const { formErrors, isSubmitted } = this.state;

    return (
      <div>
        <h3>Registration Form</h3>
        {isSubmitted && (
          <div className="success-message">Registration Successful!</div>
        )}
        <form id="formEl" ref={this.formRef} onSubmit={this.handleSubmit}>
          <div className="formusername">
            <label>User Name</label>
            <input type="text" name="username" placeholder="Enter User Name" />
            {formErrors.username && (
              <p className="error-message">{formErrors.username}</p>
            )}
          </div>
          <div className="formuserpassword">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
            />
            {formErrors.password && (
              <p className="error-message">{formErrors.password}</p>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  formSubmitted = () => {
    return <p>Form Submitted</p>;
  };

  render() {
    let { isSubmitted } = this.state;
    return (
      <div>{isSubmitted ? this.formSubmitted() : this.RegistrationForm()}</div>
    );
  }
}

export default Registration;
