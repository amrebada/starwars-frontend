import React, { useState } from "react";
import classes from "./App.module.css";
import logo from "./logo.png";
import Questions from "./components/Questions";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <div className={classes.App}>
      <img src={logo} alt="Star wars logo" className={classes.logo} />
      {isLoggedIn ? <Questions /> : <Login />}
    </div>
  );
}

export default App;
