import React, { useState, useContext } from "react";
import axios from "axios";

import { AppContext } from "../../AppContext";
import TextFieldGroup from "../common/Textfieldgroup";

const Login = (props) => {
  const { JwtToken, setJwtToken, setAdminEmail } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const onemailChange = (e) => {
    setEmail(e.target.value);
  };

  const onpasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = { email, password };

    console.log(newUser);
    registerUser(newUser, props.history);
  };

  const registerUser = (userData, history) => {
    axios
      .post("http://localhost:2000/api/users/login", userData)
      .then((res) => {
        console.log(res);
        setJwtToken(res.data.token);
        setAdminEmail(res.data.email);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data);
      });
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Log In</h1>
            <p className="lead text-center">
              Sign in to your Shopping cart account
            </p>
            <form noValidate onSubmit={onSubmit}>
              <TextFieldGroup
                placeholder="Email Address"
                type="email"
                name="email"
                value={email}
                onChange={onemailChange}
                error={errors.email}
              />
              <TextFieldGroup
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={onpasswordChange}
                error={errors.password}
              />

              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
