import React from "react";

import classes from "./index.module.css";
import Starwarsinput from "../commons/Starwarsinput";
import Starwarsbutton from "../commons/Starwarsbutton";
import Message from "../commons/Message";

const Login = props => {
  const loginHandler = () => {};

  const signupHandler = () => {};
  return (
    <>
      <div className={classes.container}>
        <div className={classes.signin}>
          <h3>Login</h3>
          <Starwarsinput type="text" placeholder="email" />
          <Starwarsinput type="password" placeholder="password" />
          <div className={classes.btnContainer}>
            <Starwarsbutton onClick={loginHandler}>Login</Starwarsbutton>
          </div>
        </div>
        <div className={classes.signup}>
          <h3>Sign up</h3>
          <Starwarsinput type="text" placeholder="email" />
          <Starwarsinput type="password" placeholder="password" />
          <Starwarsinput type="password" placeholder="confirm password" />
          <div className={classes.btnContainer}>
            <Starwarsbutton onClick={signupHandler}>Sign up</Starwarsbutton>
          </div>
        </div>
      </div>
      <br />
      <Message type="error">Test </Message>
    </>
  );
};

export default Login;
