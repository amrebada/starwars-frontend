import React, { useReducer } from "react";
import classes from "./App.module.css";
import logo from "./logo.png";
import Questions from "./components/Questions";
import Login from "./components/Login";
import { Provider } from "./states/store";
import { authReducer, initialAuthState } from "./states/reducer";
import authContext from "./states/store";

function App() {
  const useAuthState = useReducer(authReducer, initialAuthState);
  return (
    <Provider value={useAuthState}>
      <div className={classes.App}>
        <img src={logo} alt="Star wars logo" className={classes.logo} />
        {authContext.accessToken ? <Questions /> : <Login />}
      </div>
    </Provider>
  );
}

export default App;
