import React, { useState, createRef, useContext } from "react";

import classes from "./index.module.css";
import Starwarsinput from "../commons/Starwarsinput";
import Starwarsbutton from "../commons/Starwarsbutton";
import Message from "../commons/Message";
import { BACKEND_URL } from "../../constants";
import Loader from "../commons/Loader";
import authContext from "../../states/store";

const Login = props => {
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [_, dispatch] = useContext(authContext);

  const loginEmail = createRef();
  const loginPassword = createRef();
  const signupEmail = createRef();
  const signupPassword = createRef();
  const signupCPassword = createRef();

  const loginHandler = () => {
    setLoading(true);
    fetch(`${BACKEND_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: loginEmail.current && loginEmail.current.value,
        password: loginPassword.current && loginPassword.current.value
      })
    })
      .then(response => response.json())
      .then(value => {
        if (value.error) {
          setMessage([value.error.message, value.error.value]);
        } else {
          dispatch({ type: "LOGIN", ...value.data });
        }

        setLoading(false);
      })
      .catch(err => {
        if (err) {
          setMessage([err.message]);
        }
        setLoading(false);
      });
  };

  const signupHandler = () => {
    setLoading(true);
    fetch(`${BACKEND_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: signupEmail.current && signupEmail.current.value,
        password: signupPassword.current && signupPassword.current.value,
        cpassword: signupCPassword.current && signupCPassword.current.value
      })
    })
      .then(response => response.json())
      .then(value => {
        if (value.error) {
          setMessage([value.error.message, value.error.value]);
        } else {
          dispatch({ type: "LOGIN", ...value.data });
        }
        setLoading(false);
      })
      .catch(err => {
        if (err) {
          setMessage([err.message]);
        }
        setLoading(false);
      });
  };
  return (
    <>
      <Loader show={loading} />
      <div className={classes.container}>
        <div className={classes.signin}>
          <h3>Login</h3>
          <Starwarsinput type="text" placeholder="email" ref={loginEmail} />
          <Starwarsinput
            type="password"
            placeholder="password"
            ref={loginPassword}
          />
          <div className={classes.btnContainer}>
            <Starwarsbutton onClick={loginHandler}>Login</Starwarsbutton>
          </div>
        </div>
        <div className={classes.signup}>
          <h3>Sign up</h3>
          <Starwarsinput type="text" placeholder="email" ref={signupEmail} />
          <Starwarsinput
            type="password"
            placeholder="password"
            ref={signupPassword}
          />
          <Starwarsinput
            type="password"
            placeholder="confirm password"
            ref={signupCPassword}
          />
          <div className={classes.btnContainer}>
            <Starwarsbutton onClick={signupHandler}>Sign up</Starwarsbutton>
          </div>
        </div>
      </div>
      <br />
      {message.length > 0 && (
        <Message type="error">{message.join(" ")} </Message>
      )}
    </>
  );
};

export default Login;
