import React, { useState } from "react";
import TextFieldGroup from "./commonFields/TextFieldGroup";
import axios from "axios";
const Signup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState({});
  const oNNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onPasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, password, passwordConfirm };
    console.log(newUser);
    registerUser(newUser, props.history);
  };

  const registerUser = (userData, history) => {
    axios
      .post("http://localhost:5000/api/users/register", userData)
      .then((res) => {
        console.log(res);
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">
              Create your Shopping Cart account
            </p>
            <form noValidate onSubmit={onSubmit}>
              <TextFieldGroup
                placeholder="Name"
                type="text"
                name="name"
                value={name}
                onChange={oNNameChange}
                error={errors.name}
              />
              <TextFieldGroup
                placeholder="Email Address"
                type="email"
                name="email"
                value={email}
                onChange={onEmailChange}
                error={errors.email}
                info="This site uses Gravatar so if you want a profile image, use
                    a Gravatar email"
              />
              <TextFieldGroup
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={onPasswordChange}
                error={errors.password}
              />
              <TextFieldGroup
                placeholder="Confirm Password"
                type="password"
                name="passwordconfirm"
                value={passwordConfirm}
                onChange={onPasswordConfirmChange}
                error={errors.passwordConfirm}
              />
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
